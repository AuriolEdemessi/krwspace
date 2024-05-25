<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotosTable extends Migration
{
    public function up()
    {
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('media_id');
            $table->string('path'); // Path to the photo
            $table->timestamps();

            // Foreign key
            $table->foreign('media_id')->references('id')->on('media')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('photos');
    }
};

