<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class OpenSourceController extends Controller
{
    public function philosophieAction(Request $request)
    {
        return $this->render('opensource/philosophie.html.twig', array());
    }

    public function opensourceetmoiAction(Request $request)
    {
        return $this->render('opensource/opensource-et-moi.html.twig', array());
    }

    public function technologiesAction(Request $request)
    {
        return $this->render('opensource/technologies.html.twig', array());
    }
}
