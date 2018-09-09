/*
Author : Parshant Nagpal
Desciption : all plugin register here and start the server
File : server.js
*/
import Hapi from 'hapi';

export default async () => {
     const server = Hapi.server({
         host : 'localhost',
         port : 4000
     });

     try{
         await server.start();

     }catch (error){
         console.log(error);
         process.exit(1);

     }
     console.log('server is running at ' , server.info.uri)
};
