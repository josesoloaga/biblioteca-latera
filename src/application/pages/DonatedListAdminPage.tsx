import React, { useEffect, useState } from 'react';
import DonatedListAdminComponent from '../ui/features/donatedListAdmin/donated-list-admin-component';
import { getDonatedBooks } from '../../infra/api/get-books/get-books';
import { DonateBookForm } from '../../domain/models/donateBookForm';

export const DonatedListAdminPage: React.FC = () => {
  const [bookDonatedListAdmin, setBookDonatedListAdmin] = useState<
    DonateBookForm[]
  >([]);

  const bookDonatedData = async () => {
    await getDonatedBooks()
      .then((data) => {
        setBookDonatedListAdmin(data as DonateBookForm[]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    !bookDonatedListAdmin.length && bookDonatedData();
  }, [bookDonatedListAdmin]);

  return (
    <DonatedListAdminComponent bookDonatedListAdmin={bookDonatedListAdmin} />
  );
};
