import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { Box, Button, Container, Text, NextLink, Image, EmptyState } from '../ui';

export default function Favorite() {
  return (
    <MainLayout isHeader isFooter> 
      <MainHead seo={SEO.DEFAULT} />
      <Container customCSS='background: #fff;'>
        <EmptyState
          image='/cinema.svg'
          title='Your favorite movies is empty'
          btnLabel='Find Movies'
          btnLink='/'
        />
      </Container>
    </MainLayout>
  )
}
