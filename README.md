# **NetherHost Discord Link**

A RESTful API for automating Discord role management for Nether Host's billing panel.

## **Description**

This API integrates with Nether Host's billing panel to automatically assign Discord roles based on paid invoices. It periodically queries the database for paid invoices and links users' Discord accounts to apply the appropriate roles on the Discord server.

## **Stack**

- **API Backend**: Node.js, Express.js
- **Discord Integration**: discord.js
- **Scheduling**: node-cron
