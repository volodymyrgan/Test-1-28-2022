 @extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Input User</div>

                <div class="panel-body">
                     <div class="col-md-13">
                            <!-- BEGIN BORDERED TABLE PORTLET-->
                            <div class="portlet light portlet-fit bordered"> 
                                <div class="portlet-body form">
                                    <form action="{{route('user.store')}}" method="post"> {{csrf_field()}}
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label for="display_name">Name</label>
                                                <input type="text" name="display_name" id="display_name" placeholder="Name" class="form-control"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="username">Username</label>
                                                <input type="text" name="username" id="username" placeholder="Username"
                                                       class="form-control"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" name="email" id="email" placeholder="Email" class="form-control"/>
                                            </div> 
                                            <div class="form-group">
                                                <label for="password">Password</label>
                                                <input type="password" name="password" id="password" placeholder="Password" class="form-control"/>
                                            </div>   
                                        </div>
                                        <div class="form-actions right1">
                                            <button type="submit" class="btn blue">Submit</button>
                                        </div>
                                    </form>
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


