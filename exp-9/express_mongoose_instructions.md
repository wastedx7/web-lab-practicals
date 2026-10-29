# Express.js & Mongoose Setup Instructions

1. **Initialize Project**
   Open your terminal in the project directory and run:
   ```bash
   npm init -y
   ```

2. **Install Dependencies**
   Install Express and Mongoose:
   ```bash
   npm install express mongoose
   ```

3. **Verify MongoDB**
   Ensure your MongoDB server is running locally on default port `27017`.

4. **Start the Application**
   Run your main server file:
   ```bash
   node server.js
   ```

5. **Test Endpoints**
   Open your browser or API client and visit:
   - **Home:** `http://localhost:3000/`
   - **Add Record:** `http://localhost:3000/add`
   - **View Records:** `http://localhost:3000/students`