package com.ecommerce.product.application.kafka.consumer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class TestConsumer {
    @KafkaListener(topics = "test-topic", groupId = "${spring.kafka.consumer.group-id}")
    public void listen(String message) {
        log.info("Received message: " + message);
    }
}
