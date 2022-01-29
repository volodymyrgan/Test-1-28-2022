<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    { 
        return view('user/index', ['users' => $user::get()]); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('user.create');
    }

    /**
     * @param Request $request
     * 
     */
    public function store(Request $request)
    {
        User::create([
            'username'      => $request->get('username'),
            'display_name'  => $request->get('display_name'), 
            'email'         => $request->get('email'),
            'password'      => bcrypt($request->get('password'))
        ]);

        return redirect()->route('user.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    { 
        $user = User::find($id);
        return view('user.edit',['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail(Request $request)
    { 
        $id = $request->get('id');
        $user = User::find($id);
        return view('user.view',['user' => $user]);
    }

    /**
     * @param Request $request
     * @param         $id
     * 
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->username = $request->get('username');
        $user->display_name = $request->get('display_name');
        $user->email = $request->get('email'); 

        if($request->get('password') != '')
        {
            $user->password = bcrypt($request->get('password'));
        }

        $user->save();
        return redirect()->route('user.index');
    }

    public function destroy(Request $request)
    {     
        $id = $request->get('id');
        $user = User::destroy($id);

        if($user){
            $request->session()->invalidate();
            return $user;
        }
    }
}
