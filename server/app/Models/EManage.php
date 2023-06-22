<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EManage extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'e_manages';
    protected $fillable = ['event_id', 'user_id'];
}