<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $users = User::get();

        count($users) < 5 ? User::factory()->create() : '';

        return [
            'user_id' => User::inRandomOrder()->first(),
            'image_id' => 1,
            'title' => $this->faker->paragraph,
            'slug' => $this->faker->slug,
            'description' => "<p>" . implode('</p><p>', $this->faker->paragraphs(2)) . "</p>"
        ];
    }
}