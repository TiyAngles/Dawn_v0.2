import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.resolve(__dirname, '.env')});

import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

