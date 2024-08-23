package com.back.back.controllers;

import com.back.back.model.Product;
import com.back.back.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    //GET
    @GetMapping("/list")
    public List<Product> listProducts(){
        return productService.getAllProducts();
    }

    //GET ONE PRODUCT
    @GetMapping("/list/{id}")
    public Product listOneProduct(@PathVariable Long id){
        return productService.getOneProduct(id);
    }

    //POST
    @PostMapping("/save")
    public Product createProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    //PUT
    @PutMapping("/edit/{id}")
    public Product editProduct(@RequestBody Product product, @PathVariable Long id){
        product.setId(id);
        return productService.updateProduct(product);
    }

    //DELETE
    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }

}
