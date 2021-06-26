<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:admin,superAdmin,teacher');
    }

    public function index()
    {
        return view('teacher.home');
    }
}
