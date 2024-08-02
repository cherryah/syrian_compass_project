<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    /**
     * Get the authenticated user's profile.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $user = Auth::user();
        $userProfile = $user->only(['name', 'email', 'phone_number', 'gender', 'country']);
        return response()->json([
            'status' => 'success',
            'data' => $userProfile
        ]);
    }

    /**
     * Update the authenticated user's profile.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'string|min:6|confirmed',
            'phone_number' => 'string|max:15',
            'gender' => 'in:male,female',
            'country' => 'string|max:255',
        ]);

        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->update($request->only('name', 'email', 'phone_number', 'gender', 'country'));

        $userProfile = $user->only(['name', 'email', 'phone_number', 'gender', 'country']);
        return response()->json([
            'status' => 'success',
            'data' => $userProfile
        ]);
    }
}
