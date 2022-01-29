@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Update User</div>

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
                                        {!! Form::text('display_name', null, ['id'=>"name", 'placeholder'=>"Name", 'class'=>"form-control", 'required']) !!}
                                    </div>
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        {!! Form::text('username', null, ['id'=>"username", 'placeholder'=>"Username", 'class'=>"form-control", 'required']) !!}

                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        {!! Form::email('email', null, ['id'=>"email", 'placeholder'=>"Email", 'class'=>"form-control"], 'required') !!}

                                    </div>  
                                    <div class="form-group">
                                        <label for="name">Password <br><small class="text-danger">Type to change password, left empty to use old password.</small></label>
                                        <input type="password" name="password" id="password" placeholder="Type to change password" class="form-control"/>
                                    </div> 
                                </div>

                                <button type="submit" class="btn btn-info btn-block btn-lg save">
                                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Update
                                </button>
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


