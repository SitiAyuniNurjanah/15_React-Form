import React from "react";
import { useParams } from "react-router-dom";

const DetailAccount = () => {
  const { id } = useParams();

  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const account = accounts.find((acc) => acc.id === id);

  return (
    <div className="container mt-5 detail-container" style={{ minHeight: "100px" }}>
      {account ? (
        <div>
          <h2>Account Details</h2>
          <p>ID: {account.id}</p>
          <p>Name: {account.name}</p>
          <p>Email: {account.email}</p>
          <p>Phone: {account.phone}</p>
        </div>
      ) : (
        <div>
          <h2>Akun tidak ditemukan</h2>
        </div>
      )}
    </div>
  );
};

export default DetailAccount