import React from 'react';
import ReactDOM from 'react-dom';
// import { createServer, Model } from 'miragejs';
import App from './App';

// createServer({

//   models: {
//     transaction: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       transactions: [{
//         id: 1,
//         title: 'Freelance de Web',
//         type: 'deposit',
//         amount: 6000,
//         category: 'Dev',
//         createdAt: new Date()
//       },
//       {
//         id: 2,
//         title: 'Compras Mercado',
//         type: 'withdraw',
//         amount: 500,
//         category: 'Compras',
//         createdAt: new Date()
//       }]
//     })
//   },

//   routes() {
//     this.namespace = 'api';
//     this.get('/transactions', () => {
//       return this.schema.all('transaction')
//     })

//     this.post('/transactions', (schema, request) => {
//       const data = JSON.parse(request.requestBody)

//       return schema.create('transaction', { ...data, createdAt: new Date() })
//     })
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
