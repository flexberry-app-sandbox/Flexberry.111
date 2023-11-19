package 111.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 111.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: График
 */
@Entity(name = "IIS111График")
@Table(schema = "public", name = "График")
public class Grafik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Явка")
    private Boolean явка;

    @Column(name = "IDсотрдника")
    private Integer idсотрдника;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Причина")
    private String причина;

    @Column(name = "во_часов")
    private Integer во_часов;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public Grafik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getЯвка() {
      return явка;
    }

    public void setЯвка(Boolean явка) {
      this.явка = явка;
    }

    public Integer getIDсотрдника() {
      return idсотрдника;
    }

    public void setIDсотрдника(Integer idсотрдника) {
      this.idсотрдника = idсотрдника;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getПричина() {
      return причина;
    }

    public void setПричина(String причина) {
      this.причина = причина;
    }

    public Integer getво_часов() {
      return во_часов;
    }

    public void setво_часов(Integer во_часов) {
      this.во_часов = во_часов;
    }


}