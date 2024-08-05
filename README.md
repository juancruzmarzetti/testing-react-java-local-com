# Explicación

El proyecto de Java funciona localmente en el puerto 8080, o en el puerto en el que configuremos que se levante (configuración que se le indica a un programa Java desde application.properties o application.yml), y el proyecto React corre en el puerto 5173. El programa Java por defecto no acepta requests HTTP de otras URL, por lo tanto hay que agregar una clase de configuración, en el directorio donde por ejemplo estan los demás directorios (controllers, service, repository, etc.), en ese mismo directorio creamos un directorio llamado "configuration" y en ese directorio configuration creamos una clase llamada "WebConfig", y tendría que verse de la siguiente manera:

```java
package com.me.odontologo.configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
```

Ejemplo visible [aquí](https://github.com/juancruzmarzetti/backend-integrador/blob/master/src/main/java/com/me/odontologo/configuration/WebConfig.java)
