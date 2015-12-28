<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class RealisationsController extends Controller
{
    public function referencesAction(Request $request)
    {
        return $this->render('realisations/references.html.twig', array());
    }
}
