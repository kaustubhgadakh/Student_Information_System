package com.studentinfo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.studentinfo.entities.StudentInfo;
import com.studentinfo.service.StudentInfoService;

@CrossOrigin("http://localhost:3000")
@RestController
public class StuddentInfoController {

	@Autowired
	private StudentInfoService studentInfoService;

	@GetMapping("/StudentInfo")
	public List<StudentInfo> getInfo() {
		return this.studentInfoService.getInfo();
	}
	
	@GetMapping("/StudentInfo/{id}")
	public StudentInfo getStudent(@PathVariable("id") int id) {
		return studentInfoService.getStudent(id);
	}

	@PostMapping("/StudentInfo")
	public StudentInfo addStudentInfo(@RequestBody StudentInfo student) {
		return this.studentInfoService.addStudentInfo(student);
	}

	@PutMapping("/StudentInfo/{id}")
	public StudentInfo updateStudentInfo(@PathVariable("id") int id, @RequestBody StudentInfo student) {
		studentInfoService.updateStudentInfo(id, student);
		return student;
	}

	@DeleteMapping("/StudentInfo/{id}")
	public void deleteStudentInfo(@PathVariable("id") int id) {
		this.studentInfoService.deleteStudentInfo(id);
	}
}
