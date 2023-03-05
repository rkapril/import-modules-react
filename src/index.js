import Teacher from "./Teacher"; // Default Export
import { promote } from "./Teacher"; // Named Export
// import Teacher, { promote } from "./Teacher";
// import React, { Component } from 'react';

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
promote();
