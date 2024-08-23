# **ShareLink** <img src="https://github.com/Pratham1514/ShareLink-file-sharing/blob/main/client/public/icons8-file-share-96.png" width="35" />

This is a simple file-sharing application that allows users to upload files and receive a unique download link. The link can be shared with others to download the file. This app is designed to be easy to use and provides a secure way to share files online.

## **🌟 Features**

- **File Upload**: Users can upload any file type to the server.
- **Download Link**: After uploading, the user receives a unique link to download the file.
- **File Security**: Files are stored securely and only accessible via the unique link.
- **Expiration**: Optionally, links don't expire.
- **Responsive Design**: The app is responsive and works well on both desktop and mobile devices.

## **🛠️ Technologies Used**

- **React.js**: Front-end JavaScript library for building user interfaces.
- **Node.js**: The server-side JavaScript runtime handles file uploads and manages server logic.
- **Express.js**: Web framework for Node.js, used for routing and handling HTTP requests.
- **MongoDB**: NoSQL database stores metadata about uploaded files (e.g., file name, upload date, download link).
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **Tailwind CSS**: Utility-first CSS framework used for styling the application and ensuring a responsive design.

## **🚀 Installation**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Pratham1514/ShareLink-file-sharing.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd file-sharing-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up MongoDB**:
    - Make sure MongoDB is installed and running on your system.
    - Create a `.env` file in the root directory and add your MongoDB URI:
      ```
      MONGODB_URI=your-mongodb-uri
      ```

5. **Start the application**:
    ```bash
    npm run dev
    ```

6. **Access the app**:
    - Open your browser and navigate to `http://localhost:5173`.

## **Usage**

1. **Upload a File**:
   - Navigate to the home page and select a file to upload.
   - Click the "Upload" button to upload the file.

2. **Share the Download Link**:
   - After uploading, you will receive a unique download link.
   - Copy and share this link with anyone who needs access to the file.

3. **Download a File**:
   - To download a file, simply visit the provided download link.
   - The file will start downloading automatically.

## **Screenshots**

<img src="" />

## **Acknowledgements**

- **React.js**: For building the front-end UI.
- **Tailwind CSS**: For responsive design and styling.
- **Node.js & Express.js**: For backend logic and API management.
- **MongoDB**: For efficient data storage.
- **Multer**: For handling file uploads.
