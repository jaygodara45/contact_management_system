# Contact Management System   
A simple contact management system that allows users to store contact information including photos, names, and emails. The system provides functionalities to create, update, and delete user information.   
## Technologies used
- **Frontend:** EJS (Embedded JavaScript)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
## Setup instructions   
Follow these steps to set up the project locally on your machine.   
### 1. Clone the Repository
```bash
git clone https://github.com/jaygodara45/contact_management_system.git
```
### 2. Create .env file   
Navigate to the root directory of the project and create .env file. Add the following environment variable in the .env file (Add your own MONGO_URI)
```bash
MONGO_URI=your_mongodb_uri
```

### Install Dependencies
Install all the required dependencies using the command:
```bash
npm install
```

### Run the Server
Start the application by running the following command:
```bash
npx nodemon app.js
```

The application should now be running on http://localhost:3000.

