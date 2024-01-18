package com.studentinfo.dao;

import org.springframework.data.repository.CrudRepository;

import com.studentinfo.entities.StudentInfo;

public interface StudentInfoRepository extends CrudRepository<StudentInfo, Integer> {

	public StudentInfo findById(int id);
}
