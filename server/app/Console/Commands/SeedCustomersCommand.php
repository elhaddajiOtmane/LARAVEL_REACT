<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Customer;
use Faker\Factory as Faker;

class SeedCustomersCommand extends Command
{
    protected $signature = 'seed:customers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Seed the customers table with sample data.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            $customer = new Customer;
            $customer->first_name = $faker->firstName;
            $customer->last_name = $faker->lastName;
            $customer->email = $faker->unique()->safeEmail;
            $customer->save();
        }

        $this->info('Customers seeded successfully!');

        return 0;
    }
}
