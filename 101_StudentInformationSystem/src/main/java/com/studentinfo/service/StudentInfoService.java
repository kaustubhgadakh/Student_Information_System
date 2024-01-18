package com.studentinfo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.studentinfo.dao.StudentInfoRepository;
import com.studentinfo.entities.StudentInfo;

@Component
public class StudentInfoService {
	
	@Autowired
	private StudentInfoRepository studentInfoRepository;
	
	public List<StudentInfo> getInfo() {
		return (List<StudentInfo>) this.studentInfoRepository.findAll();
	}
	
	public StudentInfo getStudent(int id) {
		// TODO Auto-generated method stub
		return studentInfoRepository.findById(id);
	}

	public StudentInfo addStudentInfo(StudentInfo student) {
		// TODO Auto-generated method stub
		return studentInfoRepository.save(student);
	}

	public void updateStudentInfo(int id, StudentInfo student) {
		// TODO Auto-generated method stub
		student.setsId(id);
		studentInfoRepository.save(student);
	}

	public void deleteStudentInfo(int id) {
		// TODO Auto-generated method stub
		studentInfoRepository.deleteById(id);
		
	}	

}
