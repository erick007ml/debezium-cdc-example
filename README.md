# **Debezium Change Data Capture Example**

This repository demonstrates how to use **Debezium** with **MySQL** and **Kafka** to capture and stream database changes in real-time. It includes a complete setup using Docker and a Node.js Kafka consumer for processing the events.

---

## **Project Structure**

```
debezium-cdc-example/
├── docker-compose.yml       # Docker Compose file for services (MySQL, Kafka, Debezium)
├── README.md                # Project documentation
├── connectors/              # Debezium connector configuration
│   └── mysql-connector.json
├── consumer/                # Kafka consumer example in Node.js
│   ├── package.json
│   └── index.js
├── database/                # Database initialization scripts
│   └── init.sql
```

---

## **Requirements**

- Docker and Docker Compose installed
- Node.js (v16 or higher) and npm for the Kafka consumer

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/your-repo-url/debezium-cdc-example.git
cd debezium-cdc-example
```

### **2. Start the Services**

Use Docker Compose to start MySQL, Kafka, Zookeeper, and Debezium.

```bash
docker-compose up -d
```

### **3. Initialize the Database**

Run the SQL script to set up the database schema and seed initial data:

```bash
docker exec -i <mysql_container_name> mysql -uroot -ppassword < database/init.sql
```

### **4. Configure Debezium Connector**

Register the MySQL connector with Debezium using the following command:

```bash
curl -X POST -H "Content-Type: application/json" \
--data @connectors/mysql-connector.json http://localhost:8083/connectors
```

### **5. Run the Kafka Consumer**

Navigate to the `consumer` directory, install dependencies, and start the consumer:

```bash
cd consumer
npm install
node index.js
```
