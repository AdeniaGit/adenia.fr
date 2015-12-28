<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class EntrepriseController extends Controller
{
    public function historiqueAction(Request $request)
    {
        return $this->render('entreprise/historique.html.twig', array());
    }

    public function valeursAction(Request $request)
    {
        return $this->render('entreprise/valeurs.html.twig', array());
    }

    public function equipeAction(Request $request)
    {
        return $this->render('entreprise/equipe.html.twig', array());
    }

    public function lesplusAction(Request $request)
    {
        return $this->render('entreprise/lesplus.html.twig', array());
    }
}
