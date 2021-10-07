const mysql = require("mysql");
const dotenv = require('dotenv')

dotenv.config();



let instance = null;

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM Record;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }


  // async updateBalance(balance, username) {
  //   try {
  //     const response = await new Promise((resolve, reject) => {
  //       const query = `UPDATE users SET balance = ${balance} WHERE username='${username}'`;

  //       connection.query(query, (err, result) => {
  //         if (err) reject(new Error(err.message));
  //         resolve(result.affectedRows);
  //       });
  //     });

  //     return response === 1 ? true : false;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // }

  async insertData(data) {


    // var k = 0

    // k = await data.map(async (i) => {




   var rows=o


      const response = await new Promise((resolve, reject) => {
        const query = `INSERT INTO Record(uic,service_id,hospital_code,doctor_id,prescribed_medicines,Date)  values(${i.uic},${i.service_id},${i.hospital_code},'${i.doctor_id}','${i.prescribed_medicines}','${i.Date}');`;

        pool.query(query, (err, result) => {
          if (err) reject(new Error(err.message));

          row+=1

          resolve();
        });




      });

    // })





    return rows != 0 ? true : false;



  }

  async insertBillData(data) {

    //   data.map( (i)=>{

    //   console.log(i.id);
    //   console.log(i.name);

    //   })
    // }

    var k = 0

    k = await data.map(async (i) => {







      const response = await new Promise((resolve, reject) => {
        const query = `INSERT INTO Bill(bill_amount) values(${i.bill_amount});`;

        connection.query(query, (err, result) => {
          if (err) reject(new Error(err.message));

          resolve();
        });




      });









    })





    return k != 0 ? true : false;



  }

  async queryFirst() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT COUNT(*) AS NumberOfRecords FROM Record,Hospital WHERE Record.hospital_code = Hospital.hospital_code AND Hospital.hospital_name = 'KMH';";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }


  async querySecond() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT COUNT(DISTINCT Record.uic) AS NumberOfPatients FROM Record, Doctor WHERE Record.doctor_id = Doctor.doctor_id AND Doctor.doctor_name = 'Pearl Walsh';";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }



  async queryThird() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT Individual.name, Record.id, Record.Date, Service.service_name, Hospital.hospital_name, Record.prescribed_medicines, Doctor.doctor_name from Record, Service, Hospital, Individual, Doctor where Record.uic= 23742 and Individual.uic= Record.uic and Hospital.hospital_code= Record.hospital_code and Service.service_id= Record.service_id and Doctor.doctor_id= Record.doctor_id;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }




  async queryFourth() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT Individual.name, Individual.contact_number FROM Individual, Hospital, Record WHERE Individual.uic = Record.uic AND Hospital.hospital_code = Record.hospital_code AND Hospital.hospital_name = 'BRC' AND Individual.blood_group = 'AB-';";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }




  async queryFifth() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT Individual.Name AS PatientName FROM Individual, Record WHERE Individual.uic = Record.uic GROUP BY Record.uic ORDER BY COUNT(*) DESC LIMIT 1;";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log("error in read", error);
    }
  }



  //    id=Number(id);
  //    console.log(id);
  //    console.log(name);
  //   try {
  //     const response = await new Promise((resolve, reject) => {
  //       const query = `INSERT INTO rowdata values( ${id},'${name}')`;

  //       connection.query(query, (err, result) => {
  //         if (err) reject(new Error(err.message));
  //         console.log(result);
  //         resolve(result.affectedRows);
  //       });
  //     });

  //     return response != 0 ? true : false;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // }
}

module.exports = DbService;
