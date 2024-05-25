<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Intervention\Image\Facades\Image;

class MediaController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'media' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $file = $request->file('media');
        $image = Image::make($file)->encode('jpg');

        $key = 'media:' . uniqid();
        Redis::set($key, $image);

        return response()->json(['key' => $key], 201);
    }

    public function getMedia($key)
    {
        $image = Redis::get($key);

        if ($image) {
            return response($image)->header('Content-Type', 'image/jpeg');
        }

        return response()->json(['error' => 'Media not found'], 404);
    }
}
