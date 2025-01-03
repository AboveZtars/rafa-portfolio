Rafa's Portfolio website

## Goal

The goal of this website/frontend is to show the work and personality of Rafael Molina with multiple features so people can interact with.

## Features

- Chatbot
  The main feature of the website. This chatbot is connected to a backend service build specifically for the client to generate a response when someone writes a message. It uses openai service and pinecone for RAG to obtain information about Rafael Molina curriculum vitae and give a detailed response.
  The usage of the chatbot should be restricted at the beginning since the backend needs to start. We can verify the status of it calling the Endpoint /status, once we get a response with status code 200 the backend is ready to be used, no more calls should be made to this endpoint and the chat should be enabled. To be disable the send button should be disable.
- About
  The About page is mainly to summarize the information about me so users can read it directly from the page.
- Projects
  The Projects page should display images from previous projects and information about them, how they were made, the tech stack, dates, etc...
