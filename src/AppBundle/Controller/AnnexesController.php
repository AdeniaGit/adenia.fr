<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class AnnexesController extends Controller
{
    public function plansiteAction(Request $request)
    {
        return $this->render('annexes/plan-du-site.html.twig', array());
    }

    public function mentionslegalesAction(Request $request)
    {
        return $this->render('annexes/mentions-legales.html.twig', array());
    }
}
