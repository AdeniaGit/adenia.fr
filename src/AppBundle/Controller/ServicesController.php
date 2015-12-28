<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ServicesController extends Controller
{
    public function prestationsAction(Request $request)
    {
        return $this->render('services/prestations.html.twig', array());
    }

    public function partenariatsAction(Request $request)
    {
        return $this->render('services/partenariats.html.twig', array());
    }
}
