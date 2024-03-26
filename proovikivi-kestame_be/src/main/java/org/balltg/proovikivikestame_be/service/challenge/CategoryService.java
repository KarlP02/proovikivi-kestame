package org.balltg.proovikivikestame_be.service.challenge;

import org.balltg.proovikivikestame_be.model.challenge.CategoryModel;
import org.balltg.proovikivikestame_be.repository.challenge.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryModel> findAll() {
        return categoryRepository.findAll();
    }
}
