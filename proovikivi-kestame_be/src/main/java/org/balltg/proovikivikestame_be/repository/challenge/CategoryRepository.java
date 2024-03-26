package org.balltg.proovikivikestame_be.repository.challenge;

import org.balltg.proovikivikestame_be.model.challenge.CategoryModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryModel, Long> {
}
