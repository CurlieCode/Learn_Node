## Importance of structured code
# MVC Explanation with Blog API Example

MVC (Model-View-Controller) is a design pattern used to separate concerns within an application. Here's how the pattern works, using the provided codebase as an example:

## 1. **Model** - Handles Data and Business Logic
The **Model** is responsible for managing the data, whether it comes from a file, database, or other sources. It’s like the **brain** of your app because it controls what data is stored, retrieved, updated, or deleted.

## 2. View - Displays Information to the User
The View is the face of your app. It’s what the user sees and interacts with. However, in the context of an API like this one, there isn't a traditional "View" in the form of HTML or a UI framework (like React or Angular). Instead, the View is the JSON response that the API sends back to the client (such as a browser or mobile app).

When the client makes a request, the Controller processes the data and sends it back to the client in JSON format. This JSON response acts as the "View" in the context of an API.


## 3.  Controller - Connects Model and View
The Controller is the manager of your app. It handles user input (HTTP requests) and communicates with both the Model and the View. It fetches or updates data via the Model and prepares the data to be presented to the user (as the View).









## Breaking It Down:
# a) Model: The Brain of Your App
The Model (blogModel.js) is where all the data lives. It contains logic to retrieve, add, update, and delete blog posts. Imagine it as the brain that knows how and where to store and manage the data.

# b) View: The Face of Your App
In our API, the View is the JSON response that the API sends back. Although not a visual interface like a web page, this response is the information that the frontend or the user receives.

# c) Controller: The Manager of Your App
The Controller (blogController.js) is the intermediary that connects the Model and the View. It listens for requests from the user (client), fetches or modifies data from the Model, and then sends it back in the form of a View (JSON response).

