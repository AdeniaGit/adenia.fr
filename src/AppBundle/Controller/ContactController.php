<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\Email as EmailConstraint;
use Gregwar\CaptchaBundle\Type\CaptchaType;

class ContactController extends Controller
{
    public function contactAction(Request $request)
    {

        return $this->render('contact/contact.html.twig', array());
    }

    public function sendmessageAction(Request $request)
    {
        $result = array('success' => 0); // false

        $request = $this->get('request');
        if ($request->getMethod() == 'POST') {
            $errors = array();
            $data = $request->request->all();
            $nom = $data["nom"];
            if(strlen(trim($nom)) == 0)
            {
                $errors["nom"] = "Veuillez compl&eacute;ter le champ nom.";
            }
            $mailfrom = $data["email"];
            if(strlen(trim($mailfrom)) == 0)
            {
                $errors["email"] = "Veuillez compl&eacute;ter le champ email.";
            }
            else
            {
                $emailConstraint = new EmailConstraint();
                $emailConstraint->message = 'Veuillez saisir une adresse mail valide.';

                $mailingerror = $this->get('validator')->validateValue(
                    $mailfrom,
                    $emailConstraint
                );
                if(count($mailingerror) != 0)
                {
                    $errors["email"] = "Veuillez saisir une adresse mail valide.";
                }
            }
            $sujet = $data["sujet"];
            if(strlen(trim($sujet)) == 0)
            {
                $errors["sujet"] = "Veuillez compl&eacute;ter le champ sujet.";
            }
            $message = $data["message"];
            if(strlen(trim($message)) == 0)
            {
                $errors["message"] = "Veuillez compl&eacute;ter le champ message.";
            }
            if(count($errors) > 0)
            {
                $result['errors'] = $errors;
            }
            else
            {
                $email = \Swift_Message::newInstance()
                    ->setSubject('[mail via Adenia.fr] : ' . $sujet)
                    ->setFrom('fgrochowski@free.fr')
                    ->setTo('contact@adenia.fr')
                    ->setBody('Adresse exp&eacute;diteur : ' . $mailfrom . '<br/>'
                        . $nom . ' a &eacute;crit : <br/><br/>' . $message,
                        'text/html', 'UTF-8');

                // 0 si personne n'a re�u le mail, X personnes sinon
                $result['success'] = $this->get('mailer')->send($email);
            }
        }
        else {
                //captcha
        }

        return new JsonResponse($result);
    }

    /*
    public function buildForm(FormBuilder $builder, array $options)
    {
        parent::buildForm($builder, $options);
        $builder->add('captcha', 'captcha', array(
            'width' => 150,
            'height' => 50,
            'length' => 6,
        ));
    } */

}
