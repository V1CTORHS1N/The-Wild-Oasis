# The Wild Oasis
A web application that provides hotel administrators:
- A dashboard to view the hotel's performance
- A page to manage the hotel's bookings
- A page to manage the customers' check-ins and check-outs
- A page to manage the hotel's rooms
- A page to create a new user if there is a new employee
- A page to set the hotel's settings

## Features
- React Router
  - Common routes to all users
  - A protected route for preventing unauthorized access
- React Query
  - Manage the remote state of the application
  - Cache the requested data to improve the application's responsiveness
- Supabasse
  - Query, insert, update, and delete data from/to the database
  - Authentication
- React Charts
  - Pie Chart: display the hotel's stay duaration summary
  - Area Chart: display the hotel's sales performance
- Styled Components
- React Hook Form
- Dark Mode

## How to Run
### 1. Interative Demo via Netlify
- Visit [Interative Demo](the-wild-oasis-vh.netlify.app)

### 2. Try it on your local machine
#### 2.0. Prerequisites
1. Start your own [Supabase](https://supabase.com/) project and get the URL and the public key, then replace your own URL and public key in the `.src/services/supabase` file.

2. Create tables on your Supabase project manually
    - cabins
        ``` 
        created_at: timestamp
        name: text
        maxCapacity: int2
        regularPrice: int2
        discount: int2
        description: text
        image: text
        ```
    - guests
        ```
        created_at: timestamp
        fullName: text
        email: text
        nationalID: text
        nationality: text
        countryFlag: text
        ```
    - Settings
        ```
        created_at: timestamp
        minBookingLength: int2
        maxBookingLength: int2
        maxGuests: int2
        breakfastPrice: float4
        ```
   - bookings 
        ```bash
        created_at: timestamp
        startDate: timestamp
        endDate: timestamp
        numNights: int2
        numGuests: int2
        cabinPrice: float4
        extrasPrice: float4
        totalPrice: float4
        status: text
        hasBreakfast: boolean
        isPaid: boolean
        observations: text
        guestId: int8       #foreign key to the guests table
        roomId: int8        #foreign key to the cabins table
        ```
    Then create some dummy data for the tables.
3. Enable `Email` in the Provider section of the Supabase Authentication
4. Create a new user with the `Email` and `Password` in the Supabase Authentication
5. Enable RLS (Row Level Security) for all tables (read, insert, update, delete) in the `Policies` section of the Supabase Authentication
#### 2.1. Clone the repository
```bash
git clone https://github.com/V1CTORHS1N/The-Wild-Oasis.git && cd The-Wild-Oasis
```
#### 2.2. Install the dependencies
```bash
npm install
```

#### 2.3. Start the application
```bash
npm run dev
```
Enjoy the application on [http://localhost:5173](http://localhost:5173)
## Demo
![The Wild Oasis](images/demo.gif)