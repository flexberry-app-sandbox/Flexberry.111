package 111.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 111.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Прием
 */
@Entity(name = "IIS111Прием")
@Table(schema = "public", name = "Прием")
public class Priem {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDорганизации")
    private Integer idорганизации;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "IDсотрдника")
    private Integer idсотрдника;

    @Column(name = "Ставка")
    private Integer ставка;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;


    public Priem() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDорганизации() {
      return idорганизации;
    }

    public void setIDорганизации(Integer idорганизации) {
      this.idорганизации = idорганизации;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getIDсотрдника() {
      return idсотрдника;
    }

    public void setIDсотрдника(Integer idсотрдника) {
      this.idсотрдника = idсотрдника;
    }

    public Integer getСтавка() {
      return ставка;
    }

    public void setСтавка(Integer ставка) {
      this.ставка = ставка;
    }


}