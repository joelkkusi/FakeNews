<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function recent()
    {
        return view('posts.recent', [
            'posts' => Post::take(8)->get()
        ]);
    }

    public function all()
    {
        return view('posts.all', [
            'posts' => Post::get()
        ]);
    }
}
