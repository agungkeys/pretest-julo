import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainLayout from '../layout/MainLayout';
import MainHead from '../layout/MainHead';
import SEO from '../constant/seo';
import { Box, Button, Container, Text, NextLink, Image, EmptyState } from '../ui';

export default function Search() {
  return (
    <MainLayout isHeader isFooter> 
      <MainHead seo={SEO.DEFAULT} />
      <Container customCSS='background: #fff;'>
        <Box isBlock paddingY={3}>
          <Text fontSizeVariant='lg' fontWeightVariant='bold'>Search Movies</Text>
        </Box>
      </Container>
    </MainLayout>
  )
}
