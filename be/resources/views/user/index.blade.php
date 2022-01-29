@extends('layouts.app')

@section('content')
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
    $(document).ready(function(){ 
        var id = '';
        $(".myBtn").click(function(){ 
            console.log($(this).data('id'));
            id = $(this).data('id');
            $("#myModal").modal();
        });

        $(".delete").click(function(){ 
            console.log(id);

            var data = {
                        '_token'        : "{{ csrf_token() }}",
                        'id'         : id 
                    }; 

             $.ajax({
                url: "user/destroy",
                type: 'PUT',
                data: data,
                dataType: "JSON", 
                success: function(result) {
                   console.log("sukses");
                   location.reload();
                }
            });
        });
       
    });
</script> 
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>
                <div class="panel-body">
                    You are logged in {{Auth::user()->display_name}} ! 
                </div>
                <div class="panel-body">
                     <div class="col-md-13">
                            <!-- BEGIN BORDERED TABLE PORTLET-->
                            <div class="portlet light portlet-fit bordered">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-settings font-red"></i>
                                        <span class="caption-subject font-red sbold uppercase">User Table</span>
                                    </div> 
                                    <div class="actions pull-right" > 
                                       
                                        <a href="user/create" style="cursor: pointer;">
                                            <label class="label label-sm label-danger" style="cursor: pointer;">
                                                <i class="fa fa-edit"></i> 
                                            Add 
                                            </label>
                                        </a>
                                        
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <div class="table-scrollable table-scrollable-borderless">
                                        <table class="table table-hover table-light">
                                            <thead>
                                                <tr class="uppercase">
                                                    <th> No </th>
                                                    <th> First Name </th>
                                                    <th> Last Name </th>
                                                    <th> Username </th> 
                                                    <th> Action </th>
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                <?php 
                                                    $no = 1;
                                                 ?>
                                                @foreach($users as $user) 
                                                    <tr>
                                                        <td> {{$no}} </td>
                                                        <td> {{$user->username}} </td>
                                                        <td> {{$user->display_name}} </td>
                                                        <td> {{$user->email}} </td> 
                                                        <td>

                                                    <?php
                                                        if($user->id==Auth::user()->id){ 
                                                     ?> 
                                                            <a href="{{route('user.edit', $user->id)}}" class="btn btn-outline btn-circle btn-sm purple">
                                                            <i class="fa fa-edit"></i> Edit </a> 

                                         <a href="#" class="btn btn-outline btn-circle dark btn-sm black myBtn" data-id="{{$user->id}}">
                                                            <i class="fa fa-trash-o"></i> Delete </a>
                                                    <?php } else{?>
                                                            <a href="/user/detail?id={{$user->id}}" class="btn btn-outline btn-circle dark btn-sm black">
                                                            <i class="fa fa-trash-o"></i> View </a></td>
                                                    <?php } ?>
                                                    </tr> 
                                                     <?php $no++; ?>
                                                @endforeach 


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- END BORDERED TABLE PORTLET-->
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Delete</h4>
        </div>
        <div class="modal-body">
          <p>Are you sure want to delete?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default delete" data-dismiss="modal">Yes</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
        </div>
      </div>
      
    </div>
  </div>
@endsection 
  