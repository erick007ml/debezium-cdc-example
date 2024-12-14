const { Kafka } = require('kafkajs');

const kafka = new Kafka({ brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'cdc-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'mysql_cdc.cdc_demo.employees', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`Change event: ${message.value.toString()}`);
    },
  });
};

run().catch(console.error);
