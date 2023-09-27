import React, { useEffect, useState } from 'react';
import DonatedListAdminComponent from '../ui/features/donatedListAdmin/donated-list-admin-component';
import { getDonatedBooks } from '../../infra/api/get-books/get-donated-books';
import { DonateBookForm } from '../../domain/models/donateBookForm';

export const DonatedListAdminPage: React.FC = () => {



  return (
    <DonatedListAdminComponent />
  );
};
