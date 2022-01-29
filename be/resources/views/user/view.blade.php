@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">View User</div>

                <div class="panel-body">
                     <div class="col-md-13">
                            <!-- BEGIN BORDERED TABLE PORTLET-->
                            <div class="portlet light portlet-fit bordered"> 
                                <div class="portlet-body form">
                                    {!! Form::model($user, ['route' => ['user.update', $user->_id], 'method' => 'PUT', 'id' => 'form-edit']) !!}

                                <div class="alert-wrapper"></div>

                                <div class="form-body">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        {!! Form::text('display_name', null, ['id'=>"name", 'placeholder'=>"Name", 'class'=>"form-control", 'required','readonly' => "readonly"]) !!}
                                    </div>
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        {!! Form::text('username', null, ['id'=>"username", 'placeholder'=>"Username", 'class'=>"form-control", 'required','readonly' => "readonly"]) !!}

                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        {!! Form::email('email', null, ['id'=>"email", 'placeholder'=>"Email", 'class'=>"form-control",'readonly' => "readonly"], 'required') !!}

                                    </div>   
                                </div> 
                                {!! Form::close() !!} 
                                </div>
                            </div>
                            <!-- END BORDERED TABLE PORTLET-->
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection


