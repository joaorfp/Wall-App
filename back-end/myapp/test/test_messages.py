from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status

class MessageTestCase(APITestCase):
    def test_get_messages(self):
        """"This test will ensure that every user can see all posts"""
        url = reverse('messages-lists')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_post_messages(self):
        """"This test will ensure that an authed user can create a post"""
        url = reverse('users-list')
        username = 'username'
        user = {
          'username': username,
          'email': 'username@gmail.com',
          'password': 'password'
        }
        response = self.client.post(url, user, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        token_url = reverse('api-token-auth')
        login = {
          'username': username,
          'password': 'password'
        }
        token_response = self.client.post(token_url, login, format='json')
        self.assertEqual(token_response.status_code, status.HTTP_200_OK)
      
        token = token_response.data['token']      
        post_url = reverse('messages-lists')
        post_data = {
          'message': 'my message',
          'is_active': True,
          'title': 'my title',
          'owner': username
        }
        response = self.client.post(post_url, post_data, HTTP_AUTHORIZATION=f'Token {token}')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_guest_users(self):
        """"This test will ensure that guests can't create posts"""

        post_url = reverse('messages-lists')
        post_data = {
          'message': 'my message',
          'is_active': True,
          'title': 'my title',
          'owner': 'username'
        }
        response = self.client.post(post_url, post_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)