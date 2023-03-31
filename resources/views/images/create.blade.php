//blog\resources\views\image\create.blade.php

@extends('images.layout')
@section('content')
<div class="card" style="margin: 20px;">
  <div class="card-header">Create New Image</div>
  <div class="card-body">

      <form action="{{ url('image') }}" method="POST" enctype="multipart/form-data">
        {!! csrf_field() !!}
        <label>Name</label><br>
        <input type="text" name="name" id="name" class="form-control"><br>
        <input class="form-control" name="photo" type="file" id="photo">


        <input type="submit" value="Save" class="btn btn-success"><br>
    </form>

  </div>
</div>
@stop
