## Getting Started

Install dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The deployed application can also be found at [https://train-booking-system-three.vercel.app/](https://train-booking-system-three.vercel.app/).

## Important things to know about this assignment

The application is not complete. The main focus of the current implementation was on getting right and validating travel dates. This included implementing day picker functionality using react-day-picker library, validating data with yup library and using jest for unit testing.

Next features and improvements to be implemented would be:

- Improved origin and destination input fields. In origin and destination input fields I would use an external API to suggest user train stations while they are typing.
- Passenger category with counter. For example, one would choose between "adult", "child", "retired", etc. and set the counter to the right quantity.
- Further tests including UI testing.
