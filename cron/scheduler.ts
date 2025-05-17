import cron from 'node-cron';

cron.schedule('* * * * * *', () => {
    console.log('This runs every minute');
});

setInterval(() => { }, 1000);
