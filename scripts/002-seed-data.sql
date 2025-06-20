-- Insert sample users
INSERT INTO users (email, password_hash, first_name, last_name, phone, date_of_birth) VALUES
('john.doe@example.com', '$2b$10$hash1', 'John', 'Doe', '+962791234567', '1985-03-15'),
('jane.smith@example.com', '$2b$10$hash2', 'Jane', 'Smith', '+962792345678', '1990-07-22'),
('ahmed.hassan@example.com', '$2b$10$hash3', 'Ahmed', 'Hassan', '+962793456789', '1988-11-10'),
('sara.omar@example.com', '$2b$10$hash4', 'Sara', 'Omar', '+962794567890', '1992-05-18'),
('mohammed.ali@example.com', '$2b$10$hash5', 'Mohammed', 'Ali', '+962795678901', '1987-09-03');

-- Insert sample analyses
INSERT INTO analyses (user_id, analysis_type, result, confidence_score, status) VALUES
(1, 'lung', '{"findings": ["Normal lung fields", "No pneumonia detected"], "recommendation": "Regular follow-up"}', 0.9542, 'completed'),
(1, 'heart', '{"findings": ["Normal cardiac silhouette", "No cardiomegaly"], "recommendation": "Heart appears healthy"}', 0.9234, 'completed'),
(2, 'both', '{"findings": ["Mild lung opacity in right lower lobe", "Normal heart size"], "recommendation": "Follow-up in 2 weeks"}', 0.8765, 'completed'),
(3, 'lung', '{"findings": ["Clear lung fields", "No acute findings"], "recommendation": "Continue current treatment"}', 0.9456, 'completed'),
(4, 'heart', '{"findings": ["Slightly enlarged heart", "Possible cardiomegaly"], "recommendation": "Cardiology consultation recommended"}', 0.8234, 'completed'),
(5, 'lung', '{"findings": ["Bilateral lung infiltrates", "Possible pneumonia"], "recommendation": "Immediate medical attention required"}', 0.9123, 'completed'),
(2, 'lung', '{"findings": ["Normal chest X-ray", "No abnormalities detected"], "recommendation": "Annual screening recommended"}', 0.9567, 'completed'),
(3, 'both', '{"findings": ["Normal lung and heart appearance"], "recommendation": "Healthy baseline established"}', 0.9345, 'completed');

-- Insert sample contact messages
INSERT INTO contact_messages (name, email, subject, message, status) VALUES
('Dr. Ahmad Khalil', 'ahmad.khalil@hospital.jo', 'Partnership Inquiry', 'Interested in integrating VitaScan AI into our hospital system.', 'new'),
('Fatima Al-Zahra', 'fatima.zahra@clinic.jo', 'Technical Support', 'Need assistance with image upload functionality.', 'read'),
('Omar Mansour', 'omar.mansour@gmail.com', 'Feature Request', 'Would like to see support for pediatric chest X-rays.', 'responded');
