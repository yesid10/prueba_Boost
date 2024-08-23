package com.back.back.service;

import com.back.back.model.Product;
import com.back.back.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
@CrossOrigin
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    //Fuction for get all products
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    //Fuction for get One product
    public Product getOneProduct(Long id){
        return productRepository.findById(id).orElse(null);
    }

    //Fuction for save a product
    public Product saveProduct(Product product){
        return  productRepository.save(product);
    }

    //Fuction for update a product
    public Product updateProduct(Product product){
        return  productRepository.save(product);
    }

    //Fuction for delete a event
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }


}
