/*
 * Copyright (C) Ascensio System SIA 2012-2020. All rights reserved
 *
 * https://www.onlyoffice.com/
 *
 * Version: 0.0.0 (build:0)
 */

var tb;

function ub(f) {
  var e = 0;
  return function () {
    return e < f.length ? { done: !1, value: f[e++] } : { done: !0 };
  };
}

var vb = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (f, e, Ia) {
    f != Array.prototype && f != Object.prototype && (f[e] = Ia.value);
  },
  fd = 'undefined' != typeof window && window === this ? this : 'undefined' != typeof global && null != global ? global : this;

function zd() {
  zd = function () {
  };
  fd.Symbol || (fd.Symbol = Ad);
}

function Bd(f, e) {
  this.OGg = f;
  vb(this, 'description', { configurable: !0, writable: !0, value: e });
}

Bd.prototype.toString = function () {
  return this.OGg;
};
var Ad = function () {
  function f(Ia) {
    if (this instanceof f) throw new TypeError('Symbol is not a constructor');
    return new Bd('jscomp_symbol_' + (Ia || '') + '_' + e++, Ia);
  }

  var e = 0;
  return f;
}();

function re() {
  zd();
  var f = fd.Symbol.iterator;
  f || (f = fd.Symbol.iterator = fd.Symbol('Symbol.iterator'));
  'function' != typeof Array.prototype[f] && vb(Array.prototype, f, {
    configurable: !0,
    writable: !0,
    value: function () {
      return se(ub(this));
    }
  });
  re = function () {
  };
}

function se(f) {
  re();
  f = { next: f };
  f[fd.Symbol.iterator] = function () {
    return this;
  };
  return f;
}

function te(f) {
  var e = 'undefined' != typeof Symbol && Symbol.iterator && f[Symbol.iterator];
  return e ? e.call(f) : { next: ub(f) };
}

function Tf(f, e) {
  if (e) {
    var Ia = fd;
    f = f.split('.');
    for (var cb = 0; cb < f.length - 1; cb++) {
      var Xa = f[cb];
      Xa in Ia || (Ia[Xa] = {});
      Ia = Ia[Xa];
    }
    f = f[f.length - 1];
    cb = Ia[f];
    e = e(cb);
    e != cb && null != e && vb(Ia, f, { configurable: !0, writable: !0, value: e });
  }
}

Tf('Promise', function (f) {
  function e(e) {
    this.ZBf = 0;
    this.weg = void 0;
    this.D9d = [];
    var f = this.J5f();
    try {
      e(f.resolve, f.reject);
    } catch (rb) {
      f.reject(rb);
    }
  }

  function Ia() {
    this.Isd = null;
  }

  function cb(f) {
    return f instanceof e ? f : new e(function (e) {
      e(f);
    });
  }

  if (f) return f;
  Ia.prototype.ctg = function (e) {
    if (null == this.Isd) {
      this.Isd = [];
      var f = this;
      this.dtg(function () {
        f.d_g();
      });
    }
    this.Isd.push(e);
  };
  var Xa = fd.setTimeout;
  Ia.prototype.dtg = function (e) {
    Xa(e, 0);
  };
  Ia.prototype.d_g = function () {
    for (; this.Isd && this.Isd.length;) {
      var e = this.Isd;
      this.Isd = [];
      for (var f = 0; f < e.length; ++f) {
        var Ia = e[f];
        e[f] = null;
        try {
          Ia();
        } catch (mb) {
          this.dXg(mb);
        }
      }
    }
    this.Isd = null;
  };
  Ia.prototype.dXg = function (e) {
    this.dtg(function () {
      throw e;
    });
  };
  e.prototype.J5f = function () {
    function e(e) {
      return function (y) {
        Ia || (Ia = !0, e.call(f, y));
      };
    }

    var f = this, Ia = !1;
    return { resolve: e(this.f6g), reject: e(this.heg) };
  };
  e.prototype.f6g = function (f) {
    if (f === this) this.heg(new TypeError('A Promise cannot resolve to itself')); else if (f instanceof e) this.U6g(f); else {
      a:switch (typeof f) {
        case 'object':
          var y =
            null != f;
          break a;
        case 'function':
          y = !0;
          break a;
        default:
          y = !1;
      }
      y ? this.e6g(f) : this.Mwg(f);
    }
  };
  e.prototype.e6g = function (e) {
    var f = void 0;
    try {
      f = e.then;
    } catch (rb) {
      this.heg(rb);
      return;
    }
    'function' == typeof f ? this.V6g(f, e) : this.Mwg(e);
  };
  e.prototype.heg = function (e) {
    this.bFg(2, e);
  };
  e.prototype.Mwg = function (e) {
    this.bFg(1, e);
  };
  e.prototype.bFg = function (e, f) {
    if (0 != this.ZBf) throw Error('Cannot settle(' + e + ', ' + f + '): Promise already settled in state' + this.ZBf);
    this.ZBf = e;
    this.weg = f;
    this.e_g();
  };
  e.prototype.e_g = function () {
    if (null !=
      this.D9d) {
      for (var e = 0; e < this.D9d.length; ++e) ib.ctg(this.D9d[e]);
      this.D9d = null;
    }
  };
  var ib = new Ia;
  e.prototype.U6g = function (e) {
    var f = this.J5f();
    e.OJf(f.resolve, f.reject);
  };
  e.prototype.V6g = function (e, f) {
    var y = this.J5f();
    try {
      e.call(f, y.resolve, y.reject);
    } catch (mb) {
      y.reject(mb);
    }
  };
  e.prototype.then = function (f, Ia) {
    function y(e, f) {
      return 'function' == typeof e ? function (f) {
        try {
          Xa(e(f));
        } catch (ec) {
          Ta(ec);
        }
      } : f;
    }

    var Xa, Ta, ib = new e(function (e, f) {
      Xa = e;
      Ta = f;
    });
    this.OJf(y(f, Xa), y(Ia, Ta));
    return ib;
  };
  e.prototype.catch = function (e) {
    return this.then(void 0,
      e);
  };
  e.prototype.OJf = function (e, f) {
    function y() {
      switch (Ia.ZBf) {
        case 1:
          e(Ia.weg);
          break;
        case 2:
          f(Ia.weg);
          break;
        default:
          throw Error('Unexpected state: ' + Ia.ZBf);
      }
    }

    var Ia = this;
    null == this.D9d ? ib.ctg(y) : this.D9d.push(y);
  };
  e.resolve = cb;
  e.reject = function (f) {
    return new e(function (e, y) {
      y(f);
    });
  };
  e.race = function (f) {
    return new e(function (e, y) {
      for (var Ia = te(f), Ta = Ia.next(); !Ta.done; Ta = Ia.next()) cb(Ta.value).OJf(e, y);
    });
  };
  e.all = function (f) {
    var y = te(f), Ia = y.next();
    return Ia.done ? cb([]) : new e(function (e, f) {
      function Ta(f) {
        return function (y) {
          Va[f] =
            y;
          Xa--;
          0 == Xa && e(Va);
        };
      }

      var Va = [], Xa = 0;
      do Va.push(void 0), Xa++, cb(Ia.value).OJf(Ta(Va.length - 1), f), Ia = y.next(); while (!Ia.done);
    });
  };
  return e;
});
Tf('Array.prototype.fill', function (f) {
  return f ? f : function (e, f, cb) {
    var Ia = this.length || 0;
    0 > f && (f = Math.max(0, Ia + f));
    if (null == cb || cb > Ia) cb = Ia;
    cb = Number(cb);
    0 > cb && (cb = Math.max(0, Ia + cb));
    for (f = Number(f || 0); f < cb; f++) this[f] = e;
    return this;
  };
});

function bi(f, e, Ia) {
  if (null == f) throw new TypeError('The \'this\' value for String.prototype.' + Ia + ' must not be null or undefined');
  if (e instanceof RegExp) throw new TypeError('First argument to String.prototype.' + Ia + ' must not be a regular expression');
  return f + '';
}

Tf('String.prototype.repeat', function (f) {
  return f ? f : function (e) {
    var f = bi(this, null, 'repeat');
    if (0 > e || 1342177279 < e) throw new RangeError('Invalid count value');
    e |= 0;
    for (var cb = ''; e;) if (e & 1 && (cb += f), e >>>= 1) f += f;
    return cb;
  };
});
Tf('Number.isFinite', function (f) {
  return f ? f : function (e) {
    return 'number' !== typeof e ? !1 : !isNaN(e) && Infinity !== e && -Infinity !== e;
  };
});
Tf('Number.isInteger', function (f) {
  return f ? f : function (e) {
    return Number.isFinite(e) ? e === Math.floor(e) : !1;
  };
});
Tf('String.prototype.endsWith', function (f) {
  return f ? f : function (e, f) {
    var Ia = bi(this, e, 'endsWith');
    e += '';
    void 0 === f && (f = Ia.length);
    f = Math.max(0, Math.min(f | 0, Ia.length));
    for (var Xa = e.length; 0 < Xa && 0 < f;) if (Ia[--f] != e[--Xa]) return !1;
    return 0 >= Xa;
  };
});
Tf('String.prototype.padStart', function (f) {
  return f ? f : function (e, f) {
    var Ia = bi(this, null, 'padStart');
    e -= Ia.length;
    f = void 0 !== f ? String(f) : ' ';
    return (0 < e && f ? f.repeat(Math.ceil(e / f.length)).substring(0, e) : '') + Ia;
  };
});

function nm(f, e) {
  re();
  f instanceof String && (f += '');
  var Ia = 0, cb = {
    next: function () {
      if (Ia < f.length) {
        var Xa = Ia++;
        return { value: e(Xa, f[Xa]), done: !1 };
      }
      cb.next = function () {
        return { done: !0, value: void 0 };
      };
      return cb.next();
    }
  };
  cb[Symbol.iterator] = function () {
    return cb;
  };
  return cb;
}

Tf('Array.prototype.values', function (f) {
  return f ? f : function () {
    return nm(this, function (e, f) {
      return f;
    });
  };
});
Tf('Math.sign', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    return 0 === e || isNaN(e) ? e : 0 < e ? 1 : -1;
  };
});
Tf('Array.prototype.keys', function (f) {
  return f ? f : function () {
    return nm(this, function (e) {
      return e;
    });
  };
});

function Km(f, e) {
  return Object.prototype.hasOwnProperty.call(f, e);
}

Tf('WeakMap', function (f) {
  function e(e) {
    this.$nf = (y += Math.random() + 1).toString();
    if (e) {
      e = te(e);
      for (var f; !(f = e.next()).done;) f = f.value, this.set(f[0], f[1]);
    }
  }

  function Ia() {
  }

  function cb(e) {
    Km(e, ib) || vb(e, ib, { value: new Ia });
  }

  function Xa(e) {
    var f = Object[e];
    f && (Object[e] = function (e) {
      if (e instanceof Ia) return e;
      cb(e);
      return f(e);
    });
  }

  if (function () {
    if (!f || !Object.seal) return !1;
    try {
      var e = Object.seal({}), y = Object.seal({}), Ia = new f([[e, 2], [y, 3]]);
      if (2 != Ia.get(e) || 3 != Ia.get(y)) return !1;
      Ia.delete(e);
      Ia.set(y, 4);
      return !Ia.has(e) &&
        4 == Ia.get(y);
    } catch (Ta) {
      return !1;
    }
  }()) return f;
  var ib = '$jscomp_hidden_' + Math.random();
  Xa('freeze');
  Xa('preventExtensions');
  Xa('seal');
  var y = 0;
  e.prototype.set = function (e, f) {
    cb(e);
    if (!Km(e, ib)) throw Error('WeakMap key fail: ' + e);
    e[ib][this.$nf] = f;
    return this;
  };
  e.prototype.get = function (e) {
    return Km(e, ib) ? e[ib][this.$nf] : void 0;
  };
  e.prototype.has = function (e) {
    return Km(e, ib) && Km(e[ib], this.$nf);
  };
  e.prototype.delete = function (e) {
    return Km(e, ib) && Km(e[ib], this.$nf) ? delete e[ib][this.$nf] : !1;
  };
  return e;
});
Tf('Map', function (f) {
  function e() {
    var e = {};
    return e.previous = e.next = e.head = e;
  }

  function Ia(e, f) {
    var y = e.mYc;
    return se(function () {
      if (y) {
        for (; y.head != e.mYc;) y = y.previous;
        for (; y.next != y.head;) return y = y.next, { done: !1, value: f(y) };
        y = null;
      }
      return { done: !0, value: void 0 };
    });
  }

  function cb(e, f) {
    var Ia = f && typeof f;
    'object' == Ia || 'function' == Ia ? ib.has(f) ? Ia = ib.get(f) : (Ia = '' + ++y, ib.set(f, Ia)) : Ia = 'p_' + f;
    var Ta = e.cff[Ia];
    if (Ta && Km(e.cff, Ia)) for (e = 0; e < Ta.length; e++) {
      var Xa = Ta[e];
      if (f !== f && Xa.key !== Xa.key || f === Xa.key) return {
        id: Ia,
        list: Ta, index: e, $Ib: Xa
      };
    }
    return { id: Ia, list: Ta, index: -1, $Ib: void 0 };
  }

  function Xa(f) {
    this.cff = {};
    this.mYc = e();
    this.size = 0;
    if (f) {
      f = te(f);
      for (var y; !(y = f.next()).done;) y = y.value, this.set(y[0], y[1]);
    }
  }

  if (function () {
    if (!f || 'function' != typeof f || !f.prototype.entries || 'function' != typeof Object.seal) return !1;
    try {
      var e = Object.seal({ x: 4 }), y = new f(te([[e, 's']]));
      if ('s' != y.get(e) || 1 != y.size || y.get({ x: 4 }) || y.set({ x: 4 }, 't') != y || 2 != y.size) return !1;
      var Ia = y.entries(), Ta = Ia.next();
      if (Ta.done || Ta.value[0] != e || 's' != Ta.value[1]) return !1;
      Ta = Ia.next();
      return Ta.done || 4 != Ta.value[0].x || 't' != Ta.value[1] || !Ia.next().done ? !1 : !0;
    } catch (yb) {
      return !1;
    }
  }()) return f;
  re();
  var ib = new WeakMap;
  Xa.prototype.set = function (e, f) {
    e = 0 === e ? 0 : e;
    var y = cb(this, e);
    y.list || (y.list = this.cff[y.id] = []);
    y.$Ib ? y.$Ib.value = f : (y.$Ib = {
      next: this.mYc,
      previous: this.mYc.previous,
      head: this.mYc,
      key: e,
      value: f
    }, y.list.push(y.$Ib), this.mYc.previous.next = y.$Ib, this.mYc.previous = y.$Ib, this.size++);
    return this;
  };
  Xa.prototype.delete = function (e) {
    e = cb(this, e);
    return e.$Ib && e.list ? (e.list.splice(e.index,
      1), e.list.length || delete this.cff[e.id], e.$Ib.previous.next = e.$Ib.next, e.$Ib.next.previous = e.$Ib.previous, e.$Ib.head = null, this.size--, !0) : !1;
  };
  Xa.prototype.clear = function () {
    this.cff = {};
    this.mYc = this.mYc.previous = e();
    this.size = 0;
  };
  Xa.prototype.has = function (e) {
    return !!cb(this, e).$Ib;
  };
  Xa.prototype.get = function (e) {
    return (e = cb(this, e).$Ib) && e.value;
  };
  Xa.prototype.entries = function () {
    return Ia(this, function (e) {
      return [e.key, e.value];
    });
  };
  Xa.prototype.keys = function () {
    return Ia(this, function (e) {
      return e.key;
    });
  };
  Xa.prototype.values = function () {
    return Ia(this, function (e) {
      return e.value;
    });
  };
  Xa.prototype.forEach = function (e, f) {
    for (var y = this.entries(), Ta; !(Ta = y.next()).done;) Ta = Ta.value, e.call(f, Ta[1], Ta[0], this);
  };
  Xa.prototype[Symbol.iterator] = Xa.prototype.entries;
  var y = 0;
  return Xa;
});

function Iv(f, e, Ia) {
  f instanceof String && (f = String(f));
  for (var cb = f.length, Xa = 0; Xa < cb; Xa++) {
    var ib = f[Xa];
    if (e.call(Ia, ib, Xa, f)) return { Zp: Xa, iw: ib };
  }
  return { Zp: -1, iw: void 0 };
}

Tf('Array.prototype.find', function (f) {
  return f ? f : function (e, f) {
    return Iv(this, e, f).iw;
  };
});
Tf('String.prototype.startsWith', function (f) {
  return f ? f : function (e, f) {
    var Ia = bi(this, e, 'startsWith');
    e += '';
    var Xa = Ia.length, ib = e.length;
    f = Math.max(0, Math.min(f | 0, Ia.length));
    for (var y = 0; y < ib && f < Xa;) if (Ia[f++] != e[y++]) return !1;
    return y >= ib;
  };
});
Tf('Object.is', function (f) {
  return f ? f : function (e, f) {
    return e === f ? 0 !== e || 1 / e === 1 / f : e !== e && f !== f;
  };
});
Tf('Array.prototype.includes', function (f) {
  return f ? f : function (e, f) {
    var Ia = this;
    Ia instanceof String && (Ia = String(Ia));
    var Xa = Ia.length;
    f = f || 0;
    for (0 > f && (f = Math.max(f + Xa, 0)); f < Xa; f++) {
      var ib = Ia[f];
      if (ib === e || Object.is(ib, e)) return !0;
    }
    return !1;
  };
});
Tf('String.prototype.includes', function (f) {
  return f ? f : function (e, f) {
    return -1 !== bi(this, e, 'includes').indexOf(e, f || 0);
  };
});
Tf('Math.tanh', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (0 === e) return e;
    var f = Math.exp(-2 * Math.abs(e));
    f = (1 - f) / (1 + f);
    return 0 > e ? -f : f;
  };
});
Tf('Math.log1p', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (.25 > e && -.25 < e) {
      for (var f = e, cb = 1, Xa = e, ib = 0, y = 1; ib != Xa;) f *= e, y *= -1, Xa = (ib = Xa) + y * f / ++cb;
      return Xa;
    }
    return Math.log(1 + e);
  };
});
Tf('Math.expm1', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (.25 > e && -.25 < e) {
      for (var f = e, cb = 1, Xa = e, ib = 0; ib != Xa;) f *= e / ++cb, Xa = (ib = Xa) + f;
      return Xa;
    }
    return Math.exp(e) - 1;
  };
});
Tf('Math.trunc', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (isNaN(e) || Infinity === e || -Infinity === e || 0 === e) return e;
    var f = Math.floor(Math.abs(e));
    return 0 > e ? -f : f;
  };
});
Tf('Math.log10', function (f) {
  return f ? f : function (e) {
    return Math.log(e) / Math.LN10;
  };
});
Tf('Math.cosh', function (f) {
  if (f) return f;
  var e = Math.exp;
  return function (f) {
    f = Number(f);
    return (e(f) + e(-f)) / 2;
  };
});
Tf('Math.sinh', function (f) {
  if (f) return f;
  var e = Math.exp;
  return function (f) {
    f = Number(f);
    return 0 === f ? f : (e(f) - e(-f)) / 2;
  };
});
Tf('Math.acosh', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    return Math.log(e + Math.sqrt(e * e - 1));
  };
});
Tf('Math.atanh', function (f) {
  if (f) return f;
  var e = Math.log1p;
  return function (f) {
    f = Number(f);
    return (e(f) - e(-f)) / 2;
  };
});
Tf('Math.asinh', function (f) {
  return f ? f : function (e) {
    e = Number(e);
    if (0 === e) return e;
    var f = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
    return 0 > e ? -f : f;
  };
});
Tf('Array.prototype.findIndex', function (f) {
  return f ? f : function (e, f) {
    return Iv(this, e, f).Zp;
  };
});

(function (f) {
  var e = {
    userAgent: '',
    aI: !1,
    PFa: !1,
    f2a: !1,
    sob: !1,
    qSa: !1,
    Glb: !1,
    CCd: !1,
    GBa: !1,
    X1b: !1,
    RCd: !1,
    MYc: !1,
    rSa: !1,
    tCd: !1,
    d2a: !1,
    Qx: !1,
    SRc: !1,
    Xm: 1,
    vVd: !1,
    rGb: !1,
    MHc: !1,
    PCd: !1,
    Vud: 70,
    EHc: 13
  };
  e.userAgent = navigator.userAgent.toLowerCase();
  e.aI = -1 < e.userAgent.indexOf('msie') || -1 < e.userAgent.indexOf('trident') || -1 < e.userAgent.indexOf('edge');
  e.FCd = -1 < e.userAgent.indexOf('edge/');
  e.UAg = -1 < e.userAgent.indexOf('msie9') || -1 < e.userAgent.indexOf('msie 9');
  e.TAg = -1 < e.userAgent.indexOf('msie10') || -1 < e.userAgent.indexOf('msie 10');
  e.PFa = -1 < e.userAgent.indexOf('mac');
  e.GBa = !e.aI && -1 < e.userAgent.indexOf('chrome');
  if (e.GBa) {
    var Ia = e.userAgent.match(/chrom(e|ium)\/([0-9]+)\./);
    Ia && Ia[2] && (e.Vud = parseInt(Ia[2], 10));
  }
  e.rSa = !e.aI && !e.GBa && -1 < e.userAgent.indexOf('safari');
  e.f2a = e.rSa && e.PFa;
  e.sob = -1 < e.userAgent.indexOf('ipad') || -1 < e.userAgent.indexOf('iphone') || -1 < e.userAgent.indexOf('ipod');
  if (e.sob) {
    Ia = e.EHc;
    try {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var cb = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        Ia = parseInt(cb[1],
          10);
      }
    } catch (Xa) {
    }
    e.EHc = Ia;
  }
  e.qSa = -1 < e.userAgent.indexOf('android');
  e.Glb = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent || navigator.vendor || f.opera);
  e.CCd = -1 < e.userAgent.indexOf('gecko/');
  e.X1b = !!f.opera || -1 < e.userAgent.indexOf('opr/');
  e.RCd = !!f.opera;
  e.MYc = !e.aI && -1 <
    e.userAgent.indexOf('webkit');
  e.tCd = -1 < e.userAgent.indexOf('arm');
  e.d2a = !e.aI && -1 < e.userAgent.indexOf('firefox');
  e.SRc = -1 < e.userAgent.indexOf(' linux ');
  e.vVd = e.SRc && -1 < e.userAgent.indexOf('vivaldi');
  e.rGb = -1 < e.userAgent.indexOf('sailfish');
  e.MHc = -1 < e.userAgent.indexOf('emulatedevicepixelratio');
  e.PCd = -1 < e.userAgent.indexOf('needemulateupload');
  e.zoom = 1;
  e.Tud = function () {
    if (e.rGb && e.MHc) {
      var Ia = 1;
      540 >= screen.width ? Ia = 1.5 : 540 < screen.width && 768 >= screen.width ? Ia = 2 : 768 < screen.width && (Ia = 3);
      e.Qx = 1.9 <= Ia;
      e.Xm = Ia;
      f.devicePixelRatio = Ia;
    } else e.qSa ? (e.Qx = 1.9 <= f.devicePixelRatio, e.Xm = f.devicePixelRatio) : (e.zoom = 1, e.Qx = !1, e.Xm = 1, e.GBa && !e.RCd && !e.Glb && document && document.firstElementChild && document.body ? (.1 < f.devicePixelRatio && (1.99 > f.devicePixelRatio ? e.zoom = f.devicePixelRatio / 1 : (e.zoom = f.devicePixelRatio / 2, e.Qx = !0)), Ia = document.firstElementChild.style, e.d2a ? .1 < f.devicePixelRatio ? (Ia.transformOrigin = '0 0', Ia.transform = 'scale(' + 1 / e.zoom + ')', Ia.width = 100 * e.zoom + '%', Ia.height = 100 * e.zoom + '%') : (Ia.transformOrigin =
      '0 0', Ia.transform = 'scale(1)', Ia.width = '100%', Ia.height = '100%') : Ia.zoom = .1 < f.devicePixelRatio ? 1 / e.zoom : 'normal', e.Qx && (e.Xm = 2)) : (e.Qx = .01 > Math.abs(2 - f.devicePixelRatio / e.zoom), e.Qx && (e.Xm = 2), e.Glb && (e.Qx = 1.9 <= f.devicePixelRatio, e.Xm = f.devicePixelRatio)));
  };
  e.Tud();
  e.pu = function (f, Ia) {
    return !0 === Ia ? f * e.Xm + .5 >> 0 : f / e.Xm + .5 >> 0;
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.Se = e;
})(window);
'use strict';
var Xw = window, Yw = String.fromCharCode(5), Zw = {
    gld: 0,
    YHb: 513,
    K$b: 2305,
    OOc: 2051,
    ZTc: 65,
    N4c: 66,
    Dcd: 67,
    qed: 68,
    t5a: 69,
    ibd: 71,
    b6c: 72,
    y6c: 73,
    mbd: 74,
    O4c: 75,
    R4c: 76,
    Q4c: 77,
    B6c: 78,
    Kcd: 79,
    P4c: 4097,
    BNd: 8193,
    JSON: 2056,
    SVc: 257,
    Dnd: 258,
    Ccd: 259,
    cVa: 260,
    End: 261,
    Hnd: 262,
    Gnd: 263,
    A6c: 264,
    Jcd: 265,
    Fnd: 4098,
    YUc: 129,
    pdd: 130,
    Bcd: 131,
    ndd: 132,
    qdd: 133,
    mdd: 134,
    ldd: 135,
    kdd: 136,
    z6c: 137,
    Icd: 138
  }, $w = {
    Lk: { JU: -1, Vo: 0 }, pg: {
      oEe: 3,
      Bhe: 2,
      cje: 1,
      JZ: 0,
      QN: -1,
      i4c: -2,
      S5c: -4,
      wLe: -5,
      Database: -6,
      Pje: -7,
      G6c: -8,
      yld: -9,
      xld: -10,
      iSb: -11,
      wte: -12,
      cZa: -13,
      qZd: -14,
      Dbd: -16,
      QRb: -17,
      iqb: -18,
      Tec: -19,
      ncb: -20,
      Jic: -21,
      Lld: -22,
      Wcc: -23,
      ajc: -24,
      e6c: -25,
      Hjd: -30,
      Gjd: -31,
      Ijd: -32,
      gPd: -35,
      ZOb: -40,
      I_d: -41,
      mZd: -45,
      DEb: -50,
      TUa: -51,
      Tbe: -52,
      hYd: -53,
      LUc: -54,
      F_d: -55,
      eUc: -56,
      BZd: -57,
      T_d: -64,
      Cdd: -65,
      VNd: -66,
      k$b: -72,
      u2c: -71,
      ojc: -80,
      t2c: -81,
      QIa: -82,
      bMb: -83,
      h4c: -84,
      Mld: -100,
      m7b: -101,
      qoc: -102,
      X_d: -110,
      Nlc: -120,
      Olc: -121,
      zhd: -122,
      IZd: -299,
      s7c: -300,
      Egc: -301,
      KZd: -302,
      JZd: -303,
      iUc: -304,
      s6b: -305,
      rke: -306,
      jOd: -307,
      hUc: -308,
      LZd: -309,
      COd: -310,
      $Oc: -311,
      f7a: -312,
      aLa: -331,
      bLa: -332,
      R_d: 500,
      Z4c: -600,
      Q6a: -450,
      dPc: -451,
      vse: -452,
      L_d: -601,
      LYd: -700,
      wld: -751,
      uld: -752,
      vld: -753,
      jZd: -800,
      kZd: -801
    }
  }, LA = {
    ORa: 0,
    lH: 1,
    d7a: 2,
    Wva: 3,
    FH: 4,
    MK: 5,
    Rfc: 6,
    Kab: 7,
    uda: 8,
    cOc: 9,
    lFb: 11,
    abd: 12,
    ZOb: 13,
    sZd: 14,
    RPd: 15,
    aLa: 16,
    bLa: 17,
    CHf: 18
  }, MA = { cVa: 0, t5a: 1, sMb: 2 }, NA = { kf: 0, WUc: 1, Ucd: 2, Nte: 3, Cub: 255 }, OA = { FEd: 1, nzd: 2, oYc: 3 },
  $B = { tP: 0, Gs: 1 },
  fC = { kf: -1, Nmb: 0, Number: 1, Y6b: 2, aHb: 3, skb: 4, Date: 5, sda: 6, fh: 7, Dja: 8, Text: 9, Usa: 10 },
  gC = { lYd: 0, s0d: 1, kYd: 2, jEe: 3 },
  jC = { Ua: 0, Table: 1, Image: 2, Hk: 3, Ri: 4, $Pd: 5, uI: 6, Slide: 7, Vn: 8, Math: 9, ejc: 10, OUf: 11 },
  kC = { kf: 0, Yfc: 1, sx: 2 }, lC = { hs: 0, Iz: 1, nya: 2 }, NC = { hs: 0, nya: 1 },
  QC = { hs: 0, B8a: 1, vertical: 2, Xxa: 3 },
  RC = { hs: 0, left: 1, top: 2, right: 3, bottom: 4, k2a: 5, z3a: 6, af: 7, Yjb: 8 },
  SC = { hs: 0, Xa: 1, h_a: 2, YX: 3, Zxa: 4, HFa: 5, ie: 6, tya: 7, r: 8, t: 9 },
  TC = { hs: 0, Qhb: 1, rJc: 2, SIc: 3 }, UC = {
    X7: 0,
    Fia: 1,
    Gia: 2,
    iea: 3,
    jea: 4,
    goa: 5,
    Y7: 6,
    k8: 7,
    vea: 8,
    xoa: 9,
    aQa: 10,
    bQa: 11,
    uhb: 12,
    j8: 13,
    Gaa: 14,
    Aea: 15,
    mZ: 16,
    D0: 17,
    f8: 18,
    nZ: 19,
    E0: 20,
    g8: 21,
    cea: 22,
    dea: 23,
    eoa: 24,
    Caa: 25,
    L6: 26,
    H0: 27,
    gDb: 28,
    x4b: 29,
    y4b: 30,
    z4b: 31,
    hDb: 32,
    kjb: 33,
    y5b: 34,
    z5b: 35,
    zVb: 36,
    AVb: 37,
    JMd: 38
  }, ZC = {
    eu: 0,
    fixed: 1
  }, $C = { hs: 0, WKb: 1, VNb: 2, UNb: 3, WNb: 4, XOb: 5, SRb: 6, TRb: 7, VRb: 8, Y1c: 9, URb: 10 },
  hD = { q1: 0, LDa: 1, vs: 2, xB: 3 }, iD = { o1: 0, p1: 1, Ix: 2, wO: 3 },
  nD = { eu: 0, maxValue: 1, value: 2, minValue: 3 }, oD = { eu: 0, TIc: 1 }, pD = { Fwb: 0, hOa: 1 },
  qD = { eu: 0, date: 1, text: 2, Mg: 3, val: 4 }, rD = { sx: 0, Qc: 1, Text: 2 },
  sD = { Ok: 0, mE: 1, Ba: 2, rD: 3, Ra: 4 }, tD = { Ta: 0, Ok: 1, Yq: 2, mE: 3, rD: 4, Oa: 5 },
  uD = { sx: 0, Qc: 1, Text: 2 }, vD = { bw: 0, Sq: 1, spa: 2, b5: 3, sx: 4, Lpa: 5, Qc: 6, j5: 7 },
  wD = { a9a: 0, spa: 1, qc: 2, sx: 3, Lpa: 4, Qc: 5, Ua: 6, ecb: 7 }, xD = {
    kf: 0, su: 1, BWa: 2, P4a: 3, SVa: 4, S4a: 5, R4a: 6, YMa: 7, b5a: 8, r5a: 9,
    nXa: 10, c5a: 11, YLa: 12, XMa: 13
  }, yD = { Uta: 0, f5a: 1 }, zD = { Ana: 0, b2b: 1, T8d: 2 }, AD = { H1c: 0, y8: 1, Lea: 2, VQ: 3, dva: 4 },
  BD = { YKa: 0, hv: 1, UC: 2, nC: 3, JK: 4, EJ: 5, qia: 6 }, CD = { lTa: 1, ZMb: 2 }, DD = { tQb: 1, Onc: 2 },
  FD = { wlc: 0, uQb: 1 }, GD = { Ta: 0, Ok: 1, f$a: 2, jab: 3, Oa: 4 }, HD = { e3b: 1, ci: 3, tDf: 4 },
  ID = { hbb: 1, Cpb: 2, dPb: 3 }, JD = { Xje: 0, hbb: 1, K0d: 2 },
  LD = { kf: 0, v4: 1, Jfc: 2, Tjc: 3, Enc: 4, foc: 5 },
  MD = { FBf: 0, EBf: 1, DBf: 2, Gqf: 3, Fqf: 4, Eqf: 5, ipf: 6, hpf: 7, gpf: 8 }, ND = { kab: 0, VMa: 1, X8a: 2 },
  OD = { L6b: 0, Vhc: 1, dkc: 2 },
  PD = { Oab: 1, ika: 2, jna: 3, Vta: 4, wed: 5, ued: 6, xed: 7, ikc: 8, hkc: 9, tve: 10 },
  QD = { Tmb: 1, b7a: 2, ALa: 3, OWa: 4, l_d: 5, m_d: 6, j_d: 7, k_d: 8 },
  RD = { Hmb: 1, Mqb: 2, ARa: 3, nCa: 4, oZd: 5 }, SD = {
    N$b: 210,
    M$b: 297,
    xPd: yD.Uta,
    wPd: 17.8,
    yPd: 17.8,
    zPd: 19.1,
    tPd: 19.1,
    tue: 7.62,
    sue: 7.62,
    ZFf: .17,
    $Ff: .17,
    aGf: .17,
    YFf: .17,
    uPd: 0,
    vPd: 0
  }, TD = { YNc: 0, k6c: 1, Selection: 2 },
  UD = { aff: 0, bff: 1, Aff: 2, ppf: 3, qpf: 4, rpf: 5, jLd: 6, DCf: 7, ECf: 8, FCf: 9, GCf: 10 }, ZD = {
    Rna: 0,
    Dja: 1,
    owa: 2,
    Nab: 3,
    isb: 4,
    Qaa: 5,
    Function: 6,
    JKb: 7,
    Z8a: 8,
    TF: 9,
    Ipb: 10,
    POb: 11,
    SNb: 12,
    QU: 13,
    NMb: 14,
    Fue: 15
  }, $D = { Oa: 0, Ta: 1 }, aE = { kf: 0, Bka: 1, Pha: 2, CT: 3, ekc: 4 }, bE = { TF: 1, pnc: 2, Uic: 3, Bab: 4 },
  cE = { kf: -1, Oa: 0, Ta: 1 }, dE = { Oa: 0, Ok: 1, Ta: 2 }, eE = { Ba: 0, Ok: 1, Ra: 2 },
  fE = { Oa: 0, Ok: 1, Ta: 2 }, gE = { Ufa: 0, CT: 1 }, hE = { kf: -1, Oa: 0, Ta: 1 },
  iE = { TF: 0, Ok: 1, yg: 2, sB: 3, Hh: 5, Ra: 7, Ba: 8 }, jE = { o$b: 0, Nhc: 1, F9c: 2, Lbd: 3, kf: 4, hoc: 5 },
  kE = [];
kE[33] = 19;
kE[34] = 1;
kE[35] = 1;
kE[36] = 33;
kE[37] = 19;
kE[38] = 1;
kE[39] = 1;
kE[40] = 37;
kE[41] = 19;
kE[42] = 1;
kE[43] = 1;
kE[44] = 19;
kE[45] = 1;
kE[46] = 19;
kE[47] = 1;
kE[58] = 19;
kE[59] = 19;
kE[60] = 1;
kE[61] = 1;
kE[62] = 17;
kE[63] = 19;
kE[64] = 1;
kE[91] = 37;
kE[92] = 1;
kE[93] = 19;
kE[94] = 1;
kE[95] = 1;
kE[96] = 1;
kE[123] = 37;
kE[124] = 1;
kE[125] = 17;
kE[126] = 1;
kE[161] = 1;
kE[162] = 17;
kE[163] = 33;
kE[164] = 1;
kE[165] = 33;
kE[166] = 1;
kE[167] = 1;
kE[168] = 17;
kE[169] = 1;
kE[170] = 1;
kE[171] = 1;
kE[172] = 1;
kE[173] = 1;
kE[174] = 1;
kE[175] = 1;
kE[176] = 17;
kE[177] = 1;
kE[180] = 1;
kE[182] = 1;
kE[183] = 17;
kE[184] = 1;
kE[186] = 1;
kE[187] = 1;
kE[187] = 1;
kE[191] = 1;
kE[8208] = 1;
kE[8209] = 1;
kE[8210] = 1;
kE[8211] = 1;
kE[8212] = 1;
kE[8213] = 17;
kE[8214] = 17;
kE[8215] = 1;
kE[8216] = 33;
kE[8217] = 17;
kE[8218] = 1;
kE[8219] = 1;
kE[8220] = 33;
kE[8221] = 17;
kE[8222] = 1;
kE[8223] = 1;
kE[8224] = 1;
kE[8225] = 1;
kE[8226] = 1;
kE[8227] = 1;
kE[8228] = 1;
kE[8229] = 1;
kE[8230] = 17;
kE[8231] = 1;
kE[8240] = 17;
kE[8241] = 1;
kE[8242] = 17;
kE[8243] = 17;
kE[8244] = 1;
kE[8245] = 1;
kE[8246] = 1;
kE[8247] = 1;
kE[8248] = 1;
kE[8249] = 1;
kE[8250] = 17;
kE[8251] = 1;
kE[8252] = 1;
kE[8253] = 1;
kE[8254] = 1;
kE[8255] = 1;
kE[8256] = 1;
kE[8257] = 1;
kE[8258] = 1;
kE[8259] = 1;
kE[8260] = 1;
kE[8261] = 1;
kE[8262] = 1;
kE[8263] = 1;
kE[8264] = 1;
kE[8265] = 1;
kE[8266] = 1;
kE[8267] = 1;
kE[8268] = 1;
kE[8269] = 1;
kE[8270] = 1;
kE[8271] = 1;
kE[8272] = 1;
kE[8273] = 1;
kE[8274] = 1;
kE[8275] = 1;
kE[8276] = 1;
kE[8277] = 1;
kE[8278] = 1;
kE[8279] = 1;
kE[8280] = 1;
kE[8281] = 1;
kE[8282] = 1;
kE[8283] = 1;
kE[8284] = 1;
kE[8285] = 1;
kE[8286] = 1;
kE[12289] = 17;
kE[12290] = 17;
kE[12291] = 17;
kE[12292] = 1;
kE[12293] = 1;
kE[12294] = 1;
kE[12295] = 1;
kE[12296] = 33;
kE[12297] = 17;
kE[12298] = 33;
kE[12299] = 17;
kE[12300] = 33;
kE[12301] = 17;
kE[12302] = 33;
kE[12303] = 17;
kE[12304] = 33;
kE[12305] = 17;
kE[12306] = 1;
kE[12307] = 1;
kE[12308] = 33;
kE[12309] = 17;
kE[12310] = 33;
kE[12311] = 17;
kE[12312] = 1;
kE[12313] = 1;
kE[12314] = 1;
kE[12315] = 1;
kE[12316] = 1;
kE[12317] = 33;
kE[12318] = 17;
kE[12319] = 1;
kE[65281] = 275;
kE[65282] = 273;
kE[65283] = 257;
kE[65284] = 289;
kE[65285] = 275;
kE[65286] = 257;
kE[65287] = 273;
kE[65288] = 293;
kE[65289] = 275;
kE[65290] = 257;
kE[65291] = 257;
kE[65292] = 275;
kE[65293] = 257;
kE[65294] = 275;
kE[65295] = 257;
kE[65306] = 275;
kE[65307] = 275;
kE[65308] = 257;
kE[65309] = 257;
kE[65310] = 257;
kE[65311] = 275;
kE[65312] = 257;
kE[65339] = 293;
kE[65340] = 257;
kE[65341] = 275;
kE[65342] = 257;
kE[65343] = 257;
kE[65344] = 273;
kE[65371] = 293;
kE[65372] = 273;
kE[65373] = 275;
kE[65374] = 273;
kE[65375] = 257;
kE[65376] = 257;
kE[65377] = 257;
kE[65378] = 257;
kE[65379] = 257;
kE[65380] = 257;
kE[65381] = 257;
kE[65504] = 273;
kE[65505] = 289;
kE[65506] = 257;
kE[65507] = 257;
kE[65508] = 257;
kE[65509] = 289;
kE[65510] = 257;
kE[65512] = 257;
kE[65513] = 257;
kE[65514] = 257;
kE[65515] = 257;
kE[65516] = 257;
kE[65517] = 257;
kE[65518] = 257;
for (var lE = {
  tZc: 0,
  sWd: 1,
  TSd: 2,
  K3d: 3,
  USd: 4,
  SSd: 5,
  Aqf: 6,
  tWd: 7,
  RXd: 8,
  QXd: 9,
  rWd: 10,
  F6a: 11,
  link: 12,
  e3a: 13,
  ypf: 14,
  bKa: 15,
  W_a: 16,
  kJc: 17,
  cDf: 18,
  yff: 19,
  xHc: 20,
  mGg: 21,
  DAg: 22,
  l4: 23,
  mib: 24,
  NMd: 25
}, mE = {
  kf: 0,
  vf: 4097,
  sB: 8194,
  FS: 8195,
  t0: 8196,
  ES: 8197,
  s0: 8198,
  gTa: 8199,
  Kqb: 8200,
  a1c: 4096,
  Acd: 8192
}, nE = { QX: 1, ic: 2, kf: 3 }, oE = { Text: 0, Hh: 1 }, pE = { ERa: 1, DA: 2 }, qE = {
  n0: 0,
  Slide: 1,
  Qc: 2,
  sx: 3
}, rE = { a9: 0, Uda: 1, qfa: 2 }, sE = {
  QN: 0,
  u5: 1,
  r9: 2,
  Npa: 3,
  gka: 4,
  mb: 5,
  Ib: 6,
  Mf: 7,
  Upa: 8,
  Vpa: 9,
  kH: 254,
  Dsb: 255
}, tE = { oXa: 0, rXa: 1, cWa: 2, P_: 3, Sq: 4 }, uE = {
  PIa: 0, fJa: 1,
  RAa: 2, Sza: 3
}, vE = { Ok: 0, mE: 1, Ba: 2, rD: 3, Ra: 4 }, wE = { Ta: 0, Ok: 1, mE: 2, rD: 3, Oa: 4 }, xE = {
  w$b: 0,
  rUc: 1,
  sUc: 2,
  tUc: 3,
  uUc: 4,
  vUc: 5,
  yUc: 6,
  AUc: 7,
  QHb: 8,
  HUc: 9,
  kf: 10,
  oVc: 11,
  LVc: 12,
  MVc: 13
}, CE = {
  kf: 0,
  Pm: 1,
  uN: 2,
  xC: 3,
  BRa: 4,
  aB: 5,
  $ta: 10
}, EE = ['ar', 1, 'bg', 2, 'ca', 3, 'zh-Hans', 4, 'cs', 5, 'da', 6, 'de', 7, 'el', 8, 'en', 9, 'es', 10, 'fi', 11, 'fr', 12, 'he', 13, 'hu', 14, 'is', 15, 'it', 16, 'ja', 17, 'ko', 18, 'nl', 19, 'no', 20, 'pl', 21, 'pt', 22, 'rm', 23, 'ro', 24, 'ru', 25, 'hr', 26, 'sk', 27, 'sq', 28, 'sv', 29, 'th', 30, 'tr', 31, 'ur', 32, 'id', 33, 'uk', 34, 'be', 35, 'sl', 36, 'et',
  37, 'lv', 38, 'lt', 39, 'tg', 40, 'fa', 41, 'vi', 42, 'hy', 43, 'az', 44, 'eu', 45, 'hsb', 46, 'mk', 47, 'tn', 50, 'xh', 52, 'zu', 53, 'af', 54, 'ka', 55, 'fo', 56, 'hi', 57, 'mt', 58, 'se', 59, 'ga', 60, 'ms', 62, 'kk', 63, 'ky', 64, 'sw', 65, 'tk', 66, 'uz', 67, 'tt', 68, 'bn', 69, 'pa', 70, 'gu', 71, 'or', 72, 'ta', 73, 'te', 74, 'kn', 75, 'ml', 76, 'as', 77, 'mr', 78, 'sa', 79, 'mn', 80, 'bo', 81, 'cy', 82, 'km', 83, 'lo', 84, 'gl', 86, 'kok', 87, 'syr', 90, 'si', 91, 'iu', 93, 'am', 94, 'tzm', 95, 'ne', 97, 'fy', 98, 'ps', 99, 'fil', 100, 'dv', 101, 'ha', 104, 'yo', 106, 'quz', 107, 'nso', 108, 'ba', 109, 'lb',
  110, 'kl', 111, 'ig', 112, 'ii', 120, 'arn', 122, 'moh', 124, 'br', 126, 'ug', 128, 'mi', 129, 'oc', 130, 'co', 131, 'gsw', 132, 'sah', 133, 'qut', 134, 'rw', 135, 'wo', 136, 'prs', 140, 'gd', 145, 'ar-SA', 1025, 'bg-BG', 1026, 'ca-ES', 1027, 'zh-TW', 1028, 'cs-CZ', 1029, 'da-DK', 1030, 'de-DE', 1031, 'el-GR', 1032, 'en-US', 1033, 'es-ES_tradnl', 1034, 'fi-FI', 1035, 'fr-FR', 1036, 'he-IL', 1037, 'hu-HU', 1038, 'is-IS', 1039, 'it-IT', 1040, 'ja-JP', 1041, 'ko-KR', 1042, 'nl-NL', 1043, 'nb-NO', 1044, 'pl-PL', 1045, 'pt-BR', 1046, 'rm-CH', 1047, 'ro-RO', 1048, 'ru-RU', 1049, 'hr-HR',
  1050, 'sk-SK', 1051, 'sq-AL', 1052, 'sv-SE', 1053, 'th-TH', 1054, 'tr-TR', 1055, 'ur-PK', 1056, 'id-ID', 1057, 'uk-UA', 1058, 'be-BY', 1059, 'sl-SI', 1060, 'et-EE', 1061, 'lv-LV', 1062, 'lt-LT', 1063, 'tg-Cyrl-TJ', 1064, 'fa-IR', 1065, 'vi-VN', 1066, 'hy-AM', 1067, 'az-Latn-AZ', 1068, 'eu-ES', 1069, 'wen-DE', 1070, 'mk-MK', 1071, 'st-ZA', 1072, 'ts-ZA', 1073, 'tn-ZA', 1074, 'ven-ZA', 1075, 'xh-ZA', 1076, 'zu-ZA', 1077, 'af-ZA', 1078, 'ka-GE', 1079, 'fo-FO', 1080, 'hi-IN', 1081, 'mt-MT', 1082, 'se-NO', 1083, 'ms-MY', 1086, 'kk-KZ', 1087, 'ky-KG', 1088, 'sw-KE', 1089, 'tk-TM',
  1090, 'uz-Latn-UZ', 1091, 'tt-RU', 1092, 'bn-IN', 1093, 'pa-IN', 1094, 'gu-IN', 1095, 'or-IN', 1096, 'ta-IN', 1097, 'te-IN', 1098, 'kn-IN', 1099, 'ml-IN', 1100, 'as-IN', 1101, 'mr-IN', 1102, 'sa-IN', 1103, 'mn-MN', 1104, 'bo-CN', 1105, 'cy-GB', 1106, 'km-KH', 1107, 'lo-LA', 1108, 'my-MM', 1109, 'gl-ES', 1110, 'kok-IN', 1111, 'mni', 1112, 'sd-IN', 1113, 'syr-SY', 1114, 'si-LK', 1115, 'chr-US', 1116, 'iu-Cans-CA', 1117, 'am-ET', 1118, 'tmz', 1119, 'ne-NP', 1121, 'fy-NL', 1122, 'ps-AF', 1123, 'fil-PH', 1124, 'dv-MV', 1125, 'bin-NG', 1126, 'fuv-NG', 1127, 'ha-Latn-NG', 1128,
  'ibb-NG', 1129, 'yo-NG', 1130, 'quz-BO', 1131, 'nso-ZA', 1132, 'ba-RU', 1133, 'lb-LU', 1134, 'kl-GL', 1135, 'ig-NG', 1136, 'kr-NG', 1137, 'gaz-ET', 1138, 'ti-ER', 1139, 'gn-PY', 1140, 'haw-US', 1141, 'so-SO', 1143, 'ii-CN', 1144, 'pap-AN', 1145, 'arn-CL', 1146, 'moh-CA', 1148, 'br-FR', 1150, 'ug-CN', 1152, 'mi-NZ', 1153, 'oc-FR', 1154, 'co-FR', 1155, 'gsw-FR', 1156, 'sah-RU', 1157, 'qut-GT', 1158, 'rw-RW', 1159, 'wo-SN', 1160, 'prs-AF', 1164, 'plt-MG', 1165, 'gd-GB', 1169, 'ar-IQ', 2049, 'zh-CN', 2052, 'de-CH', 2055, 'en-GB', 2057, 'es-MX', 2058, 'fr-BE', 2060, 'it-CH',
  2064, 'nl-BE', 2067, 'nn-NO', 2068, 'pt-PT', 2070, 'ro-MO', 2072, 'ru-MO', 2073, 'sr-Latn-CS', 2074, 'sv-FI', 2077, 'ur-IN', 2080, 'az-Cyrl-AZ', 2092, 'dsb-DE', 2094, 'se-SE', 2107, 'ga-IE', 2108, 'ms-BN', 2110, 'uz-Cyrl-UZ', 2115, 'bn-BD', 2117, 'pa-PK', 2118, 'mn-Mong-CN', 2128, 'bo-BT', 2129, 'sd-PK', 2137, 'iu-Latn-CA', 2141, 'tzm-Latn-DZ', 2143, 'ne-IN', 2145, 'quz-EC', 2155, 'ti-ET', 2163, 'ar-EG', 3073, 'zh-HK', 3076, 'de-AT', 3079, 'en-AU', 3081, 'es-ES', 3082, 'fr-CA', 3084, 'sr-Cyrl-CS', 3098, 'se-FI', 3131, 'tmz-MA', 3167, 'quz-PE', 3179, 'ar-LY', 4097, 'zh-SG',
  4100, 'de-LU', 4103, 'en-CA', 4105, 'es-GT', 4106, 'fr-CH', 4108, 'hr-BA', 4122, 'smj-NO', 4155, 'ar-DZ', 5121, 'zh-MO', 5124, 'de-LI', 5127, 'en-NZ', 5129, 'es-CR', 5130, 'fr-LU', 5132, 'bs-Latn-BA', 5146, 'smj-SE', 5179, 'ar-MA', 6145, 'en-IE', 6153, 'es-PA', 6154, 'fr-MC', 6156, 'sr-Latn-BA', 6170, 'sma-NO', 6203, 'ar-TN', 7169, 'en-ZA', 7177, 'es-DO', 7178, 'fr-West', 7180, 'sr-Cyrl-BA', 7194, 'sma-SE', 7227, 'ar-OM', 8193, 'en-JM', 8201, 'es-VE', 8202, 'fr-RE', 8204, 'bs-Cyrl-BA', 8218, 'sms-FI', 8251, 'ar-YE', 9217, 'en-CB', 9225, 'es-CO', 9226, 'fr-CG', 9228, 'sr-Latn-RS',
  9242, 'smn-FI', 9275, 'ar-SY', 10241, 'en-BZ', 10249, 'es-PE', 10250, 'fr-SN', 10252, 'sr-Cyrl-RS', 10266, 'ar-JO', 11265, 'en-TT', 11273, 'es-AR', 11274, 'fr-CM', 11276, 'sr-Latn-ME', 11290, 'ar-LB', 12289, 'en-ZW', 12297, 'es-EC', 12298, 'fr-CI', 12300, 'sr-Cyrl-ME', 12314, 'ar-KW', 13313, 'en-PH', 13321, 'es-CL', 13322, 'fr-ML', 13324, 'ar-AE', 14337, 'en-ID', 14345, 'es-UY', 14346, 'fr-MA', 14348, 'ar-BH', 15361, 'en-HK', 15369, 'es-PY', 15370, 'fr-HT', 15372, 'ar-QA', 16385, 'en-IN', 16393, 'es-BO', 16394, 'en-MY', 17417, 'es-SV', 17418, 'en-SG', 18441, 'es-HN',
  18442, 'es-NI', 19466, 'es-PR', 20490, 'es-US', 21514, 'bs-Cyrl', 25626, 'bs-Latn', 26650, 'sr-Cyrl', 27674, 'sr-Latn', 28698, 'smn', 28731, 'az-Cyrl', 29740, 'sms', 29755, 'zh', 30724, 'nn', 30740, 'bs', 30746, 'az-Latn', 30764, 'sma', 30779, 'uz-Cyrl', 30787, 'mn-Cyrl', 30800, 'iu-Cans', 30813, 'zh-Hant', 31748, 'nb', 31764, 'sr', 31770, 'tg-Cyrl', 31784, 'dsb', 31790, 'smj', 31803, 'uz-Latn', 31811, 'mn-Mong', 31824, 'iu-Latn', 31837, 'tzm-Latn', 31839, 'ha-Latn', 31848], FE = {}, GE = {}, HE = 0, IE = EE.length; HE + 1 < IE; HE += 2) {
  var JE = EE[HE], KE = EE[HE + 1];
  FE[JE] = KE;
  GE[KE] = JE;
}
var LE;
Xw.Asc = Xw.Asc || {};
Xw.Asc.FONT_THUMBNAIL_HEIGHT = 672 / 25.4 >> 0;
Xw.Asc.c_oAscMaxColumnWidth = Xw.Asc.WUb = 255;
Xw.Asc.c_oAscMaxRowHeight = Xw.Asc.stc = 409.5;
Xw.Asc.c_nMaxConversionTime = Xw.Asc.Gtd = 9E5;
Xw.Asc.c_nMaxDownloadTitleLen = Xw.Asc.L$e = 255;
Xw.Asc.c_nVersionNoBase64 = Xw.Asc.NTa = 10;
Xw.Asc.c_dMaxParaRunContentLength = Xw.Asc.n_a = 256;
Xw.Asc.c_rUneditableTypes = Xw.Asc.baf = /^(?:(pdf|djvu|xps))$/;
Xw.Asc.c_oAscFileType = Xw.Asc.Inb = Zw;
Xw.Asc.ROa = FE;
Xw.Asc.gyb = GE;
LE = Zw;
LE.UNKNOWN = LE.gld;
LE.PDF = LE.YHb;
LE.PDFA = LE.K$b;
LE.HTML = LE.OOc;
LE.DOCX = LE.ZTc;
LE.DOC = LE.N4c;
LE.ODT = LE.Dcd;
LE.RTF = LE.qed;
LE.TXT = LE.t5a;
LE.MHT = LE.ibd;
LE.EPUB = LE.b6c;
LE.FB2 = LE.y6c;
LE.MOBI = LE.mbd;
LE.DOCM = LE.O4c;
LE.DOTX = LE.R4c;
LE.DOTM = LE.Q4c;
LE.FODT = LE.B6c;
LE.OTT = LE.Kcd;
LE.DOCY = LE.P4c;
LE.JSON = LE.JSON;
LE.XLSX = LE.SVc;
LE.XLS = LE.Dnd;
LE.ODS = LE.Ccd;
LE.CSV = LE.cVa;
LE.XLSM = LE.End;
LE.XLTX = LE.Hnd;
LE.XLTM = LE.Gnd;
LE.FODS = LE.A6c;
LE.OTS = LE.Jcd;
LE.XLSY = LE.Fnd;
LE.PPTX = LE.YUc;
LE.PPT = LE.pdd;
LE.ODP = LE.Bcd;
LE.PPSX = LE.ndd;
LE.PPTM = LE.qdd;
LE.PPSM = LE.mdd;
LE.POTX = LE.ldd;
LE.POTM = LE.kdd;
LE.FODP = LE.z6c;
LE.OTP = LE.Icd;
LE = Xw.Asc.c_oAscError = Xw.Asc.Fk = $w;
LE.Level = LE.Lk;
LE.ID = LE.pg;
LE = $w.Lk;
LE.Critical = LE.JU;
LE.NoCritical = LE.Vo;
LE = $w.pg;
LE.ServerSaveComplete = LE.oEe;
LE.ConvertationProgress = LE.Bhe;
LE.DownloadProgress = LE.cje;
LE.No = LE.JZ;
LE.Unknown = LE.QN;
LE.ConvertationTimeout = LE.i4c;
LE.DownloadError = LE.S5c;
LE.UnexpectedGuid = LE.wLe;
LE.Database = LE.Database;
LE.FileRequest = LE.Pje;
LE.FileVKey = LE.G6c;
LE.UplImageSize = LE.yld;
LE.UplImageExt = LE.xld;
LE.UplImageFileCount = LE.iSb;
LE.NoSupportClipdoard = LE.wte;
LE.UplImageUrl = LE.cZa;
LE.DirectUrl = LE.qZd;
LE.MaxDataPointsError = LE.Dbd;
LE.StockChartError = LE.QRb;
LE.CoAuthoringDisconnect = LE.iqb;
LE.ConvertationPassword = LE.Tec;
LE.VKeyEncrypt = LE.ncb;
LE.KeyExpire = LE.Jic;
LE.UserCountExceed = LE.Lld;
LE.AccessDeny = LE.Wcc;
LE.LoadingScriptError = LE.ajc;
LE.EditingError = LE.e6c;
LE.SplitCellMaxRows = LE.Hjd;
LE.SplitCellMaxCols = LE.Gjd;
LE.SplitCellRowsDivider = LE.Ijd;
LE.MobileUnexpectedCharCount = LE.gPd;
LE.MailMergeLoadFile = LE.ZOb;
LE.MailMergeSaveFile = LE.I_d;
LE.DataValidate = LE.mZd;
LE.AutoFilterDataRangeError = LE.DEb;
LE.AutoFilterChangeFormatTableError = LE.TUa;
LE.AutoFilterChangeError = LE.Tbe;
LE.AutoFilterMoveToHiddenRangeError = LE.hYd;
LE.LockedAllError = LE.LUc;
LE.LockedWorksheetRename = LE.F_d;
LE.FTChangeTableRangeError = LE.eUc;
LE.FTRangeIncludedOtherTables = LE.BZd;
LE.PasteMaxRangeError = LE.T_d;
LE.PastInMergeAreaError = LE.Cdd;
LE.CopyMultiselectAreaError = LE.VNd;
LE.DataRangeError = LE.k$b;
LE.CannotMoveRange = LE.u2c;
LE.MaxDataSeriesError = LE.ojc;
LE.CannotFillRange = LE.t2c;
LE.ConvertationOpenError = LE.QIa;
LE.ConvertationSaveError = LE.bMb;
LE.ConvertationOpenLimitError = LE.h4c;
LE.UserDrop = LE.Mld;
LE.Warning = LE.m7b;
LE.UpdateVersion = LE.qoc;
LE.PrintMaxPagesCount = LE.X_d;
LE.SessionAbsolute = LE.Nlc;
LE.SessionIdle = LE.Olc;
LE.SessionToken = LE.zhd;
LE.FrmlMaxTextLength = LE.IZd;
LE.FrmlWrongCountParentheses = LE.s7c;
LE.FrmlWrongOperator = LE.Egc;
LE.FrmlWrongMaxArgument = LE.KZd;
LE.FrmlWrongCountArgument = LE.JZd;
LE.FrmlWrongFunctionName = LE.iUc;
LE.FrmlAnotherParsingError = LE.s6b;
LE.FrmlWrongArgumentRange = LE.rke;
LE.FrmlOperandExpected = LE.jOd;
LE.FrmlParenthesesCorrectCount = LE.hUc;
LE.FrmlWrongReferences = LE.LZd;
LE.InvalidReferenceOrName = LE.COd;
LE.LockCreateDefName = LE.$Oc;
LE.LockedCellPivot = LE.f7a;
LE.ForceSaveButton = LE.aLa;
LE.ForceSaveTimeout = LE.bLa;
LE.CannotChangeFormulaArray = LE.Q6a;
LE.MultiCellsInTablesFormulaArray = LE.dPc;
LE.MailToClientMissing = LE.vse;
LE.OpenWarning = LE.R_d;
LE.DataEncrypted = LE.Z4c;
LE.NoDataToParse = LE.L_d;
LE.CannotUngroupError = LE.LYd;
LE.UplDocumentSize = LE.wld;
LE.UplDocumentExt = LE.uld;
LE.UplDocumentFileCount = LE.vld;
LE.CustomSortMoreOneSelectedError = LE.jZd;
LE.CustomSortNotOriginalSelectError = LE.kZd;
LE = Xw.Asc.c_oAscAsyncAction = Xw.Asc.OH = LA;
LE.Open = LE.ORa;
LE.Save = LE.lH;
LE.LoadDocumentFonts = LE.d7a;
LE.LoadDocumentImages = LE.Wva;
LE.LoadFont = LE.FH;
LE.LoadImage = LE.MK;
LE.DownloadAs = LE.Rfc;
LE.Print = LE.Kab;
LE.UploadImage = LE.uda;
LE.ApplyChanges = LE.cOc;
LE.SlowOperation = LE.lFb;
LE.LoadTheme = LE.abd;
LE.MailMergeLoadFile = LE.ZOb;
LE.DownloadMerge = LE.sZd;
LE.SendMailMerge = LE.RPd;
LE.ForceSaveButton = LE.aLa;
LE.ForceSaveTimeout = LE.bLa;
LE = Xw.Asc.c_oAscAdvancedOptionsID = Xw.Asc.OUb = MA;
LE.CSV = LE.cVa;
LE.TXT = LE.t5a;
LE.DRM = LE.sMb;
LE = Xw.Asc.c_oAscFontRenderingModeType = Xw.Asc.J2d = OA;
LE.noHinting = LE.FEd;
LE.hinting = LE.nzd;
LE.hintingAndSubpixeling = LE.oYc;
LE = Xw.Asc.c_oAscAsyncActionType = Xw.Asc.vE = $B;
LE.Information = LE.tP;
LE.BlockInteraction = LE.Gs;
LE = Xw.Asc.c_oAscNumFormatType = Xw.Asc.aW = fC;
LE.None = LE.kf;
LE.General = LE.Nmb;
LE.Number = LE.Number;
LE.Scientific = LE.Y6b;
LE.Accounting = LE.aHb;
LE.Currency = LE.skb;
LE.Date = LE.Date;
LE.Time = LE.sda;
LE.Percent = LE.fh;
LE.Fraction = LE.Dja;
LE.Text = LE.Text;
LE.Custom = LE.Usa;
LE = Xw.Asc.c_oAscDrawingLayerType = gC;
LE.BringToFront = LE.lYd;
LE.SendToBack = LE.s0d;
LE.BringForward = LE.kYd;
LE.SendBackward = LE.jEe;
LE = Xw.Asc.c_oAscTypeSelectElement = Xw.Asc.IFb = jC;
LE.Paragraph = LE.Ua;
LE.Table = LE.Table;
LE.Image = LE.Image;
LE.Header = LE.Hk;
LE.Hyperlink = LE.Ri;
LE.SpellCheck = LE.$Pd;
LE.Shape = LE.uI;
LE.Slide = LE.Slide;
LE.Chart = LE.Vn;
LE.Math = LE.Math;
LE.MailMerge = LE.ejc;
Xw.Asc.linerule_AtLeast = Xw.Asc.vH = 0;
Xw.Asc.linerule_Auto = Xw.Asc.rC = 1;
Xw.Asc.linerule_Exact = Xw.Asc.fN = 2;
Xw.Asc.c_oAscShdClear = Xw.Asc.rna = 0;
Xw.Asc.c_oAscShdNil = Xw.Asc.FP = 1;
LE = Xw.Asc.c_oAscDropCap = Xw.Asc.SUb = kC;
LE.None = LE.kf;
LE.Drop = LE.Yfc;
LE.Margin = LE.sx;
LE = Xw.Asc.c_oAscChartTitleShowSettings = Xw.Asc.QUb = lC;
LE.none = LE.hs;
LE.overlay = LE.Iz;
LE.noOverlay = LE.nya;
LE = Xw.Asc.c_oAscChartHorAxisLabelShowSettings = Xw.Asc.Jtd = NC;
LE.none = LE.hs;
LE.noOverlay = LE.nya;
LE = Xw.Asc.c_oAscChartVertAxisLabelShowSettings = Xw.Asc.Ktd = QC;
LE.none = LE.hs;
LE.rotated = LE.B8a;
LE.vertical = LE.vertical;
LE.horizontal = LE.Xxa;
LE = Xw.Asc.c_oAscChartLegendShowSettings = Xw.Asc.I5 = RC;
LE.none = LE.hs;
LE.left = LE.left;
LE.top = LE.top;
LE.right = LE.right;
LE.bottom = LE.bottom;
LE.leftOverlay = LE.k2a;
LE.rightOverlay = LE.z3a;
LE.layout = LE.af;
LE.topRight = LE.Yjb;
LE = Xw.Asc.c_oAscChartDataLabelsPos = Xw.Asc.Iwb = SC;
LE.none = LE.hs;
LE.b = LE.Xa;
LE.bestFit = LE.h_a;
LE.ctr = LE.YX;
LE.inBase = LE.Zxa;
LE.inEnd = LE.HFa;
LE.l = LE.ie;
LE.outEnd = LE.tya;
LE.r = LE.r;
LE.t = LE.t;
LE = Xw.Asc.c_oAscGridLinesSettings = Xw.Asc.TUb = TC;
LE.none = LE.hs;
LE.major = LE.Qhb;
LE.minor = LE.rJc;
LE.majorMinor = LE.SIc;
LE = Xw.Asc.c_oAscChartTypeSettings = Xw.Asc.Mk = UC;
LE.barNormal = LE.X7;
LE.barStacked = LE.Fia;
LE.barStackedPer = LE.Gia;
LE.barNormal3d = LE.iea;
LE.barStacked3d = LE.jea;
LE.barStackedPer3d = LE.goa;
LE.barNormal3dPerspective = LE.Y7;
LE.lineNormal = LE.k8;
LE.lineStacked = LE.vea;
LE.lineStackedPer = LE.xoa;
LE.lineNormalMarker = LE.aQa;
LE.lineStackedMarker = LE.bQa;
LE.lineStackedPerMarker = LE.uhb;
LE.line3d = LE.j8;
LE.pie = LE.Gaa;
LE.pie3d = LE.Aea;
LE.hBarNormal = LE.mZ;
LE.hBarStacked = LE.D0;
LE.hBarStackedPer = LE.f8;
LE.hBarNormal3d = LE.nZ;
LE.hBarStacked3d = LE.E0;
LE.hBarStackedPer3d = LE.g8;
LE.areaNormal = LE.cea;
LE.areaStacked = LE.dea;
LE.areaStackedPer = LE.eoa;
LE.doughnut = LE.Caa;
LE.stock = LE.L6;
LE.scatter = LE.H0;
LE.scatterLine = LE.gDb;
LE.scatterLineMarker = LE.x4b;
LE.scatterMarker = LE.y4b;
LE.scatterNone = LE.z4b;
LE.scatterSmooth = LE.hDb;
LE.scatterSmoothMarker = LE.kjb;
LE.unknown = LE.JMd;
LE = Xw.Asc.c_oAscValAxisRule = Xw.Asc.Kdb = ZC;
LE.auto = LE.eu;
LE.fixed = LE.fixed;
LE = Xw.Asc.c_oAscValAxUnits = Xw.Asc.Lwb = $C;
LE.BILLIONS = LE.WKb;
LE.HUNDRED_MILLIONS = LE.VNb;
LE.HUNDREDS = LE.UNb;
LE.HUNDRED_THOUSANDS = LE.WNb;
LE.MILLIONS = LE.XOb;
LE.TEN_MILLIONS = LE.SRb;
LE.TEN_THOUSANDS = LE.TRb;
LE.TRILLIONS = LE.VRb;
LE.CUSTOM = LE.Y1c;
LE.THOUSANDS = LE.URb;
LE = Xw.Asc.c_oAscTickMark = Xw.Asc.Tba = hD;
LE.TICK_MARK_CROSS = LE.q1;
LE.TICK_MARK_IN = LE.LDa;
LE.TICK_MARK_NONE = LE.vs;
LE.TICK_MARK_OUT = LE.xB;
LE = Xw.Asc.c_oAscTickLabelsPos = Xw.Asc.zEa = iD;
LE.TICK_LABEL_POSITION_HIGH = LE.o1;
LE.TICK_LABEL_POSITION_LOW = LE.p1;
LE.TICK_LABEL_POSITION_NEXT_TO = LE.Ix;
LE.TICK_LABEL_POSITION_NONE = LE.wO;
LE = Xw.Asc.c_oAscCrossesRule = Xw.Asc.o_a = nD;
LE.auto = LE.eu;
LE.maxValue = LE.maxValue;
LE.value = LE.value;
LE.minValue = LE.minValue;
LE = Xw.Asc.c_oAscBetweenLabelsRule = Xw.Asc.PUb = oD;
LE.auto = LE.eu;
LE.manual = LE.TIc;
LE = Xw.Asc.c_oAscLabelsPosition = Xw.Asc.lOa = pD;
LE.byDivisions = LE.Fwb;
LE.betweenDivisions = LE.hOa;
LE = Xw.Asc.c_oAscAxisType = Xw.Asc.Itd = qD;
LE.auto = LE.eu;
LE.date = LE.date;
LE.text = LE.text;
LE.cat = LE.Mg;
LE.val = LE.val;
LE = Xw.Asc.c_oAscHAnchor = Xw.Asc.cua = rD;
LE.Margin = LE.sx;
LE.Page = LE.Qc;
LE.Text = LE.Text;
LE = Xw.Asc.c_oAscXAlign = Xw.Asc.Mwb = sD;
LE.Center = LE.Ok;
LE.Inside = LE.mE;
LE.Left = LE.Ba;
LE.Outside = LE.rD;
LE.Right = LE.Ra;
LE = Xw.Asc.c_oAscYAlign = Xw.Asc.Nwb = tD;
LE.Bottom = LE.Ta;
LE.Center = LE.Ok;
LE.Inline = LE.Yq;
LE.Inside = LE.mE;
LE.Outside = LE.rD;
LE.Top = LE.Oa;
LE = Xw.Asc.c_oAscVAnchor = Xw.Asc.dua = uD;
LE.Margin = LE.sx;
LE.Page = LE.Qc;
LE.Text = LE.Text;
LE = Xw.Asc.c_oAscRelativeFromH = Xw.Asc.fZ = vD;
LE.Character = LE.bw;
LE.Column = LE.Sq;
LE.InsideMargin = LE.spa;
LE.LeftMargin = LE.b5;
LE.Margin = LE.sx;
LE.OutsideMargin = LE.Lpa;
LE.Page = LE.Qc;
LE.RightMargin = LE.j5;
LE = Xw.Asc.c_oAscRelativeFromV = Xw.Asc.v0 = wD;
LE.BottomMargin = LE.a9a;
LE.InsideMargin = LE.spa;
LE.Line = LE.qc;
LE.Margin = LE.sx;
LE.OutsideMargin = LE.Lpa;
LE.Page = LE.Qc;
LE.Paragraph = LE.Ua;
LE.TopMargin = LE.ecb;
LE = Xw.Asc.c_oAscBorderStyles = Xw.AscCommon.bua = xD;
LE.None = LE.kf;
LE.Double = LE.su;
LE.Hair = LE.BWa;
LE.DashDotDot = LE.P4a;
LE.DashDot = LE.SVa;
LE.Dotted = LE.S4a;
LE.Dashed = LE.R4a;
LE.Thin = LE.YMa;
LE.MediumDashDotDot = LE.b5a;
LE.SlantDashDot = LE.r5a;
LE.MediumDashDot = LE.nXa;
LE.MediumDashed = LE.c5a;
LE.Medium = LE.YLa;
LE.Thick = LE.XMa;
LE = Xw.Asc.c_oAscPageOrientation = Xw.Asc.Tqa = yD;
LE.PagePortrait = LE.Uta;
LE.PageLandscape = LE.f5a;
LE = Xw.Asc.c_oAscColor = Xw.Asc.faa = AD;
LE.COLOR_TYPE_NONE = LE.H1c;
LE.COLOR_TYPE_SRGB = LE.y8;
LE.COLOR_TYPE_PRST = LE.Lea;
LE.COLOR_TYPE_SCHEME = LE.VQ;
LE.COLOR_TYPE_SYS = LE.dva;
LE = Xw.Asc.c_oAscFill = Xw.Asc.Iy = BD;
LE.FILL_TYPE_NONE = LE.YKa;
LE.FILL_TYPE_BLIP = LE.hv;
LE.FILL_TYPE_NOFILL = LE.UC;
LE.FILL_TYPE_SOLID = LE.nC;
LE.FILL_TYPE_GRAD = LE.JK;
LE.FILL_TYPE_PATT = LE.EJ;
LE.FILL_TYPE_GRP = LE.qia;
LE = Xw.Asc.c_oAscFillGradType = Xw.Asc.Jnb = CD;
LE.GRAD_LINEAR = LE.lTa;
LE.GRAD_PATH = LE.ZMb;
LE = Xw.Asc.c_oAscFillBlipType = Xw.Asc.Mtd = DD;
LE.STRETCH = LE.tQb;
LE.TILE = LE.Onc;
LE = Xw.Asc.c_oAscStrokeType = Xw.Asc.X$e = FD;
LE.STROKE_NONE = LE.wlc;
LE.STROKE_COLOR = LE.uQb;
LE = Xw.Asc.c_oAscVAlign = Xw.Asc.cM = GD;
LE.Bottom = LE.Ta;
LE.Center = LE.Ok;
LE.Dist = LE.f$a;
LE.Just = LE.jab;
LE.Top = LE.Oa;
LE = Xw.Asc.c_oAscVertDrawingText = HD;
LE.normal = LE.e3b;
LE.vert = LE.ci;
LE.vert270 = LE.tDf;
LE = Xw.Asc.c_oAscLineJoinType = ID;
LE.Round = LE.hbb;
LE.Bevel = LE.Cpb;
LE.Miter = LE.dPb;
LE = Xw.Asc.c_oAscLineCapType = JD;
LE.Flat = LE.Xje;
LE.Round = LE.hbb;
LE.Square = LE.K0d;
LE = Xw.Asc.c_oAscLineBeginType = LD;
LE.None = LE.kf;
LE.Arrow = LE.v4;
LE.Diamond = LE.Jfc;
LE.Oval = LE.Tjc;
LE.Stealth = LE.Enc;
LE.Triangle = LE.foc;
LE = Xw.Asc.c_oAscLineBeginSize = MD;
LE.small_small = LE.FBf;
LE.small_mid = LE.EBf;
LE.small_large = LE.DBf;
LE.mid_small = LE.Gqf;
LE.mid_mid = LE.Fqf;
LE.mid_large = LE.Eqf;
LE.large_small = LE.ipf;
LE.large_mid = LE.hpf;
LE.large_large = LE.gpf;
LE = Xw.Asc.c_oAscCellTextDirection = Xw.Asc.Zka = ND;
LE.LRTB = LE.kab;
LE.TBRL = LE.VMa;
LE.BTLR = LE.X8a;
LE = Xw.Asc.c_oAscDocumentUnits = Xw.Asc.GJf = OD;
LE.Millimeter = LE.L6b;
LE.Inch = LE.Vhc;
LE.Point = LE.dkc;
Xw.Asc.c_oAscMaxTooltipLength = Xw.Asc.Rtd = 256;
Xw.Asc.c_oAscMaxCellOrCommentLength = Xw.Asc.Qtd = 32767;
Xw.Asc.c_oAscMaxHeaderFooterLength = Xw.Asc.F3f = 255;
Xw.Asc.c_oAscMaxFilterListLength = Xw.Asc.E3f = 1E4;
LE = Xw.Asc.c_oAscSelectionType = Xw.Asc.qna = PD;
LE.RangeCells = LE.Oab;
LE.RangeCol = LE.ika;
LE.RangeRow = LE.jna;
LE.RangeMax = LE.Vta;
LE.RangeImage = LE.wed;
LE.RangeChart = LE.ued;
LE.RangeShape = LE.xed;
LE.RangeShapeText = LE.ikc;
LE.RangeChartText = LE.hkc;
LE.RangeFrozen = LE.tve;
LE = Xw.Asc.c_oAscInsertOptions = Xw.Asc.Iac = QD;
LE.InsertCellsAndShiftRight = LE.Tmb;
LE.InsertCellsAndShiftDown = LE.b7a;
LE.InsertColumns = LE.ALa;
LE.InsertRows = LE.OWa;
LE.InsertTableRowAbove = LE.l_d;
LE.InsertTableRowBelow = LE.m_d;
LE.InsertTableColLeft = LE.j_d;
LE.InsertTableColRight = LE.k_d;
LE = Xw.Asc.c_oAscDeleteOptions = Xw.Asc.Gac = RD;
LE.DeleteCellsAndShiftLeft = LE.Hmb;
LE.DeleteCellsAndShiftTop = LE.Mqb;
LE.DeleteColumns = LE.ARa;
LE.DeleteRows = LE.nCa;
LE.DeleteTable = LE.oZd;
LE = Xw.Asc.c_oAscPrintType = Xw.Asc.GIb = TD;
LE.ActiveSheets = LE.YNc;
LE.EntireWorkbook = LE.k6c;
LE.Selection = LE.Selection;
LE = Xw.Asc.c_oDashType = Xw.Asc.Y$e = UD;
LE.dash = LE.aff;
LE.dashDot = LE.bff;
LE.dot = LE.Aff;
LE.lgDash = LE.ppf;
LE.lgDashDot = LE.qpf;
LE.lgDashDotDot = LE.rpf;
LE.solid = LE.jLd;
LE.sysDash = LE.DCf;
LE.sysDashDot = LE.ECf;
LE.sysDashDotDot = LE.FCf;
LE.sysDot = LE.GCf;
LE = Xw.Asc.c_oAscMathInterfaceType = Xw.Asc.wE = ZD;
LE.Common = LE.Rna;
LE.Fraction = LE.Dja;
LE.Script = LE.owa;
LE.Radical = LE.Nab;
LE.LargeOperator = LE.isb;
LE.Delimiter = LE.Qaa;
LE.Function = LE.Function;
LE.Accent = LE.JKb;
LE.BorderBox = LE.Z8a;
LE.Bar = LE.TF;
LE.Box = LE.Ipb;
LE.Limit = LE.POb;
LE.GroupChar = LE.SNb;
LE.Matrix = LE.QU;
LE.EqArray = LE.NMb;
LE.Phantom = LE.Fue;
LE = Xw.Asc.c_oAscMathInterfaceBarPos = Xw.Asc.rtc = $D;
LE.Top = $D.Oa;
LE.Bottom = $D.Ta;
LE = Xw.Asc.c_oAscMathInterfaceScript = Xw.Asc.yEa = aE;
LE.None = aE.kf;
LE.Sup = aE.Bka;
LE.Sub = aE.Pha;
LE.SubSup = aE.CT;
LE.PreSubSup = aE.ekc;
LE = Xw.Asc.c_oAscMathInterfaceFraction = Xw.Asc.xEa = bE;
LE.None = bE.TF;
LE.Skewed = bE.pnc;
LE.Linear = bE.Uic;
LE.NoBar = bE.Bab;
LE = Xw.Asc.c_oAscMathInterfaceLimitPos = Xw.Asc.VUb = cE;
LE.None = cE.kf;
LE.Top = cE.Oa;
LE.Bottom = cE.Ta;
LE = Xw.Asc.c_oAscMathInterfaceMatrixMatrixAlign = Xw.Asc.Hdb = dE;
LE.Top = dE.Oa;
LE.Center = dE.Ok;
LE.Bottom = dE.Ta;
LE = Xw.Asc.c_oAscMathInterfaceMatrixColumnAlign = Xw.Asc.Gdb = eE;
LE.Left = eE.Ba;
LE.Center = eE.Ok;
LE.Right = eE.Ra;
LE = Xw.Asc.c_oAscMathInterfaceEqArrayAlign = Xw.Asc.Fdb = fE;
LE.Top = fE.Oa;
LE.Center = fE.Ok;
LE.Bottom = fE.Ta;
LE = Xw.Asc.c_oAscMathInterfaceNaryLimitLocation = Xw.Asc.Sqa = gE;
LE.UndOvr = gE.Ufa;
LE.SubSup = gE.CT;
LE = Xw.Asc.c_oAscMathInterfaceGroupCharPos = Xw.Asc.UUb = hE;
LE.None = hE.kf;
LE.Top = hE.Oa;
LE.Bottom = hE.Ta;
LE = Xw.Asc.c_oAscTabLeader = Xw.Asc.Hia = jE;
LE.None = jE.kf;
LE.Heavy = jE.Nhc;
LE.Dot = jE.o$b;
LE.Hyphen = jE.F9c;
LE.MiddleDot = jE.Lbd;
LE.Underscore = jE.hoc;
LE = Xw.Asc.c_oAscTabType = Xw.Asc.Jdb = iE;
LE.Bar = iE.TF;
LE.Center = iE.Ok;
LE.Clear = iE.yg;
LE.Decimal = iE.sB;
LE.Num = iE.Hh;
LE.Right = iE.Ra;
LE.Left = iE.Ba;
LE = Xw.Asc.c_oAscRestrictionType = Xw.Asc.HIb = NA;
LE.None = NA.kf;
LE.OnlyForms = NA.WUc;
LE.OnlyComments = NA.Ucd;
LE.OnlySignatures = NA.Nte;
LE.View = NA.Cub;
LE = Xw.AscCommon.c_oAscCellAnchorType = Xw.AscCommon.DP = { aSa: 0, lta: 1, fS: 2 };
LE.cellanchorAbsolute = LE.aSa;
LE.cellanchorOneCell = LE.lta;
LE.cellanchorTwoCell = LE.fS;
Xw.AscCommon = Xw.AscCommon || {};
Xw.AscCommon.Bvc = Yw;
Xw.AscCommon.yWb = 'General';
Xw.AscCommon.Eia = !1;
Xw.AscCommon.Hwb = { kf: 0, ORa: 1, lH: 2 };
Xw.AscCommon.bUc = { kf: '', rZd: 'asc_onDownloadUrl', Kab: 'asc_onPrintUrl', ejc: 'asc_onSaveMailMerge' };
Xw.AscCommon.f0 = { Number: 0, String: 1, mia: 2, Error: 3 };
Xw.AscCommon.G2d = { LKf: 478, KKf: 286 };
Xw.AscCommon.glb = { wb: 0, Document: 1 };
Xw.AscCommon.qtc = { Ba: 0, Ok: 1, Ra: 2, Oa: 0, Ta: 2 };
Xw.AscCommon.fR = 0;
Xw.AscCommon.WE = 1;
Xw.AscCommon.IE = 2;
Xw.AscCommon.jGb = 1;
Xw.AscCommon.wbc = 2;
Xw.AscCommon.tHa = .65;
Xw.AscCommon.S5b = .35;
Xw.AscCommon.rEb = -.141;
Xw.AscCommon.ttc = { CMc: 0, Y3a: 1, BMc: 2, DMc: 3, cLd: 4, dLd: 5 };
Xw.AscCommon.utc = { n5b: 0, Mjb: 1, FMc: 2, EMc: 3, eLd: 4, fLd: 5 };
Xw.AscCommon.vtc = { Yq: 0, Bja: 1 };
Xw.AscCommon.N$e = { kf: 0, YMa: 1, YLa: 2, XMa: 3 };
Xw.AscCommon.OTa = { y6b: 1, l7b: 2, v5c: 3 };
Xw.AscCommon.YRa = { n6: 1, k4: 2, tta: 3, wVd: 4, dpf: 5 };
Xw.AscCommon.GFb = zD;
Xw.AscCommon.YUb = { Aue: 0, zue: 1, Sea: 2, Qge: 3 };
Xw.AscCommon.P$e = {
  line: 'Line',
  Hsd: 'Bar',
  Glf: 'HBar',
  bea: 'Area',
  Gaa: 'Pie',
  H0: 'Scatter',
  L6: 'Stock',
  Caa: 'Doughnut'
};
Xw.AscCommon.O$e = { e3b: 'normal', sLd: 'stacked', tLd: 'stackedPer' };
Xw.AscCommon.p_a = { kf: 0, QX: 1, iEe: 2, Ege: 3, F3c: 4, ic: 5 };
Xw.AscCommon.Kwb = { k$c: 0, epe: 1, f6c: 2 };
Xw.AscCommon.oga = { Rna: 0, Ri: 1, Zsa: 2, qf: 3 };
Xw.AscCommon.K2d = SD;
Xw.AscCommon.bVb = { d3: 1, AHb: 2, iZd: 3 };
Xw.AscCommon.PTa = { n$b: 0, ym: 1, Gpa: 2, VVa: 3, l0d: 4, nHb: 5, hOc: 6, nZd: 7, W_d: 8 };
Xw.AscCommon.lea = { L4a: 0, g6b: 1, xZd: 2, k8c: 3, DUc: 4, A0d: 5 };
Xw.AscCommon.Jwb = [[0, 28596, 'ISO-8859-6', 'Arabic (ISO 8859-6)'], [1, 720, 'DOS-720', 'Arabic (OEM 720)'], [2, 1256, 'windows-1256', 'Arabic (Windows)'], [3, 28594, 'ISO-8859-4', 'Baltic (ISO 8859-4)'], [4, 28603, 'ISO-8859-13', 'Baltic (ISO 8859-13)'], [5, 775, 'IBM775', 'Baltic (OEM 775)'], [6, 1257, 'windows-1257', 'Baltic (Windows)'], [7, 28604, 'ISO-8859-14', 'Celtic (ISO 8859-14)'], [8, 28595, 'ISO-8859-5', 'Cyrillic (ISO 8859-5)'], [9, 20866, 'KOI8-R', 'Cyrillic (KOI8-R)'], [10, 21866, 'KOI8-U', 'Cyrillic (KOI8-U)'], [11, 10007, 'x-mac-cyrillic',
  'Cyrillic (Mac)'], [12, 855, 'IBM855', 'Cyrillic (OEM 855)'], [13, 866, 'cp866', 'Cyrillic (OEM 866)'], [14, 1251, 'windows-1251', 'Cyrillic (Windows)'], [15, 852, 'IBM852', 'Central European (OEM 852)'], [16, 1250, 'windows-1250', 'Central European (Windows)'], [17, 950, 'Big5', 'Chinese (Big5 Traditional)'], [18, 936, 'GB2312', 'Central (GB2312 Simplified)'], [19, 28592, 'ISO-8859-2', 'Eastern European (ISO 8859-2)'], [20, 28597, 'ISO-8859-7', 'Greek (ISO 8859-7)'], [21, 737, 'IBM737', 'Greek (OEM 737)'], [22, 869, 'IBM869', 'Greek (OEM 869)'],
  [23, 1253, 'windows-1253', 'Greek (Windows)'], [24, 28598, 'ISO-8859-8', 'Hebrew (ISO 8859-8)'], [25, 862, 'DOS-862', 'Hebrew (OEM 862)'], [26, 1255, 'windows-1255', 'Hebrew (Windows)'], [27, 932, 'Shift_JIS', 'Japanese (Shift-JIS)'], [52, 950, 'EUC-JP', 'Japanese (EUC-JP)'], [28, 949, 'KS_C_5601-1987', 'Korean (Windows)'], [29, 51949, 'EUC-KR', 'Korean (EUC)'], [30, 861, 'IBM861', 'North European (Icelandic OEM 861)'], [31, 865, 'IBM865', 'North European (Nordic OEM 865)'], [32, 874, 'windows-874', 'Thai (TIS-620)'], [33, 28593, 'ISO-8859-3',
    'Turkish (ISO 8859-3)'], [34, 28599, 'ISO-8859-9', 'Turkish (ISO 8859-9)'], [35, 857, 'IBM857', 'Turkish (OEM 857)'], [36, 1254, 'windows-1254', 'Turkish (Windows)'], [37, 28591, 'ISO-8859-1', 'Western European (ISO-8859-1)'], [38, 28605, 'ISO-8859-15', 'Western European (ISO-8859-15)'], [39, 850, 'IBM850', 'Western European (OEM 850)'], [40, 858, 'IBM858', 'Western European (OEM 858)'], [41, 860, 'IBM860', 'Western European (OEM 860 : Portuguese)'], [42, 863, 'IBM863', 'Western European (OEM 863 : French)'], [43, 437, 'IBM437', 'Western European (OEM-US)'],
  [44, 1252, 'windows-1252', 'Western European (Windows)'], [45, 1258, 'windows-1258', 'Vietnamese (Windows)'], [46, 65001, 'UTF-8', 'Unicode (UTF-8)'], [47, 65E3, 'UTF-7', 'Unicode (UTF-7)'], [48, 1200, 'UTF-16LE', 'Unicode (UTF-16)'], [49, 1201, 'UTF-16BE', 'Unicode (UTF-16 Big Endian)'], [50, 12E3, 'UTF-32LE', 'Unicode (UTF-32)'], [51, 12001, 'UTF-32BE', 'Unicode (UTF-32 Big Endian)']];
Xw.AscCommon.C3f = {
  437: 43,
  720: 1,
  737: 21,
  775: 5,
  850: 39,
  852: 15,
  855: 12,
  857: 35,
  858: 40,
  860: 41,
  861: 30,
  862: 25,
  863: 42,
  865: 31,
  866: 13,
  869: 22,
  874: 32,
  932: 27,
  936: 18,
  949: 28,
  950: 17,
  1200: 48,
  1201: 49,
  1250: 16,
  1251: 14,
  1252: 44,
  1253: 23,
  1254: 36,
  1255: 26,
  1256: 2,
  1257: 6,
  1258: 45,
  10007: 11,
  12E3: 50,
  12001: 51,
  20866: 9,
  21866: 10,
  28591: 37,
  28592: 19,
  28593: 33,
  28594: 3,
  28595: 8,
  28596: 0,
  28597: 20,
  28598: 24,
  28599: 34,
  28603: 4,
  28604: 7,
  28605: 38,
  51949: 29,
  65E3: 47,
  65001: 46
};
Xw.AscCommon.H2d = -1;
Xw.AscCommon.RUb = 47;
Xw.AscCommon.EIb = 46;
Xw.AscCommon.Q$e = 48;
Xw.AscCommon.R$e = 49;
Xw.AscCommon.S$e = 50;
Xw.AscCommon.T$e = 51;
Xw.AscCommon.U$e = 8192;
Xw.AscCommon.Bna = 1;
Xw.AscCommon.m4 = 2;
Xw.AscCommon.zob = 3;
Xw.AscCommon.vIc = 4;
Xw.AscCommon.wIc = 5;
Xw.AscCommon.rR = 0;
Xw.AscCommon.LG = 1;
Xw.AscCommon.hJ = 2;
Xw.AscCommon.cla = 3;
Xw.AscCommon.fP = 4;
Xw.AscCommon.Baa = 10;
Xw.AscCommon.K5 = 11;
Xw.AscCommon.sga = 12;
Xw.AscCommon.Lnb = 13;
Xw.AscCommon.mea = 20;
Xw.AscCommon.lVb = 21;
Xw.AscCommon.Zza = 23;
Xw.AscCommon.JQc = 24;
Xw.AscCommon.IQc = 25;
Xw.AscCommon.gBa = 26;
Xw.AscCommon.Pdb = 30;
Xw.AscCommon.n3 = 40;
Xw.AscCommon.Wha = 41;
Xw.AscCommon.Xha = 51;
Xw.AscCommon.aXc = 60;
Xw.AscCommon.v4f = 61;
Xw.AscCommon.$Jf = 62;
Xw.AscCommon.sbf = 64;
Xw.AscCommon.cKf = 65;
Xw.AscCommon.aKf = 66;
Xw.AscCommon.rbf = 67;
Xw.AscCommon.Jtc = 68;
Xw.AscCommon.qbf = 70;
Xw.AscCommon.YJf = 71;
Xw.AscCommon.t4f = 72;
Xw.AscCommon.u4f = 73;
Xw.AscCommon.ZJf = 74;
Xw.AscCommon.bKf = 75;
Xw.AscCommon.uud = 76;
Xw.AscCommon.tud = 1;
Xw.AscCommon.P2d = 2;
Xw.AscCommon.sud = 3;
Xw.AscCommon.fBa = 4;
Xw.AscCommon.Aaa = 5;
Xw.AscCommon.kVb = 6;
Xw.AscCommon.O2d = 7;
Xw.AscCommon.I9 = 1;
Xw.AscCommon.J9 = 2;
Xw.AscCommon.Jmg = 1;
Xw.AscCommon.pue = 16;
Xw.AscCommon.que = 32;
Xw.AscCommon.Kmg = 256;
Xw.AscCommon.mGf = 2;
Xw.AscCommon.nGf = 4;
Xw.AscCommon.X7a = kE;
Xw.AscCommon.wrf = '_offline_';
Xw.AscCommon.ubf = '_chart_';
Xw.AscCommon.align_Right = Xw.AscCommon.zF = 0;
Xw.AscCommon.align_Left = Xw.AscCommon.Gr = 1;
Xw.AscCommon.align_Center = Xw.AscCommon.Dy = 2;
Xw.AscCommon.align_Justify = Xw.AscCommon.CP = 3;
Xw.AscCommon.c_oAscFormatPainterState = zD;
zD.kOff = zD.Ana;
zD.kOn = zD.b2b;
zD.kMultiple = zD.T8d;
LE = Xw.Asc.c_oSpecialPasteProps = Xw.Asc.JF = lE;
LE.paste = LE.tZc;
LE.pasteOnlyFormula = LE.sWd;
LE.formulaNumberFormat = LE.TSd;
LE.formulaAllFormatting = LE.K3d;
LE.formulaWithoutBorders = LE.USd;
LE.formulaColumnWidth = LE.SSd;
LE.mergeConditionalFormating = LE.Aqf;
LE.pasteOnlyValues = LE.tWd;
LE.valueNumberFormat = LE.RXd;
LE.valueAllFormating = LE.QXd;
LE.pasteOnlyFormating = LE.rWd;
LE.transpose = LE.F6a;
LE.link = LE.link;
LE.picture = LE.e3a;
LE.linkedPicture = LE.ypf;
LE.sourceformatting = LE.bKa;
LE.destinationFormatting = LE.W_a;
LE.mergeFormatting = LE.kJc;
LE.uniteList = LE.cDf;
LE.doNotUniteList = LE.yff;
LE.keepTextOnly = LE.l4;
LE.insertAsNestedTable = LE.xHc;
LE.overwriteCells = LE.mib;
LE.useTextImport = LE.NMd;
LE = Xw.Asc.c_oAscNumberingFormat = Xw.Asc.ag = mE;
LE.None = mE.kf;
LE.Bullet = mE.vf;
LE.Decimal = mE.sB;
LE.LowerRoman = mE.FS;
LE.UpperRoman = mE.t0;
LE.LowerLetter = mE.ES;
LE.UpperLetter = mE.s0;
LE.DecimalZero = mE.gTa;
LE.DecimalEnclosedCircle = mE.Kqb;
LE = Xw.Asc.c_oAscNumberingSuff = Xw.Asc.b_ = nE;
LE.Tab = nE.QX;
LE.Space = nE.ic;
LE.None = nE.kf;
LE = Xw.Asc.c_oAscNumberingLvlTextType = Xw.Asc.K7a = oE;
LE.Text = oE.Text;
LE.Num = oE.Hh;
LE = Xw.Asc.c_oAscSdtAppearance = Xw.Asc.Idb = pE;
LE.Frame = pE.ERa;
LE.Hidden = pE.DA;
LE = Xw.Asc.c_oAscObjectsAlignType = Xw.Asc.mOa = qE;
LE.Selected = qE.n0;
LE.Slide = qE.Slide;
LE.Page = qE.Qc;
LE.Margin = qE.sx;
LE = Xw.Asc.c_oAscItemType = Xw.Asc.EI = {
  wb: 0,
  FTc: 1,
  vl: 2,
  STc: 3,
  ut: 4,
  ir: 5,
  $sb: 6,
  s5a: 7,
  JVc: 8,
  QYa: 9,
  k7b: 10,
  RVc: 11,
  ob: 12,
  ECa: 13,
  V6: 14
};
LE.Data = LE.ob;
LE.Default = LE.wb;
LE.Sum = LE.QYa;
LE.CountA = LE.STc;
LE.Avg = LE.FTc;
LE.Max = LE.ut;
LE.Min = LE.ir;
LE.Product = LE.$sb;
LE.Count = LE.vl;
LE.StdDev = LE.s5a;
LE.StdDevP = LE.JVc;
LE.Var = LE.k7b;
LE.VarP = LE.RVc;
LE.Grand = LE.ECa;
LE.Blank = LE.V6;
LE = Xw.Asc.c_oAscRevisionsMove = Xw.Asc.EP = rE;
LE.NoMove = rE.a9;
LE.MoveTo = rE.Uda;
LE.MoveFrom = rE.qfa;
LE = Xw.Asc.c_oAscRevisionsChangeType = Xw.Asc.$ka = sE;
LE.Unknown = sE.QN;
LE.TextAdd = sE.u5;
LE.TextRem = sE.r9;
LE.ParaAdd = sE.Npa;
LE.ParaRem = sE.gka;
LE.TextPr = sE.mb;
LE.ParaPr = sE.Ib;
LE.TablePr = sE.Mf;
LE.RowsAdd = sE.Upa;
LE.RowsRem = sE.Vpa;
LE.MoveMark = sE.kH;
LE = Xw.Asc.c_oAscSectionBreakType = Xw.Asc.q_a = tE;
LE.NextPage = tE.oXa;
LE.OddPage = tE.rXa;
LE.EvenPage = tE.cWa;
LE.Continuous = tE.P_;
LE.Column = tE.Sq;
LE = Xw.Asc.c_oAscSdtLockType = Xw.Asc.HFb = uE;
LE.ContentLocked = uE.PIa;
LE.SdtContentLocked = uE.fJa;
LE.SdtLocked = uE.RAa;
LE.Unlocked = uE.Sza;
LE = Xw.Asc.c_oAscAlignH = Xw.Asc.CQc = vE;
LE.Center = vE.Ok;
LE.Inside = vE.mE;
LE.Left = vE.Ba;
LE.Outside = vE.rD;
LE.Right = vE.Ra;
LE = Xw.Asc.c_oAscAlignV = Xw.Asc.DQc = wE;
LE.Bottom = wE.Ta;
LE.Center = wE.Ok;
LE.Inside = wE.mE;
LE.Outside = wE.rD;
LE.Top = wE.Oa;
LE = Xw.Asc.c_oAscWatermarkType = Xw.Asc.ala = { kf: 0, Text: 1, Image: 2 };
LE.None = LE.kf;
LE.Text = LE.Text;
LE.Image = LE.Image;
LE = Xw.Asc.c_oAscCalendarType = Xw.Asc.F2d = xE;
LE.Gregorian = xE.w$b;
LE.GregorianArabic = xE.rUc;
LE.GregorianMeFrench = xE.sUc;
LE.GregorianUs = xE.tUc;
LE.GregorianXlitEnglish = xE.uUc;
LE.GregorianXlitFrench = xE.vUc;
LE.Hebrew = xE.yUc;
LE.Hijri = xE.AUc;
LE.Japan = xE.QHb;
LE.Korea = xE.HUc;
LE.None = xE.kf;
LE.Saka = xE.oVc;
LE.Taiwan = xE.LVc;
LE.Thai = xE.MVc;
LE = Xw.Asc.c_oAscContentControlSpecificType = Xw.Asc.$V = CE;
LE.None = CE.kf;
LE.CheckBox = CE.Pm;
LE.Picture = CE.uN;
LE.ComboBox = CE.xC;
LE.DropDownList = CE.BRa;
LE.DateTime = CE.aB;
LE.TOC = CE.$ta;
'use strict';
(function (f, e) {
  function Ia(f) {
    this.userName = this.tHc = this.id = null;
    this.state = e;
    this.gof = -1;
    this.color = null;
    this.view = !1;
    this.zYe(f);
    return this;
  }

  Ia.prototype.zYe = function (e) {
    e && (this.id = e.id, this.tHc = e.idOriginal, this.userName = e.username, this.gof = e.indexUser, this.color = f.AscCommon.hGb(this.tHc, this.userName, !1, !0), this.view = e.view);
  };
  Ia.prototype.sE = function () {
    return this.id;
  };
  Ia.prototype.c2e = function () {
    return this.tHc;
  };
  Ia.prototype.$Aa = function () {
    return this.userName;
  };
  Ia.prototype.VTb = function () {
    return this.kgf;
  };
  Ia.prototype.YTb = function () {
    return this.YRc;
  };
  Ia.prototype.K4e = function () {
    return this.state;
  };
  Ia.prototype.HT = function () {
    return '#' + ('000000' + this.color.toString(16)).substr(-6);
  };
  Ia.prototype.Crd = function () {
    return this.view;
  };
  Ia.prototype.vw = function (e) {
    this.id = e;
  };
  Ia.prototype.jMc = function (e) {
    this.userName = e;
  };
  Ia.prototype.HAf = function (e) {
    this.kgf = e;
  };
  Ia.prototype.XAf = function (e) {
    this.YRc = e;
  };
  Ia.prototype.LKd = function (e) {
    this.state = e;
  };
  var cb = {
    wJd: 4001, yJd: 4002, xJd: 4003, cZe: 4004, bpf: 4005, apf: 4006, cvc: 4007,
    jDf: 4008
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.STb = Ia;
  var Xa = Ia.prototype;
  Xa.asc_getId = Xa.sE;
  Xa.asc_getIdOriginal = Xa.c2e;
  Xa.asc_getUserName = Xa.$Aa;
  Xa.asc_getState = Xa.K4e;
  Xa.asc_getColor = Xa.HT;
  Xa.asc_getView = Xa.Crd;
  f.AscCommon.Rvc = function (e, f) {
    var y = Asc.Fk.pg.iqb;
    cb.wJd === f ? y = Asc.Fk.pg.iqb : cb.yJd === f ? y = Asc.Fk.pg.Olc : cb.xJd === f ? y = Asc.Fk.pg.Nlc : cb.cZe === f ? y = Asc.Fk.pg.Wcc : cb.bpf === f ? y = e ? Asc.Fk.pg.zhd : Asc.Fk.pg.Jic : cb.apf === f ? y = Asc.Fk.pg.ncb : cb.cvc === f ? y = Asc.Fk.pg.Mld : cb.jDf === f && (y = Asc.Fk.pg.qoc);
    return y;
  };
  f.AscCommon.Nxd = function (e) {
    return Asc.Fk.pg.qoc === e || Asc.Fk.pg.Olc === e || Asc.Fk.pg.Nlc === e;
  };
  f.AscCommon.WLb = { QCe: -1, kf: 0, kMe: 1, SUa: 2, k3c: 3, j3c: 4, wQb: 10, qdc: 11 };
  f.AscCommon.bs = { Tl: 0, NK: 1, $y: 2 };
  f.AscCommon.Std = cb;
  f.AscCommon.V$e = { pXa: 0, Ckg: 1, Smg: 2, zog: 3, yte: 4, yog: 5, doc: 6, vog: 7 };
  f.AscCommon.Otd = { ty: 0, UF: 1, uog: 2 };
})(window);
'use strict';
(function (f, e) {
  function Ia(e) {
    this.nl = new Xa;
    this.cK = !1;
    e && (this.asa = e.asa, this.EQa = e.EQa, this.rGa = e.rGa, this.uGa = e.uGa, this.AIa = e.AIa, this.sGa = e.sGa, this.vGa = e.vGa, this.nGa = e.nGa, this.nma = e.nma, this.pGa = e.pGa, this.qya = e.qya, this.oma = e.oma, this.yua = e.yua, this.C2 = e.C2, this.yGa = e.yGa, this.pya = e.pya, this.bsa = e.bsa, this.wGa = e.wGa, this.xGa = e.xGa, this.zua = e.zua, this.rya = e.rya, this.U2a = e.U2a, this.csa = e.csa, this.tGa = e.tGa, this.CQa = e.CQa, this.oGa = e.oGa, this.qGa = e.qGa, this.DQa = e.DQa);
  }

  function cb(e, f) {
    this.iUe =
      e ? e.slice() : null;
    this.sNa = f;
  }

  function Xa(f) {
    f && (this.asa = f.asa, this.EQa = f.EQa, this.rGa = f.rGa, this.uGa = f.uGa, this.AIa = f.AIa, this.sGa = f.sGa, this.vGa = f.vGa, this.nGa = f.nGa, this.nma = f.nma, this.pGa = f.pGa, this.qya = f.qya, this.oma = f.oma, this.yua = f.yua, this.C2 = f.C2, this.yGa = f.yGa, this.wGa = f.wGa, this.xGa = f.xGa, this.zua = f.zua, this.pya = f.pya, this.bsa = f.bsa, this.csa = f.csa, this.tGa = f.tGa, this.CQa = f.CQa, this.oGa = f.oGa, this.qGa = f.qGa, this.DQa = f.DQa);
    this.BI = kb.kf;
    this.Swa = {};
    this.Rcb;
    this.Hcb = 0;
    this.LCd = !1;
    this.AI =
      {};
    this.vvb = [];
    this.BTb = [];
    this.zNa = {};
    this.Ncb = {};
    this.kEa = [];
    this.zpd = this.zTb = this.iqd = this.rpd = this.lEb = this.rsa = this.cRa = null;
    this.svb = -1;
    this.WPa = this.Ygb = !1;
    this.VMd = 1572864;
    this.deleteIndex = this.Ivd = this.rxb = 0;
    this.crc = null;
    this.gDd = this.jIc = -1;
    this.Ywb = 0;
    this.hvc = null;
    this.fVb = this.e_ = !1;
    this.EZa = '';
    this.x3a = null;
    this.Dsc = 0;
    this.eEd = 50;
    this.zId = 2E3;
    this.fvc = 1E4;
    this.Rff = 6E4;
    this.Wcb = this.uqd = this.Mod = this.mvb = null;
    this.FNa = 'Anonymous';
    this.m3b = [];
    this.Gsa = this.QDb = null;
    this.swd = -1;
    this.yTb =
      this.BZa = this.yNa = !1;
    this.Nod = 0;
    this.xwd = this.hIc = this.a2b = this.lang = this.permissions = this.mode = e;
    this.gqc = this.ypd = !1;
    this.ATb = [];
    this.kTb = [];
    this.lTb = [];
  }

  var ib = f.Asc, y = f.AscCommon, kb = y.WLb, rb = y.bs, mb = y.Std, Ta = y.V$e, yb = y.Otd;
  Ia.prototype.te = function (e, f, y, Ta, Ia, Xa, Ma) {
    if (this.nl && this.nl.ZHc()) {
      var Va = this;
      this.nl.asa = function (e, f) {
        Va.uaf(e, f);
      };
      this.nl.EQa = function (e) {
        Va.Laf(e);
      };
      this.nl.rGa = function (e, f) {
        Va.Jaf(e, f);
      };
      this.nl.uGa = function (e) {
        Va.Oaf(e);
      };
      this.nl.AIa = function (e) {
        Va.waf(e);
      };
      this.nl.sGa =
        function (e) {
          Va.Kaf(e);
        };
      this.nl.vGa = function (e) {
        Va.Paf(e);
      };
      this.nl.nGa = function (e) {
        Va.zaf(e);
      };
      this.nl.pGa = function (e) {
        Va.Daf(e);
      };
      this.nl.nma = function (e) {
        Va.Caf(e);
      };
      this.nl.qya = function (e) {
        Va.dud(e);
      };
      this.nl.oma = function (e, f) {
        Va.Haf(e, f);
      };
      this.nl.yua = function () {
        Va.Iaf();
      };
      this.nl.C2 = function (e, f) {
        Va.Dtc(e, f);
      };
      this.nl.yGa = function (e) {
        Va.Saf(e);
      };
      this.nl.pya = function () {
        Va.Baf();
      };
      this.nl.bsa = function (e) {
        Va.vaf(e);
      };
      this.nl.wGa = function (e) {
        Va.eud(e);
      };
      this.nl.xGa = function (e) {
        Va.fud(e);
      };
      this.nl.zua = function (e,
                              f, y) {
        Va.Naf(e, f, y);
      };
      this.nl.rya = function (e, f) {
        Va.Raf(e, f);
      };
      this.nl.U2a = function (e) {
        Va.yaf(e);
      };
      this.nl.csa = function () {
        Va.gud();
      };
      this.nl.tGa = function (e) {
        Va.Maf(e);
      };
      this.nl.CQa = function (e) {
        Va.xaf(e);
      };
      this.nl.oGa = function () {
        Va.Aaf();
      };
      this.nl.qGa = function (e) {
        Va.Faf(e);
      };
      this.nl.DQa = function (e) {
        Va.Gaf(e);
      };
      this.nl.te(e, f, y, Ta, Ia, Xa, Ma);
      this.cK = !0;
    } else this.oGa(), this.qGa(null);
  };
  Ia.prototype.Svc = function () {
    return this.nl ? this.nl.Svc() : e;
  };
  Ia.prototype.M4b = function (e) {
    if (this.nl) return this.nl.M4b(e);
  };
  Ia.prototype.lUb =
    function (e, f, y) {
      this.nl && this.cK ? this.nl.lUb(e, f, y) : (this.fud(''), this.eud('123'), this.pya());
    };
  Ia.prototype.Q3a = function (e) {
    this.nl && this.nl.Q3a(e);
  };
  Ia.prototype.I0a = function () {
    return this.nl ? this.nl.I0a() : 0;
  };
  Ia.prototype.V2a = function (e) {
    this.nl && this.cK && this.nl.V2a(e);
  };
  Ia.prototype.Zvc = function () {
    this.nl && this.cK && this.nl.Zvc();
  };
  Ia.prototype.LLc = function (e) {
    this.nl && this.cK && this.nl.LLc(e);
  };
  Ia.prototype.E9b = function (e) {
    this.nl && this.cK && this.nl.E9b(e);
  };
  Ia.prototype.aHa = function (e) {
    this.nl && this.cK &&
    this.nl.aHa(e);
  };
  Ia.prototype.kUb = function (e, y) {
    if (this.nl && this.cK) this.nl.kUb(e, y); else {
      var Va = this;
      f.setTimeout(function () {
        if (y) {
          var f = e ? e.length : 0;
          if (0 < f) {
            y({ lock: e[0] });
            for (var Ta = 0; Ta < f; ++Ta) Va.dud({ state: 2, block: e[Ta] });
          }
        }
      }, 1);
    }
  };
  Ia.prototype.G7a = function (e) {
    this.nl && this.cK ? this.nl.G7a(e) : f.setTimeout(function () {
      e && e({ saveLock: !1 });
    }, 100);
  };
  Ia.prototype.K5b = function () {
    if (this.nl && this.cK) this.nl.K5b(); else {
      var e = this;
      f.setTimeout(function () {
        e.gud();
      }, 100);
    }
  };
  Ia.prototype.C8a = function (e, f, y, Ta, Ia) {
    this.nl &&
    this.cK && (this.nl.e_ = Ta, this.nl.fVb = Ia, this.nl.C8a(e, null, f, y));
  };
  Ia.prototype.Zjb = function (e, f, y, Ta) {
    this.nl && this.cK && (this.nl.e_ = f, this.nl.fVb = Ta, this.nl.Zjb(e, y));
  };
  Ia.prototype.pwc = function () {
    this.nl && this.cK && this.nl.pwc();
  };
  Ia.prototype.mSa = function () {
    return this.nl && this.cK ? this.nl.mSa() : null;
  };
  Ia.prototype.sbc = function () {
    return this.nl && this.cK ? this.nl.sbc() : null;
  };
  Ia.prototype.qXb = function () {
    return this.nl && this.cK ? this.nl.qXb() : null;
  };
  Ia.prototype.uFa = function () {
    return this.nl && this.cK ? this.nl.uFa() :
      null;
  };
  Ia.prototype.qLc = function (e) {
    this.nl && this.cK && this.nl.qLc(e);
  };
  Ia.prototype.disconnect = function (e, f) {
    this.nl && this.cK && this.nl.disconnect(e, f);
  };
  Ia.prototype.jvc = function (e) {
    this.nl && this.cK && this.nl.jvc(e);
  };
  Ia.prototype.NNc = function (e) {
    this.nl && this.cK && this.nl.NNc(e);
  };
  Ia.prototype.j0a = function () {
    return this.nl && this.cK ? this.nl.j0a() : !1;
  };
  Ia.prototype.uaf = function (e, f) {
    this.asa && this.asa(e, f);
  };
  Ia.prototype.Laf = function (e) {
    this.EQa && this.EQa(e);
  };
  Ia.prototype.Jaf = function (e, f) {
    this.rGa && this.rGa(e,
      f);
  };
  Ia.prototype.Oaf = function (e) {
    this.uGa && this.uGa(e);
  };
  Ia.prototype.waf = function (e) {
    this.AIa && this.AIa(e);
  };
  Ia.prototype.Kaf = function (e) {
    this.sGa && this.sGa(e);
  };
  Ia.prototype.Paf = function (e) {
    this.vGa && this.vGa(e);
  };
  Ia.prototype.zaf = function (e) {
    this.nGa && this.nGa(e);
  };
  Ia.prototype.Caf = function (e) {
    this.nma && this.nma(e);
  };
  Ia.prototype.Daf = function (e) {
    this.pGa && this.pGa(e);
  };
  Ia.prototype.dud = function (e) {
    this.qya && this.qya(e);
  };
  Ia.prototype.Haf = function (e, f) {
    this.oma && this.oma(e, f);
  };
  Ia.prototype.Iaf = function () {
    this.yua &&
    this.yua();
  };
  Ia.prototype.Dtc = function (e, f) {
    this.C2 && this.C2(e, f);
  };
  Ia.prototype.Saf = function (e) {
    this.yGa && this.yGa(e);
  };
  Ia.prototype.Baf = function () {
    this.pya && this.pya();
  };
  Ia.prototype.vaf = function (e) {
    this.bsa && this.bsa(e);
  };
  Ia.prototype.eud = function (e) {
    this.wGa && this.wGa(e);
  };
  Ia.prototype.fud = function (e) {
    this.xGa && this.xGa(e);
  };
  Ia.prototype.Naf = function (e, f, y) {
    this.zua && this.zua(e, f, y);
  };
  Ia.prototype.Raf = function (e, f) {
    this.rya && this.rya(e, f);
  };
  Ia.prototype.yaf = function (e) {
    this.U2a && this.U2a(e);
  };
  Ia.prototype.gud =
    function () {
      this.csa && this.csa();
    };
  Ia.prototype.Maf = function (e) {
    this.tGa && this.tGa(e);
  };
  Ia.prototype.xaf = function (e) {
    this.CQa && this.CQa(e);
  };
  Ia.prototype.Aaf = function () {
    this.oGa && this.oGa();
  };
  Ia.prototype.Faf = function (e) {
    this.qGa && this.qGa(e);
  };
  Ia.prototype.Gaf = function (e) {
    this.DQa && this.DQa(e);
  };
  Xa.prototype.ZHc = function () {
    return '' != this.EZa;
  };
  Xa.prototype.Q3a = function (e) {
    this.EZa = e;
  };
  Xa.prototype.I0a = function () {
    return this.BI;
  };
  Xa.prototype.A_a = function () {
    return kb.SUa === this.BI || kb.wQb === this.BI || kb.qdc ===
      this.BI;
  };
  Xa.prototype.sbc = function () {
    return this.svb;
  };
  Xa.prototype.qXb = function () {
    return this.yTb;
  };
  Xa.prototype.uFa = function () {
    return this.hIc || this.a2b;
  };
  Xa.prototype.mSa = function () {
    return this.FNa;
  };
  Xa.prototype.Aqc = function () {
    for (var e, f = 0, y = this.ATb.length; f < y; ++f) e = this.ATb[f], this.kUb(e.iUe, e.sNa);
    this.ATb = [];
  };
  Xa.prototype.kUb = function (e, y) {
    if (kb.wQb === this.BI || kb.qdc === this.BI) this.ATb.push(new cb(e, y)); else {
      for (var Va = this, Ta = 0, Ia = e ? e.length : 0, Xa = !1, Ma = null; Ta < Ia; ++Ta) if (Ma = this.yNa || this.BZa ?
        e[Ta].guid : e[Ta], this.AI[Ma] && 0 !== this.AI[Ma].state) {
        Xa = !0;
        break;
      }
      0 === Ia && (Xa = !0);
      Ma = this.yNa || this.BZa ? e[0].guid : e[0];
      Xa ? f.setTimeout(function () {
        y && y({ error: Ma + '-lock' });
      }, 100) : this.Ncb.hasOwnProperty(Ma) || (this.AI[Ma] = { state: 1 }, y && (this.zNa[Ma] = y, this.Ncb[Ma] = f.setTimeout(function () {
        Va.zNa.hasOwnProperty(Ma) && (Va.zNa[Ma]({ error: 'Timed out' }), delete Va.zNa[Ma], delete Va.Ncb[Ma]);
      }, this.fvc)), this.VV({ type: 'getLock', block: e }));
    }
  };
  Xa.prototype.G7a = function (e) {
    if (!this.kEa[this.kEa.length - 1]) if (null !==
    this.cRa && clearTimeout(this.cRa), kb.SUa !== this.BI) this.cRa = f.setTimeout(function () {
      e && e({ error: 'No connection' });
    }, 100); else {
      if (e) {
        var y = this, Va = this.kEa.length;
        this.kEa[Va] = e;
        this.cRa = f.setTimeout(function () {
          y.cRa = null;
          var e = y.kEa[Va];
          e && (y.kEa[Va] = null, e({ error: 'Timed out' }), y.BI = kb.SUa, y.Aqc());
        }, this.fvc);
      }
      this.BI = kb.qdc;
      this.VV({ type: 'isSaveLock' });
    }
  };
  Xa.prototype.K5b = function () {
    var e = this;
    this.lEb = f.setTimeout(function () {
      e.lEb = null;
      e.K5b();
    }, this.fvc);
    this.VV({ type: 'unSaveLock' });
  };
  Xa.prototype.qLc =
    function (e) {
      this.AI[e] && 2 === this.AI[e].state && (this.AI[e] = { state: 0 });
    };
  Xa.prototype.aqd = function (f) {
    this.C8a(this.crc, this.rxb, e, e, f);
  };
  Xa.prototype.C8a = function (e, y, Ta, Ia, Xa) {
    null === y ? (this.deleteIndex = Ta, null != this.deleteIndex && -1 !== this.deleteIndex && (this.deleteIndex += this.Ywb), this.rxb = 0, this.crc = e, this.hvc = Ia) : this.rxb = y;
    y = Ta = this.rxb;
    for (Ia = 0; Ta < e.length && Ia < this.VMd; ++Ta) Ia += e[Ta].length + 9;
    this.Ivd = Ta;
    if (Ta === e.length) for (var Va in this.AI) this.AI.hasOwnProperty(Va) && 2 === this.AI[Va].state && delete this.AI[Va];
    var Ma = this;
    this.rsa = f.setTimeout(function () {
      Ma.rsa = null;
      Ma.aqd(1);
    }, this.Rff);
    this.BI = kb.wQb;
    this.VV({
      type: 'saveChanges',
      changes: JSON.stringify(e.slice(y, Ta)),
      startSaveChanges: 0 === y,
      endSaveChanges: Ta === e.length,
      isCoAuthoring: this.Ygb,
      isExcel: this.yNa,
      deleteIndex: this.deleteIndex,
      excelAdditionalInfo: this.hvc ? JSON.stringify(this.hvc) : null,
      unlock: this.e_,
      releaseLocks: this.fVb,
      reSave: Xa
    });
  };
  Xa.prototype.Zjb = function (e, f) {
    this.deleteIndex = f;
    null != this.deleteIndex && -1 !== this.deleteIndex && (this.deleteIndex +=
      this.Ywb);
    this.VV({
      type: 'unLockDocument',
      isSave: e,
      unlock: this.e_,
      deleteIndex: this.deleteIndex,
      releaseLocks: this.fVb
    });
  };
  Xa.prototype.pwc = function () {
    this.asa && this.asa(this.Swa, this.FNa);
  };
  Xa.prototype.disconnect = function (e, f) {
    this.WPa = !0;
    e ? this.Gsa.close(e, f) : (this.VV({ type: 'close' }), this.BI = kb.k3c);
  };
  Xa.prototype.jvc = function (e) {
    this.VV({ type: 'extendSession', idletime: e });
  };
  Xa.prototype.NNc = function (e) {
    this.VV({ type: 'versionHistory', cmd: e });
  };
  Xa.prototype.j0a = function () {
    var e = !1, f = Math.max(this.jIc, this.gDd);
    this.zTb < f && (this.zTb = f, this.VV({ type: 'forceSaveStart' }), e = !0);
    return e;
  };
  Xa.prototype.V2a = function (e) {
    this.VV({ type: 'openDocument', message: e });
  };
  Xa.prototype.Zvc = function () {
    this.VV({ type: 'getMessages' });
  };
  Xa.prototype.LLc = function (e) {
    'string' === typeof e && this.VV({ type: 'message', message: e });
  };
  Xa.prototype.E9b = function (e) {
    'string' === typeof e && this.VV({ type: 'cursor', cursor: e });
  };
  Xa.prototype.aHa = function (e) {
    'string' === typeof e && this.VV({ type: 'changesError', stack: e });
  };
  Xa.prototype.god = function () {
    for (var e =
      0; e < this.BTb.length; ++e) this.BTb[e]();
    this.BTb = [];
  };
  Xa.prototype.uYe = function () {
    for (var e = 0; e < this.vvb.length; e++) this.vYe(this.vvb[e]);
    this.vvb = [];
  };
  Xa.prototype.VV = function (e, f) {
    !f && e && 'saveChanges' == e.type && y.WD && y.WD.h8() ? y.WD.CUa(this, e, y.bpa.n$a) : null !== e && 'object' === typeof e && (0 < this.BI ? this.Gsa.send(JSON.stringify(e)) : this.vvb.push(JSON.stringify(e)));
  };
  Xa.prototype.vYe = function (e) {
    null !== e && 'string' === typeof e && (0 < this.BI ? this.Gsa.send(e) : this.vvb.push(e));
  };
  Xa.prototype.kqc = function (e, f) {
    this.A_a() &&
    e.messages && this.rGa && this.rGa(e.messages, f);
  };
  Xa.prototype.wXe = function (e) {
    this.uGa && this.uGa(e.buildVersion, e.buildNumber);
  };
  Xa.prototype.hXe = function (e) {
    this.A_a() && e.messages && this.AIa && this.AIa(e.messages);
  };
  Xa.prototype.pXe = function (e) {
    e.messages && this.sGa && this.sGa(e.messages);
  };
  Xa.prototype.xXe = function (e) {
    this.A_a() && e.messages && this.vGa && this.vGa(e.messages);
  };
  Xa.prototype.jXe = function (e) {
    this.nGa && this.nGa(e);
  };
  Xa.prototype.mXe = function () {
    this.pGa && this.pGa();
  };
  Xa.prototype.Opd = function (f) {
    this.a2b =
      e;
    f && (this.hIc = f);
  };
  Xa.prototype.lXe = function (e) {
    var f = e.code;
    f === Ta.pXa ? (this.zTb = e.time, this.nma({ type: yb.UF, start: !0 })) : f === Ta.yte ? this.nma({
      type: yb.UF,
      izf: !0
    }) : this.yGa(ib.Fk.pg.QN);
  };
  Xa.prototype.kXe = function (e) {
    var f = e.type;
    yb.UF === f ? this.zTb == e.time && this.nma({ type: f, success: e.success }) : e.start ? (this.nma({
      type: f,
      start: !0
    }), this.zpd = e.time) : this.zpd == e.time && this.nma({ type: f, success: e.success });
  };
  Xa.prototype.jqc = function (e) {
    if (this.A_a() && e.locks) for (var f in e.locks) if (e.locks.hasOwnProperty(f)) {
      var y =
        e.locks[f], Va = this.yNa || this.BZa ? y.block.guid : f, Ta = this.yNa || this.BZa ? y.block : f;
      if (null !== y) {
        var Ia = !0;
        this.AI[Va] && 1 !== this.AI[Va].state && (Ia = !(this.AI[Va].state === (y.user === this.FNa ? 2 : 3) && this.AI[Va].user === y.user && this.AI[Va].time === y.time && this.AI[Va].block === Va));
        Ia && (this.AI[Va] = {
          state: y.user === this.FNa ? 2 : 3,
          user: y.user,
          time: y.time,
          block: Va,
          blockValue: Ta
        });
        if (this.zNa.hasOwnProperty(Va)) {
          if (y.user === this.FNa) this.zNa[Va]({ lock: this.AI[Va] }); else this.zNa[Va]({ error: 'Already locked by ' + y.user });
          this.Ncb.hasOwnProperty(Va) && (clearTimeout(this.Ncb[Va]), delete this.Ncb[Va]);
          delete this.zNa[Va];
        }
        this.qya && Ia && this.qya(this.AI[Va]);
      }
    }
  };
  Xa.prototype.qXe = function (e) {
    if (this.A_a() && e.locks) {
      var f = !1, y;
      for (y in e.locks) if (e.locks.hasOwnProperty(y)) {
        var Va = e.locks[y], Ta = this.yNa || this.BZa ? Va.block.guid : Va.block;
        null !== Va && (this.AI[Ta] = {
          state: 0,
          user: Va.user,
          time: Va.time,
          changes: Va.changes,
          block: Va.block
        }, this.oma && (this.oma(this.AI[Ta], !1), f = !0));
      }
      f && this.yua && this.yua();
    }
  };
  Xa.prototype.FVe = function (e) {
    this.CQa(e);
  };
  Xa.prototype.t7b = function (e, f) {
    if (this.A_a()) {
      if (!f && y.WD && y.WD.h8()) return y.WD.CUa(this, e, y.bpa.Lqb);
      if (e.locks) {
        f = !1;
        for (var Va in e.locks) if (e.locks.hasOwnProperty(Va)) {
          var Ta = e.locks[Va], Ia = this.yNa || this.BZa ? Ta.block.guid : Ta.block;
          null !== Ta && (this.AI[Ia] = {
            state: 0,
            user: Ta.user,
            time: Ta.time,
            changes: Ta.changes,
            block: Ta.block
          }, this.oma && (this.oma(this.AI[Ia], !0), f = !0));
        }
        f && this.yua && this.yua();
      }
      this.Jqc(e.changes, e.changesIndex, !1);
      this.tGa && this.tGa(e.excelAdditionalInfo);
    } else this.qXb() || this.lTb.push(e);
  };
  Xa.prototype.Rpd = function (e, f) {
    f && !1 === this.Ygb && !this.rya && this.aHa('Error: connection state changed waitAuth;this.onStartCoAuthoring:' + !!this.rya);
    !1 === this.Ygb ? (this.Ygb = !0, this.rya && this.rya(e, f)) : f && (this.e_ = !0, this.Zjb(!1));
  };
  Xa.prototype.Jpd = function (e) {
    !0 === this.Ygb && (this.Ygb = !1, this.U2a && this.U2a(e));
  };
  Xa.prototype.rXe = function (e) {
    if (null != e.saveLock) {
      var f = this.kEa.length - 1, y = this.kEa[f];
      y && (null !== this.cRa && (clearTimeout(this.cRa), this.cRa = null), this.kEa[f] = null, y(e));
    }
    if (null == e.saveLock ||
      e.error || e.saveLock) this.BI = kb.SUa, this.Aqc();
  };
  Xa.prototype.DXe = function (e) {
    null !== this.rsa && (clearTimeout(this.rsa), this.rsa = null);
    null !== this.lEb && (clearTimeout(this.lEb), this.lEb = null);
    this.BI = kb.SUa;
    this.Aqc();
    -1 !== e.index && (this.Ywb = e.index);
    -1 !== e.time && (this.gDd = e.time);
    this.csa && this.csa();
  };
  Xa.prototype.Jqc = function (e, f, y) {
    if (this.zua && (this.Ywb = f, e)) for (f = 0; f < e.length; ++f) {
      var Va = e[f], Ta = Va.change;
      Ta && (Va.user !== this.FNa && (this.jIc = Va.time), this.zua(JSON.parse(Ta), Va.useridoriginal, y));
    }
  };
  Xa.prototype.yXe = function (e) {
    this.wGa && this.wGa(e);
  };
  Xa.prototype.BXe = function (e) {
    this.xGa && this.xGa(e);
  };
  Xa.prototype.sXe = function (e) {
    null !== this.rsa && (clearTimeout(this.rsa), this.rsa = null);
    -1 !== e.changesIndex && (this.Ywb = e.changesIndex);
    this.C8a(this.crc, this.Ivd);
  };
  Xa.prototype.Npd = function (e, f) {
    var Va = {}, Ta = 0, Ia = 0, Xa, Ma = [];
    if (e) for (Xa = 0; Xa < e.length; ++Xa) {
      var $a = new y.STb(e[Xa]);
      Va[$a.sE()] = $a;
      $a.Crd() || ++Ta;
      ++Ia;
    }
    if (f) {
      for (Xa in Va) this.Swa[Xa] || ($a = Va[Xa], $a.LKd(!0), Ma.push($a));
      for (Xa in this.Swa) Va[Xa] ||
      ($a = this.Swa[Xa], $a.LKd(!1), Ma.push($a));
    }
    this.Swa = Va;
    this.Hcb = Ta;
    return Ma;
  };
  Xa.prototype.Gpd = function (e) {
    this.Swa = {};
    this.Hcb = 0;
    e && (this.Npd(e), this.asa && this.asa(this.Swa, this.FNa), 1 < this.Hcb ? this.Rpd(!0) : this.Jpd(!0));
  };
  Xa.prototype.Hpd = function (e) {
    var f = this;
    if (this.A_a()) {
      var y = e.waitAuth;
      if (y && (!this.bsa || this.Rcb && !(this.Rcb <= e.participantsTimestamp))) {
        var Va = 'Error: connection state changed waitAuth;onConnectionStateChanged:' + !!this.bsa + ';this._participantsTimestamp:' + this.Rcb + ';data.participantsTimestamp:' +
          e.participantsTimestamp;
        this.aHa(Va);
      }
      if (this.bsa && (!this.Rcb || this.Rcb <= e.participantsTimestamp)) {
        this.Rcb = e.participantsTimestamp;
        var Ta = this.Npd(e.participants, !0);
        !y || 0 < Ta.length && 1 < this.Hcb || (Va = 'Error: connection state changed waitAuth;usersStateChanged:' + JSON.stringify(Ta) + ';this._countEditUsers:' + this.Hcb, this.aHa(Va));
        if (0 < Ta.length) for (1 < this.Hcb ? this.Rpd(!1, y) : this.Jpd(!1), this.EQa(this.Swa), y = 0; y < Ta.length; ++y) this.bsa(Ta[y]);
      }
    } else this.BTb.push(function () {
      f.Hpd(e);
    });
  };
  Xa.prototype.Lpd =
    function (e) {
      this.DQa(e.licenseType);
    };
  Xa.prototype.Ipd = function (e) {
    this.disconnect();
    this.C2(e ? e.description : '', e && e.code || mb.cvc);
  };
  Xa.prototype.GXe = function () {
    this.yGa(ib.Fk.pg.m7b);
  };
  Xa.prototype.oXe = function (e) {
    this.LCd || (this.LCd = !0, this.qGa(e.license));
  };
  Xa.prototype.dXe = function (e) {
    var y = this;
    this.Opd(e.jwt);
    if (!0 === this.yTb) {
      if (this.BI = kb.SUa, !this.WPa && (this.wXe(e), this.Lpd(e), this.Gpd(e.participants), this.kqc(e, !0), this.jqc(e), this.god(), this.gqc)) {
        this.gqc = !1;
        var Ta = function (e) {
          !1 === e.saveLock ?
            y.aqd(2) : setTimeout(function () {
              y.G7a(Ta);
            }, 1E3);
        };
        this.G7a(Ta);
      }
    } else if (1 === e.result) {
      this.yTb = !0;
      this.BI = kb.SUa;
      this.rpd = e.sessionId;
      this.svb = e.indexUser;
      this.FNa = this.Wcb.sE() + this.svb;
      this.iqd = e.sessionTimeConnect;
      e.settings && (e.settings.reconnection && (this.eEd = e.settings.reconnection.attempts, this.zId = e.settings.reconnection.delay), e.settings.websocketMaxPayloadSize && (this.VMd = e.settings.websocketMaxPayloadSize));
      this.Lpd(e);
      this.Gpd(e.participants);
      this.BXe(e.g_cAscSpellCheckUrl);
      this.yXe(this.svb);
      this.kqc(e, !1);
      this.jqc(e);
      e.hasForgotten && this.mXe();
      if (f.AscApplyChanges && f.AscChanges) {
        e = f.AscChanges;
        for (var Va, Ia = 0; Ia < e.length; ++Ia) {
          Va = e[Ia];
          for (var Xa = 0; Xa < Va.length; ++Xa) this.zua(Va[Xa], null, !0);
        }
      }
      this.PYe();
      this.pya && this.pya();
      this.god();
      this.uYe();
    }
  };
  Xa.prototype.eXe = function (e) {
    this.kTb.push(e.changes);
  };
  Xa.prototype.PYe = function () {
    var e = 0, f;
    for (f = 0; f < this.kTb.length; ++f) {
      var y = this.kTb[f];
      e += y.length;
      this.Jqc(y, e, !0);
    }
    this.kTb = [];
    for (f = 0; f < this.lTb.length; ++f) {
      y = this.lTb[f];
      var Ta = y.changesIndex -
        e;
      0 < Ta && (y = Ta >= y.changes.length ? y.changes : y.changes.splice(y.changes.length - Ta, Ta), e += y.length, this.Jqc(y, e, !0));
    }
    this.lTb = [];
  };
  Xa.prototype.te = function (e, f, y, Ta, Ia, Xa, Ma) {
    this.Wcb = e;
    this.mvb = null;
    this.Mod = y;
    this.uqd = Ta;
    this.m3b = [];
    this.QDb = null;
    this.swd = Ia;
    this.yNa = rb.NK === Ia;
    this.BZa = rb.$y === Ia;
    this.yTb = !1;
    this.Nod = Xa;
    this.mode = Ma.skf();
    this.permissions = Ma.vkf();
    this.lang = Ma.efb();
    this.a2b = Ma.Tkf();
    this.xwd = Ma.Awc();
    this.M4b(f);
    this.vpd();
  };
  Xa.prototype.Svc = function () {
    return this.mvb;
  };
  Xa.prototype.M4b =
    function (e) {
      this.mvb = e;
      this.QDb = y.vxd() + '../../../../doc/' + e + '/c';
    };
  Xa.prototype.lUb = function (e, f, y) {
    this.ypd = e;
    if (this.AI) {
      this.m3b = [];
      for (var Ta in this.AI) this.AI.hasOwnProperty(Ta) && (e = this.AI[Ta], 2 === e.state && this.m3b.push(e.blockValue));
      this.AI = {};
    }
    this.VV({
      type: 'auth',
      docid: this.mvb,
      documentCallbackUrl: this.Mod,
      token: this.uqd,
      user: {
        id: this.Wcb.sE(),
        username: this.Wcb.$Aa(),
        firstname: this.Wcb.VTb(),
        lastname: this.Wcb.YTb(),
        indexUser: this.svb
      },
      editorType: this.swd,
      lastOtherSaveTime: this.jIc,
      block: this.m3b,
      sessionId: this.rpd,
      sessionTimeConnect: this.iqd,
      sessionTimeIdle: 0 <= y ? y : 0,
      documentFormatSave: this.Nod,
      view: this.ypd,
      isCloseCoAuthoring: this.WPa,
      openCmd: f,
      lang: this.lang,
      mode: this.mode,
      permissions: this.permissions,
      encrypted: this.xwd,
      jwtOpen: this.a2b,
      jwtSession: this.hIc
    });
  };
  Xa.prototype.vpd = function () {
    var e = this;
    if (f.IS_NATIVE_EDITOR) {
      var Ta = this.Gsa = f.SockJS;
      Ta.open();
    } else Ta = this.Gsa = new (y.tyd())(this.QDb, null, { transports: ['websocket', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'] }),
      Ta.onopen = function () {
        e.vXe();
      }, Ta.onmessage = function (f) {
      e.uXe(f.data);
    }, Ta.onclose = function (f) {
      e.tXe(f);
    };
  };
  Xa.prototype.vXe = function () {
    this.x3a && (clearTimeout(this.x3a), this.x3a = null, this.Dsc = 0);
    this.BI = kb.kMe;
    this.oGa();
  };
  Xa.prototype.uXe = function (e) {
    e = JSON.parse(e);
    switch (e.type) {
      case 'auth':
        this.dXe(e);
        break;
      case 'message':
        this.kqc(e, !1);
        break;
      case 'cursor':
        this.hXe(e);
        break;
      case 'meta':
        this.pXe(e);
        break;
      case 'getLock':
        this.jqc(e);
        break;
      case 'releaseLock':
        this.qXe(e);
        break;
      case 'connectState':
        this.Hpd(e);
        break;
      case 'saveChanges':
        this.t7b(e);
        break;
      case 'authChanges':
        this.eXe(e);
        break;
      case 'saveLock':
        this.rXe(e);
        break;
      case 'unSaveLock':
        this.DXe(e);
        break;
      case 'savePartChanges':
        this.sXe(e);
        break;
      case 'drop':
        this.Ipd(e);
        break;
      case 'error':
        this.Ipd(e);
        break;
      case 'documentOpen':
        this.FVe(e);
        break;
      case 'warning':
        this.GXe();
        break;
      case 'license':
        this.oXe(e);
        break;
      case 'session':
        this.xXe(e);
        break;
      case 'refreshToken':
        this.Opd(e.messages);
        break;
      case 'expiredToken':
        this.jXe(e);
        break;
      case 'forceSaveStart':
        this.lXe(e.messages);
        break;
      case 'forceSave':
        this.kXe(e.messages);
    }
  };
  Xa.prototype.tXe = function (e) {
    kb.wQb === this.BI && (this.gqc = !0, null !== this.rsa && (clearTimeout(this.rsa), this.rsa = null));
    this.BI = kb.QCe;
    var f = mb.wJd <= e.code && e.code <= mb.cvc || this.Dsc >= this.eEd, y = null;
    f && (this.BI = kb.j3c, y = e.code);
    this.C2 && this.C2(e.reason, y);
    f || this.NYe();
  };
  Xa.prototype.jYe = function () {
    delete this.Gsa;
    this.vpd();
  };
  Xa.prototype.NYe = function () {
    var e = this;
    this.x3a && (clearTimeout(this.x3a), e.x3a = null);
    ++this.Dsc;
    this.x3a = setTimeout(function () {
        e.jYe();
      },
      this.zId);
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.FNd = Ia;
})(window);
'use strict';
(function (f) {
  function e() {
    this.lib = this.FQa = this.YEd = this.C2 = null;
    this.BI = 0;
    this.h8 = this.WPa = !1;
    this.languages = null;
    this.Pvd = [];
    this.EZa = '';
  }

  function Ia() {
    this.y5 = new e;
    this.cK = !1;
    this.FQa = this.C2 = null;
  }

  function cb(e, Ia) {
    function y() {
      Xa && clearTimeout(Xa);
      ib++;
      Xa = setTimeout(function () {
        delete Ia.Gsa;
        Ia.Gsa = cb(e, Ia);
      }, 500 * ib);
    }

    if (!f.IS_NATIVE_EDITOR) {
      var mb = new (AscCommon.tyd())(e, null, { transports: ['websocket', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'] });
      mb.onopen = function () {
        Xa && (clearTimeout(Xa),
          ib = 0);
        Ia.BI = 1;
        Ia.YEd && Ia.YEd();
        Ia.sYe();
      };
      mb.onmessage = function (e) {
        e = JSON.parse(e.data);
        switch (e.type) {
          case 'spellCheck':
            Ia.AXe(e);
            break;
          case 'init':
            Ia.nXe(e);
        }
      };
      mb.onclose = function (e) {
        Ia.BI = -1;
        var f = 20 <= ib || Ia.WPa;
        f && (Ia.BI = 3);
        Ia.C2 && Ia.C2(e.reason, f, Ia.WPa);
        Ia.WPa || 20 > ib && y();
      };
      return mb;
    }
  }

  Ia.prototype.te = function (e) {
    if (this.y5 && this.y5.ZHc()) {
      var f = this;
      this.y5.C2 = function (e, y, Ta) {
        f.Dtc(e, y, Ta);
      };
      this.y5.FQa = function (e) {
        f.Qaf(e);
      };
      this.y5.lib = function (e) {
        f.Eaf(e);
      };
      this.y5.te(e);
      this.cK = !0;
    }
  };
  Ia.prototype.Q3a =
    function (e) {
      this.y5 && this.y5.Q3a(e);
    };
  Ia.prototype.I0a = function () {
    return this.y5 ? this.y5.I0a() : 0;
  };
  Ia.prototype.disconnect = function () {
    this.y5 && this.cK && this.y5.disconnect();
  };
  Ia.prototype.Njb = function (e) {
    this.y5 && this.cK && this.y5.Njb(e);
  };
  Ia.prototype.qVb = function (e) {
    return this.y5 && this.cK ? this.y5.qVb(e) : !0;
  };
  Ia.prototype.Qaf = function (e) {
    this.FQa && this.FQa(e);
  };
  Ia.prototype.Eaf = function (e) {
    this.lib && this.lib(e);
  };
  Ia.prototype.Dtc = function (e, f, Ia) {
    this.C2 && this.C2(e, f, Ia);
  };
  e.prototype.ZHc = function () {
    return '' !==
      this.EZa;
  };
  e.prototype.Q3a = function (e) {
    this.EZa = e;
  };
  e.prototype.I0a = function () {
    return this.BI;
  };
  e.prototype.Njb = function (e) {
    this.VV({ type: 'spellCheck', spellCheckData: e });
  };
  e.prototype.qVb = function (e) {
    return !this.h8 || !!this.languages[e];
  };
  e.prototype.disconnect = function () {
    this.WPa = !0;
    return this.Gsa.close();
  };
  e.prototype.VV = function (e) {
    null !== e && 'object' === typeof e && (0 < this.BI ? this.Gsa.send(JSON.stringify(e)) : this.Pvd.push(e));
  };
  e.prototype.sYe = function () {
    for (var e; 0 < this.BI && void 0 !== (e = this.Pvd.shift());) this.VV(e);
  };
  e.prototype.AXe = function (e) {
    e.spellCheckData && this.FQa && this.FQa(e.spellCheckData);
  };
  e.prototype.nXe = function (e) {
    !this.h8 && e.languages && (this.lib && this.lib(e.languages), this.languages = e.languages.reduce(function (e, f) {
      e[f] = 1;
      return e;
    }, {}), this.h8 = !0);
  };
  var Xa, ib = 0;
  e.prototype.te = function (e) {
    this.mvb = e;
    e = this.EZa + '/doc/' + e + '/c';
    this.QDb = /^https?:\/\//.test(this.EZa) ? e : AscCommon.vxd() + '../../../..' + e;
    this.Gsa = cb(this.QDb, this);
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.Oee = Ia;
})(window);
'use strict';
(function (f, e) {
  function Ia(f, w, y, Ma) {
    var Ra = new zb;
    Ra.type = yd.y8;
    Ra.r = f;
    Ra.vb = w;
    Ra.Xa = y;
    Ra.a = 255;
    Ra.lf = e === Ma ? !1 : Ma;
    return Ra;
  }

  function cb(e) {
    if (null == e || null == e.color) return new zb;
    var f = new zb;
    f.r = e.RGBA.R;
    f.vb = e.RGBA.G;
    f.Xa = e.RGBA.B;
    f.a = e.RGBA.Bf;
    e = e.color;
    switch (e.type) {
      case yd.Lea:
      case yd.VQ:
        f.type = e.type, f.value = e.id;
    }
    return f;
  }

  function Xa() {
    return Math.floor(4294967296 * Math.random());
  }

  function ib(e) {
    e &= 2147483647;
    return 2147483647 !== e ? e : e - 1;
  }

  function y() {
    this.id = e;
    this.AHc = this.jca = this.Zca = this.m5b =
      this.Qz = '';
    this.aLd = !1;
    this.valid = 0;
    this.date = this.image = '';
    this.$1b = this.cDd = !1;
  }

  function kb() {
    this.oDd = Ci.Error;
    this.nDd = hd.kf;
    this.MCd = !1;
    this.UId = jg.kf;
    this.Uaf = this.Taf = !0;
    this.YQc = this.hud = !1;
    this.uof = !0;
    this.Xbe = 300;
    this.tof = !1;
    this.ftd = this.gtd = null;
    return this;
  }

  function rb() {
    this.ol = this.bca = this.Tma = this.Iq = this.pq = this.MDb = this.units = this.GOa = this.lK = this.zhb = this.Vgb = this.$la = this.A2a = this.Ura = this.Thb = null;
    this.sEa = lh.val;
  }

  function mb() {
    this.d2b = this.ol = this.bca = this.Tma = this.Iq = this.pq =
      this.c2b = this.K1b = this.G1b = this.H1b = this.I1b = null;
    this.sEa = lh.Mg;
    this.HVb = this.IVb = null;
  }

  function Ta() {
    this.e8a = this.H6a = this.uIa = this.separator = this.CG = this.AG = this.BG = this.type = this.sEb = this.vAb = this.y1b = this.T5b = this.OVb = this.SA = this.U5b = this.z1b = this.w4b = this.title = this.style = null;
    this.Hba = [];
    this.W3a = this.V3a = this.qq = this.XV = this.GU = null;
  }

  function yb(e, f, w, y) {
    this.tIb = e;
    this.onb = f;
    this.bQc = w;
    this.dac = y;
  }

  function Va(f, w, y, Ma) {
    this.r = e == f ? 0 : f;
    this.vb = e == w ? 0 : w;
    this.Xa = e == y ? 0 : y;
    this.a = e == Ma ? 1 : Ma;
  }

  function zb() {
    this.type =
      yd.y8;
    this.value = null;
    this.Xa = this.vb = this.r = 0;
    this.a = 255;
    this.lf = !1;
    this.ke = [];
    1 === arguments.length ? (this.r = arguments[0].r, this.vb = arguments[0].vb, this.Xa = arguments[0].Xa) : (3 <= arguments.length && (this.r = arguments[0], this.vb = arguments[1], this.Xa = arguments[2]), 4 === arguments.length && (this.a = arguments[3]));
  }

  function Ac(w) {
    w ? (this.va = w.va instanceof zb ? w.va : e != w.va && null != w.va ? Ia(w.va.r, w.va.vb, w.va.Xa) : null, this.xb = e != w.xb ? w.xb : null, this.pa = e != w.pa ? w.pa : null, this.ic = e != w.ic ? w.ic : null) : (this.va = Ia(0, 0,
      0), this.xb = .5 * f.AscCommonWord.lxd, this.pa = f.AscCommonWord.y$e, this.ic = 0);
  }

  function ec(f) {
    f ? (this.Ba = e != f.Ba && null != f.Ba ? new Ac(f.Ba) : null, this.Oa = e != f.Oa && null != f.Oa ? new Ac(f.Oa) : null, this.Ra = e != f.Ra && null != f.Ra ? new Ac(f.Ra) : null, this.Ta = e != f.Ta && null != f.Ta ? new Ac(f.Ta) : null, this.Vi = e != f.Vi && null != f.Vi ? new Ac(f.Vi) : null) : this.Vi = this.Ta = this.Ra = this.Oa = this.Ba = null;
  }

  function vc(f) {
    f ? (this.ea = e == f.ea ? null : f.ea, this.MC = e == f.ea ? null : f.MC) : this.MC = this.ea = null;
  }

  function Xb(f) {
    f ? (this.Ja = e != f.Ja ? f.Ja : null,
      this.za = e != f.za ? f.za : null) : (this.Ja = 'Times New Roman', this.za = -1);
  }

  function Ma(e, f, w) {
    this.Qa = e;
    this.pa = f;
    this.Q_ = w;
  }

  function $a(f) {
    this.ug = [];
    if (e != f) for (var w = f.ug.length, y = 0; y < w; y++) this.ug.push(new Ma(f.ug[y].Qa, f.ug[y].pa, f.ug[y].Q_));
  }

  function jb(f) {
    f ? (this.pa = e != f.pa ? f.pa : null, this.va = f.ab && f.ab.fill && f.ab.fill.type === Fe.nC && f.ab.fill.color ? cb(f.ab.fill.color) : e != f.va && null != f.va ? Ia(f.va.r, f.va.vb, f.va.Xa) : null) : (this.pa = Mc.FP, this.va = Ia(255, 255, 255));
  }

  function Pa(f) {
    f ? (this.Fgc = !1, this.HC = f.HC,
      this.Jb = f.Jb, this.gH = f.gH, this.Xn = f.Xn, this.xF = f.xF, this.Nb = f.Nb, this.oH = f.oH, this.fJ = f.fJ, this.W = f.W, this.KG = f.KG, this.ka = f.ka, this.wD = f.wD, this.la = f.la, this.rE = f.rE, this.nc = e != f.nc && null != f.nc ? new ec(f.nc) : null, this.Pb = e != f.Pb && null != f.Pb ? new jb(f.Pb) : null, this.wf = e != f.wf && null != f.wf ? new Xb(f.wf) : null) : (this.Fgc = !1, this.rE = this.la = this.wD = this.ka = this.KG = this.W = this.fJ = this.oH = this.Nb = this.xF = this.Xn = this.gH = this.Jb = this.HC = e, this.wf = this.nc = this.Pb = null);
  }

  function qe(f) {
    f ? (this.qc = e != f.qc ? f.qc :
      null, this.jj = e != f.jj ? f.jj : null, this.Ji = e != f.Ji ? f.Ji : null, this.kg = e != f.kg ? f.kg : null) : this.kg = this.Ji = this.jj = this.qc = e;
  }

  function kf(f) {
    f ? (this.Ba = e != f.Ba ? f.Ba : null, this.Ra = e != f.Ra ? f.Ra : null, this.Ae = e != f.Ae ? f.Ae : null) : this.Ae = this.Ra = this.Ba = e;
  }

  function gf(w) {
    if (w) {
      this.Hp = e != w.Hp ? w.Hp : null;
      this.$b = e != w.$b && null != w.$b ? new kf(w.$b) : null;
      this.Kn = e != w.Kn ? w.Kn : null;
      this.Zn = e != w.Zn ? w.Zn : e;
      this.Op = e != w.Op ? w.Op : e;
      this.Lp = e != w.Lp ? w.Lp : null;
      this.dc = e != w.dc && null != w.dc ? new qe(w.dc) : null;
      this.nc = e != w.nc && null !=
      w.nc ? new ec(w.nc) : null;
      this.Pb = e != w.Pb && null != w.Pb ? new jb(w.Pb) : null;
      this.ug = e != w.ug ? new $a(w.ug) : e;
      this.uv = null != w.uv ? w.uv : f.AscCommonWord.BS;
      this.eo = e != w.eo && null != w.eo ? w.eo : !1;
      this.Poa = e != w.Poa ? w.Poa : !0;
      this.vi = e != w.vi ? new Pa(w.vi) : e;
      this.G3 = e != w.G3 ? w.G3 : !1;
      this.iVa = e != w.iVa ? w.iVa : !1;
      this.p0 = e != w.p0 ? w.p0 : e;
      this.n1 = e != w.n1 ? w.n1 : e;
      this.gl = e != w.gl ? w.gl : e;
      this.oU = e != w.oU ? w.oU : e;
      this.fj = e != w.fj ? w.fj : e;
      this.Fj = e != w.Fj ? w.Fj : e;
      this.TU = e != w.TU ? w.TU : e;
      this.we = e != w.we ? w.we : e;
      this.Me = e != w.Me ? w.Me : e;
      this.nab =
        e != w.nab ? w.nab : e;
      this.Ts = e != w.Ts ? w.Ts : e;
      this.Kpa = e != w.Kpa ? w.Kpa : !1;
      this.zHa = this.Kta = this.dJa = this.Jta = this.VSa = e;
      var y = w.vf;
      if (y) {
        var Ra = w.Vje;
        this.VSa = 100;
        if (y.wr) switch (y.wr.type) {
          case AscFormat.ypb:
            this.VSa = y.wr.val / 1E3;
        }
        this.Jta = Ia(0, 0, 0);
        if (y.Fn) y.Fn.nH && (this.Jta = cb(y.Fn.nH)); else if (Ra && Ra.ab) if (Ra.ab.fill instanceof AscFormat.cH && Ra.ab.fill.color) this.Jta = cb(Ra.ab.fill.color); else {
          var Ma = Ra.ab.Ht();
          this.Jta = Ia(Ma.R, Ma.G, Ma.B);
        } else this.Jta = Ia(0, 0, 0);
        this.Kta = '';
        y.zo && y.zo.type === AscFormat.Kaa &&
        'string' === typeof y.zo.$O && 0 < y.zo.$O.length ? this.Kta = y.zo.$O : Ra && Ra.wf && 'string' === typeof Ra.wf.Ja && 0 < Ra.wf.Ja.length && (this.Kta = Ra.wf.Ja);
        y.Li && (0 < y.Li.$K ? this.dJa = AscFormat.hb(y.Li.WI) ? Math.max(1, y.Li.WI) : null : y.Li.type === AscFormat.Wua && (this.zHa = y.Li.yJ));
      }
      this.w9a = e !== w.w9a ? w.w9a : !0;
      this.y9a = e !== w.y9a ? w.y9a : !0;
      this.x9a = e !== w.x9a ? w.x9a : !0;
      this.z9a = e !== w.z9a ? w.z9a : !0;
    } else this.Hp = e, this.$b = new kf, this.Lp = this.Op = this.Zn = this.Kn = e, this.dc = new qe, this.Pb = this.nc = e, this.eo = !1, this.Poa = !0, this.Ts = this.nab =
      this.Me = this.we = this.TU = this.Fj = this.fj = this.oU = this.gl = this.n1 = this.p0 = this.ug = e, this.Kpa = !1, this.zHa = this.Kta = this.dJa = this.Jta = this.VSa = e, this.z9a = this.x9a = this.y9a = this.w9a = !0;
  }

  function Ie() {
    this.Ia = 0;
    this.Image = '';
  }

  function kg(f, w, y) {
    this.od = e == f ? 0 : f;
    this.Tc = e == w ? 0 : w;
    this.dqe = y;
  }

  function Di(f) {
    f ? (this.Ba = e == f.Ba ? null : f.Ba, this.Oa = e == f.Oa ? null : f.Oa, this.Ta = e == f.Ta ? null : f.Ta, this.Ra = e == f.Ra ? null : f.Ra) : this.Ra = this.Ta = this.Oa = this.Ba = null;
  }

  function gh() {
    this.Ny = this.stroke = this.fill = this.type = null;
    this.rQ = !0;
    this.eo = this.Tka = this.Mba = this.VM = !1;
    this.YEa = this.XEa = this.Xf = this.Wf = this.qsa = this.Sd = this.nRa = this.PT = this.columnNumber = this.description = this.title = this.Ut = this.vC = this.IK = this.ci = this.zb = this.lb = null;
    this.RD = e;
    this.anchor = null;
  }

  function ue(f) {
    f ? (this.ub = f.ub, this.qc = f.qc, this.gpa = f.gpa, this.ef = f.ef) : this.ef = this.gpa = this.qc = this.ub = e;
  }

  function Wc(f) {
    f ? (this.He = e === f.He ? e : f.He, this.yq = e === f.yq ? e : f.yq, this.Ze = e === f.Ze ? e : f.Ze, this.pa = e === f.pa ? e : f.pa, this.fh = e === f.fh ? e : f.fh) : this.fh = this.pa =
      this.Ze = this.yq = this.He = e;
  }

  function Xc(f) {
    f ? (this.He = e === f.He ? e : f.He, this.yq = e === f.yq ? e : f.yq, this.Ze = e === f.Ze ? e : f.Ze, this.pa = e === f.pa ? e : f.pa, this.fh = e === f.fh ? e : f.fh) : this.fh = this.pa = this.Ze = this.yq = this.He = e;
  }

  function Td(f) {
    f ? (this.ka = e == f.ka ? null : f.ka, this.la = e == f.la ? null : f.la) : this.la = this.ka = null;
  }

  function id(f) {
    f ? (this.H3 = e != f.H3 ? f.H3 : !0, this.od = e != f.od ? f.od : e, this.Tc = e != f.Tc ? f.Tc : e, this.uL = e != f.uL ? f.uL : e, this.gw = e != f.gw ? new Di(f.gw) : e, this.we = e != f.we ? new Td(f.we) : e, this.Bz = e != f.Bz ? f.Bz : e, this.Cf =
      e != f.Cf ? new Wc(f.Cf) : e, this.Ef = e != f.Ef ? new Xc(f.Ef) : e, this.pz = e != f.pz ? new Wc(f.pz) : e, this.qz = e != f.qz ? new Xc(f.qz) : e, this.Mu = e != f.Mu ? f.Mu : null, this.Am = e != f.Am ? f.Am : null, this.eo = e != f.eo ? f.eo : !1, this.Ut = e != f.Ut ? f.Ut : !1, this.AS = e != f.AS ? f.AS : null, this.dm = e != f.dm ? f.dm : null, this.gva = e != f.gva ? f.gva : null, this.Qda = f.Qda != e ? f.Qda : null, this.mIa = f.mIa != e ? f.mIa : null, this.Csa = f.Csa != e ? f.Csa : !1, this.lia = f.lia != e ? f.lia : e, this.kia = f.kia != e ? f.kia : e, this.IK = f.IK != e ? f.IK : e, this.ci = f.ci != e ? f.ci : e, this.rAa = f.rAa !== e ? f.rAa :
      e, this.qAa = f.qAa !== e ? f.qAa : e, this.pAa = f.pAa != e ? f.pAa : e, this.oAa = f.oAa != e ? f.oAa : e, this.title = f.title != e ? f.title : e, this.description = f.description != e ? f.description : e, this.columnNumber = f.columnNumber != e ? f.columnNumber : e, this.PT = f.PT != e ? f.PT : e, this.RD = f.RD != e ? f.RD : e, this.Sd = f.Sd != e ? f.Sd : e, this.Wf = f.Wf != e ? f.Wf : e, this.Xf = f.Xf != e ? f.Xf : e, this.$lb = f.$lb != e ? f.$lb : e, this.anchor = f.anchor != e ? f.anchor : e) : (this.H3 = !0, this.qz = this.pz = this.Ef = this.Cf = this.we = this.gw = this.uL = this.Tc = this.od = e, this.Am = this.Mu = null, this.eo =
      !1, this.mIa = this.Qda = this.gva = this.dm = this.AS = null, this.Csa = !1, this.anchor = this.$lb = this.Xf = this.Wf = this.qsa = this.Sd = this.PT = this.columnNumber = this.description = this.title = this.oAa = this.pAa = this.qAa = this.rAa = this.ci = this.IK = this.kia = this.lia = e);
  }

  function qb(f, w) {
    this.ea = e != f ? f : null;
    this.pa = e != w ? w : null;
  }

  function rc() {
    this.Ui = this.fill = this.type = null;
  }

  function $e() {
    this.type = Me.tQb;
    this.url = '';
    this.iNc = null;
  }

  function hi() {
    this.fo = this.Cn = this.pDa = e;
  }

  function og() {
    this.FXa = this.qVa = e;
    this.zWa = 0;
    this.jXa = e;
    this.kXa = !0;
    this.bkc = 0;
  }

  function $g() {
    this.color = new zb;
  }

  function ek() {
    this.jL = this.Tic = this.Qic = this.Ric = this.osb = this.YCa = this.FE = this.color = this.width = this.type = null;
    this.VM = !1;
  }

  function ah() {
    this.be = [];
    this.name = '';
    this.scheme = null;
    this.x5b = 0;
  }

  function Cc(f) {
    if (f) switch (this.ea = e != f.ea ? f.ea : Cd.Rna, this.wN = e != f.wN ? f.wN : 0, this.xN = e != f.xN ? f.xN : 0, this.ea) {
      case Cd.Ri:
        this.Ri = e != f.Fe ? f.Fe : 0;
        break;
      case Cd.Zsa:
        this.Yl = e != f.Yl ? f.Yl : '';
        this.rpa = e != f.rpa ? f.rpa : !1;
        this.dDa = e != f.dDa ? f.dDa : Mc.c_oAscMouseMoveLockedObjectType.Rna;
        break;
      case Cd.qf:
        this.Text = '', this.Number = 1;
    } else this.ea = Cd.Rna, this.xN = this.wN = 0;
  }

  function Oc(f) {
    f ? (this.Text = e != f.Text ? f.Text : null, this.pa = e != f.pa ? f.pa : '', this.uA = e != f.uA ? f.uA : '', this.Na = e !== f.Na ? f.Na : null, this.gr = e !== f.gr ? f.gr : null, this.dna = f.dna ? f.dna : null) : (this.Text = null, this.uA = this.pa = '', this.dna = this.gr = this.Na = null);
  }

  function kc() {
    this.Aad = this.T6c = this.w7c = this.Ia = null;
  }

  function rk() {
    this.Uf = this.Permissions = this.qo = this.Okd = this.h2c = this.Zcd = this.Gwa = this.doc = this.kSb = this.Bk = this.GW = this.S_ =
      this.Ia = null;
    this.NRa = !1;
    this.h6c;
    this.i6c;
  }

  function bh() {
    this.ea = Mc.OH.ORa;
    this.o6b = this.CUc = this.oMb = this.i7c = 0;
  }

  function qc() {
    this.pa = 0;
  }

  function un() {
    this.la = this.ka = this.Ia = 0;
  }

  function Kd() {
    this.Ia = 0;
    this.ob = [];
    this.Jb = this.W = 0;
  }

  function Gf(e, f, w, y) {
    this.name = e;
    this.displayName = null;
    this.type = f;
    this.image = w;
    this.aP = y;
  }

  function Vk(e, f, w, y, Ma) {
    this.Tl = e;
    this.$t = f;
    this.Iwa = w;
    this.TW = y;
    this.Element = Ma;
  }

  function ce() {
    this.Qqa = this.url = this.description = '';
    this.index = 0;
    this.j4 = ['1x', '2x'];
    this.OAb = !1;
    this.$Va =
      ['word', 'cell', 'slide'];
    this.GAb = this.JAb = this.LAb = this.lhb = this.HI = !1;
    this.initDataType = Jc.hs;
    this.initData = '';
    this.khb = !1;
    this.buttons = [{ text: 'Ok', primary: !0 }, { text: 'Cancel', primary: !1 }];
    this.Tgb = this.size = e;
    this.nla = [];
    this.gvc = {};
  }

  function If() {
    this.Qqa = this.Qz = this.name = '';
    this.RQ = [];
  }

  var Mc = f.Asc, Cf = f.AscCommon, Cd = Cf.oga, yd = Mc.faa, Fe = Mc.Iy, Me = Mc.Mtd, yc = Mc.Mk, Uh = Mc.Tba,
    lh = Mc.Itd, Ci = { Error: 1, Hje: 2, WIe: 3, yLe: 4, XLb: 5, Ije: 6, XIe: 7, cMe: 8, Sge: 9, dMe: 10 },
    jg = { kf: 0, uje: 1, CDe: 2, Comment: 3, Cub: 4 }, hd = {
      kf: 0, qLe: 1,
      Wie: 2
    }, Jc = { hs: 'none', text: 'text', xrf: 'ole', html: 'html', vff: 'desktop' };
  y.prototype.sE = function () {
    return this.id;
  };
  y.prototype.R8e = function (e) {
    this.id = e;
  };
  y.prototype.ITa = function () {
    return this.Qz;
  };
  y.prototype.O8e = function (e) {
    this.Qz = e;
  };
  y.prototype.Jrc = function () {
    return this.m5b;
  };
  y.prototype.K9e = function (e) {
    this.m5b = e;
  };
  y.prototype.Krc = function () {
    return this.Zca;
  };
  y.prototype.L9e = function (e) {
    this.Zca = e;
  };
  y.prototype.trc = function () {
    return this.jca;
  };
  y.prototype.F8e = function (e) {
    this.jca = e;
  };
  y.prototype.i2e =
    function () {
      return this.AHc;
    };
  y.prototype.T8e = function (e) {
    this.AHc = e;
  };
  y.prototype.u4e = function () {
    return this.aLd;
  };
  y.prototype.H9e = function (e) {
    this.aLd = e;
  };
  y.prototype.k5e = function () {
    return this.valid;
  };
  y.prototype.P9e = function (e) {
    this.valid = e;
  };
  y.prototype.d1e = function () {
    return this.date;
  };
  y.prototype.u8e = function (e) {
    this.date = e;
  };
  y.prototype.yRd = function () {
    return this.cDd;
  };
  y.prototype.zWc = function (e) {
    this.cDd = e;
  };
  y.prototype.f4e = function () {
    return this.$1b;
  };
  y.prototype.A9e = function (e) {
    this.$1b = e;
  };
  kb.prototype.P2e =
    function () {
      return this.oDd;
    };
  kb.prototype.j0e = function () {
    return this.Taf;
  };
  kb.prototype.l0e = function () {
    return this.Uaf;
  };
  kb.prototype.i0e = function () {
    return this.hud;
  };
  kb.prototype.$0e = function () {
    return this.YQc;
  };
  kb.prototype.m2e = function () {
    return this.uof;
  };
  kb.prototype.Q_e = function () {
    return this.Xbe;
  };
  kb.prototype.j2e = function () {
    return this.tof;
  };
  kb.prototype.x2e = function () {
    return this.MCd;
  };
  kb.prototype.O2e = function () {
    return this.nDd;
  };
  kb.prototype.j4e = function () {
    return this.UId;
  };
  kb.prototype.X_e = function () {
    return this.gtd;
  };
  kb.prototype.W_e = function () {
    return this.ftd;
  };
  kb.prototype.gKd = function (e) {
    this.oDd = e;
  };
  kb.prototype.qAf = function (e) {
    this.hud = e;
  };
  kb.prototype.vAf = function (e) {
    this.YQc = e;
  };
  kb.prototype.SAf = function (e) {
    this.MCd = e;
  };
  kb.prototype.YAf = function (e) {
    this.nDd = e;
  };
  kb.prototype.lBf = function (e) {
    this.UId = e;
  };
  kb.prototype.oAf = function (e) {
    this.gtd = e;
  };
  kb.prototype.nAf = function (e) {
    this.ftd = e;
  };
  rb.prototype = {
    isEqual: function (e) {
      return e && this.Thb === e.Thb && this.Ura === e.Ura && this.A2a === e.A2a && this.$la === e.$la && this.Vgb === e.Vgb &&
      this.zhb === e.zhb && this.lK === e.lK && this.GOa === e.GOa && this.units === e.units && this.MDb === e.MDb && this.pq === e.pq && this.Iq === e.Iq && this.Tma === e.Tma && this.bca === e.bca && this.ol === e.ol && this.sEa === e.sEa ? !0 : !1;
    }, LKc: function (e) {
      this.sEa = e;
    }, msa: function (e) {
      this.Thb = e;
    }, SQa: function (e) {
      this.Ura = e;
    }, QGa: function (e) {
      this.A2a = e;
    }, Sib: function (e) {
      this.$la = e;
    }, LCb: function (e) {
      this.Vgb = e;
    }, MKc: function (e) {
      this.zhb = e;
    }, oHd: function (e) {
      this.lK = e;
    }, pHd: function (e) {
      this.units = e;
    }, MCb: function (e) {
      this.MDb = e;
    }, kha: function (e) {
      this.pq =
        e;
    }, lha: function (e) {
      this.Iq = e;
    }, mha: function (e) {
      this.Tma = e;
    }, D2: function (e) {
      this.bca = e;
    }, uma: function (e) {
      this.ol = e;
    }, RQa: function (e) {
      this.GOa = e;
    }, XT: function () {
      return this.sEa;
    }, thf: function () {
      return this.GOa;
    }, fif: function () {
      return this.Thb;
    }, eif: function () {
      return this.Ura;
    }, bif: function () {
      return this.A2a;
    }, aif: function () {
      return this.$la;
    }, Nhf: function () {
      return this.Vgb;
    }, Zhf: function () {
      return this.zhb;
    }, Yhf: function () {
      return this.lK;
    }, zyd: function () {
      return this.units;
    }, Gif: function () {
      return this.MDb;
    }, XWb: function () {
      return this.pq;
    },
    ZWb: function () {
      return this.Iq;
    }, kXb: function () {
      return this.Tma;
    }, QWb: function () {
      return this.bca;
    }, PWb: function () {
      return this.ol;
    }, QI: function () {
      this.msa(Mc.Kdb.eu);
      this.QGa(Mc.Kdb.eu);
      this.mha(Mc.zEa.Ix);
      this.LCb(!1);
      this.RQa(Mc.Lwb.hs);
      this.kha(Uh.xB);
      this.lha(Uh.vs);
      this.D2(Mc.o_a.eu);
    }
  };
  mb.prototype = {
    isEqual: function (e) {
      return e && this.I1b === e.I1b && this.H1b === e.H1b && this.G1b === e.G1b && this.K1b === e.K1b && this.c2b === e.c2b && this.pq === e.pq && this.Iq === e.Iq && this.Tma === e.Tma && this.bca === e.bca && this.ol === e.ol &&
      this.d2b === e.d2b && this.sEa === e.sEa && this.IVb === e.IVb && this.HVb === e.HVb ? !0 : !1;
    }, Qib: function (e) {
      this.I1b = e;
    }, Pib: function (e) {
      this.H1b = e;
    }, nHd: function (e) {
      this.G1b = e;
    }, Z3b: function (e) {
      this.K1b = e;
    }, Rib: function (e) {
      this.c2b = e;
    }, kha: function (e) {
      this.pq = e;
    }, lha: function (e) {
      this.Iq = e;
    }, mha: function (e) {
      this.Tma = e;
    }, D2: function (e) {
      this.bca = e;
    }, uma: function (e) {
      this.ol = e;
    }, LKc: function (e) {
      this.sEa = e;
    }, lsa: function (e) {
      this.d2b = e;
    }, Wxd: function () {
      return this.I1b;
    }, Vxd: function () {
      return this.H1b;
    }, Uxd: function () {
      return this.G1b;
    },
    Xxd: function () {
      return this.K1b;
    }, Yxd: function () {
      return this.c2b;
    }, XWb: function () {
      return this.pq;
    }, ZWb: function () {
      return this.Iq;
    }, kXb: function () {
      return this.Tma;
    }, QWb: function () {
      return this.bca;
    }, PWb: function () {
      return this.ol;
    }, XT: function () {
      return this.sEa;
    }, Zxd: function () {
      return this.d2b;
    }, mhf: function () {
      return this.IVb;
    }, lhf: function () {
      return this.HVb;
    }, mHd: function (e) {
      this.IVb = e;
    }, lHd: function (e) {
      this.HVb = e;
    }, QI: function () {
      this.Pib(Mc.PUb.eu);
      this.lsa(Mc.lOa.hOa);
      this.mha(Mc.zEa.Ix);
      this.Rib(100);
      this.kha(Uh.xB);
      this.lha(Uh.vs);
      this.Qib(1);
      this.D2(Mc.o_a.eu);
    }
  };
  Ta.prototype = {
    REa: function (e, f) {
      return !!e === !!f;
    }, isEqual: function (e) {
      if (!(e && this.style === e.style && this.title === e.title && this.w4b === e.w4b && this.z1b === e.z1b && this.U5b === e.U5b && this.SA === e.SA && this.OVb === e.OVb && this.T5b === e.T5b && this.y1b === e.y1b && this.vAb === e.vAb && this.sEb === e.sEb && this.type === e.type && this.REa(this.BG, e.BG) && this.REa(this.AG, e.AG) && this.REa(this.CG, e.CG) && (this.separator === e.separator || ' ' === this.separator && null == e.separator || ' ' === e.separator &&
        null == this.separator))) return !1;
      if (!this.uIa) {
        if (e.uIa) return !1;
      } else if (!this.uIa.isEqual(e.uIa)) return !1;
      if (!this.H6a) {
        if (e.H6a) return !1;
      } else if (!this.H6a.isEqual(e.H6a)) return !1;
      if (this.Hba.length !== e.Hba.length) return !1;
      for (var f = 0; f < this.Hba.length; ++f) if (this.Hba[f] !== e.Hba[f]) return !1;
      return this.REa(this.e8a, e.e8a) && this.REa(this.GU, e.GU) && this.REa(this.XV, e.XV) && this.REa(this.qq, e.qq) && this.REa(this.V3a, e.V3a) && this.REa(this.W3a, e.W3a) ? !0 : !1;
    }, Tib: function (e) {
      this.GU = e;
    }, Eif: function () {
      return this.GU;
    },
    r3a: function (e) {
      this.XV = e;
    }, Thf: function () {
      return this.XV;
    }, Gwf: function (e) {
      Array.isArray(e) ? this.Hba = e : this.Hba.length = 0;
    }, Hwf: function (e) {
      this.Hba.length = 0;
      if (Array.isArray(e)) for (var f = 0; f < e.length; ++f) this.Hba.push(e[f].oC());
    }, dXb: function () {
      return this.Hba;
    }, Uib: function (e) {
      this.qq = e;
    }, Lif: function () {
      return this.qq;
    }, QKc: function (e) {
      this.style = parseInt(e, 10);
    }, s3: function () {
      return this.style;
    }, Ylb: function (e) {
      this.Hba.length = 0;
      this.Hba[0] = e;
    }, tx: function () {
      return 0 < this.Hba.length ? this.Hba[0] : null;
    }, Oib: function (e) {
      this.e8a =
        e;
    }, Zeb: function () {
      return this.e8a;
    }, Vib: function (e) {
      this.title = e;
    }, qra: function () {
      return this.title;
    }, Iwf: function (e) {
      this.w4b = e;
    }, wif: function () {
      return this.w4b;
    }, KCb: function (e) {
      this.z1b = e;
    }, NCb: function (e) {
      this.U5b = e;
    }, $3b: function (e) {
      this.SA = e;
    }, JCb: function (e) {
      this.OVb = e;
    }, Fwf: function (e) {
      this.T5b = e;
    }, Jwf: function (e) {
      this.y1b = e;
    }, Rxd: function () {
      return this.z1b;
    }, Byd: function () {
      return this.U5b;
    }, $xd: function () {
      return this.SA;
    }, Yeb: function () {
      return this.OVb;
    }, Xif: function () {
      return this.T5b;
    }, Ghf: function () {
      return this.y1b;
    },
    Nib: function (e) {
      this.vAb = e;
    }, Sxd: function () {
      return this.vAb;
    }, Xib: function (e) {
      this.sEb = e;
    }, Cyd: function () {
      return this.sEb;
    }, fm: function () {
      return this.type;
    }, Wib: function (e) {
      return this.type = e;
    }, OKc: function (e) {
      return this.BG = e;
    }, NKc: function (e) {
      return this.AG = e;
    }, PKc: function (e) {
      return this.CG = e;
    }, Fif: function () {
      return this.BG;
    }, Dif: function () {
      return this.AG;
    }, Hif: function () {
      return this.CG;
    }, a4b: function (e) {
      this.separator = e;
    }, zif: function () {
      return this.separator;
    }, E2: function (e) {
      this.uIa = e;
    }, oyb: function () {
      return this.uIa;
    },
    v$: function (e) {
      this.H6a = e;
    }, Cyb: function () {
      return this.H6a;
    }, Nud: function (e) {
      var f = this.oyb(), w = this.Cyb();
      e ? (f ? f.XT() !== lh.val && (w && w.XT() === lh.val ? this.E2(w) : (e = new rb, e.QI(), this.E2(e))) : (e = new rb, e.QI(), this.E2(e)), w ? w.XT() !== lh.Mg && (f && f.XT() === lh.Mg ? this.v$(f) : (f = new mb, f.QI(), this.v$(f))) : (f = new mb, f.QI(), this.v$(f))) : (f ? f.XT() !== lh.Mg && (w && w.XT() === lh.Mg ? this.E2(w) : (e = new mb, e.QI(), this.E2(e))) : (e = new mb, e.QI(), this.E2(e)), w ? w.XT() !== lh.val && (f && f.XT() === lh.val ? this.v$(f) : (f = new rb, f.QI(), this.v$(f))) :
        (f = new rb, f.QI(), this.v$(f)));
    }, qud: function (e) {
      if (null === this.type) this.Wib(e); else if (this.type !== e) {
        var f = (this.type === yc.mZ || this.type === yc.D0 || this.type === yc.f8 || this.type === yc.nZ || this.type === yc.E0 || this.type === yc.g8) !== (e === yc.mZ || e === yc.D0 || e === yc.f8 || this.type === yc.nZ || this.type === yc.E0 || this.type === yc.g8),
          w = (e === yc.k8 || e === yc.vea || e === yc.xoa || e === yc.aQa || e === yc.bQa || e === yc.uhb || e === yc.j8) !== (this.type === yc.k8 || this.type === yc.vea || this.type === yc.xoa || this.type === yc.aQa || this.type === yc.bQa ||
            this.type === yc.uhb || this.type === yc.j8), y = this.type === yc.H0 !== (e === yc.H0), Ra = this.type;
        this.Wib(e);
        var Ma = this.oyb(), Pa = this.Cyb();
        f && (f = Ma, Ma = Pa, Pa = f, this.E2(Ma), this.v$(Pa), f = this.vAb, this.Nib(this.sEb), this.Xib(f));
        switch (e) {
          case yc.Gaa:
          case yc.Aea:
          case yc.Caa:
            this.E2(null);
            this.v$(null);
            this.KCb(null);
            this.NCb(null);
            this.vma(null);
            this.Dya(null);
            break;
          case yc.X7:
          case yc.Fia:
          case yc.Gia:
          case yc.iea:
          case yc.jea:
          case yc.goa:
          case yc.Y7:
          case yc.k8:
          case yc.vea:
          case yc.xoa:
          case yc.aQa:
          case yc.bQa:
          case yc.uhb:
          case yc.j8:
          case yc.cea:
          case yc.dea:
          case yc.eoa:
          case yc.L6:
          case yc.y5b:
          case yc.z5b:
          case yc.zVb:
          case yc.AVb:
            this.Nud(!1);
            w && (this.Tib(!1), this.Uib(null), this.r3a(!0));
            if (Ra === yc.mZ || Ra === yc.D0 || Ra === yc.f8 || Ra === yc.nZ || Ra === yc.E0 || Ra === yc.g8) y = this.V3a, this.vma(this.W3a), this.Dya(y); else if (Ra === yc.Gaa || Ra === yc.Aea || Ra === yc.Caa) this.vma(!0), this.Dya(!0);
            (y = this.oyb()) && y.XT() === lh.Mg && (e === yc.cea || e === yc.dea || e === yc.eoa || e === yc.L6 || e === yc.y5b || e === yc.z5b || e === yc.zVb || e === yc.AVb ? y.lsa(Mc.lOa.Fwb) : y.lsa(Mc.lOa.hOa));
            break;
          case yc.mZ:
          case yc.D0:
          case yc.f8:
          case yc.nZ:
          case yc.E0:
          case yc.g8:
            this.Nud(!0);
            if (Ra === yc.Gaa || Ra ===
              yc.Aea || Ra === yc.Caa) this.vma(!0), this.Dya(!0); else if (Ra !== yc.mZ && Ra !== yc.D0 && Ra !== yc.f8 || Ra !== yc.nZ || Ra !== yc.E0 || Ra !== yc.g8) y = this.V3a, this.vma(this.W3a), this.Dya(y);
            (e = this.Cyb()) && e.XT() === lh.Mg && e.lsa(Mc.lOa.hOa);
            break;
          case yc.H0:
          case yc.gDb:
          case yc.x4b:
          case yc.y4b:
          case yc.z4b:
          case yc.hDb:
          case yc.kjb:
            if (Ma && Ma.XT() === lh.val || (e = new rb, e.QI(), this.E2(e)), Pa && Pa.XT() === lh.val || (e = new rb, e.QI(), this.v$(e)), y && (this.Tib(!0), this.Uib(null), this.r3a(!1)), Ra === yc.mZ || Ra === yc.D0 || Ra === yc.f8 || Ra === yc.nZ ||
            Ra === yc.E0 || Ra === yc.g8) y = this.V3a, this.vma(this.W3a), this.Dya(y); else if (Ra === yc.Gaa || Ra === yc.Aea || Ra === yc.Caa) this.vma(!0), this.Dya(!0);
        }
      }
    }, vma: function (e) {
      this.V3a = e;
    }, iwc: function () {
      return this.V3a;
    }, Dya: function (e) {
      this.W3a = e;
    }, jwc: function () {
      return this.W3a;
    }
  };
  yb.prototype = {
    fwb: function () {
      return this.tIb;
    }, gwb: function () {
      return this.onb;
    }, gea: function () {
      return this.bQc;
    }, eea: function () {
      return this.dac;
    }
  };
  Va.prototype = {
    constructor: Va, dN: function () {
      return this.r;
    }, tlf: function () {
      return this.r;
    }, Gyf: function (f) {
      this.r =
        f;
      this.Fla = e;
    }, JY: function () {
      return this.vb;
    }, mlf: function () {
      return this.vb;
    }, Fyf: function (f) {
      this.vb = f;
      this.Fla = e;
    }, IY: function () {
      return this.Xa;
    }, hlf: function () {
      return this.Xa;
    }, Eyf: function (f) {
      this.Xa = f;
      this.Fla = e;
    }, r0a: function () {
      return this.a;
    }, olf: function () {
      if (!this.Fla) {
        var e = this.r.toString(16), f = this.vb.toString(16), w = this.Xa.toString(16);
        this.Fla = (1 == e.length ? '0' + e : e) + (1 == f.length ? '0' + f : f) + (1 == w.length ? '0' + w : w);
      }
      return this.Fla;
    }, ih: function (e) {
      return this.r === e.r && this.vb === e.vb && this.Xa === e.Xa &&
        this.a === e.a;
    }, Sa: function () {
      return new Va(this.r, this.vb, this.Xa, this.a);
    }, Vif: function () {
      return (this.r << 16 & 16711680) + (this.vb << 8 & 65280) + this.Xa;
    }
  };
  zb.prototype = {
    constructor: zb, ewb: function () {
      return this.r;
    }, hUb: function (f) {
      this.r = f;
      this.Fla = e;
    }, Zvb: function () {
      return this.vb;
    }, eUb: function (f) {
      this.vb = f;
      this.Fla = e;
    }, Xvb: function () {
      return this.Xa;
    }, dUb: function (f) {
      this.Xa = f;
      this.Fla = e;
    }, F_e: function () {
      return this.a;
    }, J7b: function (f) {
      this.a = f;
      this.Fla = e;
    }, Mx: function () {
      return this.type;
    }, Tha: function (e) {
      this.type =
        e;
    }, UNa: function () {
      return this.value;
    }, SZa: function (e) {
      this.value = e;
    }, srd: function () {
      if (!this.Fla) {
        var e = this.a.toString(16), f = this.r.toString(16), w = this.vb.toString(16), y = this.Xa.toString(16);
        this.Fla = (1 == e.length ? '0' + e : e) + (1 == f.length ? '0' + f : f) + (1 == w.length ? '0' + w : w) + (1 == y.length ? '0' + y : y);
      }
      return this.Fla;
    }, HT: function () {
      return new Va(this.r, this.vb, this.Xa);
    }, P5e: function (e) {
      this.lf = e;
    }, O_e: function () {
      return this.lf;
    }
  };
  Ac.prototype.HT = function () {
    return this.va;
  };
  Ac.prototype.RZa = function (e) {
    this.va = e;
  };
  Ac.prototype.Lrc =
    function () {
      return this.xb;
    };
  Ac.prototype.o7e = function (e) {
    this.xb = e;
  };
  Ac.prototype.UNa = function () {
    return this.pa;
  };
  Ac.prototype.SZa = function (e) {
    this.pa = e;
  };
  Ac.prototype.H4e = function () {
    return this.ic;
  };
  Ac.prototype.s7e = function (e) {
    this.ic = e;
  };
  Ac.prototype.F1e = function () {
    return this.w$a;
  };
  Ac.prototype.p6e = function (e) {
    this.w$a = e;
  };
  ec.prototype = {
    A9: function () {
      return this.Ba;
    }, iwb: function (e) {
      this.Ba = e ? new Ac(e) : null;
    }, C9: function () {
      return this.Oa;
    }, psc: function (e) {
      this.Oa = e ? new Ac(e) : null;
    }, B9: function () {
      return this.Ra;
    },
    jwb: function (e) {
      this.Ra = e ? new Ac(e) : null;
    }, gga: function () {
      return this.Ta;
    }, Xrc: function (e) {
      this.Ta = e ? new Ac(e) : null;
    }, T_e: function () {
      return this.Vi;
    }, R5e: function (e) {
      this.Vi = e ? new Ac(e) : null;
    }
  };
  vc.prototype.a3e = function () {
    return this.ea;
  };
  vc.prototype.$2e = function () {
    return this.MC;
  };
  Xb.prototype = {
    oC: function () {
      return this.Ja;
    }, fea: function () {
      return this.za;
    }, V6e: function (e) {
      this.Ja = e;
    }, E6e: function (e) {
      this.za = e;
    }
  };
  Ma.prototype.UNa = function () {
    return this.pa;
  };
  Ma.prototype.SZa = function (e) {
    this.pa = e;
  };
  Ma.prototype.U3e =
    function () {
      return this.Qa;
    };
  Ma.prototype.e7e = function (e) {
    this.Qa = e;
  };
  Ma.prototype.L2e = function () {
    return Mc.Hia.Nhc === this.Q_ ? Mc.Hia.hoc : this.Q_;
  };
  Ma.prototype.O6e = function (e) {
    this.Q_ = e;
  };
  $a.prototype = {
    rrc: function () {
      return this.ug.length;
    }, S4e: function (e) {
      return this.ug[e];
    }, s_e: function (e) {
      this.ug.push(e);
    }, y_e: function () {
      this.ug.length = 0;
    }
  };
  jb.prototype = {
    UNa: function () {
      return this.pa;
    }, SZa: function (e) {
      this.pa = e;
    }, HT: function () {
      return this.va;
    }, RZa: function (e) {
      this.va = e ? e : null;
    }
  };
  Pa.prototype.o1e = function () {
    return this.HC;
  };
  Pa.prototype.j6e = function (e) {
    this.HC = e;
  };
  Pa.prototype.T1e = function () {
    return this.Jb;
  };
  Pa.prototype.y6e = function (e) {
    this.Jb = e;
  };
  Pa.prototype.U1e = function () {
    return this.gH;
  };
  Pa.prototype.z6e = function (e) {
    this.gH = e;
  };
  Pa.prototype.V1e = function () {
    return this.Xn;
  };
  Pa.prototype.A6e = function (e) {
    this.Xn = e;
  };
  Pa.prototype.W1e = function () {
    return this.xF;
  };
  Pa.prototype.B6e = function (e) {
    this.xF = e;
  };
  Pa.prototype.Arc = function () {
    return this.Nb;
  };
  Pa.prototype.S6e = function (e) {
    this.Nb = e;
  };
  Pa.prototype.g5e = function () {
    return this.oH;
  };
  Pa.prototype.I7e = function (e) {
    this.oH = e;
  };
  Pa.prototype.i5e = function () {
    return this.fJ;
  };
  Pa.prototype.K7e = function (e) {
    this.fJ = e;
  };
  Pa.prototype.p5e = function () {
    return this.W;
  };
  Pa.prototype.M7e = function (e) {
    this.W = e;
  };
  Pa.prototype.s5e = function () {
    return this.KG;
  };
  Pa.prototype.O7e = function (e) {
    this.KG = e;
  };
  Pa.prototype.fwb = function () {
    return this.ka;
  };
  Pa.prototype.P7e = function (e) {
    this.ka = e;
  };
  Pa.prototype.v5e = function () {
    return this.wD;
  };
  Pa.prototype.Q7e = function (e) {
    this.wD = e;
  };
  Pa.prototype.gwb = function () {
    return this.la;
  };
  Pa.prototype.R7e = function (e) {
    this.la = e;
  };
  Pa.prototype.w5e = function () {
    return this.rE;
  };
  Pa.prototype.S7e = function (e) {
    this.rE = e;
  };
  Pa.prototype.Yvb = function () {
    return this.nc;
  };
  Pa.prototype.Wrc = function (e) {
    this.nc = e;
  };
  Pa.prototype.Hrc = function () {
    return this.Pb;
  };
  Pa.prototype.nsc = function (e) {
    this.Pb = e;
  };
  Pa.prototype.z1e = function () {
    return this.wf;
  };
  Pa.prototype.o6e = function (e) {
    this.wf = e;
  };
  Pa.prototype.s6e = function (e) {
    this.Fgc = e;
  };
  qe.prototype = {
    ZTb: function () {
      return this.qc;
    }, Q2e: function () {
      return this.jj;
    }, S_e: function () {
      return this.Ji;
    },
    G_e: function () {
      return this.kg;
    }, gUb: function (e) {
      this.qc = e;
    }, P6e: function (e) {
      this.jj = e;
    }, Q5e: function (e) {
      this.Ji = e;
    }, M5e: function (e) {
      this.kg = e;
    }
  };
  kf.prototype = {
    A9: function () {
      return this.Ba;
    }, iwb: function (e) {
      this.Ba = e;
    }, B9: function () {
      return this.Ra;
    }, jwb: function (e) {
      this.Ra = e;
    }, x1e: function () {
      return this.Ae;
    }, m6e: function (e) {
      this.Ae = e;
    }
  };
  gf.prototype = {
    S0e: function () {
      return this.Hp;
    }, e6e: function (e) {
      this.Hp = e;
    }, g2e: function () {
      return this.$b;
    }, D6e: function (e) {
      this.$b = e;
    }, B2e: function () {
      return this.Me;
    }, F6e: function (e) {
      this.Me =
        e;
    }, C2e: function () {
      return this.Kn;
    }, G6e: function (e) {
      this.Kn = e;
    }, D2e: function () {
      return this.Zn;
    }, H6e: function (e) {
      this.Zn = e;
    }, J3e: function () {
      return this.Lp;
    }, Z6e: function (e) {
      this.Lp = e;
    }, q5e: function () {
      return this.Op;
    }, N7e: function (e) {
      this.Op = e;
    }, I4e: function () {
      return this.dc;
    }, t7e: function (e) {
      this.dc = e;
    }, Yvb: function () {
      return this.nc;
    }, Wrc: function (e) {
      this.nc = e;
    }, Hrc: function () {
      return this.Pb;
    }, nsc: function (e) {
      this.Pb = e;
    }, QZa: function () {
      return this.eo;
    }, g0e: function () {
      return this.Poa;
    }, Mrc: function () {
      return this.p0;
    },
    y7e: function (e) {
      this.p0 = e;
    }, Nrc: function () {
      return this.n1;
    }, z7e: function (e) {
      this.n1 = e;
    }, E4e: function () {
      return this.gl;
    }, r7e: function (e) {
      this.gl = e;
    }, H_e: function () {
      return this.oU;
    }, N5e: function (e) {
      this.oU = e;
    }, sac: function () {
      return this.fj;
    }, u7e: function (e) {
      this.fj = e;
    }, a1e: function () {
      return this.Fj;
    }, h6e: function (e) {
      this.Fj = e;
    }, Z4e: function () {
      return this.TU;
    }, D7e: function (e) {
      this.TU = e;
    }, dwb: function () {
      return this.we;
    }, ksc: function (e) {
      this.we = e;
    }, U4e: function () {
      return this.ug;
    }, A7e: function (e) {
      this.ug = e;
    }, f1e: function () {
      return this.uv;
    },
    i6e: function (e) {
      this.uv = e;
    }, K1e: function () {
      return this.vi;
    }, r6e: function (e) {
      this.vi = e;
    }, e0e: function () {
      return this.G3;
    }, f0e: function () {
      return this.iVa;
    }, H3e: function () {
      return this.Ts;
    }, Y6e: function (e) {
      this.Ts = e;
    }, I3e: function () {
      return this.Kpa;
    }, U5e: function (e) {
      this.VSa = e;
    }, $_e: function () {
      return this.VSa;
    }, S5e: function (e) {
      this.Jta = e;
    }, Y_e: function () {
      return this.Jta;
    }, W6e: function (e) {
      this.dJa = e;
    }, D3e: function () {
      return this.dJa;
    }, Z_e: function () {
      return this.Kta;
    }, T5e: function (e) {
      this.Kta = e;
    }, a0e: function () {
      return this.zHa;
    },
    V5e: function (e) {
      this.zHa = e;
    }, t_e: function () {
      return this.w9a;
    }, v_e: function () {
      return this.y9a;
    }, u_e: function () {
      return this.x9a;
    }, w_e: function () {
      return this.z9a;
    }
  };
  Ie.prototype = {
    sE: function () {
      return this.Ia;
    }, zrc: function () {
      return this.Image;
    }
  };
  kg.prototype = {
    XTb: function () {
      return this.od;
    }, WTb: function () {
      return this.Tc;
    }, n2e: function () {
      return this.dqe;
    }
  };
  Di.prototype = {
    A9: function () {
      return this.Ba;
    }, iwb: function (e) {
      this.Ba = e;
    }, C9: function () {
      return this.Oa;
    }, psc: function (e) {
      this.Oa = e;
    }, gga: function () {
      return this.Ta;
    },
    Xrc: function (e) {
      this.Ta = e;
    }, B9: function () {
      return this.Ra;
    }, jwb: function (e) {
      this.Ra = e;
    }
  };
  gh.prototype = {
    constructor: gh, Mx: function () {
      return this.type;
    }, Tha: function (e) {
      this.type = e;
    }, uJa: function () {
      return this.fill;
    }, JTa: function (e) {
      this.fill = e;
    }, M4e: function () {
      return this.stroke;
    }, v7e: function (e) {
      this.stroke = e;
    }, Erc: function () {
      return this.Ny;
    }, jsc: function (e) {
      this.Ny = e;
    }, k0e: function () {
      return this.rQ;
    }, X5e: function (e) {
      this.rQ = e;
    }, orc: function () {
      return this.VM;
    }, d8e: function (e) {
      this.VM = e;
    }, L1e: function () {
      return this.Mba;
    },
    M8e: function (e) {
      this.Mba = e;
    }, QZa: function () {
      return this.eo;
    }, e9e: function (e) {
      this.eo = e;
    }, gea: function () {
      return this.lb;
    }, kwb: function (e) {
      this.lb = e;
    }, eea: function () {
      return this.zb;
    }, dsc: function (e) {
      this.zb = e;
    }, Rrc: function () {
      return this.IK;
    }, rsc: function (e) {
      this.IK = e;
    }, Qrc: function () {
      return this.ci;
    }, qsc: function (e) {
      this.ci = e;
    }, Y4e: function () {
      return this.vC;
    }, C7e: function (e) {
      this.vC = e;
    }, Brc: function () {
      return this.Ut;
    }, hsc: function (e) {
      this.Ut = e;
    }, Sha: function () {
      return this.title;
    }, VNa: function (e) {
      this.title = e;
    }, cIa: function () {
      return this.description;
    },
    hwb: function (e) {
      this.description = e;
    }, prc: function () {
      return this.columnNumber;
    }, Yrc: function (e) {
      this.columnNumber = e;
    }, qrc: function () {
      return this.PT;
    }, Zrc: function (e) {
      this.PT = e;
    }, aUb: function () {
      return this.nRa;
    }, n7e: function (e) {
      this.nRa = e;
    }, M1e: function () {
      return this.Tka;
    }, t6e: function (e) {
      this.Tka = e;
    }, Frc: function () {
      return this.Sd;
    }, lsc: function (e) {
      this.Sd = e;
    }, Grc: function () {
      return this.qsa;
    }, msc: function (e) {
      this.qsa = e;
    }, urc: function () {
      return this.Wf;
    }, $rc: function (e) {
      this.Wf = e;
    }, wrc: function () {
      return this.Xf;
    }, bsc: function (e) {
      this.Xf =
        e;
    }, vrc: function () {
      return this.XEa;
    }, asc: function (e) {
      this.XEa = e;
    }, xrc: function () {
      return this.YEa;
    }, csc: function (e) {
      this.YEa = e;
    }, Irc: function () {
      return this.RD;
    }, osc: function (e) {
      this.RD = e;
    }, nrc: function () {
      return this.anchor;
    }, Vrc: function (e) {
      this.anchor = e;
    }
  };
  ue.prototype.JTa = function (e) {
    this.ub = e;
  };
  ue.prototype.uJa = function () {
    return this.ub;
  };
  ue.prototype.gUb = function (e) {
    this.qc = e;
  };
  ue.prototype.ZTb = function () {
    return this.qc;
  };
  ue.prototype.Ird = function (e) {
    this.gpa = e;
  };
  ue.prototype.oac = function () {
    return this.gpa;
  };
  ue.prototype.w7e = function (e) {
    this.ef = e;
  };
  ue.prototype.bUb = function () {
    return this.ef;
  };
  Wc.prototype.G0a = function () {
    return this.He;
  };
  Wc.prototype.RGa = function (e) {
    this.He = e;
  };
  Wc.prototype.H0a = function () {
    return this.yq;
  };
  Wc.prototype.XJa = function (e) {
    this.yq = e;
  };
  Wc.prototype.Oga = function () {
    return this.Ze;
  };
  Wc.prototype.naa = function (e) {
    this.Ze = e;
  };
  Wc.prototype.xQ = function () {
    return this.pa;
  };
  Wc.prototype.kP = function (e) {
    this.pa = e;
  };
  Wc.prototype.Rwc = function () {
    return this.fh;
  };
  Wc.prototype.$Kc = function (e) {
    this.fh = e;
  };
  Xc.prototype.G0a = function () {
    return this.He;
  };
  Xc.prototype.RGa = function (e) {
    this.He = e;
  };
  Xc.prototype.H0a = function () {
    return this.yq;
  };
  Xc.prototype.XJa = function (e) {
    this.yq = e;
  };
  Xc.prototype.Oga = function () {
    return this.Ze;
  };
  Xc.prototype.naa = function (e) {
    this.Ze = e;
  };
  Xc.prototype.xQ = function () {
    return this.pa;
  };
  Xc.prototype.kP = function (e) {
    this.pa = e;
  };
  Xc.prototype.Rwc = function () {
    return this.fh;
  };
  Xc.prototype.$Kc = function (e) {
    this.fh = e;
  };
  Td.prototype.tBa = function () {
    return this.ka;
  };
  Td.prototype.Byf = function (e) {
    this.ka = e;
  };
  Td.prototype.uBa = function () {
    return this.la;
  };
  Td.prototype.Dyf = function (e) {
    this.la = e;
  };
  id.prototype = {
    constructor: id, s0e: function () {
      return this.gva;
    }, Z5e: function (e) {
      this.gva = e;
    }, h0e: function () {
      return this.H3;
    }, gea: function () {
      return this.od;
    }, kwb: function (e) {
      this.od = e;
    }, eea: function () {
      return this.Tc;
    }, dsc: function (e) {
      this.Tc = e;
    }, u5e: function () {
      return this.uL;
    }, i2d: function (e) {
      this.uL = e;
    }, Erc: function () {
      return this.gw;
    }, jsc: function (e) {
      this.gw = e;
    }, I_e: function () {
      return this.Bz;
    }, O5e: function (e) {
      this.Bz = e;
    }, dwb: function () {
      return this.we;
    },
    ksc: function (e) {
      this.we = e;
    }, V3e: function () {
      return this.Cf;
    }, Nrd: function (e) {
      this.Cf = e;
    }, W3e: function () {
      return this.Ef;
    }, Ord: function (e) {
      this.Ef = e;
    }, B4e: function () {
      return this.pz;
    }, p7e: function (e) {
      this.pz = e;
    }, C4e: function () {
      return this.qz;
    }, q7e: function (e) {
      this.qz = e;
    }, l5e: function (e) {
      return null != this.Mu ? this.Mu.ZSa(e) : 0;
    }, m5e: function (e) {
      return null != this.Mu ? this.Mu.$Sa(e) : 0;
    }, e2e: function () {
      return this.Am;
    }, esc: function (e) {
      this.Am = e;
    }, R1e: function () {
      return this.Qda;
    }, x6e: function (e) {
      this.Qda = e;
    }, vRd: function () {
      return this.mIa;
    },
    ARd: function (e) {
      this.mIa = e;
    }, x5e: function () {
      return this.eVd;
    }, T7e: function (e) {
      this.eVd = e;
    }, r4e: function () {
      return this.Csa;
    }, l7e: function (e) {
      this.Csa = e;
    }, q4e: function () {
      return this.lia;
    }, k7e: function (e) {
      this.lia = e;
    }, p4e: function () {
      return this.kia;
    }, j7e: function (e) {
      this.kia = e;
    }, Rrc: function () {
      return this.IK;
    }, rsc: function (e) {
      this.IK = e;
    }, Qrc: function () {
      return this.ci;
    }, qsc: function (e) {
      this.ci = e;
    }, QZa: function () {
      return this.eo;
    }, Brc: function () {
      return this.Ut;
    }, hsc: function (e) {
      this.Ut = e;
    }, x0e: function () {
      return this.AS;
    },
    $5e: function (e) {
      this.AS = e;
    }, s4e: function () {
      return this.dm;
    }, m7e: function (e) {
      this.dm = e;
    }, TNa: function (w) {
      if (f.AscFormat.hb(this.pAa) && f.AscFormat.hb(this.oAa)) return new kg(this.pAa, this.oAa, !0);
      if (null === this.Am) return new kg(50, 50, !1);
      var y = 0, Ra = 0;
      w = w.tt.Z_[Cf.jW(this.Am)];
      w != e && null != w.Image && w.sz == f.AscFonts.KAa.Sea ? (y = w.Image.width, Ra = w.Image.height) : f.AscDesktopEditor && f.AscDesktopEditor.GetImageOriginalSize && (w = f.AscDesktopEditor.GetImageOriginalSize(this.Am), 0 != w.W && 0 != w.Jb && (y = w.W, Ra = w.Jb));
      return 0 != y && 0 != Ra ? new kg(Math.max(y * Cf.PD, 1), Math.max(Ra * Cf.PD, 1), !0) : new kg(50, 50, !1);
    }, T3e: function () {
      return this.rAa;
    }, d7e: function (e) {
      this.rAa = e;
    }, S3e: function () {
      return this.qAa;
    }, c7e: function (e) {
      this.qAa = e;
    }, Sha: function () {
      return this.title;
    }, VNa: function (e) {
      this.title = e;
    }, cIa: function () {
      return this.description;
    }, hwb: function (e) {
      this.description = e;
    }, prc: function () {
      return this.columnNumber;
    }, Yrc: function (e) {
      this.columnNumber = e;
    }, qrc: function () {
      return this.PT;
    }, Zrc: function (e) {
      this.PT = e;
    }, aUb: function () {
      return this.dm ?
        this.dm.aUb() : e;
    }, Frc: function () {
      return this.Sd;
    }, lsc: function (e) {
      this.Sd = e;
    }, Grc: function () {
      return this.qsa;
    }, msc: function (e) {
      this.qsa = e;
    }, urc: function () {
      return this.Wf;
    }, $rc: function (e) {
      this.Wf = e;
    }, vrc: function () {
      return this.XEa;
    }, asc: function (e) {
      this.XEa = e;
    }, wrc: function () {
      return this.Xf;
    }, bsc: function (e) {
      this.Xf = e;
    }, xrc: function () {
      return this.YEa;
    }, csc: function (e) {
      this.YEa = e;
    }, h7e: function (e) {
      this.$lb = e;
    }, Irc: function () {
      return this.RD;
    }, osc: function (e) {
      this.RD = e;
    }, nrc: function () {
      return this.anchor;
    }, Vrc: function (e) {
      this.anchor =
        e;
    }
  };
  qb.prototype = {
    E3e: function () {
      return this.ea;
    }, F3e: function () {
      return this.pa;
    }
  };
  rc.prototype = {
    Mx: function () {
      return this.type;
    }, Tha: function (e) {
      this.type = e;
    }, uJa: function () {
      return this.fill;
    }, JTa: function (e) {
      this.fill = e;
    }, e5e: function () {
      return this.Ui;
    }, G7e: function (e) {
      this.Ui = e;
    }, grc: function () {
      return null != this.Ui || null != this.fill && null != this.fill.FXa ? !0 : !1;
    }
  };
  $e.prototype = {
    Mx: function () {
      return this.type;
    }, Tha: function (e) {
      this.type = e;
    }, cUb: function () {
      return this.url;
    }, WRa: function (e) {
      this.url = e;
    }, Brd: function () {
      return this.iNc;
    },
    E7e: function (e) {
      this.iNc = e;
    }
  };
  hi.prototype = {
    O3e: function () {
      return this.pDa;
    }, a7e: function (e) {
      this.pDa = e;
    }, D0e: function () {
      return this.Cn;
    }, b6e: function (e) {
      this.Cn = e;
    }, C0e: function () {
      return this.fo;
    }, a6e: function (e) {
      this.fo = e;
    }
  };
  og.prototype = {
    M0e: function () {
      return this.qVa;
    }, c6e: function (e) {
      this.qVa = e;
    }, X3e: function () {
      return this.FXa;
    }, f7e: function (e) {
      this.FXa = e;
    }, O1e: function () {
      return this.zWa;
    }, v6e: function (e) {
      this.zWa = e;
    }, R2e: function () {
      return this.jXa;
    }, Q6e: function (e) {
      this.jXa = e;
    }, S2e: function () {
      return this.kXa;
    },
    R6e: function (e) {
      this.kXa = e;
    }, M3e: function () {
      return this.bkc;
    }, $6e: function (e) {
      this.bkc = e;
    }
  };
  $g.prototype = {
    HT: function () {
      return this.color;
    }, RZa: function (e) {
      this.color = e;
    }
  };
  ek.prototype = {
    Mx: function () {
      return this.type;
    }, Tha: function (e) {
      this.type = e;
    }, gea: function () {
      return this.width;
    }, kwb: function (e) {
      this.width = e;
    }, HT: function () {
      return this.color;
    }, RZa: function (e) {
      this.color = e;
    }, Y2e: function () {
      return this.YCa;
    }, Mrd: function (e) {
      this.YCa = e;
    }, V2e: function () {
      return this.osb;
    }, Krd: function (e) {
      this.osb = e;
    }, U2e: function () {
      return this.Ric;
    },
    fsc: function (e) {
      this.Ric = e;
    }, T2e: function () {
      return this.Qic;
    }, Jrd: function (e) {
      this.Qic = e;
    }, X2e: function () {
      return this.Tic;
    }, gsc: function (e) {
      this.Tic = e;
    }, W2e: function () {
      return this.jL;
    }, Lrd: function (e) {
      this.jL = e;
    }, orc: function () {
      return this.VM;
    }, g7e: function (e) {
      this.FE = e;
    }, a4e: function () {
      return this.FE;
    }
  };
  ah.prototype.ilf = function () {
    return this.be;
  };
  ah.prototype.hYc = function () {
    return this.name;
  };
  ah.prototype.jlf = function () {
    return this.be[0];
  };
  ah.prototype.qlf = function () {
    return this.be[1];
  };
  ah.prototype.klf = function () {
    return this.be[2];
  };
  ah.prototype.rlf = function () {
    return this.be[3];
  };
  ah.prototype.blf = function () {
    return this.be[4];
  };
  ah.prototype.clf = function () {
    return this.be[5];
  };
  ah.prototype.dlf = function () {
    return this.be[6];
  };
  ah.prototype.elf = function () {
    return this.be[7];
  };
  ah.prototype.flf = function () {
    return this.be[8];
  };
  ah.prototype.glf = function () {
    return this.be[9];
  };
  ah.prototype.plf = function () {
    return this.be[10];
  };
  ah.prototype.llf = function () {
    return this.be[11];
  };
  ah.prototype.Ad = function (e) {
    this.be.push(e);
    this.x5b += e.Vif();
  };
  ah.prototype.isEqual =
    function (e) {
      if (this.x5b === e.x5b) {
        for (var f = 0; f < this.be.length; ++f) {
          var w = this.be[f], y = e.be[f];
          if (!(!w && !y || y && y && w.ih(y))) return !1;
        }
        return this.name === e.name;
      }
      return !1;
    };
  Cc.prototype.AN = function () {
    return this.ea;
  };
  Cc.prototype.tBa = function () {
    return this.wN;
  };
  Cc.prototype.uBa = function () {
    return this.xN;
  };
  Cc.prototype.pXb = function () {
    return this.Ri;
  };
  Cc.prototype.Ala = function () {
    return this.Yl;
  };
  Cc.prototype.Ijf = function () {
    return this.rpa;
  };
  Cc.prototype.nkf = function () {
    return this.dDa;
  };
  Cc.prototype.Ejf = function () {
    return this.Text;
  };
  Cc.prototype.Djf = function () {
    return this.Number;
  };
  Oc.prototype.xQ = function () {
    return this.pa;
  };
  Oc.prototype.kP = function (e) {
    this.pa = e;
  };
  Oc.prototype.Wyd = function () {
    return this.uA;
  };
  Oc.prototype.AHd = function (e) {
    this.uA = e ? e.slice(0, Mc.Rtd) : e;
  };
  Oc.prototype.LJa = function () {
    return this.Text;
  };
  Oc.prototype.sAa = function (e) {
    this.Text = e;
  };
  Oc.prototype.SKc = function (e) {
    this.Na = e;
  };
  Oc.prototype.B8b = function () {
    return this.Na;
  };
  Oc.prototype.$of = function () {
    return '_top' === this.gr;
  };
  Oc.prototype.vyf = function () {
    this.gr = '_top';
  };
  Oc.prototype.ywc = function () {
    return this.gr;
  };
  Oc.prototype.GSc = function (e) {
    this.gr = e;
  };
  Oc.prototype.Zof = function () {
    return this.dna instanceof AscCommonWord.Ua ? !0 : !1;
  };
  Oc.prototype.zZc = function (e) {
    this.dna = e;
  };
  Oc.prototype.pbc = function () {
    return this.dna;
  };
  f.Asc.CHyperlinkProperty = f.Asc.lkb = Oc;
  Oc.prototype.get_Value = Oc.prototype.xQ;
  Oc.prototype.put_Value = Oc.prototype.kP;
  Oc.prototype.get_ToolTip = Oc.prototype.Wyd;
  Oc.prototype.put_ToolTip = Oc.prototype.AHd;
  Oc.prototype.get_Text = Oc.prototype.LJa;
  Oc.prototype.put_Text =
    Oc.prototype.sAa;
  Oc.prototype.get_InternalHyperlink = Oc.prototype.B8b;
  Oc.prototype.put_InternalHyperlink = Oc.prototype.SKc;
  Oc.prototype.is_TopOfDocument = Oc.prototype.$of;
  Oc.prototype.put_TopOfDocument = Oc.prototype.vyf;
  Oc.prototype.get_Bookmark = Oc.prototype.ywc;
  Oc.prototype.put_Bookmark = Oc.prototype.GSc;
  Oc.prototype.is_Heading = Oc.prototype.Zof;
  Oc.prototype.put_Heading = Oc.prototype.zZc;
  Oc.prototype.get_Heading = Oc.prototype.pbc;
  kc.prototype.K7b = kc.prototype.sHd = function (e) {
    this.Ia = e;
  };
  kc.prototype.sE = kc.prototype.F0a =
    function () {
      return this.Ia;
    };
  kc.prototype.u6e = function (e) {
    this.w7c = e;
  };
  kc.prototype.N1e = kc.prototype.B4d = function () {
    return this.w7c;
  };
  kc.prototype.n6e = function (e) {
    this.T6c = e;
  };
  kc.prototype.VTb = kc.prototype.Cwc = function () {
    return this.T6c;
  };
  kc.prototype.M6e = function (e) {
    this.Aad = e;
  };
  kc.prototype.YTb = kc.prototype.Kwc = function () {
    return this.Aad;
  };
  var w = rk.prototype;
  w.F0a = w.sE = function () {
    return this.Ia;
  };
  w.sHd = w.K7b = function (e) {
    this.Ia = e;
  };
  w.zRc = w.cUb = function () {
    return this.S_;
  };
  w.xyf = w.WRa = function (e) {
    this.S_ = e;
  };
  w.eYc = w.Sha = function () {
    return this.GW;
  };
  w.VDg = w.VNa = function (e) {
    this.GW = e;
  };
  w.E0a = w.G1e = function () {
    return this.Bk;
  };
  w.d4b = w.q6e = function (e) {
    this.Bk = e;
  };
  w.eyg = w.h5e = function () {
    return this.kSb;
  };
  w.YDg = w.J7e = function (e) {
    this.kSb = e;
  };
  w.Tkf = w.b5e = function () {
    return this.doc;
  };
  w.WDg = w.F7e = function (e) {
    this.doc = e;
  };
  w.Wxg = function () {
    return this.NRa;
  };
  w.uHd = function (e) {
    this.NRa = e;
  };
  w.Ala = w.wJa = function () {
    return this.Gwa ? this.Gwa.F0a() : null;
  };
  w.rJb = w.$Aa = function () {
    return this.Gwa ? this.Gwa.B4d() : null;
  };
  w.Cwc = w.VTb = function () {
    return this.Gwa ?
      this.Gwa.Cwc() : null;
  };
  w.Kwc = w.YTb = function () {
    return this.Gwa ? this.Gwa.Kwc() : null;
  };
  w.Xxg = w.vJa = function () {
    return this.Zcd;
  };
  w.MDg = w.X6e = function (e) {
    this.Zcd = e;
  };
  w.gjf = w.d0e = function () {
    return this.h2c;
  };
  w.CDg = w.W5e = function (e) {
    this.h2c = e;
  };
  w.Skf = w.W4e = function () {
    return this.Okd;
  };
  w.UDg = w.B7e = function (e) {
    this.Okd = e;
  };
  w.l9f = w.f5e = function () {
    return this.Gwa;
  };
  w.XDg = w.H7e = function (e) {
    this.Gwa = e;
  };
  w.skf = w.w3e = function () {
    return this.qo;
  };
  w.LDg = w.T6e = function (e) {
    this.qo = e;
  };
  w.vkf = w.Q3e = function () {
    return this.Permissions;
  };
  w.NDg = w.b7e = function (e) {
    this.Permissions = e;
  };
  w.efb = w.F2e = function () {
    return this.Uf;
  };
  w.HSc = w.J6e = function (e) {
    this.Uf = e;
  };
  w.Awc = w.r1e = function () {
    return this.h6c;
  };
  w.cxf = w.k6e = function (e) {
    this.h6c = e;
  };
  w.Kyd = w.s1e = function () {
    return this.i6c;
  };
  w.DDg = w.l6e = function (e) {
    this.i6c = e;
  };
  bh.prototype.Mx = function () {
    return this.ea;
  };
  bh.prototype.E1e = function () {
    return this.i7c;
  };
  bh.prototype.X0e = function () {
    return this.oMb;
  };
  bh.prototype.f2e = function () {
    return this.CUc;
  };
  bh.prototype.Y0e = function () {
    return this.o6b;
  };
  qc.prototype.kP =
    function (e) {
      this.pa = e;
    };
  qc.prototype.xQ = function () {
    return this.pa;
  };
  un.prototype.F0a = function () {
    return this.Ia;
  };
  un.prototype.tBa = function () {
    return this.ka;
  };
  un.prototype.uBa = function () {
    return this.la;
  };
  Kd.prototype.F0a = function () {
    return this.Ia;
  };
  Kd.prototype.wjf = function () {
    return this.ob;
  };
  Kd.prototype.sBa = function () {
    return this.W;
  };
  Kd.prototype.b8a = function () {
    return this.Jb;
  };
  Gf.prototype.sE = Gf.prototype.oC = Gf.prototype.rBa = function () {
    return this.name;
  };
  Gf.prototype.tRd = function () {
    return this.displayName;
  };
  Gf.prototype.Mx = Gf.prototype.AN = function () {
    return this.type;
  };
  Gf.prototype.zrc = function () {
    return this.image;
  };
  Vk.prototype.Zkf = function () {
    return this.Tl;
  };
  Vk.prototype.qjf = function () {
    return this.$t;
  };
  Vk.prototype.Ykf = function () {
    return this.Iwa;
  };
  ce.prototype.get_Description = function () {
    return this.description;
  };
  ce.prototype.set_Description = function (e) {
    this.description = e;
  };
  ce.prototype.get_Url = function () {
    return this.url;
  };
  ce.prototype.set_Url = function (e) {
    this.url = e;
  };
  ce.prototype.get_Icons = function () {
    return this.j4;
  };
  ce.prototype.set_Icons = function (e) {
    this.j4 = e;
  };
  ce.prototype.get_System = function () {
    return this.HI;
  };
  ce.prototype.set_System = function (e) {
    this.HI = e;
  };
  ce.prototype.get_Viewer = function () {
    return this.OAb;
  };
  ce.prototype.set_Viewer = function (e) {
    this.OAb = e;
  };
  ce.prototype.get_EditorsSupport = function () {
    return this.$Va;
  };
  ce.prototype.set_EditorsSupport = function (e) {
    this.$Va = e;
  };
  ce.prototype.get_Visual = function () {
    return this.lhb;
  };
  ce.prototype.set_Visual = function (e) {
    this.lhb = e;
  };
  ce.prototype.get_Modal = function () {
    return this.LAb;
  };
  ce.prototype.set_Modal = function (e) {
    this.LAb = e;
  };
  ce.prototype.get_InsideMode = function () {
    return this.JAb;
  };
  ce.prototype.set_InsideMode = function (e) {
    this.JAb = e;
  };
  ce.prototype.get_CustomWindow = function () {
    return this.GAb;
  };
  ce.prototype.set_CustomWindow = function (e) {
    this.GAb = e;
  };
  ce.prototype.get_InitDataType = function () {
    return this.initDataType;
  };
  ce.prototype.set_InitDataType = function (e) {
    this.initDataType = e;
  };
  ce.prototype.get_InitData = function () {
    return this.initData;
  };
  ce.prototype.set_InitData = function (e) {
    this.initData =
      e;
  };
  ce.prototype.get_UpdateOleOnResize = function () {
    return this.khb;
  };
  ce.prototype.set_UpdateOleOnResize = function (e) {
    this.khb = e;
  };
  ce.prototype.get_Buttons = function () {
    return this.buttons;
  };
  ce.prototype.set_Buttons = function (e) {
    this.buttons = e;
  };
  ce.prototype.get_Size = function () {
    return this.size;
  };
  ce.prototype.set_Size = function (e) {
    this.size = e;
  };
  ce.prototype.get_InitOnSelectionChanged = function () {
    return this.Tgb;
  };
  ce.prototype.set_InitOnSelectionChanged = function (e) {
    this.Tgb = e;
  };
  ce.prototype.get_Events = function () {
    return this.nla;
  };
  ce.prototype.set_Events = function (e) {
    if (e) for (this.nla = e.slice(0, e.length), this.gvc = {}, e = 0; e < this.nla.length; e++) this.gvc[this.nla[e]] = !0;
  };
  ce.prototype.serialize = function () {
    var e = {};
    e.description = this.description;
    e.url = this.url;
    e.index = this.index;
    e.icons = this.j4;
    e.isViewer = this.OAb;
    e.EditorsSupport = this.$Va;
    e.isSystem = this.HI;
    e.isVisual = this.lhb;
    e.isModal = this.LAb;
    e.isInsideMode = this.JAb;
    e.isCustomWindow = this.GAb;
    e.initDataType = this.initDataType;
    e.initData = this.initData;
    e.isUpdateOleOnResize = this.khb;
    e.buttons = this.buttons;
    e.size = this.size;
    e.initOnSelectionChanged = this.Tgb;
    return e;
  };
  ce.prototype.deserialize = function (e) {
    this.description = null != e.description ? e.description : this.description;
    this.url = null != e.url ? e.url : this.url;
    this.index = null != e.index ? e.index : this.index;
    this.j4 = null != e.icons ? e.icons : this.j4;
    this.OAb = null != e.isViewer ? e.isViewer : this.OAb;
    this.$Va = null != e.EditorsSupport ? e.EditorsSupport : this.$Va;
    this.lhb = null != e.isVisual ? e.isVisual : this.lhb;
    this.LAb = null != e.isModal ? e.isModal : this.LAb;
    this.JAb = null != e.isInsideMode ? e.isInsideMode : this.JAb;
    this.GAb = null != e.isCustomWindow ? e.isCustomWindow : this.GAb;
    this.initDataType = null != e.initDataType ? e.initDataType : this.initDataType;
    this.initData = null != e.initData ? e.initData : this.initData;
    this.khb = null != e.isUpdateOleOnResize ? e.isUpdateOleOnResize : this.khb;
    this.buttons = null != e.buttons ? e.buttons : this.buttons;
    this.size = null != e.size ? e.size : this.size;
    this.Tgb = null != e.initOnSelectionChanged ? e.initOnSelectionChanged : this.Tgb;
  };
  If.prototype.get_Name = function () {
    return this.name;
  };
  If.prototype.set_Name = function (e) {
    this.name = e;
  };
  If.prototype.get_Guid = function () {
    return this.Qz;
  };
  If.prototype.set_Guid = function (e) {
    this.Qz = e;
  };
  If.prototype.get_BaseUrl = function () {
    return this.Qqa;
  };
  If.prototype.set_BaseUrl = function (e) {
    this.Qqa = e;
  };
  If.prototype.get_Variations = function () {
    return this.RQ;
  };
  If.prototype.set_Variations = function (e) {
    this.RQ = e;
  };
  If.prototype.serialize = function () {
    var e = {};
    e.name = this.name;
    e.guid = this.Qz;
    e.baseUrl = this.Qqa;
    e.variations = [];
    for (var f = 0; f < this.RQ.length; f++) e.variations.push(this.RQ[f].serialize());
    return e;
  };
  If.prototype.deserialize = function (e) {
    this.name = null != e.name ? e.name : this.name;
    this.Qz = null != e.guid ? e.guid : this.Qz;
    this.Qqa = null != e.baseUrl ? e.baseUrl : this.Qqa;
    this.RQ = [];
    for (var f = 0; f < e.variations.length; f++) {
      var w = new ce;
      w.deserialize(e.variations[f]);
      this.RQ.push(w);
    }
  };
  f.AscCommon = f.AscCommon || {};
  f.Asc = f.Asc || {};
  f.Asc.c_oAscArrUserColors = f.Asc.Htd = [16757719, 7929702, 56805, 10081791, 12884479, 16751001, 6748927, 16762931, 6865407, 15650047, 16737894, 3407768, 16759142, 10852863, 6750176, 16774656, 13926655,
    13815039, 3397375, 11927347, 16752947, 9404671, 4980531, 16744678, 3407830, 15919360, 16731553, 52479, 13330175, 16743219, 3386367, 14221056, 16737966, 1896960, 65484, 10970879, 16759296, 16711680, 13496832, 62072, 49906, 16734720, 10682112, 7890687, 16731610, 65406, 38655, 16747008, 59890, 12733951, 15859712, 47077, 15050496, 15224319, 10154496, 58807, 16724950, 1759488, 9981439, 15064320, 15893248, 16724883, 58737, 15007744, 36594, 12772608, 12137471, 6442495, 15039488, 16718470, 14274816, 53721, 16718545, 1625088, 15881472, 13419776, 32985, 16711800, 1490688,
    16711884, 8991743, 13407488, 41932, 7978752, 15028480, 52387, 15007927, 12114176, 1421824, 55726, 13041893, 10665728, 30924, 49049, 14241024, 36530, 11709440, 13397504, 45710, 34214];
  f.AscCommon.RIa = Ia;
  f.AscCommon.vqb = cb;
  f.AscCommon.SIa = function () {
    function e() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }

    var f = '{' + e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e() + '}';
    return f = f.toUpperCase();
  };
  f.AscCommon.gkg = Xa;
  f.AscCommon.f$b = function () {
    return ib(Xa());
  };
  f.AscCommon.Wje = ib;
  w = f.Asc.c_oLicenseResult =
    f.Asc.Ytg = Ci;
  w.Error = w.Error;
  w.Expired = w.Hje;
  w.Success = w.WIe;
  w.UnknownUser = w.yLe;
  w.Connections = w.XLb;
  w.ExpiredTrial = w.Ije;
  w.SuccessLimit = w.XIe;
  w.UsersCount = w.cMe;
  w.ConnectionsOS = w.Sge;
  w.UsersCountOS = w.dMe;
  w = f.Asc.c_oRights = f.Asc.Ztg = jg;
  w.None = w.kf;
  w.Edit = w.uje;
  w.Review = w.CDe;
  w.Comment = w.Comment;
  w.View = w.Cub;
  w = f.Asc.c_oLicenseMode = f.Asc.Xtg = hd;
  w.None = w.kf;
  w.Trial = w.qLe;
  w.Developer = w.Wie;
  w = f.Asc.EPluginDataType = f.Asc.p$b = Jc;
  w.none = w.hs;
  w.text = w.text;
  w.ole = w.xrf;
  w.html = w.html;
  f.AscCommon.asc_CSignatureLine =
    f.AscCommon.ard = y;
  w = y.prototype;
  w.asc_getId = w.sE;
  w.asc_setId = w.R8e;
  w.asc_getGuid = w.ITa;
  w.asc_setGuid = w.O8e;
  w.asc_getSigner1 = w.Jrc;
  w.asc_setSigner1 = w.K9e;
  w.asc_getSigner2 = w.Krc;
  w.asc_setSigner2 = w.L9e;
  w.asc_getEmail = w.trc;
  w.asc_setEmail = w.F8e;
  w.asc_getInstructions = w.i2e;
  w.asc_setInstructions = w.T8e;
  w.asc_getShowDate = w.u4e;
  w.asc_setShowDate = w.H9e;
  w.asc_getValid = w.k5e;
  w.asc_setValid = w.P9e;
  w.asc_getDate = w.d1e;
  w.asc_setDate = w.u8e;
  w.asc_getVisible = w.yRd;
  w.asc_setVisible = w.zWc;
  w.asc_getRequested = w.f4e;
  w.asc_setRequested =
    w.A9e;
  f.AscCommon.Wqd = kb;
  w = kb.prototype;
  w.asc_getLicenseType = w.P2e;
  w.asc_getCanCoAuthoring = w.j0e;
  w.asc_getCanReaderMode = w.l0e;
  w.asc_getCanBranding = w.i0e;
  w.asc_getCustomization = w.$0e;
  w.asc_getIsAutosaveEnable = w.m2e;
  w.asc_getAutosaveMinInterval = w.Q_e;
  w.asc_getIsAnalyticsEnable = w.j2e;
  w.asc_getIsLight = w.x2e;
  w.asc_getLicenseMode = w.O2e;
  w.asc_getRights = w.j4e;
  w.asc_getBuildVersion = w.X_e;
  w.asc_getBuildNumber = w.W_e;
  f.AscCommon.PZa = rb;
  w = rb.prototype;
  w.putMinValRule = w.msa;
  w.putMinVal = w.SQa;
  w.putMaxValRule = w.QGa;
  w.putMaxVal = w.Sib;
  w.putInvertValOrder = w.LCb;
  w.putLogScale = w.MKc;
  w.putLogBase = w.oHd;
  w.putUnits = w.pHd;
  w.putShowUnitsOnChart = w.MCb;
  w.putMajorTickMark = w.kha;
  w.putMinorTickMark = w.lha;
  w.putTickLabelsPos = w.mha;
  w.putCrossesRule = w.D2;
  w.putCrosses = w.uma;
  w.putDispUnitsRule = w.RQa;
  w.getDispUnitsRule = w.thf;
  w.putAxisType = w.LKc;
  w.getAxisType = w.XT;
  w.getMinValRule = w.fif;
  w.getMinVal = w.eif;
  w.getMaxValRule = w.bif;
  w.getMaxVal = w.aif;
  w.getInvertValOrder = w.Nhf;
  w.getLogScale = w.Zhf;
  w.getLogBase = w.Yhf;
  w.getUnits = w.zyd;
  w.getShowUnitsOnChart =
    w.Gif;
  w.getMajorTickMark = w.XWb;
  w.getMinorTickMark = w.ZWb;
  w.getTickLabelsPos = w.kXb;
  w.getCrossesRule = w.QWb;
  w.getCrosses = w.PWb;
  w.setDefault = w.QI;
  f.AscCommon.Uvb = mb;
  w = mb.prototype;
  w.putIntervalBetweenTick = w.Qib;
  w.putIntervalBetweenLabelsRule = w.Pib;
  w.putIntervalBetweenLabels = w.nHd;
  w.putInvertCatOrder = w.Z3b;
  w.putLabelsAxisDistance = w.Rib;
  w.putMajorTickMark = w.kha;
  w.putMinorTickMark = w.lha;
  w.putTickLabelsPos = w.mha;
  w.putCrossesRule = w.D2;
  w.putCrosses = w.uma;
  w.putAxisType = w.LKc;
  w.putLabelsPosition = w.lsa;
  w.putCrossMaxVal =
    w.lHd;
  w.putCrossMinVal = w.mHd;
  w.getIntervalBetweenTick = w.Wxd;
  w.getIntervalBetweenLabelsRule = w.Vxd;
  w.getIntervalBetweenLabels = w.Uxd;
  w.getInvertCatOrder = w.Xxd;
  w.getLabelsAxisDistance = w.Yxd;
  w.getMajorTickMark = w.XWb;
  w.getMinorTickMark = w.ZWb;
  w.getTickLabelsPos = w.kXb;
  w.getCrossesRule = w.QWb;
  w.getCrosses = w.PWb;
  w.getAxisType = w.XT;
  w.getLabelsPosition = w.Zxd;
  w.getCrossMaxVal = w.lhf;
  w.getCrossMinVal = w.mhf;
  w.setDefault = w.QI;
  f.Asc.asc_ChartSettings = f.Asc.mna = Ta;
  w = Ta.prototype;
  w.putStyle = w.QKc;
  w.putTitle = w.Vib;
  w.putRowCols =
    w.Iwf;
  w.putHorAxisLabel = w.KCb;
  w.putVertAxisLabel = w.NCb;
  w.putLegendPos = w.$3b;
  w.putDataLabelsPos = w.JCb;
  w.putCatAx = w.Fwf;
  w.putValAx = w.Jwf;
  w.getStyle = w.s3;
  w.getTitle = w.qra;
  w.getRowCols = w.wif;
  w.getHorAxisLabel = w.Rxd;
  w.getVertAxisLabel = w.Byd;
  w.getLegendPos = w.$xd;
  w.getDataLabelsPos = w.Yeb;
  w.getHorAx = w.Ghf;
  w.getVertAx = w.Xif;
  w.getHorGridLines = w.Sxd;
  w.putHorGridLines = w.Nib;
  w.getVertGridLines = w.Cyd;
  w.putVertGridLines = w.Xib;
  w.getType = w.fm;
  w.putType = w.Wib;
  w.putShowSerName = w.OKc;
  w.getShowSerName = w.Fif;
  w.putShowCatName =
    w.NKc;
  w.getShowCatName = w.Dif;
  w.putShowVal = w.PKc;
  w.getShowVal = w.Hif;
  w.putSeparator = w.a4b;
  w.getSeparator = w.zif;
  w.putHorAxisProps = w.E2;
  w.getHorAxisProps = w.oyb;
  w.putVertAxisProps = w.v$;
  w.getVertAxisProps = w.Cyb;
  w.putRange = w.Ylb;
  w.getRange = w.tx;
  w.putRanges = w.Gwf;
  w.getRanges = w.dXb;
  w.putInColumns = w.Oib;
  w.getInColumns = w.Zeb;
  w.putShowMarker = w.Tib;
  w.getShowMarker = w.Eif;
  w.putLine = w.r3a;
  w.getLine = w.Thf;
  w.putSmooth = w.Uib;
  w.getSmooth = w.Lif;
  w.changeType = w.qud;
  w.putShowHorAxis = w.vma;
  w.getShowHorAxis = w.iwc;
  w.putShowVerAxis =
    w.Dya;
  w.getShowVerAxis = w.jwc;
  f.AscCommon.sJa = yb;
  w = yb.prototype;
  w.asc_getX = w.fwb;
  w.asc_getY = w.gwb;
  w.asc_getWidth = w.gea;
  w.asc_getHeight = w.eea;
  f.AscCommon.BM = Va;
  w = Va.prototype;
  w.getR = w.dN;
  w.get_r = w.tlf;
  w.put_r = w.Gyf;
  w.getG = w.JY;
  w.get_g = w.mlf;
  w.put_g = w.Fyf;
  w.getB = w.IY;
  w.get_b = w.hlf;
  w.put_b = w.Eyf;
  w.getA = w.r0a;
  w.get_hex = w.olf;
  f.Asc.asc_CColor = f.Asc.ita = zb;
  w = zb.prototype;
  w.get_r = w.asc_getR = w.ewb;
  w.put_r = w.asc_putR = w.hUb;
  w.get_g = w.asc_getG = w.Zvb;
  w.put_g = w.asc_putG = w.eUb;
  w.get_b = w.asc_getB = w.Xvb;
  w.put_b = w.asc_putB =
    w.dUb;
  w.get_a = w.asc_getA = w.F_e;
  w.put_a = w.asc_putA = w.J7b;
  w.get_auto = w.asc_getAuto = w.O_e;
  w.put_auto = w.asc_putAuto = w.P5e;
  w.get_type = w.asc_getType = w.Mx;
  w.put_type = w.asc_putType = w.Tha;
  w.get_value = w.asc_getValue = w.UNa;
  w.put_value = w.asc_putValue = w.SZa;
  w.get_hex = w.asc_getHex = w.srd;
  w.get_color = w.asc_getColor = w.HT;
  w.get_hex = w.asc_getHex = w.srd;
  f.Asc.asc_CTextBorder = f.Asc.Qka = Ac;
  w = Ac.prototype;
  w.get_Color = w.asc_getColor = w.HT;
  w.put_Color = w.asc_putColor = w.RZa;
  w.get_Size = w.asc_getSize = w.Lrc;
  w.put_Size = w.asc_putSize =
    w.o7e;
  w.get_Value = w.asc_getValue = w.UNa;
  w.put_Value = w.asc_putValue = w.SZa;
  w.get_Space = w.asc_getSpace = w.H4e;
  w.put_Space = w.asc_putSpace = w.s7e;
  w.get_ForSelectedCells = w.asc_getForSelectedCells = w.F1e;
  w.put_ForSelectedCells = w.asc_putForSelectedCells = w.p6e;
  f.Asc.asc_CParagraphBorders = f.Asc.bsg = ec;
  w = ec.prototype;
  w.get_Left = w.asc_getLeft = w.A9;
  w.put_Left = w.asc_putLeft = w.iwb;
  w.get_Top = w.asc_getTop = w.C9;
  w.put_Top = w.asc_putTop = w.psc;
  w.get_Right = w.asc_getRight = w.B9;
  w.put_Right = w.asc_putRight = w.jwb;
  w.get_Bottom = w.asc_getBottom =
    w.gga;
  w.put_Bottom = w.asc_putBottom = w.Xrc;
  w.get_Between = w.asc_getBetween = w.T_e;
  w.put_Between = w.asc_putBetween = w.R5e;
  f.AscCommon.QZe = vc;
  w = vc.prototype;
  w.get_ListType = w.asc_getListType = w.a3e;
  w.get_ListSubType = w.asc_getListSubType = w.$2e;
  f.AscCommon.yFb = Xb;
  f.AscCommon.asc_CTextFontFamily = Xb;
  w = Xb.prototype;
  w.get_Name = w.asc_getName = w.rBa = w.oC;
  w.get_Index = w.asc_getIndex = w.IMf = w.fea;
  w.put_Name = w.asc_putName = w.w8a = w.V6e;
  w.put_Index = w.asc_putIndex = w.IDg = w.E6e;
  f.Asc.asc_CParagraphTab = f.Asc.dsg = Ma;
  w = Ma.prototype;
  w.get_Value = w.asc_getValue = w.UNa;
  w.put_Value = w.asc_putValue = w.SZa;
  w.get_Pos = w.asc_getPos = w.U3e;
  w.put_Pos = w.asc_putPos = w.e7e;
  w.get_Leader = w.asc_getLeader = w.L2e;
  w.put_Leader = w.asc_putLeader = w.O6e;
  f.Asc.asc_CParagraphTabs = f.Asc.esg = $a;
  w = $a.prototype;
  w.get_Count = w.asc_getCount = w.rrc;
  w.get_Tab = w.asc_getTab = w.S4e;
  w.add_Tab = w.asc_addTab = w.s_e;
  w.clear = w.clear = w.asc_clear = w.y_e;
  f.Asc.asc_CParagraphShd = f.Asc.tWc = jb;
  w = jb.prototype;
  w.get_Value = w.asc_getValue = w.UNa;
  w.put_Value = w.asc_putValue = w.SZa;
  w.get_Color =
    w.asc_getColor = w.HT;
  w.put_Color = w.asc_putColor = w.RZa;
  f.Asc.asc_CParagraphFrame = f.Asc.csg = Pa;
  w = Pa.prototype;
  w.asc_getDropCap = w.get_DropCap = w.o1e;
  w.asc_putDropCap = w.put_DropCap = w.j6e;
  w.asc_getH = w.get_H = w.T1e;
  w.asc_putH = w.put_H = w.y6e;
  w.asc_getHAnchor = w.get_HAnchor = w.U1e;
  w.asc_putHAnchor = w.put_HAnchor = w.z6e;
  w.asc_getHRule = w.get_HRule = w.V1e;
  w.asc_putHRule = w.put_HRule = w.A6e;
  w.asc_getHSpace = w.get_HSpace = w.W1e;
  w.asc_putHSpace = w.put_HSpace = w.B6e;
  w.asc_getLines = w.get_Lines = w.Arc;
  w.asc_putLines = w.put_Lines =
    w.S6e;
  w.asc_getVAnchor = w.get_VAnchor = w.g5e;
  w.asc_putVAnchor = w.put_VAnchor = w.I7e;
  w.asc_getVSpace = w.get_VSpace = w.i5e;
  w.asc_putVSpace = w.put_VSpace = w.K7e;
  w.asc_getW = w.get_W = w.p5e;
  w.asc_putW = w.put_W = w.M7e;
  w.asc_getWrap = w.get_Wrap = w.s5e;
  w.asc_putWrap = w.put_Wrap = w.O7e;
  w.asc_getX = w.get_X = w.fwb;
  w.asc_putX = w.put_X = w.P7e;
  w.asc_getXAlign = w.get_XAlign = w.v5e;
  w.asc_putXAlign = w.put_XAlign = w.Q7e;
  w.asc_getY = w.get_Y = w.gwb;
  w.asc_putY = w.put_Y = w.R7e;
  w.asc_getYAlign = w.get_YAlign = w.w5e;
  w.asc_putYAlign = w.put_YAlign = w.S7e;
  w.asc_getBorders = w.get_Borders = w.Yvb;
  w.asc_putBorders = w.put_Borders = w.Wrc;
  w.asc_getShade = w.get_Shade = w.Hrc;
  w.asc_putShade = w.put_Shade = w.nsc;
  w.asc_getFontFamily = w.get_FontFamily = w.z1e;
  w.asc_putFontFamily = w.put_FontFamily = w.o6e;
  w.asc_putFromDropCapMenu = w.put_FromDropCapMenu = w.s6e;
  f.AscCommon.RTb = qe;
  w = qe.prototype;
  w.get_Line = w.asc_getLine = w.ZTb;
  w.put_Line = w.asc_putLine = w.gUb;
  w.get_LineRule = w.asc_getLineRule = w.Q2e;
  w.put_LineRule = w.asc_putLineRule = w.P6e;
  w.get_Before = w.asc_getBefore = w.S_e;
  w.put_Before =
    w.asc_putBefore = w.Q5e;
  w.get_After = w.asc_getAfter = w.G_e;
  w.put_After = w.asc_putAfter = w.M5e;
  f.Asc.asc_CParagraphInd = f.Asc.sWc = kf;
  w = kf.prototype;
  w.get_Left = w.asc_getLeft = w.A9;
  w.put_Left = w.asc_putLeft = w.iwb;
  w.get_Right = w.asc_getRight = w.B9;
  w.put_Right = w.asc_putRight = w.jwb;
  w.get_FirstLine = w.asc_getFirstLine = w.x1e;
  w.put_FirstLine = w.asc_putFirstLine = w.m6e;
  f.Asc.asc_CParagraphProperty = f.Asc.mdb = gf;
  w = gf.prototype;
  w.get_ContextualSpacing = w.asc_getContextualSpacing = w.S0e;
  w.put_ContextualSpacing = w.asc_putContextualSpacing =
    w.e6e;
  w.get_Ind = w.asc_getInd = w.g2e;
  w.put_Ind = w.asc_putInd = w.D6e;
  w.get_Jc = w.asc_getJc = w.B2e;
  w.put_Jc = w.asc_putJc = w.F6e;
  w.get_KeepLines = w.asc_getKeepLines = w.C2e;
  w.put_KeepLines = w.asc_putKeepLines = w.G6e;
  w.get_KeepNext = w.asc_getKeepNext = w.D2e;
  w.put_KeepNext = w.asc_putKeepNext = w.H6e;
  w.get_PageBreakBefore = w.asc_getPageBreakBefore = w.J3e;
  w.put_PageBreakBefore = w.asc_putPageBreakBefore = w.Z6e;
  w.get_WidowControl = w.asc_getWidowControl = w.q5e;
  w.put_WidowControl = w.asc_putWidowControl = w.N7e;
  w.get_Spacing = w.asc_getSpacing =
    w.I4e;
  w.put_Spacing = w.asc_putSpacing = w.t7e;
  w.get_Borders = w.asc_getBorders = w.Yvb;
  w.put_Borders = w.asc_putBorders = w.Wrc;
  w.get_Shade = w.asc_getShade = w.Hrc;
  w.put_Shade = w.asc_putShade = w.nsc;
  w.get_Locked = w.asc_getLocked = w.QZa;
  w.get_CanAddTable = w.asc_getCanAddTable = w.g0e;
  w.get_Subscript = w.asc_getSubscript = w.Mrc;
  w.put_Subscript = w.asc_putSubscript = w.y7e;
  w.get_Superscript = w.asc_getSuperscript = w.Nrc;
  w.put_Superscript = w.asc_putSuperscript = w.z7e;
  w.get_SmallCaps = w.asc_getSmallCaps = w.E4e;
  w.put_SmallCaps = w.asc_putSmallCaps =
    w.r7e;
  w.get_AllCaps = w.asc_getAllCaps = w.H_e;
  w.put_AllCaps = w.asc_putAllCaps = w.N5e;
  w.get_Strikeout = w.asc_getStrikeout = w.sac;
  w.put_Strikeout = w.asc_putStrikeout = w.u7e;
  w.get_DStrikeout = w.asc_getDStrikeout = w.a1e;
  w.put_DStrikeout = w.asc_putDStrikeout = w.h6e;
  w.get_TextSpacing = w.asc_getTextSpacing = w.Z4e;
  w.put_TextSpacing = w.asc_putTextSpacing = w.D7e;
  w.get_Position = w.asc_getPosition = w.dwb;
  w.put_Position = w.asc_putPosition = w.ksc;
  w.get_Tabs = w.asc_getTabs = w.U4e;
  w.put_Tabs = w.asc_putTabs = w.A7e;
  w.get_DefaultTab = w.asc_getDefaultTab =
    w.f1e;
  w.put_DefaultTab = w.asc_putDefaultTab = w.i6e;
  w.get_FramePr = w.asc_getFramePr = w.K1e;
  w.put_FramePr = w.asc_putFramePr = w.r6e;
  w.get_CanAddDropCap = w.asc_getCanAddDropCap = w.e0e;
  w.get_CanAddImage = w.asc_getCanAddImage = w.f0e;
  w.get_OutlineLvl = w.asc_getOutlineLvl = w.H3e;
  w.put_OutlineLvl = w.asc_putOutLineLvl = w.Y6e;
  w.get_OutlineLvlStyle = w.asc_getOutlineLvlStyle = w.I3e;
  w.put_BulletSize = w.asc_putBulletSize = w.U5e;
  w.get_BulletSize = w.asc_getBulletSize = w.$_e;
  w.put_BulletColor = w.asc_putBulletColor = w.S5e;
  w.get_BulletColor =
    w.asc_getBulletColor = w.Y_e;
  w.put_NumStartAt = w.asc_putNumStartAt = w.W6e;
  w.get_NumStartAt = w.asc_getNumStartAt = w.D3e;
  w.get_BulletFont = w.asc_getBulletFont = w.Z_e;
  w.put_BulletFont = w.asc_putBulletFont = w.T5e;
  w.get_BulletSymbol = w.asc_getBulletSymbol = w.a0e;
  w.put_BulletSymbol = w.asc_putBulletSymbol = w.V5e;
  w.can_DeleteBlockContentControl = w.asc_canDeleteBlockContentControl = w.t_e;
  w.can_EditBlockContentControl = w.asc_canEditBlockContentControl = w.v_e;
  w.can_DeleteInlineContentControl = w.asc_canDeleteInlineContentControl =
    w.u_e;
  w.can_EditInlineContentControl = w.asc_canEditInlineContentControl = w.w_e;
  f.AscCommon.SZe = Ie;
  w = Ie.prototype;
  w.get_id = w.asc_getId = w.sE;
  w.get_image = w.asc_getImage = w.zrc;
  f.AscCommon.Zqd = kg;
  w = kg.prototype;
  w.get_ImageWidth = w.asc_getImageWidth = w.XTb;
  w.get_ImageHeight = w.asc_getImageHeight = w.WTb;
  w.get_IsCorrect = w.asc_getIsCorrect = w.n2e;
  f.Asc.asc_CPaddings = f.Asc.ldb = Di;
  w = Di.prototype;
  w.get_Left = w.asc_getLeft = w.A9;
  w.put_Left = w.asc_putLeft = w.iwb;
  w.get_Top = w.asc_getTop = w.C9;
  w.put_Top = w.asc_putTop = w.psc;
  w.get_Bottom =
    w.asc_getBottom = w.gga;
  w.put_Bottom = w.asc_putBottom = w.Xrc;
  w.get_Right = w.asc_getRight = w.B9;
  w.put_Right = w.asc_putRight = w.jwb;
  f.Asc.asc_CShapeProperty = f.Asc.F7a = gh;
  w = gh.prototype;
  w.get_type = w.asc_getType = w.Mx;
  w.put_type = w.asc_putType = w.Tha;
  w.get_fill = w.asc_getFill = w.uJa;
  w.put_fill = w.asc_putFill = w.JTa;
  w.get_stroke = w.asc_getStroke = w.M4e;
  w.put_stroke = w.asc_putStroke = w.v7e;
  w.get_paddings = w.asc_getPaddings = w.Erc;
  w.put_paddings = w.asc_putPaddings = w.jsc;
  w.get_CanFill = w.asc_getCanFill = w.k0e;
  w.put_CanFill = w.asc_putCanFill =
    w.X5e;
  w.get_CanChangeArrows = w.asc_getCanChangeArrows = w.orc;
  w.set_CanChangeArrows = w.asc_setCanChangeArrows = w.d8e;
  w.get_FromChart = w.asc_getFromChart = w.L1e;
  w.set_FromChart = w.asc_setFromChart = w.M8e;
  w.get_Locked = w.asc_getLocked = w.QZa;
  w.set_Locked = w.asc_setLocked = w.e9e;
  w.get_Width = w.asc_getWidth = w.gea;
  w.put_Width = w.asc_putWidth = w.kwb;
  w.get_Height = w.asc_getHeight = w.eea;
  w.put_Height = w.asc_putHeight = w.dsc;
  w.get_VerticalTextAlign = w.asc_getVerticalTextAlign = w.Rrc;
  w.put_VerticalTextAlign = w.asc_putVerticalTextAlign =
    w.rsc;
  w.get_Vert = w.asc_getVert = w.Qrc;
  w.put_Vert = w.asc_putVert = w.qsc;
  w.get_TextArtProperties = w.asc_getTextArtProperties = w.Y4e;
  w.put_TextArtProperties = w.asc_putTextArtProperties = w.C7e;
  w.get_LockAspect = w.asc_getLockAspect = w.Brc;
  w.put_LockAspect = w.asc_putLockAspect = w.hsc;
  w.get_Title = w.asc_getTitle = w.Sha;
  w.put_Title = w.asc_putTitle = w.VNa;
  w.get_Description = w.asc_getDescription = w.cIa;
  w.put_Description = w.asc_putDescription = w.hwb;
  w.get_ColumnNumber = w.asc_getColumnNumber = w.prc;
  w.put_ColumnNumber = w.asc_putColumnNumber =
    w.Yrc;
  w.get_ColumnSpace = w.asc_getColumnSpace = w.qrc;
  w.put_ColumnSpace = w.asc_putColumnSpace = w.Zrc;
  w.get_SignatureId = w.asc_getSignatureId = w.aUb;
  w.put_SignatureId = w.asc_putSignatureId = w.n7e;
  w.get_FromImage = w.asc_getFromImage = w.M1e;
  w.put_FromImage = w.asc_putFromImage = w.t6e;
  w.get_Rot = w.asc_getRot = w.Frc;
  w.put_Rot = w.asc_putRot = w.lsc;
  w.get_RotAdd = w.asc_getRotAdd = w.Grc;
  w.put_RotAdd = w.asc_putRotAdd = w.msc;
  w.get_FlipH = w.asc_getFlipH = w.urc;
  w.put_FlipH = w.asc_putFlipH = w.$rc;
  w.get_FlipV = w.asc_getFlipV = w.wrc;
  w.put_FlipV =
    w.asc_putFlipV = w.bsc;
  w.get_FlipHInvert = w.asc_getFlipHInvert = w.vrc;
  w.put_FlipHInvert = w.asc_putFlipHInvert = w.asc;
  w.get_FlipVInvert = w.asc_getFlipVInvert = w.xrc;
  w.put_FlipVInvert = w.asc_putFlipVInvert = w.csc;
  w.put_Shadow = w.dyf = w.put_shadow = w.Hyf = w.asc_putShadow = w.osc;
  w.get_Shadow = w.Dkf = w.get_shadow = w.ulf = w.asc_getShadow = w.Irc;
  w.put_Anchor = w.Kwf = w.asc_putAnchor = w.Vrc;
  w.get_Anchor = w.cjf = w.asc_getAnchor = w.nrc;
  f.Asc.asc_TextArtProperties = f.Asc.uWc = ue;
  w = ue.prototype;
  w.asc_putFill = w.JTa;
  w.asc_getFill = w.uJa;
  w.asc_putLine =
    w.gUb;
  w.asc_getLine = w.ZTb;
  w.asc_putForm = w.Ird;
  w.asc_getForm = w.oac;
  w.asc_putStyle = w.w7e;
  w.asc_getStyle = w.bUb;
  f.Asc.CImagePositionH = f.Asc.iee = Wc;
  w = Wc.prototype;
  w.get_RelativeFrom = w.G0a;
  w.put_RelativeFrom = w.RGa;
  w.get_UseAlign = w.H0a;
  w.put_UseAlign = w.XJa;
  w.get_Align = w.Oga;
  w.put_Align = w.naa;
  w.get_Value = w.xQ;
  w.put_Value = w.kP;
  w.get_Percent = w.Rwc;
  w.put_Percent = w.$Kc;
  f.Asc.CImagePositionV = f.Asc.jee = Xc;
  w = Xc.prototype;
  w.get_RelativeFrom = w.G0a;
  w.put_RelativeFrom = w.RGa;
  w.get_UseAlign = w.H0a;
  w.put_UseAlign = w.XJa;
  w.get_Align = w.Oga;
  w.put_Align = w.naa;
  w.get_Value = w.xQ;
  w.put_Value = w.kP;
  w.get_Percent = w.Rwc;
  w.put_Percent = w.$Kc;
  f.Asc.CPosition = f.Asc.DYd = Td;
  w = Td.prototype;
  w.get_X = w.tBa;
  w.put_X = w.Byf;
  w.get_Y = w.uBa;
  w.put_Y = w.Dyf;
  f.Asc.asc_CImgProperty = f.Asc.k3 = id;
  w = id.prototype;
  w.get_ChangeLevel = w.asc_getChangeLevel = w.s0e;
  w.put_ChangeLevel = w.asc_putChangeLevel = w.Z5e;
  w.get_CanBeFlow = w.asc_getCanBeFlow = w.h0e;
  w.get_Width = w.asc_getWidth = w.gea;
  w.put_Width = w.asc_putWidth = w.kwb;
  w.get_Height = w.asc_getHeight = w.eea;
  w.put_Height =
    w.asc_putHeight = w.dsc;
  w.get_WrappingStyle = w.asc_getWrappingStyle = w.u5e;
  w.put_WrappingStyle = w.asc_putWrappingStyle = w.i2d;
  w.get_Paddings = w.asc_getPaddings = w.Erc;
  w.put_Paddings = w.asc_putPaddings = w.jsc;
  w.get_AllowOverlap = w.asc_getAllowOverlap = w.I_e;
  w.put_AllowOverlap = w.asc_putAllowOverlap = w.O5e;
  w.get_Position = w.asc_getPosition = w.dwb;
  w.put_Position = w.asc_putPosition = w.ksc;
  w.get_PositionH = w.asc_getPositionH = w.V3e;
  w.put_PositionH = w.asc_putPositionH = w.Nrd;
  w.get_PositionV = w.asc_getPositionV = w.W3e;
  w.put_PositionV =
    w.asc_putPositionV = w.Ord;
  w.get_SizeRelH = w.asc_getSizeRelH = w.B4e;
  w.put_SizeRelH = w.asc_putSizeRelH = w.p7e;
  w.get_SizeRelV = w.asc_getSizeRelV = w.C4e;
  w.put_SizeRelV = w.asc_putSizeRelV = w.q7e;
  w.get_Value_X = w.asc_getValue_X = w.l5e;
  w.get_Value_Y = w.asc_getValue_Y = w.m5e;
  w.get_ImageUrl = w.asc_getImageUrl = w.e2e;
  w.put_ImageUrl = w.asc_putImageUrl = w.esc;
  w.get_Group = w.asc_getGroup = w.R1e;
  w.put_Group = w.asc_putGroup = w.x6e;
  w.get_FromGroup = w.asc_getFromGroup = w.vRd;
  w.put_FromGroup = w.asc_putFromGroup = w.ARd;
  w.get_isChartProps = w.asc_getisChartProps =
    w.x5e;
  w.put_isChartPross = w.asc_putisChartPross = w.T7e;
  w.get_SeveralCharts = w.asc_getSeveralCharts = w.r4e;
  w.put_SeveralCharts = w.asc_putSeveralCharts = w.l7e;
  w.get_SeveralChartTypes = w.asc_getSeveralChartTypes = w.q4e;
  w.put_SeveralChartTypes = w.asc_putSeveralChartTypes = w.k7e;
  w.get_SeveralChartStyles = w.asc_getSeveralChartStyles = w.p4e;
  w.put_SeveralChartStyles = w.asc_putSeveralChartStyles = w.j7e;
  w.get_VerticalTextAlign = w.asc_getVerticalTextAlign = w.Rrc;
  w.put_VerticalTextAlign = w.asc_putVerticalTextAlign = w.rsc;
  w.get_Vert =
    w.asc_getVert = w.Qrc;
  w.put_Vert = w.asc_putVert = w.qsc;
  w.get_Locked = w.asc_getLocked = w.QZa;
  w.getLockAspect = w.asc_getLockAspect = w.Brc;
  w.putLockAspect = w.asc_putLockAspect = w.hsc;
  w.get_ChartProperties = w.asc_getChartProperties = w.x0e;
  w.put_ChartProperties = w.asc_putChartProperties = w.$5e;
  w.get_ShapeProperties = w.asc_getShapeProperties = w.s4e;
  w.put_ShapeProperties = w.asc_putShapeProperties = w.m7e;
  w.get_OriginSize = w.asc_getOriginSize = w.TNa;
  w.get_PluginGuid = w.asc_getPluginGuid = w.T3e;
  w.put_PluginGuid = w.asc_putPluginGuid =
    w.d7e;
  w.get_PluginData = w.asc_getPluginData = w.S3e;
  w.put_PluginData = w.asc_putPluginData = w.c7e;
  w.get_Rot = w.asc_getRot = w.Frc;
  w.put_Rot = w.asc_putRot = w.lsc;
  w.get_RotAdd = w.asc_getRotAdd = w.Grc;
  w.put_RotAdd = w.asc_putRotAdd = w.msc;
  w.get_FlipH = w.asc_getFlipH = w.urc;
  w.put_FlipH = w.asc_putFlipH = w.$rc;
  w.get_FlipV = w.asc_getFlipV = w.wrc;
  w.put_FlipV = w.asc_putFlipV = w.bsc;
  w.get_FlipHInvert = w.asc_getFlipHInvert = w.vrc;
  w.put_FlipHInvert = w.asc_putFlipHInvert = w.asc;
  w.get_FlipVInvert = w.asc_getFlipVInvert = w.xrc;
  w.put_FlipVInvert =
    w.asc_putFlipVInvert = w.csc;
  w.put_ResetCrop = w.asc_putResetCrop = w.h7e;
  w.get_Title = w.asc_getTitle = w.Sha;
  w.put_Title = w.asc_putTitle = w.VNa;
  w.get_Description = w.asc_getDescription = w.cIa;
  w.put_Description = w.asc_putDescription = w.hwb;
  w.get_ColumnNumber = w.asc_getColumnNumber = w.prc;
  w.put_ColumnNumber = w.asc_putColumnNumber = w.Yrc;
  w.get_ColumnSpace = w.asc_getColumnSpace = w.qrc;
  w.put_ColumnSpace = w.asc_putColumnSpace = w.Zrc;
  w.asc_getSignatureId = w.asc_getSignatureId = w.aUb;
  w.put_Shadow = w.dyf = w.put_shadow = w.Hyf = w.asc_putShadow =
    w.osc;
  w.get_Shadow = w.Dkf = w.get_shadow = w.ulf = w.asc_getShadow = w.Irc;
  w.put_Anchor = w.Kwf = w.asc_putAnchor = w.Vrc;
  w.get_Anchor = w.cjf = w.asc_getAnchor = w.nrc;
  f.AscCommon.xFb = qb;
  w = qb.prototype;
  w.get_ObjectType = w.asc_getObjectType = w.E3e;
  w.get_ObjectValue = w.asc_getObjectValue = w.F3e;
  f.Asc.asc_CShapeFill = f.Asc.E5a = rc;
  w = rc.prototype;
  w.get_type = w.asc_getType = w.Mx;
  w.put_type = w.asc_putType = w.Tha;
  w.get_fill = w.asc_getFill = w.uJa;
  w.put_fill = w.asc_putFill = w.JTa;
  w.get_transparent = w.asc_getTransparent = w.e5e;
  w.put_transparent =
    w.asc_putTransparent = w.G7e;
  w.asc_CheckForseSet = w.asc_CheckForseSet = w.grc;
  f.Asc.asc_CFillBlip = f.Asc.G7b = $e;
  w = $e.prototype;
  w.get_type = w.asc_getType = w.Mx;
  w.put_type = w.asc_putType = w.Tha;
  w.get_url = w.asc_getUrl = w.cUb;
  w.put_url = w.asc_putUrl = w.WRa;
  w.get_texture_id = w.asc_getTextureId = w.Brd;
  w.put_texture_id = w.asc_putTextureId = w.E7e;
  f.Asc.asc_CFillHatch = f.Asc.PZe = hi;
  w = hi.prototype;
  w.get_pattern_type = w.asc_getPatternType = w.O3e;
  w.put_pattern_type = w.asc_putPatternType = w.a7e;
  w.get_color_fg = w.asc_getColorFg = w.D0e;
  w.put_color_fg = w.asc_putColorFg = w.b6e;
  w.get_color_bg = w.asc_getColorBg = w.C0e;
  w.put_color_bg = w.asc_putColorBg = w.a6e;
  f.Asc.asc_CFillGrad = f.Asc.Yqd = og;
  w = og.prototype;
  w.get_colors = w.asc_getColors = w.M0e;
  w.put_colors = w.asc_putColors = w.c6e;
  w.get_positions = w.asc_getPositions = w.X3e;
  w.put_positions = w.asc_putPositions = w.f7e;
  w.get_grad_type = w.asc_getGradType = w.O1e;
  w.put_grad_type = w.asc_putGradType = w.v6e;
  w.get_linear_angle = w.asc_getLinearAngle = w.R2e;
  w.put_linear_angle = w.asc_putLinearAngle = w.Q6e;
  w.get_linear_scale =
    w.asc_getLinearScale = w.S2e;
  w.put_linear_scale = w.asc_putLinearScale = w.R6e;
  w.get_path_type = w.asc_getPathType = w.M3e;
  w.put_path_type = w.asc_putPathType = w.$6e;
  f.Asc.asc_CFillSolid = f.Asc.frc = $g;
  w = $g.prototype;
  w.get_color = w.asc_getColor = w.HT;
  w.put_color = w.asc_putColor = w.RZa;
  f.Asc.asc_CStroke = f.Asc.brd = ek;
  w = ek.prototype;
  w.get_type = w.asc_getType = w.Mx;
  w.put_type = w.asc_putType = w.Tha;
  w.get_width = w.asc_getWidth = w.gea;
  w.put_width = w.asc_putWidth = w.kwb;
  w.get_color = w.asc_getColor = w.HT;
  w.put_color = w.asc_putColor = w.RZa;
  w.get_linejoin = w.asc_getLinejoin = w.Y2e;
  w.put_linejoin = w.asc_putLinejoin = w.Mrd;
  w.get_linecap = w.asc_getLinecap = w.V2e;
  w.put_linecap = w.asc_putLinecap = w.Krd;
  w.get_linebeginstyle = w.asc_getLinebeginstyle = w.U2e;
  w.put_linebeginstyle = w.asc_putLinebeginstyle = w.fsc;
  w.get_linebeginsize = w.asc_getLinebeginsize = w.T2e;
  w.put_linebeginsize = w.asc_putLinebeginsize = w.Jrd;
  w.get_lineendstyle = w.asc_getLineendstyle = w.X2e;
  w.put_lineendstyle = w.asc_putLineendstyle = w.gsc;
  w.get_lineendsize = w.asc_getLineendsize = w.W2e;
  w.put_lineendsize =
    w.asc_putLineendsize = w.Lrd;
  w.get_canChangeArrows = w.asc_getCanChangeArrows = w.orc;
  w.put_prstDash = w.asc_putPrstDash = w.g7e;
  w.get_prstDash = w.asc_getPrstDash = w.a4e;
  f.AscCommon.f1c = ah;
  w = ah.prototype;
  w.get_colors = w.ilf;
  w.get_name = w.hYc;
  f.AscCommon.x8 = Cc;
  w = Cc.prototype;
  w.get_Type = w.AN;
  w.get_X = w.tBa;
  w.get_Y = w.uBa;
  w.get_Hyperlink = w.pXb;
  w.get_UserId = w.Ala;
  w.get_HaveChanges = w.Ijf;
  w.get_LockedObjectType = w.nkf;
  w.get_FootnoteText = w.Ejf;
  w.get_FootnoteNumber = w.Djf;
  f.Asc.asc_CUserInfo = f.Asc.hsg = kc;
  w = kc.prototype;
  w.asc_putId =
    w.put_Id = w.K7b;
  w.asc_getId = w.get_Id = w.sE;
  w.asc_putFullName = w.put_FullName = w.u6e;
  w.asc_getFullName = w.get_FullName = w.N1e;
  w.asc_putFirstName = w.put_FirstName = w.n6e;
  w.asc_getFirstName = w.get_FirstName = w.VTb;
  w.asc_putLastName = w.put_LastName = w.M6e;
  w.asc_getLastName = w.get_LastName = w.YTb;
  f.Asc.asc_CDocInfo = f.Asc.OZe = rk;
  w = rk.prototype;
  w.get_Id = w.asc_getId = w.sE;
  w.put_Id = w.asc_putId = w.K7b;
  w.get_Url = w.asc_getUrl = w.cUb;
  w.put_Url = w.asc_putUrl = w.WRa;
  w.get_Title = w.asc_getTitle = w.Sha;
  w.put_Title = w.asc_putTitle = w.VNa;
  w.get_Format = w.asc_getFormat = w.G1e;
  w.put_Format = w.asc_putFormat = w.q6e;
  w.get_VKey = w.asc_getVKey = w.h5e;
  w.put_VKey = w.asc_putVKey = w.J7e;
  w.get_UserId = w.asc_getUserId = w.wJa;
  w.get_UserName = w.asc_getUserName = w.$Aa;
  w.get_Options = w.asc_getOptions = w.vJa;
  w.put_Options = w.asc_putOptions = w.X6e;
  w.get_CallbackUrl = w.asc_getCallbackUrl = w.d0e;
  w.put_CallbackUrl = w.asc_putCallbackUrl = w.W5e;
  w.get_TemplateReplacement = w.asc_getTemplateReplacement = w.W4e;
  w.put_TemplateReplacement = w.asc_putTemplateReplacement = w.B7e;
  w.get_UserInfo =
    w.asc_getUserInfo = w.f5e;
  w.put_UserInfo = w.asc_putUserInfo = w.H7e;
  w.get_Token = w.asc_getToken = w.b5e;
  w.put_Token = w.asc_putToken = w.F7e;
  w.get_Mode = w.asc_getMode = w.w3e;
  w.put_Mode = w.asc_putMode = w.T6e;
  w.get_Permissions = w.asc_getPermissions = w.Q3e;
  w.put_Permissions = w.asc_putPermissions = w.b7e;
  w.get_Lang = w.asc_getLang = w.F2e;
  w.put_Lang = w.asc_putLang = w.J6e;
  w.get_Encrypted = w.asc_getEncrypted = w.r1e;
  w.put_Encrypted = w.asc_putEncrypted = w.k6e;
  w.get_EncryptedInfo = w.asc_getEncryptedInfo = w.s1e;
  w.put_EncryptedInfo = w.asc_putEncryptedInfo =
    w.l6e;
  f.AscCommon.xee = bh;
  w = bh.prototype;
  w.asc_getType = w.Mx;
  w.asc_getFontsCount = w.E1e;
  w.asc_getCurrentFont = w.X0e;
  w.asc_getImagesCount = w.f2e;
  w.asc_getCurrentImage = w.Y0e;
  f.AscCommon.Kdc = qc;
  w = qc.prototype;
  w.put_Value = w.kP;
  w.get_Value = w.xQ;
  f.AscCommon.g1c = un;
  w = un.prototype;
  w.get_Id = w.F0a;
  w.get_X = w.tBa;
  w.get_Y = w.uBa;
  f.AscCommon.d9a = Kd;
  w = Kd.prototype;
  w.get_Id = w.F0a;
  w.get_Data = w.wjf;
  w.get_W = w.sBa;
  w.get_H = w.b8a;
  f.AscCommon.pLb = Gf;
  w = Gf.prototype;
  w.asc_getId = w.asc_getName = w.get_Name = w.oC;
  w.asc_getDisplayName =
    w.tRd;
  w.asc_getType = w.get_Type = w.Mx;
  w.asc_getImage = w.zrc;
  f.AscCommon.kRd = Vk;
  w = Vk.prototype;
  w.get_Word = w.Zkf;
  w.get_Checked = w.qjf;
  w.get_Variants = w.Ykf;
  f.AscCommon.$1c = function (w, y) {
    this.xg = y;
    this.PHc = !1;
    this.D1b = w;
    'object' === typeof this.D1b && (this.D1b = JSON.stringify(this.D1b));
    this.s4b = {};
    this.image = null;
    this.A1b = e;
    this.height = this.width = 0;
    this.Ui = .3;
    this.zoom = 1;
    this.bud = -1;
    this.beb = null;
    this.O2c = function () {
      this.s4b['%user_name%'] = this.xg.$W.userName;
      var f = this.D1b, w;
      for (w in this.s4b) this.s4b.hasOwnProperty(w) &&
      (f = f.replace(new RegExp(w, 'g'), this.s4b[w]));
      this.beb = {};
      try {
        this.beb = JSON.parse(f);
      } catch (wt) {
      }
      this.Ui = e == this.beb.transparent ? .3 : this.beb.transparent;
    };
    this.zkb = function () {
      this.PHc && this.zoom != this.bud && (this.bud = this.zoom, this.Atf(this.beb));
    };
    this.Qh = function (f, w, y, Ma, Ra) {
      this.image && this.PHc && (e == Ma ? (w = w - this.width >> 1, y = y - this.height >> 1) : (w = w + (Ma - this.width) / 2 >> 0, y = y + (Ra - this.height) / 2 >> 0), Ra = f.globalAlpha, f.globalAlpha = this.Ui, f.drawImage(this.image, w, y), f.globalAlpha = Ra);
    };
    this.M0d = function () {
      var e =
        document.createElement('canvas');
      e.width = this.image.width;
      e.height = this.image.height;
      var f = e.getContext('2d');
      f.globalAlpha = this.Ui;
      f.drawImage(this.image, 0, 0);
      this.A1b = e.toDataURL('image/png');
    };
    this.yZd = function () {
      delete this.A1b;
      this.A1b = e;
    };
    this.vZd = function (e, f, w) {
      var y = this.width * Cf.PD / this.zoom, Ma = this.height * Cf.PD / this.zoom;
      e.uoc = !0;
      e.drawImage(this.A1b, (f - y) / 2, (w - Ma) / 2, y, Ma);
      e.uoc = !1;
    };
    this.Atf = function (w) {
      AscFormat.ej(function (w) {
        var y = new AscFormat.fv, Ma = !1, Ra = Mc.editor || editor;
        if (!Ra) return null;
        switch (Ra.Wy) {
          case Cf.bs.Tl:
            y.Haa(!0);
            Ma = !0;
            break;
          case Cf.bs.$y:
            y.Haa(!1);
            y.Cc(Ra.Fa.Wa.qe[Ra.Fa.Wa.gc]);
            break;
          case Cf.bs.NK:
            y.Haa(!1), y.tC(Ra.td.Yf().mc);
        }
        var Pa = !1;
        Ra.Wy == Cf.bs.Tl && Ra.Fa && Ra.Fa.Wa && (Pa = Ra.Fa.Wa.sL);
        Pa && (Ra.Fa.Wa.sL = !1);
        var Ta = !1;
        Ra.Fa && !Ra.Fa.Wa && (Ta = !0, Ra.Fa.Wa = new AscCommonWord.Amb, Ra.Fa.xd.Wa = Ra.Fa.Wa);
        y.Hn(!1);
        y.fa = new AscFormat.Dg;
        y.fa.Cc(y);
        y.fa.lC(new AscFormat.oA);
        y.fa.nb.Cc(y.fa);
        y.fa.nb.Aj(0);
        y.fa.nb.Bj(0);
        y.fa.nb.ap(w.width);
        y.fa.nb.lp(w.height);
        y.fa.nb.MG(AscFormat.Rz(w.rotate ?
          w.rotate * Math.PI / 180 : 0));
        y.fa.YK(AscFormat.rV(w.type));
        w.fill && 3 === w.fill.length && y.fa.Af(AscFormat.WF(w.fill[0], w.fill[1], w.fill[2]));
        if (AscFormat.hb(w['stroke-width']) || Array.isArray(w.stroke) && 3 === w.stroke.length) {
          var Va = Array.isArray(w.stroke) && 3 === w.stroke.length ? AscFormat.WF(w.stroke[0], w.stroke[1], w.stroke[2]) : AscFormat.WF(0, 0, 0);
          y.fa.vn(AscFormat.sV(Va, e, e, e, e, AscFormat.hb(w['stroke-width']) ? w['stroke-width'] : 12700 / 36E3));
        }
        Ma ? y.mta() : y.aca();
        Va = w.align;
        e != Va && y.d0(Va);
        Array.isArray(w.margins) &&
        4 === w.margins.length && y.J3a({ Ba: w.margins[0], Oa: w.margins[1], Ra: w.margins[2], Ta: w.margins[3] });
        Va = y.Sg();
        w = w.paragraphs;
        0 < w.length && (Va.aa.length = 0);
        for (var Ia = 0; Ia < w.length; ++Ia) {
          var qc = w[Ia], jb = new AscCommonWord.Ua(Va.sb, Va, !Ma);
          AscFormat.hb(qc.align) && jb.WW(qc.align);
          if (Array.isArray(qc.fill) && 3 === qc.fill.length) {
            var $a = new AscCommonWord.Lde;
            $a.pa = Mc.rna;
            $a.va.r = qc.fill[0];
            $a.va.vb = qc.fill[1];
            $a.va.Xa = qc.fill[2];
            jb.vO($a, !0);
          }
          AscFormat.hb(qc.linespacing) && jb.mM({ qc: qc.linespacing, Ji: 0, kg: 0, jj: Mc.rC },
            !0);
          qc = qc.runs;
          for ($a = 0; $a < qc.length; ++$a) {
            var Xa = qc[$a], qb = new AscCommonWord.fwa(jb, !1);
            Array.isArray(Xa.fill) && 3 === Xa.fill.length && qb.hQ(AscFormat.WF(Xa.fill[0], Xa.fill[1], Xa.fill[2]));
            var ib = Xa['font-family'] ? Xa['font-family'] : 'Arial',
              yb = null != Xa['font-size'] ? Xa['font-size'] : 50;
            qb.k9({ Ja: ib, za: -1 });
            qb.l9({ Ja: ib, za: -1 });
            qb.m9({ Ja: ib, za: -1 });
            qb.n9({ Ja: ib, za: -1 });
            qb.KV(yb);
            qb.twa(!0 === Xa.bold);
            qb.IMa(!0 === Xa.italic);
            qb.HDa(!0 === Xa.strikeout);
            qb.pba(!0 === Xa.underline);
            Xa = Xa.text;
            '<%br%>' === Xa ? qb.vh(0,
              new AscCommonWord.APd(AscCommonWord.etd), !1) : qb.mp(Xa);
            jb.pf($a, qb, !1);
          }
          Va.pf(Va.aa.length, jb);
        }
        Ma = Cf.eg.hq;
        Cf.eg.EDa(!1);
        y.Jh();
        y.Lo && y.Ina();
        Cf.eg.EDa(Ma);
        if (f.editor) {
          var cb = Ra.jr;
          Ra.jr = !1;
        }
        Cf.Rda = !0;
        Ma = new AscFormat.EH;
        Va = Cf.Se.pu(210 * Cf.NA * this.zoom, !0);
        w = Cf.Se.pu(297 * Cf.NA * this.zoom, !0);
        Ma.te(Va, w, 210, 297);
        Ma.transform(1, 0, 0, 1, 0, 0);
        Ma.Y9b = !0;
        Ma.M2c(y);
        y.Md(Ma, 0);
        Ma.Yec();
        Ia = Ma.Db.tj - Ma.Db.Lh + 1;
        jb = Ma.Db.Cj - Ma.Db.Mh + 1;
        0 >= Ia || 0 >= jb || (this.image || (this.image = document.createElement('canvas')), this.image.width =
          Ia, this.image.height = jb, this.width = Ia, this.height = jb, Ia = this.image.getContext('2d'), jb = new Cf.GN, jb.te(Ia, Va, w, 210, 297), jb.Sv = Cf.gP, jb.Gn.Gb = -Ma.Db.Lh, jb.Gn.Ff = -Ma.Db.Mh, jb.transform(1, 0, 0, 1, 0, 0), y.Md(jb, 0), Cf.Rda = !1, Ta && (Ra.Fa.Wa = null, Ra.Fa.xd.Wa = null), f.editor && (Ra.jr = cb), Pa && (Ra.Fa.Wa.sL = !0));
      }, this, [w]);
    };
    this.aFd = function () {
      this.PHc = !0;
      var e = this.xg;
      switch (e.Wy) {
        case Cf.bs.Tl:
          e.Fa && (e.LP && (e.LP.zoom = e.Fa.io / 100, e.LP.zkb()), e.Fa.eFb());
          break;
        case Cf.bs.$y:
          e.Fa && (e.LP && (e.LP.zoom = e.Fa.io / 100, e.LP.zkb()),
            e.Fa.eFb());
          break;
        case Cf.bs.NK:
          (e = e.td && e.td.Yf()) && e.Hg && e.Hg && e.Hg.Er();
      }
    };
    this.Jbf = function () {
      this.O2c();
      var f = [], w = this.beb.paragraphs, y, Ma;
      for (y = 0; y < w.length; y++) {
        var Ra = w[y].runs;
        for (Ma = 0; Ma < Ra.length; Ma++) e === Ra[Ma]['font-family'] && (Ra[Ma]['font-family'] = 'Arial'), f.push(Ra[Ma]['font-family']);
      }
      for (y = 0; y < f.length; y++) f[y] = new AscFonts.gja(AscFonts.T5.v6b(f[y]), 0, '', 0, null);
      !1 === Cf.TK.bqb(f) ? this.aFd() : (this.xg.Dia = function () {
        (Mc.editor || editor).LP.aFd();
      }, Cf.TK.KRa(f));
    };
  };
  f.Asc.CPluginVariation =
    f.Asc.Cee = ce;
  f.Asc.CPlugin = f.Asc.Sdc = If;
})(window);
'use strict';
(function (f) {
  function e(e) {
    function f() {
    }

    f.prototype = e;
    return new f;
  }

  function Ia(e) {
    this.memory = e;
  }

  function cb(e) {
    this.stream = e;
  }

  function Xa(e, f) {
    this.Ew = null;
    this.data = e;
    this.size = f;
    this.yb = this.ua = 0;
    this.Ssc = !1;
  }

  function ib(e, f) {
    this.Yb = e;
    this.wc = f;
  }

  function y() {
    var e = arguments.length;
    this.Kqc = !0;
    this.tvb = this.uvb = !1;
    this.wc = this.Yb = this.id = null;
    this.Rsc = this.Nsc = this.Bac = this.Cac = !1;
    this.HEa = null;
    1 == e ? (this.id = arguments[0].toUpperCase(), this.tvb = !0, this.Cod()) : 2 == e ? (this.Yb = arguments[0], this.wc = arguments[1],
      this.Cpc(), this.uvb = !0) : 3 == e && (this.Yb = arguments[0] + 1, this.wc = arguments[1] + 1, this.Cpc(), this.uvb = !0);
  }

  function kb(e) {
    if (65536 > e) return String.fromCharCode(e);
    e -= 65536;
    return String.fromCharCode(55296 | e >> 10 & 1023) + String.fromCharCode(56320 | e & 1023);
  }

  Object.create && Object.create || (Object.create = Object.create = e);
  var rb = { blg: -2, q6c: -1, Eb: 0, Fb: 1, arb: 85 },
    mb = { VS: 0, cf: 1, Xid: 2, boc: 3, Tg: 4, su: 5, gk: 6, Q5c: 7, omg: 8 }, Ta = { lf: 0 },
    yb = { va: 0, ic: 1, xb: 2, pa: 3, lva: 4, ujd: 5, fjd: 6 }, Va = {
      left: 0, top: 1, right: 2, bottom: 3, rCd: 4, pCd: 5, start: 6,
      end: 7, RFg: 8, $Fg: 9, Hsd: 10, Ksd: 11
    }, zb = { left: 0, top: 1, right: 2, bottom: 3, kDd: 4, yMd: 5, TId: 6, dtd: 7 };
  Ia.prototype.qa = function (e, f) {
    this.memory.ra(e);
    this.Dk(f);
  };
  Ia.prototype.Dk = function (e) {
    var f = this.Umd();
    e();
    this.Tmd(f);
  };
  Ia.prototype.Umd = function () {
    var e = this.memory.ua;
    this.memory.Wm(4);
    return e;
  };
  Ia.prototype.Tmd = function (e) {
    var f = this.memory.ua;
    this.memory.kk(e);
    this.memory.cb(f - e - 4);
    this.memory.kk(f);
  };
  Ia.prototype.Jwa = function (e) {
    var y = this;
    if (null != e.pa) {
      var Ma = null;
      null != e.va ? Ma = e.va : null != e.ab && (Ma =
        f.editor.Fa.Wa, e.ab.check(Ma.ri(), Ma.kl()), Ma = e.ab.Ht(), Ma = new f.AscCommonWord.FAa(Ma.R, Ma.G, Ma.B));
      null == Ma || Ma.lf || this.vcb(yb.va, Ma);
      null != e.ic && (this.memory.ra(yb.ujd), this.memory.ra(mb.Tg), this.xEb(e.ic));
      null != e.xb && (this.memory.ra(yb.fjd), this.memory.ra(mb.Tg), this.xEb(8 * e.xb));
      if (null != e.ab || null != e.va && e.va.lf) this.memory.ra(yb.lva), this.memory.ra(mb.gk), this.Dk(function () {
        y.Oub(e.ab, e.va);
      });
      this.memory.ra(yb.pa);
      this.memory.ra(mb.cf);
      this.memory.ra(e.pa);
    }
  };
  Ia.prototype.Gub = function (e) {
    var f =
      this;
    null != e.Ba && this.qa(Va.left, function () {
      f.Jwa(e.Ba);
    });
    null != e.Oa && this.qa(Va.top, function () {
      f.Jwa(e.Oa);
    });
    null != e.Ra && this.qa(Va.right, function () {
      f.Jwa(e.Ra);
    });
    null != e.Ta && this.qa(Va.bottom, function () {
      f.Jwa(e.Ta);
    });
    null != e.rk && this.qa(Va.rCd, function () {
      f.Jwa(e.rk);
    });
    null != e.fk && this.qa(Va.pCd, function () {
      f.Jwa(e.fk);
    });
    null != e.Vi && this.qa(Va.Ksd, function () {
      f.Jwa(e.Vi);
    });
  };
  Ia.prototype.vcb = function (e, f) {
    this.memory.ra(e);
    this.memory.ra(mb.boc);
    this.memory.ra(f.r);
    this.memory.ra(f.vb);
    this.memory.ra(f.Xa);
  };
  Ia.prototype.XSb = function (e) {
    var f = this;
    null != e.pa && (this.memory.ra(0), this.memory.ra(mb.cf), this.memory.ra(e.pa));
    var y = null;
    null != e.va ? y = e.va : null != e.ab && (y = editor.Fa.Wa, e.ab.check(y.ri(), y.kl()), y = e.ab.Ht(), y = new AscCommonWord.FAa(y.R, y.G, y.B));
    null == y || y.lf || this.vcb(1, y);
    if (null != e.ab || null != e.va && e.va.lf) this.memory.ra(2), this.memory.ra(mb.gk), this.Dk(function () {
      f.Oub(e.ab, e.va);
    });
  };
  Ia.prototype.rRe = function (e) {
    null != e.nf && (this.memory.ra(zb.kDd), this.memory.ra(mb.Tg), this.qx(e.nf));
    null != e.wg &&
    (this.memory.ra(zb.yMd), this.memory.ra(mb.Tg), this.qx(e.wg));
    null != e.R && (this.memory.ra(zb.TId), this.memory.ra(mb.Tg), this.qx(e.R));
    null != e.B && (this.memory.ra(zb.dtd), this.memory.ra(mb.Tg), this.qx(e.B));
  };
  Ia.prototype.QV = function (e) {
    e instanceof AscCommonExcel.u5a ? (null != e.Dd && (this.memory.ra(2), this.memory.ra(mb.cf), this.memory.ra(e.Dd)), null != e.UL && (this.memory.ra(3), this.memory.ra(mb.su), this.memory.Yr(e.UL))) : (this.memory.ra(0), this.memory.ra(mb.Tg), this.memory.cb(e.Fu));
  };
  Ia.prototype.Oub = function (e,
                               f) {
    null != f && f.lf && (this.memory.ra(0), this.memory.ra(mb.VS));
    if (null != e && null != e.fill && null != e.fill.color && e.fill.color.color instanceof AscFormat.K$) {
      e = e.fill.color;
      if (null != e.color) {
        f = AscCommonWord.tje;
        var y = f.ZO;
        switch (e.color.id) {
          case 0:
            y = f.sv;
            break;
          case 1:
            y = f.Yv;
            break;
          case 2:
            y = f.Zv;
            break;
          case 3:
            y = f.$v;
            break;
          case 4:
            y = f.tv;
            break;
          case 5:
            y = f.Jw;
            break;
          case 6:
            y = f.rMd;
            break;
          case 7:
            y = f.sMd;
            break;
          case 8:
            y = f.tMd;
            break;
          case 9:
            y = f.uMd;
            break;
          case 10:
            y = f.vMd;
            break;
          case 11:
            y = f.jNc;
            break;
          case 12:
            y = f.DG;
            break;
          case 13:
            y = f.wMd;
            break;
          case 14:
            y = f.ZO;
            break;
          case 15:
            y = f.Fs;
            break;
          case 16:
            y = f.xMd;
        }
        this.memory.ra(1);
        this.memory.ra(mb.cf);
        this.memory.ra(y);
      }
      if (null != e.ke) for (f = 0, y = e.ke.ke.length; f < y; ++f) {
        var Ma = e.ke.ke[f];
        'wordTint' == Ma.name ? (this.memory.ra(2), this.memory.ra(mb.cf), this.memory.ra(Math.round(Ma.val))) : 'wordShade' == Ma.name && (this.memory.ra(3), this.memory.ra(mb.cf), this.memory.ra(Math.round(Ma.val)));
      }
    }
  };
  Ia.prototype.HMe = function (e) {
    var f = this;
    null !== e.J$ && this.qa(0, function () {
      f.memory.cb(e.J$);
    });
    e.Mb &&
    null !== e.iR && (this.memory.ra(1), this.memory.Rb(e.iR));
  };
  Ia.prototype.TBb = function (e) {
    return Math.round(AscCommonWord.Bgf * e);
  };
  Ia.prototype.qx = function (e) {
    this.memory.cb(this.TBb(e));
  };
  Ia.prototype.xEb = function (e) {
    this.memory.cb(Math.round(AscCommonWord.Agf * e));
  };
  Ia.prototype.vHa = function (e) {
    this.memory.cb(Math.round(AscCommonWord.kxd * e));
  };
  Ia.prototype.fkb = function (e) {
    this.memory.Nn(Math.round(AscCommonWord.kxd * e));
  };
  cb.prototype.ZY = function (e) {
    var f = this.stream.OG(4);
    if (rb.Eb != f) return f;
    var y = this.stream.Xd();
    f = this.stream.OG(y);
    return rb.Eb != f ? f : this.$a(y, e);
  };
  cb.prototype.$a = function (e, f) {
    for (var y = rb.Eb, Ma = 0; Ma < e;) {
      this.stream.Ssc = !1;
      y = this.stream.qb();
      var Ta = this.stream.Xd();
      Ma + Ta + 5 >= e && (this.stream.Ssc = !0);
      y = f(y, Ta);
      if (y === rb.Fb) {
        if (y = this.stream.Ld(Ta), rb.Eb != y) break;
      } else if (y !== rb.Eb) break;
      Ma += Ta + 5;
    }
    return y;
  };
  cb.prototype.Of = function (e, f) {
    for (var y = rb.Eb, Ma = 0; Ma < e;) {
      y = this.stream.qb();
      var Ta = 2;
      switch (this.stream.qb()) {
        case mb.VS:
          var Va = 0;
          break;
        case mb.cf:
          Va = 1;
          break;
        case mb.Xid:
          Va = 2;
          break;
        case mb.boc:
          Va =
            3;
          break;
        case mb.Tg:
        case mb.su:
          Va = 4;
          break;
        case mb.Q5c:
          Va = 8;
          break;
        case mb.Tg:
          Va = 8;
          break;
        case mb.gk:
          Va = this.stream.Xd();
          Ta += 4;
          break;
        default:
          return rb.q6c;
      }
      y = f(y, Va);
      if (y === rb.Fb) {
        if (y = this.stream.Ld(Va), rb.Eb != y) break;
      } else if (y !== rb.Eb) break;
      Ma += Va + Ta;
    }
    return y;
  };
  cb.prototype.jv = function (e, f) {
    for (var y = rb.Eb, Ma = 0; Ma < e;) {
      y = this.stream.qb();
      var Ta = 2;
      switch (this.stream.qb()) {
        case mb.VS:
          var Va = 0;
          break;
        case mb.cf:
          Va = 1;
          break;
        case mb.Xid:
          Va = 2;
          break;
        case mb.boc:
          Va = 3;
          break;
        case mb.Tg:
          Va = 4;
          break;
        case mb.su:
          Va = 8;
          break;
        case mb.Q5c:
          Va = 8;
          break;
        case mb.Tg:
          Va = 8;
          break;
        case mb.gk:
          Va = this.stream.Xd();
          Ta += 4;
          break;
        default:
          return rb.q6c;
      }
      y = f(y, Va);
      if (y === rb.Fb) {
        if (y = this.stream.Ld(Va), rb.Eb != y) break;
      } else if (y !== rb.Eb) break;
      Ma += Va + Ta;
    }
    return y;
  };
  cb.prototype.jn = function () {
    var e = 0 | this.stream.qb();
    e |= this.stream.qb() << 8;
    e |= this.stream.qb() << 16;
    e |= this.stream.qb() << 24;
    return e / 1E5;
  };
  cb.prototype.jtb = function () {
    var e = this.stream.qb(), f = this.stream.qb(), y = this.stream.qb();
    return new AscCommonWord.FAa(e, f, y);
  };
  cb.prototype.XPb =
    function (e, f, y, Pa) {
      var Ma = rb.Eb, Ta = this;
      switch (e) {
        case 0:
          y.pa = this.stream.qb();
          break;
        case 1:
          y.va = this.jtb();
          break;
        case 2:
          Ma = this.Of(f, function (e) {
            return Ta.OPb(e, Pa);
          });
          break;
        default:
          Ma = rb.Fb;
      }
      return Ma;
    };
  cb.prototype.zxe = function (e, f) {
    var y = rb.Eb;
    1 == e ? f.eu = Ta.lf == this.stream.qb() : 0 == e ? f.Fu = 16777215 & this.stream.Xd() : 2 == e ? f.Dd = this.stream.qb() : 3 == e ? f.UL = this.stream.kr() : y = rb.Fb;
    return y;
  };
  cb.prototype.OPb = function (e, f) {
    var y = rb.Eb;
    0 == e ? f.lf = !0 : 1 == e ? f.va = this.stream.mD() : 2 == e ? f.tba = this.stream.mD() : 3 ==
    e ? f.qba = this.stream.mD() : y = rb.Fb;
    return y;
  };
  cb.prototype.Ced = function (e, f, y) {
    var Ma = rb.Eb;
    0 === e ? y.J$ = this.stream.Xd() : 1 === e ? y.iR = this.stream.Ve(f) : Ma = rb.Fb;
    return Ma;
  };
  Xa.prototype.kk = function (e) {
    if (e > this.size) return rb.arb;
    this.ua = e;
    return rb.Eb;
  };
  Xa.prototype.Td = function (e) {
    if (e > this.size) return rb.arb;
    this.yb = e;
    return rb.Eb;
  };
  Xa.prototype.Wm = function (e) {
    return 0 > e ? rb.arb : this.kk(this.ua + e);
  };
  Xa.prototype.Ld = function (e) {
    return 0 > e ? rb.arb : this.Td(this.yb + e);
  };
  Xa.prototype.qb = function () {
    return this.yb >=
    this.size ? 0 : this.data[this.yb++];
  };
  Xa.prototype.Z0 = function () {
    if (this.yb >= this.size) return 0;
    var e = this.data[this.yb++];
    127 < e && (e -= 256);
    return e;
  };
  Xa.prototype.mD = function () {
    return this.qb();
  };
  Xa.prototype.pb = function () {
    return 0 == this.qb() ? !1 : !0;
  };
  Xa.prototype.HRa = function () {
    return this.yb + 1 >= this.size ? 0 : this.data[this.yb++] | this.data[this.yb++] << 8;
  };
  Xa.prototype.ZZd = function () {
    return AscFonts.CX.Y$(this.HRa());
  };
  Xa.prototype.Xd = function () {
    return this.yb + 3 >= this.size ? 0 : this.data[this.yb++] | this.data[this.yb++] <<
      8 | this.data[this.yb++] << 16 | this.data[this.yb++] << 24;
  };
  Xa.prototype.wW = function () {
    return AscFonts.CX.gta(this.Xd());
  };
  Xa.prototype.jb = function () {
    return this.Xd();
  };
  Xa.prototype.Hd = function () {
    return this.Xd();
  };
  var Ac = new ArrayBuffer(8), ec = new Uint8Array(Ac), vc = new Float64Array(Ac);
  Xa.prototype.kr = function () {
    if (this.yb + 7 >= this.size) return 0;
    ec[0] = this.qb();
    ec[1] = this.qb();
    ec[2] = this.qb();
    ec[3] = this.qb();
    ec[4] = this.qb();
    ec[5] = this.qb();
    ec[6] = this.qb();
    ec[7] = this.qb();
    return vc[0];
  };
  Xa.prototype.cc = function () {
    var e =
      this.jb();
    return this.Ve(e);
  };
  Xa.prototype.Ve = function (e) {
    if (this.yb + e > this.size) return '';
    for (var f = [], y = 0; y + 1 < e; y += 2) f.push(String.fromCharCode(this.data[this.yb + y] | this.data[this.yb + y + 1] << 8));
    this.yb += e;
    return f.join('');
  };
  Xa.prototype.lda = function () {
    var e = this.jb();
    if (this.yb + 2 * e > this.size) return '';
    for (var f = '', y = 0; y + 1 < 2 * e; y += 2) {
      var Pa = this.data[this.yb + y];
      Pa |= this.data[this.yb + y + 1] << 8;
      f += String.fromCharCode(Pa);
    }
    this.yb += 2 * e;
    return f;
  };
  Xa.prototype.u$b = function () {
    return this.size;
  };
  Xa.prototype.OG =
    function (e) {
      if (this.size - this.ua < e) return rb.arb;
      this.yb = this.ua;
      this.ua += e;
      return rb.Eb;
    };
  Xa.prototype.mg = function () {
    var e = 0 | this.qb();
    e |= this.qb() << 8;
    e |= this.qb() << 16;
    e |= this.qb() << 24;
    return e / 1E5;
  };
  Xa.prototype.hNb = function (e) {
    for (var f = Array(e), y = 0; y < e; ++y) f[y] = this.data[this.yb++];
    return f;
  };
  Xa.prototype.cSb = function () {
    var e = new AscCommon.G7;
    e.Ew = this.Ew;
    e.data = this.data;
    e.size = this.size;
    e.ua = this.ua;
    e.yb = this.yb;
    return e;
  };
  Xa.prototype.YMb = function (e) {
    this.ua = e.ua;
    this.yb = e.yb;
  };
  Xa.prototype.Lnd =
    function () {
      var e = this.qb();
      if (0 != (e & 128)) {
        var f = this.qb();
        e = e & 127 | (f & 127) << 7;
      }
      return e;
    };
  Xa.prototype.dpc = function () {
    this.Ld(this.cpc());
  };
  Xa.prototype.cpc = function () {
    for (var e = 0, f = 0; 4 > f; ++f) {
      var y = this.qb();
      e |= (y & 127) << 7 * f;
      if (0 == (y & 128)) break;
    }
    return e;
  };
  var Xb = new function () {
    this.cXe = 65;
    this.iTb = [];
    this.REd = {};
    this.$7b = function (e) {
      var f = this.iTb[e];
      if (null != f) return f;
      if (0 == e) return '';
      f = e - 1;
      var y = String.fromCharCode(65 + f % 26);
      return this.iTb[e] = 26 > f ? y : this.$7b(Math.floor(f / 26)) + y;
    };
    this.hBa = function (e) {
      var f =
        this.iTb[e];
      if (!f) {
        f = '';
        if (0 < e) for (var y = e, Ma; 0 < y;) Ma = (y - 1) % 26, f = String.fromCharCode(Ma + 65) + f, y = (y - (Ma + 1)) / 26;
        this.iTb[e] = f;
      }
      return f;
    };
    this.wVb = function (e) {
      for (var f = 0, y = 0; y < e.length; ++y) f = 26 * f + (e.charCodeAt(y) - this.cXe + 1);
      return f;
    };
    this.Xgf = function (e, f) {
      return Xb.hBa(f + 1) + (e + 1);
    };
    this.V9 = function (e) {
      var f = this.REd[e];
      null == f && (f = new y(e), this.REd[e] = f);
      return f;
    };
  };
  ib.prototype.cE = function () {
    this.wc = this.Yb = 0;
  };
  ib.prototype.clone = function () {
    return new ib(this.Yb, this.wc);
  };
  ib.prototype.isEqual = function (e) {
    return this.Yb ===
      e.Yb && this.wc === e.wc;
  };
  ib.prototype.oS = function () {
    return 0 === this.Yb && 0 === this.wc;
  };
  ib.prototype.getName = function () {
    return Xb.hBa(this.wc + 1) + (this.Yb + 1);
  };
  y.prototype = Object.create(ib.prototype);
  y.prototype.constructor = y;
  y.prototype.NWe = function (e) {
    return 'A' <= e && 'Z' >= e;
  };
  y.prototype.Cod = function () {
    this.tvb = !0;
    this.aaa(!0, !1);
    this.Cpc();
  };
  y.prototype.Cpc = function () {
    this.Kqc = 1 <= this.Yb && 1048576 >= this.Yb ? 1 <= this.wc && 16384 >= this.wc ? !0 : !1 : !1;
  };
  y.prototype.aaa = function (e, f) {
    if (e && this.tvb) {
      this.tvb = !1;
      e = this.id;
      this.Yb = this.wc = 0;
      f = {};
      for (var y = -1, Ma = 0; -1 != (y = e.indexOf("$", y + 1));) f[y - Ma++] = 1;
      if (2 >= Ma && (0 < Ma && (e = e.replace(/\$/g, '')), y = e.length, 0 < y)) {
        for (var Ta = 0; this.NWe(e.charAt(Ta)) && Ta < y;) Ta++;
        0 == Ta ? (this.Rsc = !0, this.wc = 1, this.HEa = Xb.hBa(this.wc), this.Yb = e.substring(Ta) - 0, null != f[0] && (this.Cac = !0, Ma--)) : Ta == y ? (this.Nsc = !0, this.HEa = e, this.wc = Xb.wVb(this.HEa), this.Yb = 1, null != f[0] && (this.Bac = !0, Ma--)) : (this.HEa = e.substring(0, Ta), this.wc = Xb.wVb(this.HEa), this.Yb = e.substring(Ta) - 0, null != f[0] && (this.Bac = !0, Ma--),
        null != f[Ta] && (this.Cac = !0, Ma--));
        0 < Ma && (this.Yb = this.wc = 0);
      }
    } else f && this.uvb && (this.uvb = !1, this.HEa = Xb.hBa(this.wc), this.id = this.Nsc ? this.HEa : this.Rsc ? this.Yb : this.HEa + this.Yb);
  };
  y.prototype.hC = function () {
    return this.Kqc;
  };
  y.prototype.e4d = function () {
    this.aaa(!1, !0);
    return this.id;
  };
  y.prototype.AE = function () {
    this.aaa(!0, !1);
    return '$' + this.fhf() + '$' + this.sTd();
  };
  y.prototype.sTd = function () {
    this.aaa(!0, !1);
    return this.Yb;
  };
  y.prototype.lW = function () {
    this.aaa(!0, !1);
    return this.Yb - 1;
  };
  y.prototype.myd = function () {
    this.aaa(!0,
      !1);
    return this.Cac;
  };
  y.prototype.Yvc = function () {
    this.aaa(!0, !1);
    return this.Rsc;
  };
  y.prototype.VLf = function () {
    this.aaa(!0, !1);
    return this.wc;
  };
  y.prototype.YT = function () {
    this.aaa(!0, !1);
    return this.wc - 1;
  };
  y.prototype.Dxd = function () {
    this.aaa(!0, !1);
    return this.Bac;
  };
  y.prototype.Xvc = function () {
    this.aaa(!0, !1);
    return this.Nsc;
  };
  y.prototype.fhf = function () {
    this.aaa(!1, !0);
    return this.HEa;
  };
  y.prototype.RZc = function (e) {
    0 <= this.Yb && 1048576 >= this.Yb || (this.Kqc = !1);
    this.uvb = !0;
    this.Yb = e;
  };
  y.prototype.vw = function (e) {
    this.tvb =
      !0;
    this.id = e;
    this.Cod();
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.Kac = rb;
  f.AscCommon.$Ub = mb;
  f.AscCommon.Utd = Ta;
  f.AscCommon.Z$e = yb;
  f.AscCommon.$$e = Va;
  f.AscCommon.aaf = zb;
  f.AscCommon.Epb = Ia;
  f.AscCommon.cLb = cb;
  f.AscCommon.Saa = Xa;
  f.AscCommon.Y7a = 1048576;
  f.AscCommon.iua = 16384;
  f.AscCommon.hSa = 1048575;
  f.AscCommon.hFa = 16383;
  f.AscCommon.dyb = Xb;
  f.AscCommon.yl = ib;
  f.AscCommon.K4a = y;
  f.AscCommon.jf = function (e) {
    return null !== e && 'object' === typeof e;
  };
  f.AscCommon.G7 = function (e, f) {
    this.Ew = null;
    this.data = e;
    this.size = f;
    this.yb = this.ua = 0;
    this.kk = function (e) {
      if (e > this.size) return 1;
      this.ua = e;
      return 0;
    };
    this.Td = function (e) {
      if (e > this.size) return 1;
      this.yb = e;
      return 0;
    };
    this.Wm = function (e) {
      return 0 > e ? 1 : this.kk(this.ua + e);
    };
    this.Ld = function (e) {
      return 0 > e ? 1 : this.Td(this.yb + e);
    };
    this.qb = function () {
      return this.yb >= this.size ? 0 : this.data[this.yb++];
    };
    this.pb = function () {
      return this.yb >= this.size ? 0 : 1 == this.data[this.yb++] ? !0 : !1;
    };
    this.nu = function () {
      return this.yb + 1 >= this.size ? 0 : this.data[this.yb++] | this.data[this.yb++] << 8;
    };
    this.Hd =
      function () {
        if (this.yb + 3 >= this.size) return 0;
        var e = this.data[this.yb++] | this.data[this.yb++] << 8 | this.data[this.yb++] << 16 | this.data[this.yb++] << 24;
        0 > e && (e += 4294967296);
        return e;
      };
    this.jb = function () {
      return this.yb + 3 >= this.size ? 0 : this.data[this.yb++] | this.data[this.yb++] << 8 | this.data[this.yb++] << 16 | this.data[this.yb++] << 24;
    };
    this.lda = function (e) {
      e *= 2;
      if (this.yb + e > this.size) return '';
      for (var f = '', y = 0; y < e; y += 2) {
        var Ma = this.data[this.yb + y + 1] << 8 | this.data[this.yb + y];
        if (0 == Ma) break;
        f += String.fromCharCode(Ma);
      }
      this.yb +=
        e;
      return f;
    };
    this.Qmb = function (e) {
      if (this.yb + e > this.size) return '';
      for (var f = '', y = 0; y < e; y++) {
        var Ma = this.data[this.yb + y];
        if (0 == Ma) break;
        f += String.fromCharCode(Ma);
      }
      this.yb += e;
      return f;
    };
    this.cc = function () {
      var e = this.Hd();
      return this.lda(e);
    };
    this.s8c = function () {
      var e = this.Hd();
      this.Qmb(e);
    };
    this.OG = function (e) {
      if (this.ua >= this.size || this.size - this.ua < e) return 1;
      this.yb = this.ua;
      this.ua += e;
      return 0;
    };
    this.Fh = function () {
      var e = this.Hd();
      this.Ld(e);
    };
    this.zNb = function () {
      var e = this.cc(), f = e.length;
      if (0 == f) return null;
      f - 1 == e.indexOf('%') ? (e = parseFloat(e), isNaN(e) && (e = null)) : (e = parseFloat(e), e = isNaN(e) ? null : e / 1E3);
      return e;
    };
  };
  f.AscCommon.mhc = function (e, f) {
    if (e.yb + f > e.size) return '';
    var y = '';
    f = e.yb + f;
    for (var Ma; e.yb < f;) Ma = e.data[e.yb], 0 == (Ma & 128) ? (y += kb(Ma), ++e.yb) : 0 == (Ma & 32) ? (Ma = (Ma & 31) << 6 | e.data[e.yb + 1] & 63, y += kb(Ma), e.yb += 2) : 0 == (Ma & 16) ? (Ma = (Ma & 15) << 12 | (e.data[e.yb + 1] & 63) << 6 | e.data[e.yb + 2] & 63, y += kb(Ma), e.yb += 3) : 0 == (Ma & 8) ? (Ma = (Ma & 7) << 18 | (e.data[e.yb + 1] & 63) << 12 | (e.data[e.yb + 2] & 63) << 6 | e.data[e.yb + 3] & 63, y += kb(Ma), e.yb +=
      4) : 0 == (Ma & 4) ? (Ma = (Ma & 3) << 24 | (e.data[e.yb + 1] & 63) << 18 | (e.data[e.yb + 2] & 63) << 12 | (e.data[e.yb + 3] & 63) << 6 | e.data[e.yb + 4] & 63, y += kb(Ma), e.yb += 5) : (Ma = (Ma & 1) << 30 | (e.data[e.yb + 1] & 63) << 24 | (e.data[e.yb + 2] & 63) << 18 | (e.data[e.yb + 3] & 63) << 12 | (e.data[e.yb + 4] & 63) << 6 | e.data[e.yb + 5] & 63, y += kb(Ma), e.yb += 6);
    return y;
  };
  f.AscCommon.p0a = 250;
  f.AscCommon.Keb = 251;
})(window);
'use strict';
(function (f, e) {
  function Ia() {
    return f.JSZipUtils || require('jsziputils');
  }

  function cb() {
    return f.JSZip || require('jszip');
  }

  function Xa() {
    this.files = {};
  }

  function ib(e) {
    this.data = e;
  }

  function y() {
    this.urls = {};
    this.INc = {};
    this.nlb = '';
    this.RPa = 0;
  }

  function kb() {
    this.Bnb = !1;
    this.gIa = this.url = this.data = null;
  }

  function rb(e, f, w, y, Ra) {
    var Ma = Ra.index;
    null == Ra.p3b && (!Ra.data || 5242880 >= Ra.data.length) ? y.savetype = AscCommon.YUb.Qge : (0 == Ma ? (y.savetype = AscCommon.YUb.Aue, Ra.count = Math.ceil(Ra.data.length / 5242880)) : y.savetype =
      Ma != Ra.count - 1 ? AscCommon.YUb.zue : AscCommon.YUb.Sea, Ra.p3b = 'string' === typeof Ra.data ? Ra.data.substring(5242880 * Ma, 5242880 * (Ma + 1)) : Ra.data.subarray(5242880 * Ma, 5242880 * (Ma + 1)));
    Ra.index++;
    y.saveindex = Ra.index;
    e(function (Ma, eb, Pa) {
      null != Ma && 'ok' == Ma.status ? Ra.index < Ra.count ? (y.savekey = Ma.data, rb(e, f, w, y, Ra)) : w && w(Ma, Pa) : w ? w(Ma, Pa) : f(Ma, Pa);
    }, y, Ra);
  }

  function mb(e, f, w) {
    Td({
      url: e, dataType: 'text', responseType: w, success: f, error: function () {
        f(null);
      }
    });
  }

  function Ta(e) {
    if ('undefined' !== typeof ArrayBuffer) var f = new Uint8Array(e.response);
    else if (AscCommon.Se.aI) {
      e = (new VBArray(e.responseBody)).toArray();
      var w = e.length;
      f = g_memory.oP(w);
      var y = new AscCommon.Saa(f.data, w);
      y.Ew = f.Ew;
      f = y.data;
      for (y = 0; y < w;) f[y] = e[y], y++;
    }
    return f;
  }

  function yb(e, f) {
    if (e.length > f.length) {
      for (var w = 0; w < f.length; ++w) if (e[w] !== f.charCodeAt(w)) return !1;
      return !0;
    }
    return !1;
  }

  function Va(e, f) {
    var w = Asc.Fk.pg.QN;
    switch (e) {
      case hd.pXa:
        w = Asc.Fk.pg.JZ;
        break;
      case hd.hLe:
      case hd.iLe:
        w = Asc.Fk.pg.Database;
        break;
      case hd.jhe:
        w = Asc.Fk.pg.S5c;
        break;
      case hd.yhe:
      case hd.ihe:
        w = Asc.Fk.pg.i4c;
        break;
      case hd.hhe:
      case hd.rhe:
        w = Asc.Fk.pg.Tec;
        break;
      case hd.nhe:
        w = Asc.Fk.pg.h4c;
        break;
      case hd.ghe:
      case hd.mhe:
      case hd.qhe:
      case hd.ohe:
      case hd.Ahe:
      case hd.the:
      case hd.ehe:
        w = AscCommon.Hwb.lH === f ? Asc.Fk.pg.bMb : Asc.Fk.pg.QIa;
        break;
      case hd.zld:
        w = Asc.Fk.pg.yld;
        break;
      case hd.Dld:
        w = Asc.Fk.pg.xld;
        break;
      case hd.toc:
        w = Asc.Fk.pg.iSb;
        break;
      case hd.$Le:
        w = Asc.Fk.pg.cZa;
        break;
      case hd.Ald:
        w = Asc.Fk.pg.wld;
        break;
      case hd.Cld:
        w = Asc.Fk.pg.uld;
        break;
      case hd.Bld:
        w = Asc.Fk.pg.vld;
        break;
      case hd.kSb:
        w = Asc.Fk.pg.G6c;
        break;
      case hd.ncb:
        w =
          Asc.Fk.pg.ncb;
        break;
      case hd.eMe:
        w = Asc.Fk.pg.Jic;
        break;
      case hd.fMe:
        w = Asc.Fk.pg.Lld;
        break;
      case hd.Storage:
      case hd.QIe:
      case hd.SIe:
      case hd.UIe:
      case hd.TIe:
      case hd.PIe:
      case hd.RIe:
      case hd.YLe:
      case hd.oBe:
      case hd.QN:
        w = Asc.Fk.pg.QN;
    }
    return w;
  }

  function zb(e) {
    return 55296 <= e && 57343 >= e;
  }

  function Ac(e, f) {
    return 56320 > e && 56320 <= f && 57343 >= f ? 65536 + ((e & 1023) << 10) | f & 1023 : null;
  }

  function ec(e) {
    if (65536 > e) return String.fromCharCode(e);
    e -= 65536;
    return String.fromCharCode(55296 | e >> 10) + String.fromCharCode(56320 | e & 1023);
  }

  function vc(e) {
    this.OZa =
      e;
    this.oi = this.OZa.length;
    this.ua = 0;
  }

  function Xb(e) {
    this.xu = this.nnb = 0;
    this.CNa = e;
  }

  function Ma(e) {
    Uh = e ? e : { h: 'Headers', d: 'Data', a: 'All', tr: 'This Row', t: 'Totals' };
    return $a();
  }

  function $a() {
    var e = Uh.a, f = Uh.h, w = Uh.d, y = Uh.t, Ma = Uh.tr,
      Pa = new XRegExp('(?:\\[\\#' + f + '\\]\\' + Ra.HJa + '\\[\\#' + w + '\\])'),
      Ta = new XRegExp('(?:\\[\\#' + w + '\\]\\' + Ra.HJa + '\\[\\#' + y + '\\])'),
      Va = new XRegExp('(?:\'\\[|\'\\]|[^[\\]])+');
    e = new XRegExp('\\#(?:' + e + '|' + f + '|' + y + '|' + w + '|' + Ma + ')|@');
    return XRegExp.build('^(?<tableName>{{tableName}})\\[(?<columnName>{{columnName}})?\\]',
      {
        tableName: new XRegExp('^(:?[' + di + '][' + di + '\\d.]*)'),
        columnName: XRegExp.build('(?<reservedColumn>{{reservedColumn}})|(?<oneColumn>{{userColumn}})|(?<columnRange>{{userColumnRange}})|(?<hdtcc>{{hdtcc}})', {
          userColumn: Va,
          reservedColumn: e,
          userColumnRange: XRegExp.build('\\[(?<colStart>{{uc}})\\]\\:\\[(?<colEnd>{{uc}})\\]', { uc: Va }),
          hdtcc: XRegExp.build('(?<hdt>\\[{{rc}}\\]|{{hd}}|{{dt}})(?:\\' + Ra.HJa + '(?:\\[(?<hdtcstart>{{uc}})\\])(?:\\:(?:\\[(?<hdtcend>{{uc}})\\]))?)?', {
            rc: e,
            hd: Pa,
            dt: Ta,
            uc: Va
          })
        })
      }, 'i');
  }

  function jb(e) {
    var f = Ci.t = e.t.toUpperCase();
    e = Ci.f = e.f.toUpperCase();
    return new RegExp('^(' + f + '|' + e + ')([-+*\\/^&%<=>: ;),}]|$)', 'i');
  }

  function Pa(e) {
    e = e ? e : {
      nil: '#NULL!',
      div: '#DIV/0!',
      value: '#VALUE!',
      ref: '#REF!',
      name: '#NAME\\?',
      num: '#NUM!',
      na: '#N/A',
      getdata: '#GETTING_DATA',
      uf: '#UNSUPPORTED_FUNCTION!'
    };
    jg.nil = e.nil;
    jg.div = e.div;
    jg.value = e.value;
    jg.ref = e.ref;
    jg.name = e.name;
    jg.num = e.num;
    jg.na = e.na;
    jg.getdata = e.getdata;
    jg.uf = e.uf;
    return new RegExp('^(' + jg.nil + '|' + jg.div + '|' + jg.value + '|' + jg.ref + '|' + jg.name +
      '|' + jg.num + '|' + jg.na + '|' + jg.getdata + '|' + jg.uf + ')', 'i');
  }

  function qe(e) {
    var f = e ? e.lastIndexOf('.') : -1;
    return -1 != f ? e.substring(f + 1).toLowerCase() : null;
  }

  function kf(e) {
    var f = e ? e.lastIndexOf('.') : -1;
    return -1 != f ? e.substring(0, f) : null;
  }

  function gf(e, w, y, Ra) {
    if (AscCommon.Se.PCd && f.emulateUpload) f.emulateUpload(function (e, f) {
      '' === f ? Ra(Asc.Fk.pg.QN) : (f = AscFonts.A4c(f), f = new Blob([f.data.slice(0, f.size)]), f.name = e, f.fileName = e, e = y([f]), Ra(Va(e), [f]));
    }, ':<iframe><image>'); else if (w && AscCommon.WD && AscCommon.WD.N1b()) AscCommon.WD.fZe(Ra);
    else if ('undefined' != typeof FileReader) Wc(e, function (e) {
      if (e && e.target && e.target.files) {
        var f = y(e.target.files);
        Ra(Va(f), e.target.files);
      } else Ra(Asc.Fk.pg.QN);
    }).click(); else return !1;
  }

  function Ie(e, f, w, y, Ra) {
    var Ma = hd.pXa;
    if (0 < e.length) {
      y = 0;
      for (var eb = e.length; y < eb; y++) {
        var Pa = e[y], Ta = Pa.name;
        if (Ta) {
          var Va = !1;
          Ta = qe(Ta);
          if (null !== Ta) for (var Ia = 0, qc = Ra.Xbb.length; Ia < qc; Ia++) if (Ra.Xbb[Ia] == Ta) {
            Va = !0;
            break;
          }
          0 == Va && (Ma = f);
        }
        Asc.Fk.pg.JZ == Ma && (Pa = Pa.size) && Ra.Fbd < Pa && (Ma = w);
        if (hd.pXa != Ma) break;
      }
    } else Ma = y;
    return Ma;
  }

  function kg(e) {
    return Ie(e, hd.Dld, hd.zld, hd.toc, Jc);
  }

  function Di(e) {
    return Ie(e, hd.Cld, hd.Ald, hd.Bld, w);
  }

  function gh(e) {
    if (!(f.Asc.editor ? f.Asc.editor : f.editor).D8d()) return !1;
    var w = !1;
    if (e.dataTransfer.types) for (var y = 0, Ra = e.dataTransfer.types.length; y < Ra; ++y) {
      var Ma = e.dataTransfer.types[y].toLowerCase();
      if ('files' == Ma) {
        if (e.dataTransfer.items) for (y = 0, Ra = e.dataTransfer.items.length; y < Ra; y++) {
          if (Ma = e.dataTransfer.items[y], Ma.type && Ma.kind && 'file' == Ma.kind.toLowerCase()) {
            w = !1;
            for (var eb = 0, Pa = Jc.Xbb.length; eb <
            Pa; eb++) if (-1 != Ma.type.indexOf(Jc.Xbb[eb])) {
              w = !0;
              break;
            }
            if (0 == w) break;
          }
        } else w = !0;
        break;
      } else if ('text' == Ma || 'text/plain' == Ma || 'text/html' == Ma) {
        w = !0;
        break;
      }
    }
    return w;
  }

  function ue() {
    if (!document.getElementById('apiImageUpload')) {
      var e = document.createElement('iframe');
      e.name = 'apiImageUpload';
      e.id = 'apiImageUpload';
      e.setAttribute('style', 'position:absolute;left:-2px;top:-2px;width:1px;height:1px;z-index:-1000;');
      document.body.appendChild(e);
    }
    return f.frames.apiImageUpload;
  }

  function Wc(e, f) {
    var w = document.getElementById('apiiuFile');
    w && document.body.removeChild(w);
    w = document.createElement('input');
    w.setAttribute('id', 'apiiuFile');
    w.setAttribute('name', 'apiiuFile');
    w.setAttribute('type', 'file');
    w.setAttribute('accept', e);
    w.setAttribute('style', 'position:absolute;left:-2px;top:-2px;width:1px;height:1px;z-index:-1000;cursor:pointer;');
    w.onchange = f;
    document.body.appendChild(w);
    return w;
  }

  function Xc() {
    this.Mo = this.ku = null;
  }

  function Td(e) {
    var w = '', y = 'GET', Ra = !0, Ma = null, eb, Pa = null, Ta = null, Va = null,
      Ia = 'application/x-www-form-urlencoded',
      qc = '';
    (function (e) {
      'undefined' !== typeof e.url && (w = e.url);
      'undefined' !== typeof e.type && (y = e.type);
      'undefined' !== typeof e.async && (Ra = e.async);
      'undefined' !== typeof e.data && (Ma = e.data);
      'undefined' !== typeof e.dataType && (eb = e.dataType);
      'undefined' !== typeof e.error && (Pa = e.error);
      'undefined' !== typeof e.success && (Ta = e.success);
      'undefined' !== typeof e.contentType && (Ia = e.contentType);
      'undefined' !== typeof e.responseType && (qc = e.responseType);
      if (f.XMLHttpRequest) Va = new XMLHttpRequest, Va.overrideMimeType && eb && Va.overrideMimeType(eb);
      else if (f.ActiveXObject) try {
        Va = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (Qe) {
        try {
          Va = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (On) {
        }
      }
      Va.onreadystatechange = function () {
        switch (this.readyState) {
          case 4:
            200 === this.status || 1223 === this.status ? 'function' === typeof Ta && Ta(this) : 'function' === typeof Pa && Pa(this, this.statusText, this.status);
        }
      };
      Va.open(y, w, Ra);
      'POST' === y && Va.setRequestHeader('Content-Type', Ia);
      qc && (Va.responseType = qc);
      Va.send(Ma);
    })(e);
  }

  function id() {
    this.BN = null;
    this.hq = !0;
    this.zU = !1;
    this.IIc = this.JIc =
      0;
  }

  function qb() {
    this.ea = Kd;
    this.Yl = null;
  }

  function rc() {
    this.yU = [];
  }

  function $e(e, f, w, y) {
    this.FQ = e;
    this.QDd = w;
    this.VK = y;
    this.Cna = this.xse(e, f, w);
  }

  function hi(e) {
    return e ? e - 0 : null;
  }

  function og(e) {
    this.V4c = this.Nad = null;
    this.te(e);
  }

  function $g(w, y, Ra) {
    if (!0 === f.NATIVE_EDITOR_ENJINE || f.Native !== e) y(); else {
      if (f.AscDesktopEditor && f.local_load_add) {
        f.local_load_add({
          completeLoad: function () {
            return y();
          }
        }, 'sdk-all-from-min', w);
        var Ma = f.AscDesktopEditor.LoadJS(w);
        2 != Ma && f.local_load_remove(w);
        if (1 == Ma) {
          setTimeout(y,
            1);
          return;
        }
        if (2 == Ma) return;
      }
      Ma = new AscCommon.$be(AscCommon.Lgf);
      ek(Ma, w, y, Ra);
    }
  }

  function ek(e, f, w, y) {
    var Ra = document.createElement('script');
    Ra.type = 'text/javascript';
    Ra.src = f;
    Ra.onload = w;
    Ra.onerror = function () {
      e.Y9e(y, function () {
        ek(e, f, w, y);
      });
    };
    document.head.appendChild(Ra);
  }

  function ah(e) {
    if (e = AscCommon.fob[e]) {
      var f = new AscFormat.qHb;
      f.name = e.name;
      var w = e.jlf();
      f.be[8] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.qlf();
      f.be[12] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.klf();
      f.be[9] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.rlf();
      f.be[13] =
        AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.blf();
      f.be[0] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.clf();
      f.be[1] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.dlf();
      f.be[2] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.elf();
      f.be[3] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.flf();
      f.be[4] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.glf();
      f.be[5] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.plf();
      f.be[11] = AscFormat.nT(w.r, w.vb, w.Xa);
      w = e.llf();
      f.be[10] = AscFormat.nT(w.r, w.vb, w.Xa);
      return f;
    }
    return null;
  }

  function Cc(e, f) {
    for (var w = 0; w < e.length; ++w) if (e[w].isEqual(f)) return w;
    return -1;
  }

  function Oc(e,
              w, y, Ra) {
    f.Asc.q0a = this;
    this.Uc = w;
    this.zLb = document.getElementById(e);
    this.Dz = document.createElement('canvas');
    this.Dz.style.position = 'absolute';
    this.Dz.style.left = '0px';
    this.Dz.style.top = '0px';
    e = parseInt(this.zLb.offsetWidth);
    w = parseInt(this.zLb.offsetHeight);
    0 == e && (e = 300);
    0 == w && (w = 80);
    this.Dz.width = e;
    this.Dz.height = w;
    this.zLb.appendChild(this.Dz);
    this.Image = '';
    this.NWa = null;
    this.Text = '';
    this.lo = 'Arial';
    this.xb = 10;
    this.bf = !0;
    this.ud = !1;
    this.od = y;
    this.Tc = Ra;
    this.Oea = null;
    this.hic = !1;
  }

  function kc() {
    this.Pbc =
      {};
  }

  function rk(e) {
    var f = parseFloat(e);
    return isNaN(f) ? null : (-1 !== e.indexOf('%') ? (e = '%', f /= 100) : -1 !== e.indexOf('px') ? (e = 'px', f *= AscCommon.PD) : -1 !== e.indexOf('in') ? (e = 'in', f *= AscCommonWord.zgf) : -1 !== e.indexOf('cm') ? (e = 'cm', f *= 10) : -1 !== e.indexOf('mm') ? e = 'mm' : -1 !== e.indexOf('pt') ? (e = 'pt', f *= AscCommonWord.lxd) : -1 !== e.indexOf('pc') ? (e = 'pc', f *= AscCommonWord.Cgf) : e = 'none', {
      val: f,
      type: e
    });
  }

  function bh(e) {
    this.Esc = 0;
    this.gFd = e;
  }

  function qc(e, f, w) {
    if (!w) return f;
    var y = new bh(Ri);
    return function () {
      var Ra = y.EEd();
      0 < Ra ? setTimeout(function () {
        w.call(e, e);
      }, Ra) : f && f.apply(e, arguments);
    };
  }

  var un = AscCommon.Se, Kd = AscCommon.Bna, Gf = AscCommon.m4, Vk = AscCommon.zob, ce = AscCommon.vIc,
    If = AscCommon.wIc, Mc = AscCommon.I9, Cf = AscCommon.BM, Cd = AscCommon.dyb, yd = Asc.Inb;
  'function' !== typeof String.prototype.startsWith && (String.prototype.startsWith = function (e) {
    return 0 === this.indexOf(e);
  }, String.prototype.startsWith = String.prototype.startsWith);
  'function' !== typeof String.prototype.endsWith && (String.prototype.endsWith = function (e) {
    return -1 !==
      this.indexOf(e, this.length - e.length);
  }, String.prototype.endsWith = String.prototype.endsWith);
  'function' !== typeof String.prototype.repeat && (String.prototype.repeat = function (e) {
    if (null == this) throw new TypeError('can\'t convert ' + this + ' to object');
    var f = '' + this;
    e = +e;
    e != e && (e = 0);
    if (0 > e) throw new RangeError('repeat count must be non-negative');
    if (Infinity == e) throw new RangeError('repeat count must be less than infinity');
    e = Math.floor(e);
    if (0 == f.length || 0 == e) return '';
    if (268435456 <= f.length * e) throw new RangeError('repeat count must not overflow maximum string size');
    for (var w = ''; ;) {
      1 == (e & 1) && (w += f);
      e >>>= 1;
      if (0 == e) break;
      f += f;
    }
    return w;
  }, String.prototype.repeat = String.prototype.repeat);
  'function' !== typeof String.prototype.padStart && (String.prototype.padStart = function (e, f) {
    e >>= 0;
    f = String(f || ' ');
    if (this.length > e) return String(this);
    e -= this.length;
    e > f.length && (f += f.repeat(e / f.length));
    return f.slice(0, e) + String(this);
  }, String.prototype.padStart = String.prototype.padStart);
  Number.isInteger = Number.isInteger || function (e) {
    return 'number' === typeof e && Number.isFinite(e) && !(e %
      1);
  };
  Number.isFinite = Number.isFinite || function (e) {
    return 'number' === typeof e && isFinite(e);
  };
  String.prototype.w5b = function (e) {
    return e && e instanceof RegExp ? (e = this.toString().match(e), !!(e && 0 < e.length && e[0].length == this.length)) : !1;
  };
  'function' !== typeof require || f.XRegExp || (f.XRegExp = require('xregexp'));
  var Fe = null;
  Xa.prototype.loadAsync = function (e, w) {
    var y = this;
    return f['native'] ? new Promise(function (Ra, Ma) {
      var eb = w && !0 === w.base64 ? f['native'].ZipOpenBase64(e) : f['native'].ZipOpen(e);
      if (null != eb) {
        for (var Pa in eb) y.files[Pa] =
          new ib(eb[Pa]);
        Ra(y);
      } else Ma(Error('Failed archive'));
    }) : AscCommon.Ohf().loadAsync(e, w).then(function (e) {
      for (var f in e.files) y.files[f] = new ib(e.files[f]);
      return y;
    });
  };
  Xa.prototype.close = function () {
    f['native'] && f['native'].ZipClose();
  };
  ib.prototype.async = function (e) {
    if (f['native']) {
      var w = this;
      return new Promise(function (e, y) {
        var Ra = f['native'].ZipFileAsString(w.data);
        null != Ra ? e(Ra) : y(Error('Failed file in archive'));
      });
    }
    return this.data.async(e);
  };
  y.prototype = {
    ama: 'media/', te: function (e) {
      this.Ywa(e);
    },
    Ywa: function (e) {
      for (var w in e) {
        var y = e[w];
        this.urls[w] = y;
        this.INc[y] = w;
        this.RPa++;
      }
      f.IS_NATIVE_EDITOR && f['native'].setUrlsCount(this.RPa);
    }, aRd: function (e, f) {
      var w = {};
      w[this.ama + e] = f;
      this.Ywa(w);
    }, W9: function (e) {
      return this.mbc(this.ama + e);
    }, pca: function (e) {
      if (e && 0 === e.indexOf('data:image')) return null;
      (e = this.$eb(e)) && this.ama == e.substring(0, this.ama.length) && (e = e.substring(this.ama.length));
      return e;
    }, d8a: function (e) {
      e && this.ama == e.substring(0, this.ama.length) && (e = e.substring(this.ama.length));
      return e;
    },
    mbc: function (e) {
      return this.urls ? this.urls[e] : null;
    }, $eb: function (e) {
      if (this.INc) {
        var f = this.INc[e];
        !f && 'undefined' !== typeof editor && editor.JH && 0 == e.indexOf(editor.JH.Skb) && (f = e.substring(editor.JH.Skb.length));
        return f;
      }
      return null;
    }, Khf: function (e) {
      var f = [], w = kf(e), y;
      for (y in this.urls) 0 == y.indexOf(this.ama + w + '.') && this.ama + e !== y && f.push(this.urls[y]);
      return f;
    }
  };
  var Me = new y;
  vc.prototype = {
    aR: function () {
      return this;
    }, IAb: function () {
      return this.ua < this.oi;
    }, value: function () {
      return this.ua >= this.oi ? 0 : this.OZa[this.ua];
    },
    next: function () {
      this.ua++;
    }, position: function () {
      return this.ua;
    }
  };
  vc.prototype.check = vc.prototype.IAb;
  Xb.prototype = {
    IAb: function () {
      return this.xu < this.CNa.length;
    }, value: function () {
      if (this.xu >= this.CNa.length) return 0;
      var e = this.CNa.charCodeAt(this.xu);
      return AscCommon.FJb(e) && this.CNa.length - 1 != this.xu ? AscCommon.Rac(e, this.CNa.charCodeAt(this.xu + 1)) : e;
    }, next: function () {
      this.xu >= this.CNa.length || (this.nnb++, AscCommon.FJb(this.CNa.charCodeAt(this.xu)) ? this.xu == this.CNa.length - 1 ? ++this.xu : this.xu += 2 : ++this.xu);
    },
    position: function () {
      return this.nnb;
    }
  };
  Xb.prototype.check = Xb.prototype.IAb;
  String.prototype.aR = function () {
    return new Xb(this);
  };
  var yc = { all: 1, data: 2, headers: 3, U9b: 4, hpb: 5, bAa: 6 }, Uh = null, lh = { t: 'TRUE', f: 'FALSE' }, Ci = {},
    jg = {}, hd = {
      pXa: 0,
      QN: -1,
      oBe: -3,
      hLe: -20,
      iLe: -40,
      Storage: -60,
      QIe: -61,
      SIe: -62,
      UIe: -63,
      TIe: -64,
      PIe: -65,
      RIe: -66,
      ehe: -80,
      jhe: -81,
      Ahe: -82,
      yhe: -83,
      the: -84,
      ghe: -86,
      mhe: -87,
      qhe: -88,
      ohe: -89,
      hhe: -90,
      rhe: -91,
      akg: -92,
      nhe: -93,
      ihe: -99,
      YLe: -100,
      zld: -101,
      Dld: -102,
      toc: -103,
      $Le: -104,
      Ald: -105,
      Cld: -106,
      Bld: -107,
      kSb: -120,
      ncb: -121,
      eMe: -122,
      fMe: -123
    }, Jc = { Fbd: 25E6, Xbb: 'jpg jpeg jpe png gif bmp'.split(' ') },
    w = { Fbd: 104857600, Xbb: 'docx doc docm dot dotm dotx epub fodt odt ott rtf'.split(' ') },
    Ra = { F7b: ';', kac: ',', RFb: '.', ixd: ',', PTb: ';', E7b: ',', eSa: '.', HJa: ',' },
    vn = [37, 38, 42, 43, 45, 47, 58, 94],
    di = 'A-Za-z_\u0080-\u0081\u0083\u0085-\u0087\u0089-\u008a\u008c-\u0091\u0093-\u0094\u0096-\u0097\u0099-\u009a\u009c-\u009f\u00a1-\u00a5\u00a7-\u00a8\u00aa\u00ad\u00af-\u00ba\u00bc-\u02b8\u02bb-\u02c1\u02c7\u02c9-\u02cb\u02cd\u02d0-\u02d1\u02d8-\u02db\u02dd\u02e0-\u02e4\u02ee\u0370-\u0373\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e3a\u0e40-\u0e4e\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2010\u2013-\u2016\u2018\u201c-\u201d\u2020-\u2021\u2025-\u2027\u2030\u2032-\u2033\u2035\u203b\u2071\u2074\u207f\u2081-\u2084\u2090-\u2094\u2102-\u2103\u2105\u2107\u2109-\u2113\u2115-\u2116\u2119-\u211d\u2121-\u2122\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2153-\u2154\u215b-\u215e\u2160-\u2188\u2190-\u2199\u21d2\u21d4\u2200\u2202-\u2203\u2207-\u2208\u220b\u220f\u2211\u2215\u221a\u221d-\u2220\u2223\u2225\u2227-\u222c\u222e\u2234-\u2237\u223c-\u223d\u2248\u224c\u2252\u2260-\u2261\u2264-\u2267\u226a-\u226b\u226e-\u226f\u2282-\u2283\u2286-\u2287\u2295\u2299\u22a5\u22bf\u2312\u2460-\u24b5\u24d0-\u24e9\u2500-\u254b\u2550-\u2574\u2581-\u258f\u2592-\u2595\u25a0-\u25a1\u25a3-\u25a9\u25b2-\u25b3\u25b6-\u25b7\u25bc-\u25bd\u25c0-\u25c1\u25c6-\u25c8\u25cb\u25ce-\u25d1\u25e2-\u25e5\u25ef\u2605-\u2606\u2609\u260e-\u260f\u261c\u261e\u2640\u2642\u2660-\u2661\u2663-\u2665\u2667-\u266a\u266c-\u266d\u266f\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3000-\u3003\u3005-\u3017\u301d-\u301f\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u321c\u3220-\u3229\u3231-\u3232\u3239\u3260-\u327b\u327f\u32a3-\u32a8\u3303\u330d\u3314\u3318\u3322-\u3323\u3326-\u3327\u332b\u3336\u333b\u3349-\u334a\u334d\u3351\u3357\u337b-\u337e\u3380-\u3384\u3388-\u33ca\u33cd-\u33d3\u33d5-\u33d6\u33d8\u33db-\u33dd\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua65f\ua662-\ua66e\ua680-\ua697\ua722-\ua787\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua90a-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uac00-\ud7a3\ue000-\uf848\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe30-\ufe31\ufe33-\ufe44\ufe49-\ufe52\ufe54-\ufe57\ufe59-\ufe66\ufe68-\ufe6b\ufe70-\ufe74\ufe76-\ufefc\uff01-\uff5e\uff61-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\uffe0-\uffe6',
    Lm = /^ *[-+*\/^&%<=>:] */, wt = new XRegExp('^((?:_xlfn.)?[\\p{L}\\d.]+ *)[-+*/^&%<=>:;\\(\\)]'),
    Xd = /^(\$?[A-Za-z]+\$?\d+:\$?[A-Za-z]+\$?\d+)(?:[-+*\/^&%<=>: ;),]|$)/,
    sk = /^(([Rr]{1}(\[)?(-?\d*)(\])?)([Cc]{1}(\[)?(-?\d*)(\])?):([Rr]{1}(\[)?(-?\d*)(\])?)([Cc]{1}(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    kw = /^(\$?[A-Za-z]+:\$?[A-Za-z]+)(?:[-+*\/^&%<=>: ;),]|$)/,
    ex = /^(([Cc]{1}(\[)?(-?\d*)(\])?(:)?)([Cc]?(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    jk = /^(\$?\d+:\$?\d+)(?:[-+*\/^&%<=>: ;),]|$)/,
    jl = /^(([Rr]{1}(\[)?(-?\d*)(\])?(:)?)([Rr]?(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    fn = /^ *(\$?[A-Za-z]{1,3}\$?(\d{1,7}))([-+*\/^&%<=>: ;),]|$)/,
    bv = /^(\$?[A-Za-z]+\$?(\d+))([-+*\/^&%<=>: ;),]|$)/,
    Nm = /^(([Rr]{1}(\[)?(-?\d*)(\])?)([Cc]{1}(\[)?(-?\d*)(\])?))([-+*\/^&%<=>: ;),]|$)/,
    Vp = new XRegExp('^(?<name_from>[' + di + '][' + di + '\\d.]*)(:(?<name_to>[' + di + '][' + di + '\\d.]*))?!', 'i'),
    Aj = new XRegExp('^\'(?<name_from>(?:\'\'|[^\\[\\]\'\\/*?:])*)(?::(?<name_to>(?:\'\'|[^\\[\\]\'\\/*?:])*))?\'!'),
    Xm = new XRegExp('^(?<name_from>[' + di + '\\d][' + di + '\\d.]*)(:(?<name_to>[' + di + '\\d][' + di + '\\d.]*))?!', 'i');
  new XRegExp('^(?<name_from>[^:]+)(:(?<name_to>[^:]+))?!');
  var Mm = /^ *[+-]?\d*(\d|\.)\d*([eE][+-]?\d+)?/, Au = /^ *\)/, Bj = /^ *[,;] */, Yt = Pa(null), jr = Pa(null),
    Zt = jb(lh), ys = Zt, Nn = /^"((""|[^"])*)"/, kr = new function () {
      this.CId = /[A-Z_\u0080-\u0081\u0083\u0085-\u0087\u0089-\u008a\u008c-\u0091\u0093-\u0094\u0096-\u0097\u0099-\u009a\u009c-\u009f\u00a1-\u00a5\u00a7-\u00a8\u00aa\u00ad\u00af-\u00ba\u00bc-\u02b8\u02bb-\u02c1\u02c7\u02c9-\u02cb\u02cd\u02d0-\u02d1\u02d8-\u02db\u02dd\u02e0-\u02e4\u02ee\u0370-\u0373\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e3a\u0e40-\u0e4e\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2010\u2013-\u2016\u2018\u201c-\u201d\u2020-\u2021\u2025-\u2027\u2030\u2032-\u2033\u2035\u203b\u2071\u2074\u207f\u2081-\u2084\u2090-\u2094\u2102-\u2103\u2105\u2107\u2109-\u2113\u2115-\u2116\u2119-\u211d\u2121-\u2122\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2153-\u2154\u215b-\u215e\u2160-\u2188\u2190-\u2199\u21d2\u21d4\u2200\u2202-\u2203\u2207-\u2208\u220b\u220f\u2211\u2215\u221a\u221d-\u2220\u2223\u2225\u2227-\u222c\u222e\u2234-\u2237\u223c-\u223d\u2248\u224c\u2252\u2260-\u2261\u2264-\u2267\u226a-\u226b\u226e-\u226f\u2282-\u2283\u2286-\u2287\u2295\u2299\u22a5\u22bf\u2312\u2460-\u24b5\u24d0-\u24e9\u2500-\u254b\u2550-\u2574\u2581-\u258f\u2592-\u2595\u25a0-\u25a1\u25a3-\u25a9\u25b2-\u25b3\u25b6-\u25b7\u25bc-\u25bd\u25c0-\u25c1\u25c6-\u25c8\u25cb\u25ce-\u25d1\u25e2-\u25e5\u25ef\u2605-\u2606\u2609\u260e-\u260f\u261c\u261e\u2640\u2642\u2660-\u2661\u2663-\u2665\u2667-\u266a\u266c-\u266d\u266f\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3000-\u3003\u3005-\u3017\u301d-\u301f\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u321c\u3220-\u3229\u3231-\u3232\u3239\u3260-\u327b\u327f\u32a3-\u32a8\u3303\u330d\u3314\u3318\u3322-\u3323\u3326-\u3327\u332b\u3336\u333b\u3349-\u334a\u334d\u3351\u3357\u337b-\u337e\u3380-\u3384\u3388-\u33ca\u33cd-\u33d3\u33d5-\u33d6\u33d8\u33db-\u33dd\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua65f\ua662-\ua66e\ua680-\ua697\ua722-\ua787\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua90a-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uac00-\ud7a3\ue000-\uf848\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe30-\ufe31\ufe33-\ufe44\ufe49-\ufe52\ufe54-\ufe57\ufe59-\ufe66\ufe68-\ufe6b\ufe70-\ufe74\ufe76-\ufefc\uff01-\uff5e\uff61-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\uffe0-\uffe6]/i;
      this.DId = /[\u0001-&(-)+--;->@^`{-\u007f\u0082\u0084\u008b\u0092\u0095\u0098\u009b\u00a0\u00a6\u00a9\u00ab-\u00ac\u00ae\u00bb\u0378-\u0379\u037e-\u0383\u0387\u038b\u038d\u03a2\u0524-\u0530\u0557-\u0558\u055a-\u0560\u0588-\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05cf\u05eb-\u05ef\u05f3-\u05ff\u0604-\u0605\u0609-\u060a\u060c-\u060d\u061b-\u061e\u0620\u065f\u066a-\u066d\u06d4\u0700-\u070e\u074b-\u074c\u07b2-\u07bf\u07f7-\u07f9\u07fb-\u0900\u093a-\u093b\u094e-\u094f\u0955-\u0957\u0964-\u0965\u0970\u0973-\u097a\u0980\u0984\u098d-\u098e\u0991-\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba-\u09bb\u09c5-\u09c6\u09c9-\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4-\u09e5\u09fb-\u0a00\u0a04\u0a0b-\u0a0e\u0a11-\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a-\u0a3b\u0a3d\u0a43-\u0a46\u0a49-\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba-\u0abb\u0ac6\u0aca\u0ace-\u0acf\u0ad1-\u0adf\u0ae4-\u0ae5\u0af0\u0af2-\u0b00\u0b04\u0b0d-\u0b0e\u0b11-\u0b12\u0b29\u0b31\u0b34\u0b3a-\u0b3b\u0b45-\u0b46\u0b49-\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64-\u0b65\u0b72-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce-\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0c00\u0c04\u0c0d\u0c11\u0c29\u0c34\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5a-\u0c5f\u0c64-\u0c65\u0c70-\u0c77\u0c80-\u0c81\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba-\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4-\u0ce5\u0cf0\u0cf3-\u0d01\u0d04\u0d0d\u0d11\u0d29\u0d3a-\u0d3c\u0d45\u0d49\u0d4e-\u0d56\u0d58-\u0d5f\u0d64-\u0d65\u0d76-\u0d78\u0d80-\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe-\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0df1\u0df4-\u0e00\u0e3b-\u0e3e\u0e4f\u0e5a-\u0e80\u0e83\u0e85-\u0e86\u0e89\u0e8b-\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8-\u0ea9\u0eac\u0eba\u0ebe-\u0ebf\u0ec5\u0ec7\u0ece-\u0ecf\u0eda-\u0edb\u0ede-\u0eff\u0f04-\u0f12\u0f3a-\u0f3d\u0f48\u0f6d-\u0f70\u0f85\u0f8c-\u0f8f\u0f98\u0fbd\u0fcd\u0fd0-\u0fff\u104a-\u104f\u109a-\u109d\u10c6-\u10cf\u10fb\u10fd-\u10ff\u115a-\u115e\u11a3-\u11a7\u11fa-\u11ff\u1249\u124e-\u124f\u1257\u1259\u125e-\u125f\u1289\u128e-\u128f\u12b1\u12b6-\u12b7\u12bf\u12c1\u12c6-\u12c7\u12d7\u1311\u1316-\u1317\u135b-\u135e\u1361-\u1368\u137d-\u137f\u139a-\u139f\u13f5-\u1400\u166d-\u166e\u1677-\u167f\u169b-\u169f\u16eb-\u16ed\u16f1-\u16ff\u170d\u1715-\u171f\u1735-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17d4-\u17d6\u17d8-\u17da\u17de-\u17df\u17ea-\u17ef\u17fa-\u180a\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18ff\u191d-\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1945\u196e-\u196f\u1975-\u197f\u19aa-\u19af\u19ca-\u19cf\u19da-\u19df\u1a1c-\u1aff\u1b4c-\u1b4f\u1b5a-\u1b60\u1b7d-\u1b7f\u1bab-\u1bad\u1bba-\u1bff\u1c38-\u1c3f\u1c4a-\u1c4c\u1c7e-\u1cff\u1de7-\u1dfd\u1f16-\u1f17\u1f1e-\u1f1f\u1f46-\u1f47\u1f4e-\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e-\u1f7f\u1fb5\u1fc5\u1fd4-\u1fd5\u1fdc\u1ff0-\u1ff1\u1ff5\u1fff\u2011-\u2012\u2017\u2019-\u201b\u201e-\u201f\u2022-\u2024\u2031\u2034\u2036-\u203a\u203c-\u2043\u2045-\u2051\u2053-\u205e\u2065-\u2069\u2072-\u2073\u207d-\u207e\u208d-\u208f\u2095-\u209f\u20b6-\u20cf\u20f1-\u20ff\u2150-\u2152\u2189-\u218f\u2329-\u232a\u23e8-\u23ff\u2427-\u243f\u244b-\u245f\u269e-\u269f\u26bd-\u26bf\u26c4-\u2700\u2705\u270a-\u270b\u2728\u274c\u274e\u2753-\u2755\u2757\u275f-\u2760\u2768-\u2775\u2795-\u2797\u27b0\u27bf\u27c5-\u27c6\u27cb\u27cd-\u27cf\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2b4d-\u2b4f\u2b55-\u2bff\u2c2f\u2c5f\u2c70\u2c7e-\u2c7f\u2ceb-\u2cfc\u2cfe-\u2cff\u2d26-\u2d2f\u2d66-\u2d6e\u2d70-\u2d7f\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e00-\u2e2e\u2e30-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3018-\u301c\u3030\u303d\u3040\u3097-\u3098\u30a0\u3100-\u3104\u312e-\u3130\u318f\u31b8-\u31bf\u31e4-\u31ef\u321f\u3244-\u324f\u32ff\u4db6-\u4dbf\u9fc4-\u9fff\ua48d-\ua48f\ua4c7-\ua4ff\ua60d-\ua60f\ua62c-\ua63f\ua660-\ua661\ua673-\ua67b\ua67e\ua698-\ua6ff\ua78d-\ua7fa\ua82c-\ua83f\ua874-\ua87f\ua8c5-\ua8cf\ua8da-\ua8ff\ua92f\ua954-\ua9ff\uaa37-\uaa3f\uaa4e-\uaa4f\uaa5a-\uabff\ud7a4-\ud7ff\ufa2e-\ufa2f\ufa6b-\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbb2-\ufbd2\ufd3e-\ufd4f\ufd90-\ufd91\ufdc8-\ufdef\ufdfe-\ufdff\ufe10-\ufe1f\ufe27-\ufe2f\ufe32\ufe45-\ufe48\ufe53\ufe58\ufe67\ufe6c-\ufe6f\ufe75\ufefd-\ufefe\uff00\uff5f-\uff60\uffbf-\uffc1\uffc8-\uffc9\uffd0-\uffd1\uffd8-\uffd9\uffdd-\uffdf\uffe7\uffef-\ufff8\ufffe-\uffff]/ig;
      this.FId = /[,\s-+/^&%<=>]/ig;
      this.EId = /['*\[\]\:/?]/ig;
      this.test = function (f) {
        var w = f.substr(0, 1);
        this.EId.lastIndex = 0;
        this.CId.lastIndex = 0;
        this.DId.lastIndex = 0;
        this.FId.lastIndex = 0;
        if (this.EId.test(f)) return e;
        if (this.CId.test(w)) {
          if (this.DId.test(f) || this.FId.test(f)) return !1;
          f = f.match(fn);
          if (null != f) {
            w = f[1];
            var y = f[2];
            if (3 <= f.length && Cd.wVb(w.substr(0, w.length - y.length)) <= AscCommon.iua && parseInt(y) <= AscCommon.Y7a) return !1;
          }
          return !0;
        }
        return !1;
      };
      return this;
    }, Kz = /^ +/, Qx = new XRegExp('^(?<name>[' + di + '][' +
    di + '\\d.]*)([-+*\\/^&%<=>: ;/\n/),]|$)'), Pq = new function () {
      var e = new RegExp('(^([' + di + '_])([' + di + '_0-9]*)$)', 'i');
      this.test = function (f) {
        if (!e.test(f) && '_xlnm.print_area' !== f) return !1;
        f = f.match(fn);
        if (null != f) {
          var w = f[1];
          var y = f[2];
          if (3 <= f.length && Cd.wVb(w.substr(0, w.length - y.length)) <= AscCommon.iua && parseInt(y) <= AscCommon.Y7a) return !1;
        }
        return !0;
      };
      return this;
    }, ez = /^ *[,;] */, lw = /^ *[+-]?\d*(\d|\.)\d*([eE][+-]?\d+)?/, $t = /^ *[,;] */,
    Gd = /^(mailto:)?([a-z0-9'\._-]+@[a-z0-9\.-]+\.[a-z0-9]{2,4})([a-\u044f\u04510-9\._%+-=\? :&]*)/i,
    gc = /^(((https?)|(ftps?)):\/\/)?([\-\w\u0430-\u044f\u0451]*:?[\-\w\u0430-\u044f\u0451]*@)?(((1[0-9]{2}|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9])\.){3}(1[0-9]{2}|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9]))(:\d+)?(\/[%\-\w\u0430-\u044f\u0451]*(\.[\w\u0430-\u044f\u0451]{2,})?(([\w\u0430-\u044f\u0451\-\.\?\\\/+@&#;:`~=%!,\(\)]*)(\.[\w\u0430-\u044f\u0451]{2,})?)*)*\/?/i,
    xt = /^(((https?)|(ftps?)):\/\/)?([\-\w\u0430-\u044f\u0451]*:?[\-\w\u0430-\u044f\u0451]*@)?(([\-\w\u0430-\u044f\u0451]+\.)+[\w\u0430-\u044f\u0451\-]{2,}(:\d+)?(\/[%\-\w\u0430-\u044f\u0451]*(\.[\w\u0430-\u044f\u0451]{2,})?(([\w\u0430-\u044f\u0451\-\.\?\\\/+@&#;:`'~=%!,\(\)]*)(\.[\w\u0430-\u044f\u0451]{2,})?)*)*\/?)/i,
    Gy = /^(((https?)|(ftps?)):\/\/)([\-\w\u0430-\u044f\u0451]*:?[\-\w\u0430-\u044f\u0451]*@)?(([\-\w\u0430-\u044f\u0451]+)(:\d+)?(\/[%\-\w\u0430-\u044f\u0451]*(\.[\w\u0430-\u044f\u0451]{2,})?(([\w\u0430-\u044f\u0451\-\.\?\\\/+@&#;:`'~=%!,\(\)]*)(\.[\w\u0430-\u044f\u0451]{2,})?)*)*\/?)/i,
    Jr = Ma(null), wn = Ma(null);
  Xc.prototype.UV = function () {
    this.Mo = this.ku = null;
  };
  Xc.prototype.SCd = function (e, f) {
    this instanceof Xc && this.UV();
    for (var w, y = !1, Ra = e.length; f !== Ra;) if (w = e.charCodeAt(f), -1 !== vn.indexOf(w)) {
      this.ku =
        e[f];
      ++f;
      y = !0;
      break;
    } else if (60 <= w && 62 >= w) {
      this.ku = e[f];
      for (++f; f !== Ra;) {
        w = e.charCodeAt(f);
        if (60 > w || 62 < w) break;
        this.ku += e[f];
        ++f;
      }
      y = !0;
      break;
    } else if (32 === w || 10 === w) ++f; else break;
    if (y) {
      for (; f !== Ra;) {
        w = e.charCodeAt(f);
        if (32 !== w && 10 !== w) break;
        ++f;
      }
      this.Mo = f;
      return !0;
    }
    return !1;
  };
  Xc.prototype.Y$f = function (e, f) {
    this instanceof Xc && this.UV();
    e = e.substring(f).match(wt);
    return null != e && 2 == e.length ? (this.Mo += e[1].length, this.ku = e[1], !0) : !1;
  };
  Xc.prototype.F_a = function (e, f, w, y) {
    function Ra() {
      if (0 > e) {
        var f = !w && Pa ?
          Pa.xa + 1 + e : e;
        0 >= f && (f = AscCommon.Y7a + f);
        f += '';
      } else f = !w && Pa ? Pa.xa + 1 + e + '' : e + '';
      return f;
    }

    function Ma() {
      if (0 > f) {
        var e = !y && Pa ? Pa.ya + 1 + f : f;
        0 >= e && (e = AscCommon.iua + e);
        e = Cd.$7b(e);
      } else e = Cd.$7b(!y && Pa ? Pa.ya + 1 + f : f);
      return e;
    }

    var Pa = AscCommonExcel.eJb;
    var eb = '';
    if (null !== e && null !== f) {
      isNaN(e) && (e = 0, w = !1);
      isNaN(f) && (f = 0, y = !1);
      eb = Ma();
      var Ta = Ra();
      y && (eb = '$' + eb);
      w && (Ta = '$' + Ta);
      eb += Ta;
    } else null !== f ? (isNaN(f) && (f = 0, y = !1), eb = Ma(), y && (eb = '$' + eb)) : null !== e && (isNaN(e) && (e = 0, w = !1), Ta = Ra(), w && (Ta = '$' + Ta), eb = Ta);
    return eb;
  };
  Xc.prototype.Cbc = function (f, w) {
    function y(f) {
      var w = !0;
      '' === f[9] || f[9] === e || ':' === f[6] && '' !== f[7] && f[7] !== e ? '' !== f[7] && f[7] !== e && ':' !== f[6] ? w = !1 : '' !== f[7] && f[7] !== e || ':' !== f[6] || (w = !1) : w = !1;
      return w;
    }

    function Ra(f, w) {
      var y = null;
      f === w && f === e ? y = !0 : '[' === f && ']' === w && (y = !1);
      return y;
    }

    this instanceof Xc && this.UV();
    w = f.substring(w);
    if (AscCommonExcel.UT) if (null !== (f = w.match(sk))) {
      var Ma = Ra(f[3], f[5]);
      w = Ra(f[7], f[9]);
      var Pa = Ra(f[11], f[13]);
      var eb = Ra(f[15], f[17]);
      if (null !== Ma && null !== w && null !== Pa && null !== eb &&
        (Ma = AscCommon.bV.F_a(parseInt(f[4]), parseInt(f[8]), Ma, w), w = AscCommon.bV.F_a(parseInt(f[12]), parseInt(f[16]), Pa, eb), Cd.V9(Ma).hC() && Cd.V9(w).hC())) return this.Mo += f[1].length, this.ku = f[1], this.nha = Ma + ':' + w, !0;
    } else if (null != (f = w.match(ex))) {
      if (y(f) && (Ma = Ra(f[3], f[5]), w = Ra(f[8], f[10]), null !== Ma && null !== w && (Ma = AscCommon.bV.F_a(null, parseInt(f[4]), null, Ma), w = '' !== f[7] ? AscCommon.bV.F_a(null, parseInt(f[9]), null, w) : Ma, Cd.V9(Ma).hC() && Cd.V9(w).hC()))) return this.Mo += f[1].length, this.ku = f[1], this.nha = Ma + ':' +
        w, !0;
    } else {
      if (null != (f = w.match(jl)) && y(f) && (Ma = Ra(f[3], f[5]), w = Ra(f[8], f[10]), null !== Ma && null !== w && (Ma = AscCommon.bV.F_a(parseInt(f[4]), null, Ma), w = '' !== f[7] ? AscCommon.bV.F_a(parseInt(f[9]), null, w) : Ma, Cd.V9(Ma).hC() && Cd.V9(w).hC()))) return this.Mo += f[1].length, this.ku = f[1], this.nha = Ma + ':' + w, !0;
    } else if (f = w.match(Xd) || w.match(kw) || w.match(jk), null != f && (w = f[1].split(':'), Cd.V9(w[0]).hC() && Cd.V9(w[1]).hC())) return this.Mo += f[1].length, this.ku = f[1], !0;
    return !1;
  };
  Xc.prototype.Jbc = function (f, w, y) {
    this instanceof
    Xc && this.UV();
    var Ra = f.substring(w);
    if (AscCommonExcel.UT) {
      var Ma = Ra.match(Nm);
      if (null != Ma && (Ma[3] === Ma[5] || '[' === Ma[3] && ']' === Ma[5]) && (Ma[7] === Ma[9] || '[' === Ma[7] && ']' === Ma[9]) && (f = Ma[0], w = Ma[1], y = AscCommon.bV.F_a(parseInt(Ma[4]), parseInt(Ma[8]), !Ma[3], !Ma[7]), Cd.V9(y).hC())) return this.Mo += -1 < f.indexOf(' ') ? f.length - 1 : w.length, this.ku = w, this.nha = y, !0;
    } else if (Ma = Ra.match(fn), null != Ma) {
      f = Ma[0];
      w = Ma[1];
      if (Cd.V9(w).hC()) return this.Mo += -1 < f.indexOf(' ') ? f.length - 1 : w.length, this.ku = w, !0;
      if (y && (Ma = Ra.match(bv),
      (null != Ma || Ma != e) && 3 <= Ma.length)) return w = Ma[1], this.Mo += w.length, this.ku = w, !0;
    }
    return !1;
  };
  Xc.prototype.FHc = function (e, f, w) {
    this instanceof Xc && this.UV();
    e = e.substring(f);
    f = XRegExp.exec(e, Aj) || XRegExp.exec(e, Vp);
    !f && w && (f = XRegExp.exec(e, Xm));
    return null != f ? (this.Mo += f[0].length, this.ku = f[1], [!0, f.name_from ? f.name_from.replace(/''/g, '\'') : null, f.name_to ? f.name_to.replace(/''/g, '\'') : null]) : [!1, null, null];
  };
  Xc.prototype.iag = function (e, f) {
    this instanceof Xc && this.UV();
    e = e.substring(f);
    var w;
    return null ==
    e.match(Au) && null == e.match($t) && null == e.match(Lm) && null != (w = e.match(Kz)) ? (this.Mo += w[0].length, this.ku = w[0][0], !0) : !1;
  };
  Xc.prototype.uob = function (e, f, w) {
    this instanceof Xc && this.UV();
    e = e.substring(f).match(w ? Mm : lw);
    return null != e ? (this.ku = e[0].replace(Ra.eSa, Ra.RFb), this.Mo += e[0].length, !0) : !1;
  };
  Xc.prototype.bag = function (e, f) {
    this instanceof Xc && this.UV();
    for (var w, y = !1, Ra = e.length; f !== Ra;) if (w = e.charCodeAt(f), 40 === w) {
      this.ku = e[f];
      ++f;
      y = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (y) {
      for (; f !== Ra;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.Mo = f;
      return !0;
    }
    return !1;
  };
  Xc.prototype.oag = function (e, f) {
    this instanceof Xc && this.UV();
    for (var w, y = !1, Ra = e.length; f !== Ra;) if (w = e.charCodeAt(f), 41 === w) {
      this.ku = e[f];
      ++f;
      y = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (y) {
      for (; f !== Ra;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.Mo = f;
      return !0;
    }
  };
  Xc.prototype.P$f = function (e, f) {
    this instanceof Xc && this.UV();
    e = e.substring(f).match($t);
    return null != e ? (this.ku = e[0], this.Mo += e[0].length, !0) : !1;
  };
  Xc.prototype.L$f = function (e, f, w) {
    this instanceof
    Xc && this.UV();
    e = e.substring(f).match(w ? Bj : ez);
    return null != e ? (this.ku = e[0], this.Mo += e[0].length, !0) : !1;
  };
  Xc.prototype.UOf = function (e, f, w) {
    this instanceof Xc && this.UV();
    e = e.substring(f).match(w ? jr : Yt);
    return null != e ? (this.ku = e[0], this.Mo += e[0].length, !0) : !1;
  };
  Xc.prototype.vof = function (e, f, w) {
    this instanceof Xc && this.UV();
    e = e.substring(f).match(w ? ys : Zt);
    return null != e ? (this.ku = e[1], this.Mo += e[1].length, !0) : !1;
  };
  Xc.prototype.ePf = function (e, f) {
    this instanceof Xc && this.UV();
    e = e.substring(f).match(Nn);
    return null !=
    e ? (this.ku = e[1].replace('""', '"'), this.Mo += e[0].length, !0) : !1;
  };
  Xc.prototype.lUa = function (e, f) {
    this instanceof Xc && this.UV();
    e = XRegExp.exec(e.substring(f), Qx);
    if (null != e) {
      if ((e = e.name) && 0 !== e.length && e.toUpperCase() !== Ci.t && e.toUpperCase() !== Ci.f) return this.Mo += e.length, this.ku = e, !0;
      this.ku = e;
    }
    return !1;
  };
  Xc.prototype.Jof = function (e, f) {
    this instanceof Xc && this.UV();
    return (f = this.FHc(e, f)) && f[0] && f[1] && f[1].length ? this.lUa(e, this.Mo) : !1;
  };
  Xc.prototype.aag = function (e, f) {
    this instanceof Xc && this.UV();
    for (var w,
           y = !1, Ra = e.length; f !== Ra;) if (w = e.charCodeAt(f), 123 === w) {
      this.ku = e[f];
      ++f;
      y = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (y) {
      for (; f !== Ra;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.Mo = f;
      return !0;
    }
  };
  Xc.prototype.nag = function (e, f) {
    this instanceof Xc && this.UV();
    for (var w, y = !1, Ra = e.length; f !== Ra;) if (w = e.charCodeAt(f), 125 === w) {
      this.ku = e[f];
      ++f;
      y = !0;
      break;
    } else if (32 === w) ++f; else break;
    if (y) {
      for (; f !== Ra;) {
        w = e.charCodeAt(f);
        if (32 !== w) break;
        ++f;
      }
      this.Mo = f;
      return !0;
    }
  };
  Xc.prototype.aU = function (e, f, w) {
    this instanceof
    Xc && this.UV();
    e = XRegExp.exec(e.substring(f), w ? wn : Jr);
    return null != e && e.tableName ? (this.ku = e[0], this.Mo += e[0].length, e) : !1;
  };
  Xc.prototype.Hna = function (e) {
    var f = this.FHc(e, 0);
    if (f && !0 === f[0]) {
      var w = f[1], y = null !== this.Mo ? this.Mo : e.indexOf('!') + 1;
      if ((this.Cbc(e, y) || this.Jbc(e, y)) && this.ku.length == e.substring(y).length) return {
        sheet: w,
        S3a: f[2],
        Zg: this.ku
      };
    }
    return null;
  };
  Xc.prototype.zE = function (f, w) {
    f = f.split(':');
    var y = f[0];
    f = f[1] === e ? y : f[1];
    if (kr.test(y) && kr.test(f)) return (y !== f ? y + ':' + f : y) + '!' + w;
    y = y.replace(/'/g,
      '\'\'');
    f = f.replace(/'/g, '\'\'');
    return '\'' + (y !== f ? y + ':' + f : y) + '\'!' + w;
  };
  Xc.prototype.hob = function (e) {
    return kr.test(e) ? e : '\'' + e.replace(/'/g, '\'\'') + '\'';
  };
  Xc.prototype.S2d = function (e, f, w, y, Ra, Ma, Pa) {
    var eb, Ta, Va;
    Asc.I5a.Vn === w ? (y && (eb = zs.Hna(y)), eb && (Va = e.pta(eb.sheet)) && (Ta = AscCommonExcel.QH.HO(eb.Zg))) : Ta = AscCommonExcel.QH.HO(y);
    if (!Ta) return Asc.Fk.pg.k$b;
    if (Ra) if (Asc.I5a.Vn === w) if (Ma ? (e = Ta.Ya - Ta.xa + 1, Ta = Ta.Za - Ta.ya + 1) : (e = Ta.Za - Ta.ya + 1, Ta = Ta.Ya - Ta.xa + 1), Asc.Mk.L6 === Pa) {
      if (Pa = new Asc.mna, Pa.Wib(Asc.Mk.L6),
        Pa.Ylb(y), Pa.Oib(!Ma), y = AscFormat.LWb(Va, Pa).ib, 4 !== y.length || !y[0].Jc || !y[0].Jc.mk || 4 > y[0].Jc.mk.length) return Asc.Fk.pg.QRb;
    } else {
      if (255 < e) return Asc.Fk.pg.ojc;
      if (4096 < Ta) return Asc.Fk.pg.Dbd;
    } else if (Asc.I5a.gke === w) {
      if (!0 === f.Yf().mc.ao.mag(Ta)) return Asc.Fk.pg.DEb;
      if (f.Yf().Bbc(Ta, !0, !0)) return Asc.Fk.pg.dPc;
    } else if (Asc.I5a.dFf === w) {
      if (y = f.Yf().K1f(Ta), null !== y) return y;
    } else if (Asc.I5a.Jie === w && (y = f.Yf().F4f(Ta, Ma), null !== y)) return y;
    return Asc.Fk.pg.JZ;
  };
  Xc.prototype.DRf = function (e) {
    e != Ra.RFb ?
      (Ra.eSa = e, Ra.PTb = ';', Ra.E7b = '\\', Ra.HJa = ';', Mm = new RegExp('^ *[+-]?\\d*(\\d|\\' + Ra.eSa + ')\\d*([eE][+-]?\\d+)?'), Bj = new RegExp('^ *[' + Ra.PTb + '\\' + Ra.E7b + '] *')) : (Ra.PTb = Ra.F7b, Ra.E7b = Ra.kac, Ra.eSa = Ra.RFb, Ra.HJa = Ra.ixd, Mm = new RegExp('^ *[+-]?\\d*(\\d|\\' + Ra.RFb + ')\\d*([eE][+-]?\\d+)?'), Bj = new RegExp('^ *[' + Ra.F7b + '\\' + Ra.kac + '] *'));
    wn = $a();
  };
  Xc.prototype.XLf = function (e) {
    switch (e.toLowerCase()) {
      case '#' + Uh.a.toLocaleLowerCase():
      case '#All'.toLocaleLowerCase():
        e = yc.all;
        break;
      case '#' + Uh.d.toLocaleLowerCase():
      case '#Data'.toLocaleLowerCase():
        e =
          yc.data;
        break;
      case '#' + Uh.h.toLocaleLowerCase():
      case '#Headers'.toLocaleLowerCase():
        e = yc.headers;
        break;
      case '#' + Uh.t.toLocaleLowerCase():
      case '#Totals'.toLocaleLowerCase():
        e = yc.U9b;
        break;
      case '#' + Uh.tr.toLocaleLowerCase():
      case '@'.toLocaleLowerCase():
      case '#This Row'.toLocaleLowerCase():
        e = yc.hpb;
        break;
      default:
        e = yc.data;
    }
    return e;
  };
  Xc.prototype.V7f = function (e, f) {
    switch (e) {
      case yc.all:
        return f ? '#' + Uh.a : '#All';
      case yc.data:
        return f ? '#' + Uh.d : '#Data';
      case yc.headers:
        return f ? '#' + Uh.h : '#Headers';
      case yc.U9b:
        return f ?
          '#' + Uh.t : '#Totals';
      case yc.hpb:
        return f ? '#' + Uh.tr : '#This Row';
    }
    return null;
  };
  var zs = new Xc, Ef = new function () {
    this.map = {};
    this.UIc = {};
    this.value = function (e) {
      var f = this.map[e];
      AscCommon.Se.Qx && this.UIc[e] && (f = this.UIc[e]);
      return f ? f : e;
    };
    this.register = function (e, w, y, Ra) {
      un.aI || un.FCd ? (this.map[e] = 'url(../../../../sdkjs/common/Images/cursors/' + w + '.cur), ' + Ra, this.UIc[e] = 'url(../../../../sdkjs/common/Images/cursors/' + w + '_2x.cur), ' + Ra) : this.map[e] = f.opera ? Ra : AscCommon.Se.GBa || AscCommon.Se.rSa ? '-webkit-image-set(url(../../../../sdkjs/common/Images/cursors/' +
        w + '.png) 1x, url(../../../../sdkjs/common/Images/cursors/' + w + '_2x.png) 2x) ' + y + ', ' + Ra : 'url(\'../../../../sdkjs/common/Images/cursors/' + w + '.svg\') ' + y + ', url(\'../../../../sdkjs/common/Images/cursors/' + w + '.png\') ' + y + ', ' + Ra;
    };
  };
  Ef.register('de-formatpainter', 'text_copy', '2 11', 'pointer');
  id.prototype.zg = function () {
    if (!0 === this.hq || null === this.BN) return this.JIc++, '' + this.JIc;
    this.IIc++;
    return '' + this.BN + '_' + this.IIc;
  };
  id.prototype.a7b = function (e) {
    this.BN = e;
  };
  id.prototype.EDa = function (e) {
    this.hq = e;
  };
  id.prototype.yg =
    function () {
      this.BN = null;
      this.hq = !0;
      this.IIc = this.JIc = 0;
    };
  qb.prototype.Hi = function () {
    return this.ea;
  };
  qb.prototype.mH = function (e, f) {
    e === Kd && (this.Yl = null);
    this.ea = e;
    var w = editor;
    e = w.Fa.Wa;
    if (0 != f && e) {
      f = e.sb;
      f.TD();
      f.QG();
      if (w.Wy === AscCommon.bs.$y) {
        var y = e.qe[e.gc];
        y && y.eT && y.eT.Jf === this && f.cFb(e.gc, y.Hkb, y.tyb());
      }
      var Ra = w.ZZe();
      w = [];
      f = 0;
      for (y = Ra.length; f < y; ++f) w.push(Ra[f].Element);
      Ra = !1;
      f = 0;
      for (y = w.length; f < y; ++f) if (w[f].IHa() === this) {
        Ra = !0;
        break;
      }
      Ra && (e.xq.yge(), e.Ie(!1));
    }
  };
  qb.prototype.En = function (e) {
    this.ea ===
    Gf ? AscCommon.Kd.PW(!1) : this.ea === Vk || this.ea === ce || this.ea === If ? AscCommon.Kd.PW(!0) : AscCommon.Kd.PW(e);
  };
  qb.prototype.Jf = function (e) {
    Kd === this.ea && (!0 === e ? this.ea = Gf : (!0).ea = Vk);
  };
  qb.prototype.S8 = function () {
    return Kd != this.ea && Gf != this.ea ? !0 : !1;
  };
  qb.prototype.a7b = function (e) {
    this.Yl = e;
  };
  qb.prototype.BZ = function () {
    return ce === this.ea || If === this.ea ? !0 : !1;
  };
  rc.prototype.ia = function (e) {
    this.yU.push(e);
  };
  rc.prototype.sGf = function (e) {
    for (var f = 0, w = this.yU.length; f < w; ++f) if (this.yU[f].VK === e) {
      this.yU.splice(f,
        1);
      break;
    }
  };
  rc.prototype.yg = function () {
    this.yU.length = 0;
  };
  rc.prototype.En = function (e, f) {
    var w = f;
    f = this.yU.length;
    for (var y = 0; y < f; y++) if (w = this.yU[y].ege(e, w), !1 === w) return !1;
    return w;
  };
  rc.prototype.mka = function () {
    for (var e = this.yU.length, f = 0; f < e; f++) this.yU[f].LPd();
  };
  $e.prototype.LPd = function () {
    var e = AscCommon.History.hda, f = e.ua;
    this.VK.ob.jA = !0;
    this.VK.ob.Vm = this.Cna;
    e.Rb(this.VK.Na.rb());
    e.cb(this.VK.ob.ea);
    this.VK.ob.se(e);
    e = e.ua - f;
    this.VK.WUa.Qa = f;
    this.VK.WUa.c7a = e;
  };
  $e.prototype.ege = function (e, f) {
    if (Mc ===
      e) for (e = 0; e < this.QDd; e++) !1 !== this.Cna[e] && (f <= this.Cna[e] ? this.Cna[e]++ : Mc === this.FQ ? f++ : f--); else for (e = 0; e < this.QDd; e++) if (!1 !== this.Cna[e]) if (f < this.Cna[e]) this.Cna[e]--; else if (f > this.Cna[e]) Mc === this.FQ ? f++ : f--; else {
      if (AscCommon.J9 === this.FQ) return this.Cna[e] = !1;
      f++;
    }
    return f;
  };
  $e.prototype.xse = function (e, f, w) {
    var y = [];
    if (Mc === e) for (e = 0; e < w; e++) y[e] = f + e; else for (e = 0; e < w; e++) y[e] = f;
    return y;
  };
  var go = {}, Ys = 0;
  og.prototype.te = function (e) {
    var f = e >> 16 & 255, w = e >> 8 & 255;
    e &= 255;
    var y = Math.max(0, Math.min(255,
      .299 * f + .587 * w + .114 * e)), Ra = Math.max(0, Math.min(255, 128 - .168736 * f - .331264 * w + .5 * e)),
      Ma = Math.max(0, Math.min(255, 128 + .5 * f - .418688 * w - .081312 * e));
    63 < y && (y = 63);
    var Pa = Math.max(0, Math.min(255, y + 1.402 * (Ma - 128))) | 0;
    Ma = Math.max(0, Math.min(255, y - .34414 * (Ra - 128) - .71414 * (Ma - 128))) | 0;
    y = Math.max(0, Math.min(255, y + 1.772 * (Ra - 128))) | 0;
    this.Nad = new Cf(f, w, e, 255);
    this.V4c = new Cf(Pa, Ma, y, 255);
  };
  var Cj = new id;
  f.Asc.q0a = null;
  Oc.prototype.Teb = function () {
    return null == this.Oea ? this.Dz : this.Oea;
  };
  Oc.prototype.Lhf = function () {
    if (!this.hC()) return ['',
      ''];
    this.Oea = document.createElement('canvas');
    this.Oea.width = this.od * AscCommon.NA;
    this.Oea.height = this.Tc * AscCommon.NA;
    '' != this.Text ? this.DJa() : this.drawImage();
    var e = [];
    e.push(this.Oea.toDataURL('image/png'));
    var f = this.Oea.getContext('2d');
    f.strokeStyle = '#FF0000';
    f.lineWidth = 2;
    f.moveTo(0, 0);
    f.lineTo(this.Oea.width, this.Oea.height);
    f.moveTo(0, this.Oea.height);
    f.lineTo(this.Oea.width, 0);
    f.stroke();
    e.push(this.Oea.toDataURL('image/png'));
    this.Oea = null;
    return e;
  };
  Oc.prototype.rBf = function (e, w, y, Ra, Ma) {
    this.hic ?
      this.Text = e : (this.Image = '', this.NWa = null, this.Text = e, this.lo = w, this.xb = y, this.bf = Ra, this.ud = Ma, this.hic = !0, AscFonts.tp.UTa(this.Text, this, function () {
        this.hic = !1;
        var e = AscCommon.TK, y = AscFonts.T5.bna(w);
        !1 === e.FH(y, function () {
          f.Asc.q0a.Uc.$x(Asc.vE.tP, Asc.OH.FH);
          f.Asc.q0a.DJa();
        }) && this.DJa();
      }));
  };
  Oc.prototype.DJa = function () {
    var e = this.Uc.Ex, f = this.Uc.jr;
    this.Uc.Ex = !0;
    this.Uc.jr = !1;
    AscFormat.ej(AscCommon.jje, this, []);
    this.Uc.Ex = e;
    this.Uc.jr = f;
  };
  Oc.prototype.drawImage = function () {
    var e = this.Teb(), f = e.width,
      w = e.height;
    e = e.getContext('2d');
    e.clearRect(0, 0, f, w);
    var y = this.NWa.width / this.NWa.height;
    if (f / w > y) {
      var Ra = w;
      var Ma = y * Ra >> 0;
      w = 0;
      f = f - Ma >> 1;
    } else Ma = f, Ra = Ma / y >> 0, f = 0, w = w - Ra >> 1;
    e.drawImage(this.NWa, f, w, Ma, Ra);
  };
  Oc.prototype.bAf = Oc.prototype.selectImage = function () {
    this.Text = '';
    f.AscDesktopEditor.OpenFilenameDialog('images', !1, function (e) {
      Array.isArray(e) && (e = e[0]);
      if ('' != e) {
        var w = f.Asc.q0a;
        w.Image = f.AscDesktopEditor.GetImageBase64(e);
        w.NWa = new Image;
        w.NWa.onload = function () {
          f.Asc.q0a.drawImage();
        };
        w.NWa.src =
          w.Image;
        w = null;
      }
    });
  };
  Oc.prototype.hC = function () {
    return '' != this.Image || '' != this.Text;
  };
  Oc.prototype.dSa = function () {
    f.Asc.q0a.zLb.removeChild(this.Dz);
    delete f.Asc.q0a;
  };
  AscCommon.bpa = { n$a: 0, Lqb: 1 };
  AscCommon.WD = new function () {
    this.U_ = !1;
    this.y9 = [];
    this.VRa = [];
    this.Lxa = null;
    this.L1b = !1;
    this.zvd = 0;
    this.OHc = this.k6 = !1;
    this.heb = f.AscDesktopEditor && f.AscDesktopEditor.GetEncryptedHeader ? f.AscDesktopEditor.GetEncryptedHeader() : 'ENCRYPTED;';
    this.Cuc = this.heb.length;
    this.Wy = null;
    this.$Bb = -1;
    this.Hbc = !1;
    this.te =
      function () {
        this.U_ = !0;
      };
    this.h8 = function () {
      return this.U_;
    };
    this.e2a = function () {
      return f.gj && !f.gj.Sof() || !f.AscDesktopEditor || this.k6 ? !1 : 2 == this.zvd ? !0 : 0 === f.AscDesktopEditor.CryptoMode ? !1 : !0;
    };
    this.N1b = function () {
      return this.e2a() && this.Hbc;
    };
    this.fZe = function (e) {
      var w = this;
      f.AscDesktopEditor.OpenFilenameDialog('images', !0, function (y) {
        Array.isArray(y) || (y = [y]);
        if (0 != y.length) {
          for (var Ra = [], Ma = {
            THc: !0,
            G9: e,
            ext: []
          }, Pa = 0; Pa < y.length; Pa++) Ra.push(f.AscDesktopEditor.GetImageBase64(y[Pa], !0)), Ma.ext.push(AscCommon.Wgc(y[Pa]));
          w.CUa(this, Ra, AscCommon.bpa.n$a, Ma);
        }
      });
    };
    this.gZe = function (e, w) {
      var y = f.Asc.editor ? f.Asc.editor : f.editor;
      y.$G(Asc.vE.Gs, Asc.OH.MK);
      var Ra = this;
      f.AscDesktopEditor.DownloadFiles(e, [], function (e) {
        y.$x(Asc.vE.Gs, Asc.OH.MK);
        y.$G(Asc.vE.Gs, Asc.OH.uda);
        var Ma = [], Pa = { THc: !0, Wof: !0, G9: w, ext: [], xg: y }, eb;
        for (eb in e) Ma.push(f.AscDesktopEditor.GetImageBase64(e[eb], !0)), Pa.ext.push(f.AscDesktopEditor.GetImageFormat(e[eb])), f.AscDesktopEditor.RemoveFile(e[eb]);
        Ra.CUa(this, Ma, AscCommon.bpa.n$a, Pa);
      });
    };
    this.UJc = function () {
      (f.Asc.editor ?
        f.Asc.editor : f.editor).Oe('asc_onError', Asc.Fk.pg.Z4c, Asc.Fk.Lk.JU);
    };
    this.Otc = function () {
      null == this.Wy && (this.Wy = (f.Asc.editor ? f.Asc.editor : f.editor).Wy);
    };
    this.jff = function (e, f, w) {
      this.CUa(this, [w], AscCommon.bpa.Lqb, { GCd: !0, src: e, fE: f });
    };
    this.Zqf = function () {
      this.$Bb = setTimeout(function () {
        AscCommon.WD.CUa(e, e);
        this.$Bb = -1;
      }, 10);
    };
    this.CUa = function (w, y, Ra, Ma) {
      this.e2a() ? (e !== Ra && this.y9.push({
        sender: w,
        type: Ra,
        data: y,
        options: Ma
      }), 0 != this.y9.length && (e === Ra || 1 == this.y9.length && this.L1b) && (e !== Ra && -1 != this.$Bb &&
      (clearTimeout(this.$Bb), this.$Bb = -1), AscCommon.bpa.n$a == this.y9[0].type ? this.y9[0].options && this.y9[0].options.THc ? f.gj.Nya({
        type: 'encryptData',
        data: this.y9[0].data
      }) : f.gj.Nya({
        type: 'encryptData',
        data: JSON.parse(this.y9[0].data.changes)
      }) : AscCommon.bpa.Lqb == this.y9[0].type && (this.y9[0].options && this.y9[0].options.GCd ? f.gj.Nya({
        type: 'decryptData',
        data: this.y9[0].data
      }) : f.gj.Nya({
        type: 'decryptData',
        data: this.y9[0].data.changes
      })))) : AscCommon.bpa.n$a == Ra ? w.VV(y, !0) : AscCommon.bpa.Lqb == Ra && (this.BCd(y.changes) ?
        this.UJc() : w.t7b(y, !0));
    };
    this.czf = function (e) {
      var w = e.data;
      if (e.check) {
        if (this.Lxa) {
          this.OHc = !0;
          this.Otc();
          if (this.Wy == AscCommon.bs.NK) for (var y = w.length - 1; 0 <= y; y--) this.Lxa.rud[y] = w[y]; else for (y = w.length - 1; 0 <= y; y--) this.Lxa.rud[y].VK = w[y];
          this.L1b = !0;
          this.Lxa.G9.call(this.Lxa.sender);
          this.Lxa = null;
        } else if (e = this.y9[0], this.y9.splice(0, 1), AscCommon.bpa.n$a == e.type) if (e.options && e.options.THc) {
          for (y = 0; y < w.length; y++) this.heb == w[y].substr(0, this.Cuc) && (w[y] = this.heb + e.options.ext[y] + ';' + w[y].substr(this.Cuc));
          e.options.Wof ? AscCommon.ZLe(w, e.options.xg.f_, e.options.xg.Cga, e.options.xg.ll.uFa(), function (f) {
            e.options.xg.$x(Asc.vE.Gs, Asc.OH.uda);
            e.options.G9(f);
          }) : e.options.G9(Asc.Fk.pg.JZ, w);
        } else e.data.changes = JSON.stringify(w), e.sender.VV(e.data, !0); else AscCommon.bpa.Lqb == e.type && (e.options && e.options.GCd ? (f.AscDesktopEditor.ResaveFile(e.options.src, w[0]), e.options.fE.onload_crypto(e.options.src)) : (this.OHc = !0, e.data.changes = w, e.sender.t7b(e.data, !0)));
        this.Zqf();
      } else this.UJc();
    };
    this.BCd = function (e) {
      if (0 ==
        e.length) return !1;
      this.Otc();
      var f = this.Cuc + 1;
      if (e[0].change) {
        for (var w = e.length - 1; 0 <= w; w--) if (e[w].change.length > f) {
          var y = e[w].change.substr(0, f);
          if (-1 != y.indexOf(this.heb)) {
            Ra = !0;
            break;
          }
        }
        return Ra;
      }
      var Ra = !1;
      if (this.Wy == AscCommon.bs.NK) for (w = e.length - 1; 0 <= w; w--) {
        if (e[w].length > f && (y = e[w].substr(0, f), -1 != y.indexOf(this.heb))) {
          Ra = !0;
          break;
        }
      } else for (w = e.length - 1; 0 <= w; w--) if (e[w].VK.length > f && (y = e[w].VK.substr(0, f), -1 != y.indexOf(this.heb))) {
        Ra = !0;
        break;
      }
      return Ra;
    };
    this.zlf = function (e, w, y) {
      if (0 != e.length &&
        this.e2a()) {
        this.Lxa = { rud: e, gIa: [], sender: w, G9: y };
        this.Otc();
        if (this.Wy == AscCommon.bs.NK) for (w = e.length - 1; 0 <= w; w--) this.Lxa.gIa[w] = e[w]; else for (w = e.length - 1; 0 <= w; w--) this.Lxa.gIa[w] = e[w].VK;
        f.gj.Nya({ type: 'decryptData', data: this.Lxa.gIa });
      } else this.BCd(e) ? this.UJc() : (this.L1b = !0, y.call(w));
    };
    this.UZa = function (e, w, y) {
      if (f.U1b) f.AscDesktopEditor.NativeViewerOpen(y.cwb()); else {
        if (f.JHc || !this.e2a()) return !1;
        f.Sdb = !0;
        if (f.Asc.OUb.t5a === w) w = '<m_nCsvTxtEncoding>' + y.HTa() + '</m_nCsvTxtEncoding>', f.AscDesktopEditor.SetAdvancedOptions(w);
        else if (f.Asc.OUb.cVa === w) {
          e = y.I7b();
          var Ra = y.zFb();
          w = '<m_nCsvTxtEncoding>' + y.HTa() + '</m_nCsvTxtEncoding>';
          null != e && (w += '<m_nCsvDelimiter>' + e + '</m_nCsvDelimiter>');
          null != Ra && (w += '<m_nCsvDelimiterChar>' + Ra + '</m_nCsvDelimiterChar>');
          f.AscDesktopEditor.SetAdvancedOptions(w);
        } else f.Asc.OUb.sMb === w && (w = '<m_sPassword>' + AscCommon.o4c(y.cwb()) + '</m_sPassword>', e.cSa = y.cwb(), f.AscDesktopEditor.SetAdvancedOptions(w));
        return !0;
      }
    };
  };
  AscCommon.JTf = function (e, f) {
    this.uNa = this.tNa = 0;
    this.C7a = this.B7a = !1;
    this.Cvb =
      -1;
    this.gUe = e;
    this.hqd = f;
    this.CZa = 120;
    this.fqc = !1;
    this.cfg = function (e) {
      this.fqc = !0;
      this.CZa = e;
    };
    this.X8f = function (e) {
      this.B7a = !1;
      if (!AscCommon.Se.PFa) return e;
      this.tNa += e;
      if (Math.abs(this.tNa) >= this.CZa) return this.fqc ? 0 < this.tNa ? this.CZa : -this.CZa : this.tNa;
      this.B7a = !0;
      return 0;
    };
    this.Y8f = function (e) {
      this.C7a = !1;
      if (!AscCommon.Se.PFa) return e;
      this.uNa += e;
      if (Math.abs(this.uNa) >= this.CZa) return this.fqc ? 0 < this.uNa ? this.CZa : -this.CZa : this.uNa;
      this.C7a = !0;
      return 0;
    };
    this.B4f = function () {
      -1 != this.Cvb && (clearTimeout(this.Cvb),
        this.Cvb = -1);
      if ((this.B7a || this.C7a) && this.hqd) {
        var e = this, f = this.B7a ? this.tNa : 0, w = this.C7a ? this.uNa : 0;
        this.Cvb = setTimeout(function () {
          e.hqd.call(e.gUe, f, w);
          e.Cvb = -1;
          e.tNa = 0;
          e.uNa = 0;
        }, 100);
      }
      this.B7a || (this.tNa = 0);
      this.C7a || (this.uNa = 0);
      this.C7a = this.B7a = !1;
    };
  };
  kc.prototype.te = function (e) {
    this.Pbc = e || {};
  };
  kc.prototype.Ab = function (e) {
    return this.Pbc.hasOwnProperty(e) ? this.Pbc[e] : e;
  };
  Array.prototype.fill || Object.defineProperty(Array.prototype, 'fill', {
    value: function (f, w, y) {
      if (null == this) throw new TypeError('this is null or not defined');
      var Ra = Object(this), Ma = Ra.length >>> 0;
      w >>= 0;
      w = 0 > w ? Math.max(Ma + w, 0) : Math.min(w, Ma);
      y = y === e ? Ma : y >> 0;
      for (Ma = 0 > y ? Math.max(Ma + y, 0) : Math.min(y, Ma); w < Ma;) Ra[w] = f, w++;
      return Ra;
    }
  });
  'undefined' === typeof Int8Array || Int8Array.prototype.fill || (Int8Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint8Array || Uint8Array.prototype.fill || (Uint8Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint8ClampedArray || Uint8ClampedArray.prototype.fill || (Uint8ClampedArray.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Int16Array || Int16Array.prototype.fill || (Int16Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint16Array || Uint16Array.prototype.fill || (Uint16Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Int32Array || Int32Array.prototype.fill || (Int32Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint32Array || Uint32Array.prototype.fill || (Uint32Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Float32Array || Float32Array.prototype.fill ||
  (Float32Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Float64Array || Float64Array.prototype.fill || (Float64Array.prototype.fill = Array.prototype.fill);
  'undefined' === typeof Uint8Array || Uint8Array.prototype.slice || (Uint8Array.prototype.slice = Array.prototype.slice);
  var Ri = { Azf: 2, D3d: 2, Jqf: 100, qqf: 2E3, Kyf: !0 };
  bh.prototype.Y9e = function (e, f) {
    var w = this.EEd();
    0 < w ? setTimeout(function () {
      f();
    }, w) : e();
  };
  bh.prototype.EEd = function () {
    var e = -1;
    this.Esc < this.gFd.Azf && (e = this.uef(this.Esc, this.gFd), this.Esc++);
    return e;
  };
  bh.prototype.uef = function (e, f) {
    e = Math.round((f.Kyf ? Math.random() + 1 : 1) * f.Jqf * Math.pow(f.D3d, e));
    return e = Math.min(e, f.qqf);
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.tyd = function () {
    return f.SockJS || require('sockjs');
  };
  f.AscCommon.Phf = Ia;
  f.AscCommon.Ohf = cb;
  f.AscCommon.vxd = function () {
    var e = f.location.href, w = e.indexOf('?');
    0 < w && (e = e.substring(0, w));
    return e.substring(0, e.lastIndexOf('/') + 1);
  };
  f.AscCommon.gTd = function () {
    for (var e = [], f = 0; f < AscCommon.Jwb.length; ++f) {
      var w = AscCommon.Jwb[f];
      e.push({
        codepage: w[0],
        lcid: w[1], name: w[3]
      });
    }
    return e;
  };
  f.AscCommon.b8f = function (e) {
    var f = { encoding: AscCommon.H2d, size: 0 };
    2 <= e.length && (f.size = 2, 255 == e[0] && 254 == e[1] ? f.encoding = AscCommon.Q$e : 254 == e[0] && 255 == e[1] ? f.encoding = AscCommon.R$e : 3 <= e.length && (f.size = 3, 239 == e[0] && 187 == e[1] && 191 == e[2] ? f.encoding = AscCommon.EIb : 4 <= e.length && (f.size = 4, 255 == e[0] && 254 == e[1] && 0 == e[2] && 0 == e[3] ? f.encoding = AscCommon.S$e : 0 == e[0] && 0 == e[1] && 254 == e[2] && 255 == e[3] ? f.encoding = AscCommon.T$e : 43 == e[0] && 47 == e[1] && 118 == e[2] && 56 == e[3] ? f.encoding = AscCommon.RUb :
      43 == e[0] && 47 == e[1] && 118 == e[2] && 57 == e[3] ? f.encoding = AscCommon.RUb : 43 == e[0] && 47 == e[1] && 118 == e[2] && 43 == e[3] ? f.encoding = AscCommon.RUb : 43 == e[0] && 47 == e[1] && 118 == e[2] && 47 == e[3] && (f.encoding = AscCommon.RUb))));
    return f;
  };
  f.AscCommon.n$d = rb;
  f.AscCommon.qPf = mb;
  f.AscCommon.Jhf = function (e) {
    var f, w = qe(e);
    'svg' === w && (w += '+xml');
    return null !== w && Fe && (f = Fe[e]) ? 'data:image/' + w + ';base64,' + AscCommon.ZKb(f, f.length, 0) : null;
  };
  f.AscCommon.Grf = function (e, w, y, Ra) {
    function Ma() {
      Va && qc && Ra && Ra(Pa, eb);
    }

    var Pa = !1, eb = new kb, Va = !1,
      qc = !1, jb = e;
    jb = jb.replace(/\\/g, '/');
    f.IS_NATIVE_EDITOR || mb(jb, function (e) {
      jb.lastIndexOf('/');
      e ? (e = Ta(e)) ? (eb.Bnb = yb(e, y), eb.data = e) : Pa = !0 : Pa = !0;
      Va = !0;
      Ma();
    }, 'arraybuffer');
    w ? (Fe = {}, Ia().getBinaryContent(w, function (e, f) {
      e ? (Pa = qc = !0, Ma()) : (eb.gIa = [], cb().loadAsync(f).then(function (e) {
        var f = [], w = [];
        e.forEach(function (e, y) {
          f.push(e);
          w.push(y.async(e.endsWith('.json') ? 'string' : 'uint8array'));
        });
        Promise.all(w).then(function (e) {
          for (var w, y = 0; y < e.length; ++y) (w = f[y]).endsWith('.json') ? eb.gIa[parseInt(w.slice(7))] =
            JSON.parse(e[y]) : Fe[w] = e[y];
          qc = !0;
          Ma();
        });
      }));
    })) : (Fe = null, qc = !0);
    f.IS_NATIVE_EDITOR && (e = f['native'].openFileCommand(jb, w, y), jb.lastIndexOf('/'), e ? (eb.Bnb = yb(e, y), eb.data = e) : Pa = !0, Va = !0, Ma());
  };
  f.AscCommon.D4b = function (e, f, w, y) {
    var Ra = e.ll.Svc();
    Ra && Ra !== w.id && (w.docconnectionid = Ra);
    null == w.savetype ? e.ll.V2a(w) : (w.userconnectionid = e.ll.mSa(), Td({
      type: 'POST',
      url: '../../../../downloadas/' + w.id + '?cmd=' + encodeURIComponent(JSON.stringify(w)),
      data: y.p3b || y.data,
      contentType: 'application/octet-stream',
      error: function (e,
                       w, y) {
        f && f(null, !0, y);
      },
      success: function (e) {
        f && f(JSON.parse(e.responseText), !0);
      }
    }));
  };
  f.AscCommon.gAf = function (e, f, w, y, Ra, Ma, Pa) {
    Td({
      type: 'POST',
      url: '../../../../savefile/' + e + '?cmd=' + encodeURIComponent(JSON.stringify({
        id: e,
        userid: f,
        tokenSession: y,
        outputpath: w
      })),
      data: Ra,
      contentType: 'application/octet-stream',
      error: Ma,
      success: Pa
    });
  };
  f.AscCommon.yGb = Va;
  f.AscCommon.Eag = function (e, f) {
    e = e.split('/');
    f = f.split('/');
    e.pop();
    for (var w = 0; w < f.length; w++) '.' != f[w] && ('..' == f[w] ? e.pop() : e.push(f[w]));
    return e.join('/');
  };
  f.AscCommon.jW = function (e) {
    if (f.NATIVE_EDITOR_ENJINE) return e;
    var w = e.slice(0, 6);
    return 0 === w.indexOf('theme') && editor.JH ? editor.JH.Skb + e : 0 !== w.indexOf('http:') && 0 !== w.indexOf('data:') && 0 !== w.indexOf('https:') && 0 !== w.indexOf('file:') && 0 !== w.indexOf('ftp:') && (w = Me.W9(e)) ? w : e;
  };
  f.AscCommon.pla = function (e, f) {
    return e - f;
  };
  f.AscCommon.g7f = function (e, f) {
    return f - e;
  };
  f.AscCommon.FJb = zb;
  f.AscCommon.Rac = Ac;
  f.AscCommon.XTa = ec;
  f.AscCommon.uuc = function (e) {
    for (var f = '', w = e.length, y = 0; y < w; y++) f += ec(e[y]);
    return f;
  };
  f.AscCommon.rvd = function (e) {
    for (var f = [], w = e.length, y = 0; y < w; y++) {
      var Ra = null, Ma = e.charCodeAt(y);
      zb(Ma) ? y + 1 < w && (y++, Ra = Ac(Ma, e.charCodeAt(y))) : Ra = Ma;
      null !== Ra && f.push(Ra);
    }
    return f;
  };
  f.AscCommon.p3f = function (e) {
    wn = Ma(e ? e.StructureTables : null);
    ys = jb(e && e.CONST_TRUE_FALSE || lh);
    jr = Pa(e ? e.CONST_ERROR : null);
  };
  f.AscCommon.Zle = kf;
  f.AscCommon.Wgc = qe;
  f.AscCommon.kbf = function (e, f, w) {
    var y = qe(e);
    y = y ? e.length - y.length - 1 : e.length;
    w && y + f.length + 1 > w && (y = w - f.length - 1);
    return y < e.length ? e.substring(0, y) + '.' + f : e + '.' + f;
  };
  f.AscCommon.whf = function (e) {
    switch (e) {
      case yd.YHb:
      case yd.K$b:
        return 'pdf';
      case yd.OOc:
        return 'html';
      case yd.ZTc:
        return 'docx';
      case yd.N4c:
        return 'doc';
      case yd.Dcd:
        return 'odt';
      case yd.qed:
        return 'rtf';
      case yd.t5a:
        return 'txt';
      case yd.ibd:
        return 'mht';
      case yd.b6c:
        return 'epub';
      case yd.y6c:
        return 'fb2';
      case yd.mbd:
        return 'mobi';
      case yd.O4c:
        return 'docm';
      case yd.R4c:
        return 'dotx';
      case yd.Q4c:
        return 'dotm';
      case yd.B6c:
        return 'fodt';
      case yd.Kcd:
        return 'ott';
      case yd.P4c:
        return 'doct';
      case yd.BNd:
        return 'bin';
      case yd.JSON:
        return 'json';
      case yd.SVc:
        return 'xlsx';
      case yd.Dnd:
        return 'xls';
      case yd.Ccd:
        return 'ods';
      case yd.cVa:
        return 'csv';
      case yd.End:
        return 'xlsm';
      case yd.Hnd:
        return 'xltx';
      case yd.Gnd:
        return 'xltm';
      case yd.A6c:
        return 'fods';
      case yd.Jcd:
        return 'ots';
      case yd.Fnd:
        return 'xlst';
      case yd.YUc:
        return 'pptx';
      case yd.pdd:
        return 'ppt';
      case yd.Bcd:
        return 'odp';
      case yd.ndd:
        return 'ppsx';
      case yd.qdd:
        return 'pptm';
      case yd.mdd:
        return 'ppsm';
      case yd.ldd:
        return 'potx';
      case yd.kdd:
        return 'potm';
      case yd.z6c:
        return 'fodp';
      case yd.Icd:
        return 'otp';
    }
    return '';
  };
  f.AscCommon.qpe = function (w) {
    f.addEventListener && f.addEventListener('message', function (y) {
      if (null != y && null != y.data) try {
        var Ra = JSON.parse(y.data);
        if (null != Ra && null != Ra.type && 0 == Ra.type) if (hd.pXa == Ra.error) {
          var Ma = Ra.urls;
          if (Ma) {
            Me.Ywa(Ma);
            var Pa;
            for (Pa in Ma) if (Ma.hasOwnProperty(Pa)) {
              var eb = Ma[Pa];
              break;
            }
            w(Asc.Fk.pg.JZ, eb);
          }
        } else w(Va(Ra.error)); else if ('onExternalPluginMessage' === Ra.type) {
          if (f.gj) {
            if ('internalCommand' == Ra.subType) switch (Ra.data.type) {
              case 'onbeforedrop':
              case 'ondrop':
                f.gj.xg.ztf(Ra.data);
                return;
            }
            f.gj.iAf(y.data);
          }
        } else 'emulateUploadInFrame' === Ra.type && f._private_emulate_upload && (f._private_emulate_upload(Ra.name, Ra.content), f._private_emulate_upload = e);
      } catch (mw) {
      }
    }, !1);
  };
  f.AscCommon.ajd = function (e, f, w, y, Ra) {
    if (!1 === gf('image/*', !0, kg, y)) {
      y = ue();
      e = '../../../../uploadold/' + e + '/' + f + '/' + Me.RPa;
      w && (e += '?token=' + encodeURIComponent(w));
      w = '<html><head></head><body><form action="' + e + '" method="POST" enctype="multipart/form-data"><input id="apiiuFile" name="apiiuFile" type="file" accept="image/*" size="1"><input id="apiiuSubmit" name="apiiuSubmit" type="submit" style="display:none;"></form></body></html>';
      y.document.open();
      y.document.write(w);
      y.document.close();
      w = y.document.getElementById('apiiuFile');
      var Ma = y.document.getElementById('apiiuSubmit');
      w.onchange = function (e) {
        if (e && e.target && e.target.files && (e = kg(e.target.files), hd.pXa != e)) {
          Ra(Va(e));
          return;
        }
        Ra(Asc.Fk.pg.JZ);
        Ma.click();
      };
      w.click();
    }
  };
  f.AscCommon.Mng = function (e) {
    for (var f = w.Xbb, y = '.' + f[0], Ra = 1; Ra < f.length; ++Ra) y += ',.' + f[Ra];
    !1 === gf(y, !1, Di, e) && e(Asc.Fk.pg.QN);
  };
  f.AscCommon.ppe = function (e, w) {
    'undefined' != typeof FileReader && null != e && (e.ondragover =
      function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = gh(e) ? 'copy' : 'none';
        'copy' == e.dataTransfer.dropEffect && (f.Asc.editor ? f.Asc.editor : f.editor).BQc(e);
        return !1;
      }, e.ondrop = function (e) {
      e.preventDefault();
      var y = e.dataTransfer.files, Ra = kg(y), Ma = f.Asc.editor ? f.Asc.editor : f.editor;
      Ma.eRc();
      if (Ra == hd.toc) {
        try {
          var Pa = e.dataTransfer.getData('text/html');
          if (Pa && !AscCommon.Se.aI) {
            var eb = Pa.indexOf('StartHTML'), Ta = Pa.indexOf('<html');
            -1 == Ta && (Ta = Pa.indexOf('<HTML'));
            0 < eb && 0 < Ta && eb < Ta && (Pa = Pa.substr(Ta));
            Ma.pluginMethod_PasteHtml(Pa);
            return;
          }
        } catch (io) {
        }
        try {
          var Ia = e.dataTransfer.getData('text/plain');
          if (Ia) {
            Ma.pluginMethod_PasteText(Ia);
            return;
          }
        } catch (io) {
        }
        try {
          if (Ia = e.dataTransfer.getData('Text')) {
            Ma.pluginMethod_PasteText(Ia);
            return;
          }
        } catch (io) {
        }
      }
      w(Va(Ra), y);
    });
  };
  f.AscCommon.Eld = function (e, f, w, y, Ra) {
    if (0 < e.length) {
      for (var Ma = '../../../../upload/' + f + '/' + w + '/' + Me.RPa, Pa = [], eb = e.length - 1; -1 < eb; --eb) Pa.push(e[eb]);
      var Ta = Pa.pop(), Va = [], Ia = function () {
        if (4 == this.readyState) if (200 == this.status || 1223 == this.status) {
          var e =
            JSON.parse(this.responseText);
          Me.Ywa(e);
          for (var eb in e) if (e.hasOwnProperty(eb)) {
            Va.push(e[eb]);
            break;
          }
          0 === Pa.length ? Ra(Asc.Fk.pg.JZ, Va) : (Ta = Pa.pop(), e = new XMLHttpRequest, Ma = '../../../../upload/' + f + '/' + w + '/' + Me.RPa, e.open('POST', Ma, !0), e.setRequestHeader('Content-Type', Ta.type || 'application/octet-stream'), e.setRequestHeader('Authorization', 'Bearer ' + y), e.onreadystatechange = Ia, e.send(Ta));
        } else 403 === this.status ? Ra(Asc.Fk.pg.ncb) : Ra(Asc.Fk.pg.cZa);
      };
      e = new XMLHttpRequest;
      e.open('POST', Ma, !0);
      e.setRequestHeader('Content-Type',
        Ta.type || 'application/octet-stream');
      e.setRequestHeader('Authorization', 'Bearer ' + y);
      e.onreadystatechange = Ia;
      e.send(Ta);
    } else Ra(Asc.Fk.pg.iSb);
  };
  f.AscCommon.ZLe = function (e, f, w, y, Ra) {
    if (0 < e.length) {
      for (var Ma = '../../../../upload/' + f + '/' + w + '/' + Me.RPa, Pa = [], eb = e.length - 1; -1 < eb; --eb) Pa.push(e[eb]);
      var Ta = Pa.pop(), Va = [], Ia = function () {
        if (4 == this.readyState) if (200 == this.status || 1223 == this.status) {
          var e = JSON.parse(this.responseText);
          Me.Ywa(e);
          for (var eb in e) if (e.hasOwnProperty(eb)) {
            Va.push({ path: eb, url: e[eb] });
            break;
          }
          0 === Pa.length ? Ra(Va) : (Ta = Pa.pop(), e = new XMLHttpRequest, Ma = '../../../../upload/' + f + '/' + w + '/' + Me.RPa, e.open('POST', Ma, !0), e.setRequestHeader('Content-Type', Ta.type || 'application/octet-stream'), e.setRequestHeader('Authorization', 'Bearer ' + y), e.onreadystatechange = Ia, e.send(Ta));
        } else Ra([]);
      };
      e = new XMLHttpRequest;
      e.open('POST', Ma, !0);
      e.setRequestHeader('Content-Type', Ta.type || 'application/octet-stream');
      e.setRequestHeader('Authorization', 'Bearer ' + y);
      e.onreadystatechange = Ia;
      e.send(Ta);
    } else Ra(Asc.Fk.pg.iSb);
  };
  f.AscCommon.yjg = gh;
  f.AscCommon.Ayd = function (e) {
    var f = e.replace(/ /g, '%20');
    e = f.w5b(xt);
    !e && (e = f.w5b(gc));
    !e && (e = f.w5b(Gy));
    f = f.w5b(Gd);
    !e && (e = f);
    return e ? f ? AscCommon.Kwb.f6c : AscCommon.Kwb.epe : AscCommon.Kwb.k$c;
  };
  f.AscCommon.vtf = function (e, f) {
    /(((^https?)|(^ftp)):\/\/)|(^mailto:)/i.test(e) || (e = (AscCommon.Kwb.f6c == f ? 'mailto:' : 'http://') + e);
    return e.replace(/%20/g, ' ');
  };
  f.AscCommon.hGb = function (e, f, w, y) {
    if (!(e && '' !== e || f && '' !== f)) return new Cf(0, 0, 0, 255);
    if (go.hasOwnProperty(e)) e = go[e]; else if (go.hasOwnProperty(f)) e =
      go[f]; else {
      var Ra = Asc.Htd[Ys % Asc.Htd.length];
      ++Ys;
      e = go[e || f] = new og(Ra);
    }
    if (!e) return new Cf(0, 0, 0, 255);
    w = !0 === w ? e.V4c : e.Nad;
    return !0 === y ? w.r << 16 & 16711680 | w.vb << 8 & 65280 | w.Xa & 255 : w;
  };
  f.AscCommon.dhb = function (f) {
    return f == e || null == f || '' == f;
  };
  f.AscCommon.Xw = function (e) {
    return (' ' + e).substr(1);
  };
  f.AscCommon.TQa = function (e) {
    return e() ? (e = e().val) ? e : null : null;
  };
  f.AscCommon.jif = hi;
  f.AscCommon.lyb = function (e) {
    if (e()) {
      e = e();
      if (null != e.theme) return AscCommonExcel.T9.t3(hi(e.theme), hi(e.tint));
      if (null != e.rgb) return new AscCommonExcel.R7(16777215 &
        hi(e.rgb));
    }
    return null;
  };
  f.AscCommon.Pl = function (e) {
    return '0' !== e && 'false' !== e && 'off' !== e;
  };
  f.AscCommon.E$f = Ta;
  f.AscCommon.Mud = yb;
  f.AscCommon.Dkg = y;
  f.AscCommon.Wcd = kb;
  f.AscCommon.C7 = qb;
  f.AscCommon.lu = rc;
  f.AscCommon.ITc = $e;
  f.AscCommon.qva = function (e) {
    return 25.4 * (1440 * e / 25.4 + .5 | 0) / 20 / 72;
  };
  f.AscCommon.hcb = function (f) {
    return 25.4 * (null !== f && e !== f ? f : 1) / 20 / 72;
  };
  f.AscCommon.IZ = function (e) {
    return 1440 * e / 25.4 + .5 | 0;
  };
  f.AscCommon.Qgd = function (e) {
    e = e.toUpperCase();
    if (1 > e) return 0;
    if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i.test(e)) return NaN;
    var f = { M: 1E3, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, w = 0;
    e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (e) {
      w += f[e];
    });
    return w;
  };
  f.AscCommon.Ead = function (e) {
    e = e.toUpperCase();
    if (0 >= e.length) return NaN;
    var f = e.length, w = e.charCodeAt(0);
    if (65 > w || 90 < w) return NaN;
    for (var y = 1; y < f; ++y) if (e.charCodeAt(y) !== w) return NaN;
    return w - 64 + 26 * (f - 1);
  };
  f.AscCommon.D6b = function (e, f) {
    var w = '';
    switch (f) {
      case Asc.ag.sB:
        w = '' + e;
        break;
      case Asc.ag.gTa:
        w = '' + e;
        1 === w.length && (w = '0' + w);
        break;
      case Asc.ag.Kqb:
        w =
          20 >= e ? String.fromCharCode(9312 + e - 1) : '' + e;
        break;
      case Asc.ag.ES:
      case Asc.ag.s0:
        --e;
        var y = (e - e % 26) / 26;
        e %= 26;
        e = Asc.ag.ES === f ? String.fromCharCode(e + 97) : String.fromCharCode(e + 65);
        for (f = 0; f < y + 1; ++f) w += e;
        break;
      case Asc.ag.FS:
      case Asc.ag.t0:
        y = Asc.ag.FS === f ? 'm;cm;d;cd;c;xc;l;xl;x;ix;v;iv;i; '.split(';') : 'M;CM;D;CD;C;XC;L;XL;X;IX;V;IV;I; '.split(';');
        var Ra = [1E3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 0];
        for (f = 0; 0 < e;) {
          for (; Ra[f] <= e;) w += y[f], e -= Ra[f];
          f++;
          if (f >= y.length) break;
        }
    }
    return w;
  };
  f.AscCommon.Apf = function (e,
                              w, y) {
    f.AscNotLoadAllScript ? w() : $g('https://determined-easley-10afef.netlify.app/sdkjs/' + e + '/sdk-all.js', w, y);
  };
  f.AscCommon.GJb = $g;
  f.AscCommon.kyb = function (e) {
    var f = e.metaKey || e.ctrlKey;
    return e.altKey && (un.PFa ? !f : f);
  };
  f.AscCommon.fTd = function (e) {
    for (var f = 0; f < AscCommon.fob.length; ++f) {
      var w = AscCommon.fob[f];
      if (w && w.name === e) return ah(f);
    }
    return null;
  };
  f.AscCommon.r8b = ah;
  f.AscCommon.IWb = function (e, f) {
    var w = { R: 0, G: 0, B: 0, Bf: 255 };
    var y = new AscCommon.f1c;
    y.scheme = e;
    y.name = e.name;
    e.be[8].$e(f, null, null, null, w);
    var Ra = e.be[8].RGBA;
    y.Ad(new AscCommon.BM(Ra.R,
      Ra.G, Ra.B));
    e.be[12].$e(f, null, null, null, w);
    Ra = e.be[12].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[9].$e(f, null, null, null, w);
    Ra = e.be[9].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[13].$e(f, null, null, null, w);
    Ra = e.be[13].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[0].$e(f, null, null, null, w);
    Ra = e.be[0].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[1].$e(f, null, null, null, w);
    Ra = e.be[1].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[2].$e(f, null, null, null, w);
    Ra = e.be[2].RGBA;
    y.Ad(new AscCommon.BM(Ra.R,
      Ra.G, Ra.B));
    e.be[3].$e(f, null, null, null, w);
    Ra = e.be[3].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[4].$e(f, null, null, null, w);
    Ra = e.be[4].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[5].$e(f, null, null, null, w);
    Ra = e.be[5].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[11].$e(f, null, null, null, w);
    Ra = e.be[11].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    e.be[10].$e(f, null, null, null, w);
    Ra = e.be[10].RGBA;
    y.Ad(new AscCommon.BM(Ra.R, Ra.G, Ra.B));
    return y;
  };
  f.AscCommon.zug = function (e, f, w) {
    var y = Cc(e, f);
    if (-1 < y) return y;
    y = w;
    null === w && (y = e.length);
    e.splice(y, 0, f);
    return y;
  };
  f.AscCommon.VWb = Cc;
  f.AscCommon.C8d = function (e) {
    return 12544 <= e && 12591 >= e || 12704 <= e && 12735 >= e || 19968 <= e && 40938 >= e || 13312 <= e && 19893 >= e || 131072 <= e && 173782 >= e || 173824 <= e && 177972 >= e || 177984 <= e && 178205 >= e || 178208 <= e && 183969 >= e || 183984 <= e && 191456 >= e || 63744 <= e && 64255 >= e || 194560 <= e && 195103 >= e || 12032 <= e && 12255 >= e || 11904 <= e && 12031 >= e || 12736 <= e && 12783 >= e || 12272 <= e && 12287 >= e || 4352 <= e && 4607 >= e || 43360 <= e && 43391 >= e || 55216 <= e && 55295 >= e || 12592 <=
      e && 12687 >= e || 65280 <= e && 65519 >= e || 44032 <= e && 55215 >= e || 12352 <= e && 12447 >= e || 110848 <= e && 110895 >= e || 110592 <= e && 110847 >= e || 12688 <= e && 12703 >= e || 12448 <= e && 12543 >= e || 12784 <= e && 12799 >= e || 42192 <= e && 42239 >= e || 93952 <= e && 94111 >= e || 110960 <= e && 111359 >= e || 94208 <= e && 100332 >= e || 100352 <= e && 101119 >= e || 40960 <= e && 42127 >= e || 42128 <= e && 42191 >= e;
  };
  f.AscCommon.A_d = Xa;
  f.AscCommon.tH = Me;
  f.AscCommon.Lmb = yc;
  f.AscCommon.URd = Ci;
  f.AscCommon.NWc = {
    nil: '#NULL!', div: '#DIV/0!', value: '#VALUE!', ref: '#REF!', name: '#NAME?', num: '#NUM!', na: '#N/A',
    getdata: '#GETTING_DATA', uf: '#UNSUPPORTED_FUNCTION!'
  };
  f.AscCommon.D2d = jg;
  f.AscCommon.Dgc = Ra;
  f.AscCommon.tRf = /\s/g;
  f.AscCommon.CEg = /\s/;
  f.AscCommon.dJd = Pq;
  f.AscCommon.cpf = 'de-formatpainter';
  f.AscCommon.bV = zs;
  f.AscCommon.eg = Cj;
  f.AscCommon.fFa = Ef;
  f.AscCommon.Lgf = Ri;
  f.AscCommon.$be = bh;
  f.AscCommon.gxa = function (e, f) {
    f || (f = function (e) {
      e.setAttribute('src', e.getAttribute('src'));
    });
    e.onerror = qc(e, e.onerror, f);
  };
  f.AscCommon.pjg = f.AscCommon.CSignatureDrawer = Oc;
  var Zh = Oc.prototype;
  Zh.getImages = Zh.Lhf;
  Zh.setText =
    Zh.rBf;
  Zh.selectImage = Zh.bAf;
  Zh.isValid = Zh.hC;
  Zh.destroy = Zh.dSa;
  f.AscCommon.Ws = new kc;
  f.AscCommon.wSc = function (f, w, y) {
    if (w.zFb()) var Ra = w.zFb(); else switch (w.I7b()) {
      case AscCommon.p_a.kf:
        Ra = e;
        break;
      case AscCommon.p_a.QX:
        Ra = '\t';
        break;
      case AscCommon.p_a.iEe:
        Ra = ';';
        break;
      case AscCommon.p_a.Ege:
        Ra = ':';
        break;
      case AscCommon.p_a.F3c:
        Ra = ',';
        break;
      case AscCommon.p_a.ic:
        Ra = ' ';
    }
    w = [];
    f = f.split(/\r?\n/);
    for (var Ma = 0; Ma < f.length; ++Ma) {
      var Pa = f[Ma];
      if (' ' === Ra && y) {
        var eb = !1;
        Pa[0] === Ra && (eb = !0);
        Pa = eb ? Ra + Pa.trim() :
          Pa.trim();
      }
      w.push(Pa.split(Ra));
    }
    return w;
  };
  f.AscCommon.lSa = function (e) {
    return e ? e.endsWith('Z') ? Date.parse(e) : Date.parse(e + 'Z') : NaN;
  };
  f.AscCommon.Yx = function (e) {
    return (e = rk(e)) && '%' !== e.type && 'none' !== e.type ? e.val : null;
  };
  f.AscCommon.w4a = rk;
  f.AscCommon.IYd = vc;
})(window);
window.asc_initAdvancedOptions = function (f, e, Ia) {
  if (window.U1b) return window.NativeFileOpen_error(window.U1b, e, Ia);
  var cb = window.Asc.editor ? window.Asc.editor : window.editor;
  if (90 == f || 91 == f) {
    if (window.AscDesktopEditor && 0 !== window.AscDesktopEditor.CryptoMode && !cb.l6) {
      cb.axa = [];
      cb.axa.push(f);
      cb.axa.push(e);
      cb.axa.push(Ia);
      return;
    }
    if (AscCommon.WD.e2a() && !window.Sdb) {
      window.Sdb = !0;
      window.gj.Nya({ type: 'getPasswordByFile', hash: e, docinfo: Ia });
      return;
    }
  }
  window.Sdb = !1;
  cb.Ocb(void 0, 90 == f || 91 == f ? !0 : void 0);
};
window.asc_IsNeedBuildCryptedFile = function () {
  if (!window.AscDesktopEditor || !window.AscDesktopEditor.CryptoMode) return !1;
  var f = window.Asc.editor ? window.Asc.editor : window.editor, e = !1, Ia = null;
  f.ll && f.ll.nl && f.ll.nl.Swa && (Ia = f.ll.nl.Swa);
  var cb = 0, Xa;
  for (Xa in Ia) cb++;
  1 >= cb ? null != AscCommon.History.kM && -1 != AscCommon.History.kM ? e = !0 : f.Wy == AscCommon.bs.NK ? AscCommon.WD.OHc && (e = !0) : 0 != AscCommon.Kd.Ira.length && (e = !0) : e = !1;
  window.AscDesktopEditor.execCommand('encrypt:isneedbuild', '' + e);
  return e;
};
window.UpdateSystemPlugins = function () {
  var f = JSON.parse(window.AscDesktopEditor.GetInstallPlugins());
  f[0].url = f[0].url.replace(' ', '%20');
  f[1].url = f[1].url.replace(' ', '%20');
  for (var e = 0; 2 > e; e++) for (var Ia = f[e], cb = Ia.pluginsData.length, Xa = 0; Xa < cb; Xa++) Ia.pluginsData[Xa].baseUrl = Ia.url + Ia.pluginsData[Xa].guid.substring(4) + '/', window.AscDesktopEditor.IsLocalFile() || (Ia.pluginsData[Xa].baseUrl = 'ascdesktop://plugin_content/' + Ia.pluginsData[Xa].baseUrl);
  var ib = [];
  for (e = 0; 2 > e; e++) for (Ia = f[e], cb = Ia.pluginsData.length,
                                 Xa = 0; Xa < cb; Xa++) for (var y = Ia.pluginsData[Xa], kb = 0; kb < y.variations.length; kb++) {
    var rb = y.variations[kb];
    if ('desktop' == rb.initDataType) {
      if ('encryption' == rb.initData) {
        (kb = rb.cryptoMode) || (kb = '1');
        AscCommon.WD.zvd = parseInt(kb);
        ib.push(y);
        break;
      }
      ib.push(y);
      break;
    }
  }
  f = [];
  for (Xa = 0; Xa < ib.length; Xa++) e = new Asc.Sdc, e.deserialize(ib[Xa]), f.push(e);
  window.gj.jzf('', f);
  window.gj.Mzf();
};
window.buildCryptoFile_Start = function () {
  (window.Asc.editor ? window.Asc.editor : window.editor).$G(Asc.vE.Gs, Asc.OH.lH);
  window.gj.Nya({ type: 'generatePassword' });
};
window.buildCryptoFile_End = function (f, e, Ia, cb) {
  var Xa = window.Asc.editor ? window.Asc.editor : window.editor;
  Xa.$x(Asc.vE.Gs, Asc.OH.lH);
  0 != e ? Xa.Oe('asc_onError', Asc.Fk.pg.bMb, Asc.Fk.Lk.Vo) : (Xa.Bpc = function () {
    this.Bpc = null;
    Xa.$G(Asc.vE.Gs, Asc.OH.lH);
    var e = new XMLHttpRequest;
    e.open('GET', 'ascdesktop://fonts/' + f, !0);
    e.responseType = 'arraybuffer';
    e.overrideMimeType ? e.overrideMimeType('text/plain; charset=x-user-defined') : e.setRequestHeader('Accept-Charset', 'x-user-defined');
    e.onload = function () {
      if (200 == this.status) {
        var e =
          new Uint8Array(this.response), f = '.docx';
        switch (Xa.Wy) {
          case AscCommon.bs.$y:
            f = '.pptx';
            break;
          case AscCommon.bs.NK:
            f = '.xlsx';
        }
        AscCommon.gAf(Xa.f_, Xa.Cga, 'output' + f, Xa.Ard(), e, function () {
          Xa.$x(Asc.vE.Gs, Asc.OH.lH);
          Xa.Oe('asc_onError', Asc.Fk.pg.bMb, Asc.Fk.Lk.JU);
          window.AscDesktopEditor.buildCryptedEnd(!1);
        }, function (e) {
          try {
            var f = {
              accounts: e.responseText ? JSON.parse(e.responseText) : void 0,
              hash: Ia,
              password: cb,
              type: 'share',
              docinfo: Xa.Hvd
            };
            Xa.Hvd = void 0;
            window.AscDesktopEditor.sendSystemMessage(f);
            window.AscDesktopEditor.CallInAllWindows('function(){ if (window.DesktopUpdateFile) { window.DesktopUpdateFile(undefined); } }');
            Xa.$x(Asc.vE.Gs, Asc.OH.lH);
            setTimeout(function () {
              window.AscDesktopEditor.buildCryptedEnd(!0);
            }, 1E3);
          } catch (Ta) {
          }
        });
      }
    };
    e.send(null);
  }, window.gj.Nya({ type: 'setPasswordByFile', hash: Ia, password: cb }));
};
window.NativeFileOpen_error = function (f, e, Ia) {
  var cb = window.Asc.editor ? window.Asc.editor : window.editor;
  'password' == f ? (window.U1b = f, window.AscDesktopEditor && 0 !== window.AscDesktopEditor.CryptoMode && !cb.l6 ? (cb.axa = [], cb.axa.push(90), cb.axa.push(e), cb.axa.push(Ia)) : AscCommon.WD.e2a() && !window.Sdb ? (window.Sdb = !0, window.gj.Nya({
    type: 'getPasswordByFile',
    hash: e,
    docinfo: Ia
  })) : (window.Sdb = !1, cb.Ocb(void 0, !0))) : 'error' == f && cb.Oe('asc_onError', c_oAscError.pg.QIa, c_oAscError.Lk.JU);
};
window.CryptoDownloadAsEnd = function () {
  (window.Asc.editor ? window.Asc.editor : window.editor).$x(Asc.vE.Gs, Asc.OH.Rfc);
  window.JHc = void 0;
};
window.AscDesktopEditor_Save = function () {
  (window.Asc.editor ? window.Asc.editor : window.editor).xda(!1) || window.AscDesktopEditor.OnSave();
};
'use strict';
(function (f, e) {
  function Ia(e) {
    this.Na = e;
    this.qlc = !1;
  }

  function cb(e, f, y, Ta) {
    Ia.call(this, e);
    this.Qa = f;
    this.wd = y;
    this.jA = !1;
    this.Vm = [];
    this.ia = Ta;
    this.qlc = !1;
  }

  function Xa(e, f, y, Ta) {
    Ia.call(this, e);
    this.va = !0 === Ta ? !0 : !1;
    this.tb = f;
    this.Ha = y;
  }

  function ib(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function y(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function kb(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function rb(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function mb(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function Ta(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function yb(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function Va(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function zb(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function Ac(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function ec(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  function vc(e, f, y, Ta) {
    Xa.call(this, e, f, y, Ta);
  }

  f.AscDFH = f.AscDFH || {};
  f.AscDFH.Glg = function (e) {
    var f = 'Unknown';
    switch (e) {
      case AscDFH.U4d:
        f = 'Cut';
        break;
      case AscDFH.mmf:
        f = 'PasteButtonIE';
        break;
      case AscDFH.nmf:
        f = 'PasteButtonNotIE';
        break;
      case AscDFH.bxc:
        f = 'ChartDrawingObjects';
        break;
      case AscDFH.ozd:
        f = 'CommonControllerCheckChartText';
        break;
      case AscDFH.pzd:
        f = 'CommonControllerUnGroup';
        break;
      case AscDFH.ARc:
        f = 'CommonControllerCheckSelected';
        break;
      case AscDFH.Jlf:
        f = 'CommonControllerSetGraphicObject';
        break;
      case AscDFH.STd:
        f = 'CommonStatesAddNewShape';
        break;
      case AscDFH.Klf:
        f = 'CommonStatesRotate';
        break;
      case AscDFH.omf:
        f = 'PasteNative';
        break;
      case AscDFH.z5d:
        f = 'Document_GroupUnGroup';
        break;
      case AscDFH.eUd:
        f = 'Document_SetDefaultLanguage';
        break;
      case AscDFH.YTd:
        f = 'Document_ChangeColorScheme';
        break;
      case AscDFH.V4d:
        f = 'Document_AddChart';
        break;
      case AscDFH.q5d:
        f = 'Document_EditChart';
        break;
      case AscDFH.tYc:
        f = 'Document_DragText';
        break;
      case AscDFH.Tzd:
        f = 'Document_DocumentContentExtendToPos';
        break;
      case AscDFH.zzd:
        f = 'Document_AddHeader';
        break;
      case AscDFH.xzd:
        f = 'Document_AddFooter';
        break;
      case AscDFH.fAd:
        f = 'Document_ParagraphExtendToPos';
        break;
      case AscDFH.eAd:
        f = 'Document_ParagraphChangeFrame';
        break;
      case AscDFH.mAd:
        f = 'Document_ReplaceAll';
        break;
      case AscDFH.nAd:
        f = 'Document_ReplaceSingle';
        break;
      case AscDFH.GAd:
        f =
          'Document_TableAddNewRowByTab';
        break;
      case AscDFH.b5d:
        f = 'Document_AddNewShape';
        break;
      case AscDFH.r5d:
        f = 'Document_EditWrapPolygon';
        break;
      case AscDFH.D5d:
        f = 'Document_MoveInlineObject';
        break;
      case AscDFH.n5d:
        f = 'Document_CopyAndMoveInlineObject';
        break;
      case AscDFH.O5d:
        f = 'Document_RotateInlineDrawing';
        break;
      case AscDFH.M5d:
        f = 'Document_RotateFlowDrawingCtrl';
        break;
      case AscDFH.N5d:
        f = 'Document_RotateFlowDrawingNoCtrl';
        break;
      case AscDFH.C5d:
        f = 'Document_MoveInGroup';
        break;
      case AscDFH.k5d:
        f = 'Document_ChangeWrapContour';
        break;
      case AscDFH.l5d:
        f = 'Document_ChangeWrapContourAddPoint';
        break;
      case AscDFH.v5d:
        f = 'Document_GrObjectsBringToFront';
        break;
      case AscDFH.u5d:
        f = 'Document_GrObjectsBringForwardGroup';
        break;
      case AscDFH.t5d:
        f = 'Document_GrObjectsBringForward';
        break;
      case AscDFH.y5d:
        f = 'Document_GrObjectsSendToBackGroup';
        break;
      case AscDFH.x5d:
        f = 'Document_GrObjectsSendToBack';
        break;
      case AscDFH.s5d:
        f = 'Document_GrObjectsBringBackwardGroup';
        break;
      case AscDFH.aUd:
        f = 'Document_GrObjectsBringBackward';
        break;
      case AscDFH.w5d:
        f = 'Document_GrObjectsChangeWrapPolygon';
        break;
      case AscDFH.gxc:
        f = 'Document_MathAutoCorrect';
        break;
      case AscDFH.T5d:
        f = 'Document_SetFramePrWithFontFamily';
        break;
      case AscDFH.S5d:
        f = 'Document_SetFramePr';
        break;
      case AscDFH.U5d:
        f = 'Document_SetFramePrWithFontFamilyLong';
        break;
      case AscDFH.x6d:
        f = 'Document_SetTextFontName';
        break;
      case AscDFH.z6d:
        f = 'Document_SetTextFontSize';
        break;
      case AscDFH.t6d:
        f = 'Document_SetTextBold';
        break;
      case AscDFH.C6d:
        f = 'Document_SetTextItalic';
        break;
      case AscDFH.H6d:
        f = 'Document_SetTextUnderline';
        break;
      case AscDFH.G6d:
        f = 'Document_SetTextStrikeout';
        break;
      case AscDFH.w6d:
        f = 'Document_SetTextDStrikeout';
        break;
      case AscDFH.F6d:
        f = 'Document_SetTextSpacing';
        break;
      case AscDFH.u6d:
        f = 'Document_SetTextCaps';
        break;
      case AscDFH.E6d:
        f = 'Document_SetTextSmallCaps';
        break;
      case AscDFH.D6d:
        f = 'Document_SetTextPosition';
        break;
      case AscDFH.lUd:
        f = 'Document_SetTextLang';
        break;
      case AscDFH.k6d:
        f = 'Document_SetParagraphLineSpacing';
        break;
      case AscDFH.l6d:
        f = 'Document_SetParagraphLineSpacingBeforeAfter';
        break;
      case AscDFH.A5d:
        f = 'Document_IncFontSize';
        break;
      case AscDFH.p5d:
        f = 'Document_DecFontSize';
        break;
      case AscDFH.d6d:
        f = 'Document_SetParagraphBorders';
        break;
      case AscDFH.p6d:
        f = 'Document_SetParagraphPr';
        break;
      case AscDFH.c6d:
        f = 'Document_SetParagraphAlign';
        break;
      case AscDFH.I6d:
        f = 'Document_SetTextVertAlign';
        break;
      case AscDFH.m6d:
        f = 'Document_SetParagraphNumbering';
        break;
      case AscDFH.r6d:
        f = 'Document_SetParagraphStyle';
        break;
      case AscDFH.o6d:
        f = 'Document_SetParagraphPageBreakBefore';
        break;
      case AscDFH.s6d:
        f = 'Document_SetParagraphWidowControl';
        break;
      case AscDFH.i6d:
        f = 'Document_SetParagraphKeepLines';
        break;
      case AscDFH.j6d:
        f = 'Document_SetParagraphKeepNext';
        break;
      case AscDFH.e6d:
        f = 'Document_SetParagraphContextualSpacing';
        break;
      case AscDFH.B6d:
        f = 'Document_SetTextHighlightNone';
        break;
      case AscDFH.A6d:
        f = 'Document_SetTextHighlightColor';
        break;
      case AscDFH.v6d:
        f = 'Document_SetTextColor';
        break;
      case AscDFH.q6d:
        f = 'Document_SetParagraphShd';
        break;
      case AscDFH.f6d:
        f = 'Document_SetParagraphIndent';
        break;
      case AscDFH.Zzd:
        f = 'Document_IncParagraphIndent';
        break;
      case AscDFH.Rzd:
        f = 'Document_DecParagraphIndent';
        break;
      case AscDFH.h6d:
        f =
          'Document_SetParagraphIndentRight';
        break;
      case AscDFH.g6d:
        f = 'Document_SetParagraphIndentFirstLine';
        break;
      case AscDFH.a6d:
        f = 'Document_SetPageOrientation';
        break;
      case AscDFH.b6d:
        f = 'Document_SetPageSize';
        break;
      case AscDFH.UTd:
        f = 'Document_AddPageBreak';
        break;
      case AscDFH.d5d:
        f = 'Document_AddPageNumToHdrFtr';
        break;
      case AscDFH.c5d:
        f = 'Document_AddPageNumToCurrentPos';
        break;
      case AscDFH.X5d:
        f = 'Document_SetHdrFtrDistance';
        break;
      case AscDFH.Z5d:
        f = 'Document_SetHdrFtrFirstPage';
        break;
      case AscDFH.Y5d:
        f = 'Document_SetHdrFtrEvenAndOdd';
        break;
      case AscDFH.$5d:
        f = 'Document_SetHdrFtrLink';
        break;
      case AscDFH.e5d:
        f = 'Document_AddTable';
        break;
      case AscDFH.M6d:
        f = 'Document_TableAddRowAbove';
        break;
      case AscDFH.N6d:
        f = 'Document_TableAddRowBelow';
        break;
      case AscDFH.K6d:
        f = 'Document_TableAddColumnLeft';
        break;
      case AscDFH.L6d:
        f = 'Document_TableAddColumnRight';
        break;
      case AscDFH.P6d:
        f = 'Document_TableRemoveRow';
        break;
      case AscDFH.O6d:
        f = 'Document_TableRemoveColumn';
        break;
      case AscDFH.K5d:
        f = 'Document_RemoveTable';
        break;
      case AscDFH.B5d:
        f = 'Document_MergeTableCells';
        break;
      case AscDFH.J6d:
        f = 'Document_SplitTableCells';
        break;
      case AscDFH.g5d:
        f = 'Document_ApplyTablePr';
        break;
      case AscDFH.$4d:
        f = 'Document_AddImageUrl';
        break;
      case AscDFH.a5d:
        f = 'Document_AddImageUrlLong';
        break;
      case AscDFH.Z4d:
        f = 'Document_AddImageToPage';
        break;
      case AscDFH.XTd:
        f = 'Document_ApplyImagePrWithUrl';
        break;
      case AscDFH.f5d:
        f = 'Document_ApplyImagePrWithUrlLong';
        break;
      case AscDFH.Vlf:
        f = 'Document_ApplyImagePrWithFillUrl';
        break;
      case AscDFH.Wlf:
        f = 'Document_ApplyImagePrWithFillUrlLong';
        break;
      case AscDFH.Kzd:
        f =
          'Document_ApplyImagePr';
        break;
      case AscDFH.X4d:
        f = 'Document_AddHyperlink';
        break;
      case AscDFH.i5d:
        f = 'Document_ChangeHyperlink';
        break;
      case AscDFH.J5d:
        f = 'Document_RemoveHyperlink';
        break;
      case AscDFH.cUd:
        f = 'Document_ReplaceMisspelledWord';
        break;
      case AscDFH.W4d:
        f = 'Document_AddComment';
        break;
      case AscDFH.F5d:
        f = 'Document_RemoveComment';
        break;
      case AscDFH.h5d:
        f = 'Document_ChangeComment';
        break;
      case AscDFH.y6d:
        f = 'Document_SetTextFontNameLong';
        break;
      case AscDFH.Y4d:
        f = 'Document_AddImage';
        break;
      case AscDFH.m5d:
        f = 'Document_ClearFormatting';
        break;
      case AscDFH.VTd:
        f = 'Document_AddSectionBreak';
        break;
      case AscDFH.TTd:
        f = 'Document_AddMath';
        break;
      case AscDFH.jUd:
        f = 'Document_SetParagraphTabs';
        break;
      case AscDFH.iUd:
        f = 'Document_SetParagraphIndentFromRulers';
        break;
      case AscDFH.fUd:
        f = 'Document_SetDocumentMargin_Hor';
        break;
      case AscDFH.jxc:
        f = 'Document_SetTableMarkup_Hor';
        break;
      case AscDFH.gUd:
        f = 'Document_SetDocumentMargin_Ver';
        break;
      case AscDFH.hUd:
        f = 'Document_SetHdrFtrBounds';
        break;
      case AscDFH.kUd:
        f = 'Document_SetTableMarkup_Ver';
        break;
      case AscDFH.Uzd:
        f =
          'Document_DocumentExtendToPos';
        break;
      case AscDFH.vzd:
        f = 'Document_AddDropCap';
        break;
      case AscDFH.IXb:
        f = 'Document_RemoveDropCap';
        break;
      case AscDFH.zAd:
        f = 'Document_SetTextHighlight';
        break;
      case AscDFH.sYc:
        f = 'Document_BackSpaceButton';
        break;
      case AscDFH.cAd:
        f = 'Document_MoveParagraphByTab';
        break;
      case AscDFH.Fzd:
        f = 'Document_AddTab';
        break;
      case AscDFH.uYc:
        f = 'Document_EnterButton';
        break;
      case AscDFH.JXb:
        f = 'Document_SpaceButton';
        break;
      case AscDFH.kmf:
        f = 'Document_ShiftInsert';
        break;
      case AscDFH.lmf:
        f = 'Document_ShiftInsertSafari';
        break;
      case AscDFH.Szd:
        f = 'Document_DeleteButton';
        break;
      case AscDFH.jmf:
        f = 'Document_ShiftDeleteButton';
        break;
      case AscDFH.vAd:
        f = 'Document_SetStyleHeading1';
        break;
      case AscDFH.wAd:
        f = 'Document_SetStyleHeading2';
        break;
      case AscDFH.xAd:
        f = 'Document_SetStyleHeading3';
        break;
      case AscDFH.CAd:
        f = 'Document_SetTextStrikeoutHotKey';
        break;
      case AscDFH.yAd:
        f = 'Document_SetTextBoldHotKey';
        break;
      case AscDFH.G8b:
        f = 'Document_SetParagraphAlignHotKey';
        break;
      case AscDFH.wzd:
        f = 'Document_AddEuroLetter';
        break;
      case AscDFH.BAd:
        f = 'Document_SetTextItalicHotKey';
        break;
      case AscDFH.fmf:
        f = 'Document_SetParagraphAlignHotKey2';
        break;
      case AscDFH.tAd:
        f = 'Document_SetParagraphNumberingHotKey';
        break;
      case AscDFH.gmf:
        f = 'Document_SetParagraphAlignHotKey3';
        break;
      case AscDFH.Ezd:
        f = 'Document_AddPageNumHotKey';
        break;
      case AscDFH.hmf:
        f = 'Document_SetParagraphAlignHotKey4';
        break;
      case AscDFH.DAd:
        f = 'Document_SetTextUnderlineHotKey';
        break;
      case AscDFH.Xzd:
        f = 'Document_FormatPasteHotKey';
        break;
      case AscDFH.HXb:
        f = 'Document_PasteHotKey';
        break;
      case AscDFH.bmf:
        f = 'Document_PasteSafariHotKey';
        break;
      case AscDFH.$lf:
        f = 'Document_CutHotKey';
        break;
      case AscDFH.imf:
        f = 'Document_SetTextVertAlignHotKey';
        break;
      case AscDFH.Slf:
        f = 'Document_AddMathHotKey';
        break;
      case AscDFH.EAd:
        f = 'Document_SetTextVertAlignHotKey2';
        break;
      case AscDFH.$zd:
        f = 'Document_MinusButton';
        break;
      case AscDFH.FAd:
        f = 'Document_SetTextVertAlignHotKey3';
        break;
      case AscDFH.Azd:
        f = 'Document_AddLetter';
        break;
      case AscDFH.dAd:
        f = 'Document_MoveTableBorder';
        break;
      case AscDFH.Yzd:
        f = 'Document_FormatPasteHotKey2';
        break;
      case AscDFH.AAd:
        f = 'Document_SetTextHighlight2';
        break;
      case AscDFH.Jzd:
        f = 'Document_AddTextFromTextBox';
        break;
      case AscDFH.Bzd:
        f = 'Document_AddMailMergeField';
        break;
      case AscDFH.bAd:
        f = 'Document_MoveInlineTable';
        break;
      case AscDFH.aAd:
        f = 'Document_MoveFlowTable';
        break;
      case AscDFH.pAd:
        f = 'Document_RestoreFieldTemplateText';
        break;
      case AscDFH.pxc:
        f = 'Spreadsheet_SetCellFontName';
        break;
      case AscDFH.QAd:
        f = 'Spreadsheet_SetCellFontSize';
        break;
      case AscDFH.OAd:
        f = 'Spreadsheet_SetCellBold';
        break;
      case AscDFH.VAd:
        f = 'Spreadsheet_SetCellItalic';
        break;
      case AscDFH.$Ad:
        f =
          'Spreadsheet_SetCellUnderline';
        break;
      case AscDFH.WAd:
        f = 'Spreadsheet_SetCellStrikeout';
        break;
      case AscDFH.XAd:
        f = 'Spreadsheet_SetCellSubscript';
        break;
      case AscDFH.YAd:
        f = 'Spreadsheet_SetCellSuperscript';
        break;
      case AscDFH.MAd:
        f = 'Spreadsheet_SetCellAlign';
        break;
      case AscDFH.Pyb:
        f = 'Spreadsheet_SetCellVertAlign';
        break;
      case AscDFH.ZAd:
        f = 'Spreadsheet_SetCellTextColor';
        break;
      case AscDFH.NAd:
        f = 'Spreadsheet_SetCellBackgroundColor';
        break;
      case AscDFH.UAd:
        f = 'Spreadsheet_SetCellIncreaseFontSize';
        break;
      case AscDFH.PAd:
        f =
          'Spreadsheet_SetCellDecreaseFontSize';
        break;
      case AscDFH.RAd:
        f = 'Spreadsheet_SetCellHyperlinkAdd';
        break;
      case AscDFH.SAd:
        f = 'Spreadsheet_SetCellHyperlinkModify';
        break;
      case AscDFH.TAd:
        f = 'Spreadsheet_SetCellHyperlinkRemove';
        break;
      case AscDFH.JAd:
        f = 'Spreadsheet_EditChart';
        break;
      case AscDFH.oxc:
        f = 'Spreadsheet_Remove';
        break;
      case AscDFH.IAd:
        f = 'Spreadsheet_AddTab';
        break;
      case AscDFH.mxc:
        f = 'Spreadsheet_AddNewParagraph';
        break;
      case AscDFH.oUd:
        f = 'Spreadsheet_AddSpace';
        break;
      case AscDFH.lxc:
        f = 'Spreadsheet_AddItem';
        break;
      case AscDFH.LAd:
        f = 'Spreadsheet_PutPrLineSpacing';
        break;
      case AscDFH.bBd:
        f = 'Spreadsheet_SetParagraphSpacing';
        break;
      case AscDFH.aBd:
        f = 'Spreadsheet_SetGraphicObjectsProps';
        break;
      case AscDFH.KAd:
        f = 'Spreadsheet_ParaApply';
        break;
      case AscDFH.Oyb:
        f = 'Spreadsheet_GraphicObjectLayer';
        break;
      case AscDFH.pUd:
        f = 'Spreadsheet_ParagraphAdd';
        break;
      case AscDFH.nxc:
        f = 'Spreadsheet_CreateGroup';
        break;
      case AscDFH.QTd:
        f = 'CommonDrawings_ChangeAdj';
        break;
      case AscDFH.qYc:
        f = 'CommonDrawings_EndTrack';
        break;
      case AscDFH.RTd:
        f =
          'CommonDrawings_CopyCtrl';
        break;
      case AscDFH.HAd:
        f = 'Presentation_ParaApply';
        break;
      case AscDFH.y7d:
        f = 'Presentation_ParaFormatPaste';
        break;
      case AscDFH.V6d:
        f = 'Presentation_AddNewParagraph';
        break;
      case AscDFH.k7d:
        f = 'Presentation_CreateGroup';
        break;
      case AscDFH.U7d:
        f = 'Presentation_UnGroup';
        break;
      case AscDFH.Q6d:
        f = 'Presentation_AddChart';
        break;
      case AscDFH.o7d:
        f = 'Presentation_EditChart';
        break;
      case AscDFH.oua:
        f = 'Presentation_ParagraphAdd';
        break;
      case AscDFH.z7d:
        f = 'Presentation_ParagraphClearFormatting';
        break;
      case AscDFH.L7d:
        f = 'Presentation_SetParagraphAlign';
        break;
      case AscDFH.N7d:
        f = 'Presentation_SetParagraphSpacing';
        break;
      case AscDFH.O7d:
        f = 'Presentation_SetParagraphTabs';
        break;
      case AscDFH.M7d:
        f = 'Presentation_SetParagraphIndent';
        break;
      case AscDFH.wYc:
        f = 'Presentation_SetParagraphNumbering';
        break;
      case AscDFH.A7d:
        f = 'Presentation_ParagraphIncDecFontSize';
        break;
      case AscDFH.B7d:
        f = 'Presentation_ParagraphIncDecIndent';
        break;
      case AscDFH.K7d:
        f = 'Presentation_SetImageProps';
        break;
      case AscDFH.P7d:
        f = 'Presentation_SetShapeProps';
        break;
      case AscDFH.j7d:
        f = 'Presentation_ChartApply';
        break;
      case AscDFH.g7d:
        f = 'Presentation_ChangeShapeType';
        break;
      case AscDFH.Q7d:
        f = 'Presentation_SetVerticalAlign';
        break;
      case AscDFH.p7d:
        f = 'Presentation_HyperlinkAdd';
        break;
      case AscDFH.q7d:
        f = 'Presentation_HyperlinkModify';
        break;
      case AscDFH.r7d:
        f = 'Presentation_HyperlinkRemove';
        break;
      case AscDFH.m7d:
        f = 'Presentation_DistHor';
        break;
      case AscDFH.n7d:
        f = 'Presentation_DistVer';
        break;
      case AscDFH.b7d:
        f = 'Presentation_BringToFront';
        break;
      case AscDFH.a7d:
        f = 'Presentation_BringForward';
        break;
      case AscDFH.J7d:
        f = 'Presentation_SendToBack';
        break;
      case AscDFH.$6d:
        f = 'Presentation_BringBackward';
        break;
      case AscDFH.Z6d:
        f = 'Presentation_ApplyTiming';
        break;
      case AscDFH.w7d:
        f = 'Presentation_MoveSlidesToEnd';
        break;
      case AscDFH.u7d:
        f = 'Presentation_MoveSlidesNextPos';
        break;
      case AscDFH.v7d:
        f = 'Presentation_MoveSlidesPrevPos';
        break;
      case AscDFH.x7d:
        f = 'Presentation_MoveSlidesToStart';
        break;
      case AscDFH.t7d:
        f = 'Presentation_MoveComments';
        break;
      case AscDFH.Hmf:
        f = 'Presentation_TableBorder';
        break;
      case AscDFH.nUd:
        f =
          'Presentation_AddFlowImage';
        break;
      case AscDFH.U6d:
        f = 'Presentation_AddFlowTable';
        break;
      case AscDFH.c7d:
        f = 'Presentation_ChangeBackground';
        break;
      case AscDFH.W6d:
        f = 'Presentation_AddNextSlide';
        break;
      case AscDFH.R7d:
        f = 'Presentation_ShiftSlides';
        break;
      case AscDFH.l7d:
        f = 'Presentation_DeleteSlides';
        break;
      case AscDFH.f7d:
        f = 'Presentation_ChangeLayout';
        break;
      case AscDFH.h7d:
        f = 'Presentation_ChangeSlideSize';
        break;
      case AscDFH.d7d:
        f = 'Presentation_ChangeColorScheme';
        break;
      case AscDFH.T6d:
        f = 'Presentation_AddComment';
        break;
      case AscDFH.e7d:
        f = 'Presentation_ChangeComment';
        break;
      case AscDFH.ymf:
        f = 'Presentation_PutTextPrFontName';
        break;
      case AscDFH.zmf:
        f = 'Presentation_PutTextPrFontSize';
        break;
      case AscDFH.wmf:
        f = 'Presentation_PutTextPrBold';
        break;
      case AscDFH.Bmf:
        f = 'Presentation_PutTextPrItalic';
        break;
      case AscDFH.Gmf:
        f = 'Presentation_PutTextPrUnderline';
        break;
      case AscDFH.Fmf:
        f = 'Presentation_PutTextPrStrikeout';
        break;
      case AscDFH.Cmf:
        f = 'Presentation_PutTextPrLineSpacing';
        break;
      case AscDFH.Emf:
        f = 'Presentation_PutTextPrSpacingBeforeAfter';
        break;
      case AscDFH.Amf:
        f = 'Presentation_PutTextPrIncreaseFontSize';
        break;
      case AscDFH.xmf:
        f = 'Presentation_PutTextPrDecreaseFontSize';
        break;
      case AscDFH.F7d:
        f = 'Presentation_PutTextPrAlign';
        break;
      case AscDFH.vmf:
        f = 'Presentation_PutTextPrBaseline';
        break;
      case AscDFH.Dmf:
        f = 'Presentation_PutTextPrListType';
        break;
      case AscDFH.tmf:
        f = 'Presentation_PutTextColor';
        break;
      case AscDFH.umf:
        f = 'Presentation_PutTextColor2';
        break;
      case AscDFH.D7d:
        f = 'Presentation_PutPrIndent';
        break;
      case AscDFH.E7d:
        f = 'Presentation_PutPrIndentRight';
        break;
      case AscDFH.C7d:
        f = 'Presentation_PutPrFirstLineIndent';
        break;
      case AscDFH.pmf:
        f = 'Presentation_AddPageBreak';
        break;
      case AscDFH.X6d:
        f = 'Presentation_AddRowAbove';
        break;
      case AscDFH.Y6d:
        f = 'Presentation_AddRowBelow';
        break;
      case AscDFH.R6d:
        f = 'Presentation_AddColLeft';
        break;
      case AscDFH.S6d:
        f = 'Presentation_AddColRight';
        break;
      case AscDFH.H7d:
        f = 'Presentation_RemoveRow';
        break;
      case AscDFH.G7d:
        f = 'Presentation_RemoveCol';
        break;
      case AscDFH.I7d:
        f = 'Presentation_RemoveTable';
        break;
      case AscDFH.s7d:
        f = 'Presentation_MergeCells';
        break;
      case AscDFH.S7d:
        f = 'Presentation_SplitCells';
        break;
      case AscDFH.T7d:
        f = 'Presentation_TblApply';
        break;
      case AscDFH.vYc:
        f = 'Presentation_RemoveComment';
        break;
      case AscDFH.qmf:
        f = 'Presentation_EndFontLoad';
        break;
      case AscDFH.i7d:
        f = 'Presentation_ChangeTheme';
        break;
      case AscDFH.Imf:
        f = 'Presentation_TableMoveFromRulers';
        break;
      case AscDFH.Jmf:
        f = 'Presentation_TableMoveFromRulersInline';
        break;
      case AscDFH.rmf:
        f = 'Presentation_PasteOnThumbnails';
        break;
      case AscDFH.smf:
        f = 'Presentation_PasteOnThumbnailsSafari';
        break;
      case AscDFH.Qzd:
        f = 'Document_ConvertOldEquation';
        break;
      case AscDFH.Czd:
        f = 'Document_AddNewStyle';
        break;
      case AscDFH.lAd:
        f = 'Document_RemoveStyle';
        break;
      case AscDFH.WTd:
        f = 'Document_AddTextArt';
        break;
      case AscDFH.iAd:
        f = 'Document_RemoveAllCustomStyles';
        break;
      case AscDFH.qzd:
        f = 'Document_AcceptAllRevisionChanges';
        break;
      case AscDFH.gAd:
        f = 'Document_RejectAllRevisionChanges';
        break;
      case AscDFH.rzd:
        f = 'Document_AcceptRevisionChange';
        break;
      case AscDFH.hAd:
        f = 'Document_RejectRevisionChange';
        break;
      case AscDFH.dxc:
        f =
          'Document_AcceptRevisionChangesBySelection';
        break;
      case AscDFH.cmf:
        f = 'Document_RejectRevisionChangesBySelection';
        break;
      case AscDFH.rYc:
        f = 'Document_AddLetterUnion';
        break;
      case AscDFH.qAd:
        f = 'Document_SetColumnsFromRuler';
        break;
      case AscDFH.ixc:
        f = 'Document_SetColumnsProps';
        break;
      case AscDFH.Mlf:
        f = 'Document_AddColumnBreak';
        break;
      case AscDFH.Gzd:
        f = 'Document_AddTabToMath';
        break;
      case AscDFH.Xlf:
        f = 'Document_ApplyPrToMath';
        break;
      case AscDFH.sAd:
        f = 'Document_SetMathProps';
        break;
      case AscDFH.uAd:
        f = 'Document_SetColumnsProps';
        break;
      case AscDFH.BRc:
        f = 'Document_ApiBuilder';
        break;
      case AscDFH.Tlf:
        f = 'Document_AddOleObject';
        break;
      case AscDFH.amf:
        f = 'Document_EditOleObject';
        break;
      case AscDFH.lGb:
        f = 'Document_CompositeInput';
        break;
      case AscDFH.lfb:
        f = 'Document_CompositeInputReplace';
        break;
      case AscDFH.Dzd:
        f = 'Document_AddPageCount';
        break;
      case AscDFH.yzd:
        f = 'Document_AddFootnote';
        break;
      case AscDFH.rAd:
        f = 'Document_SetFootnotePr';
        break;
      case AscDFH.jAd:
        f = 'Document_RemoveAllFootnotes';
        break;
      case AscDFH.bUd:
        f = 'Document_InsertDocumentsByUrls';
        break;
      case AscDFH.Llf:
        f = 'Document_AddBlockLevelContentControl';
        break;
      case AscDFH.Rlf:
        f = 'Document_AddInlineLevelContentControl';
        break;
      case AscDFH.H5d:
        f = 'Document_RemoveContentControl';
        break;
      case AscDFH.I5d:
        f = 'Document_RemoveContentControlWrapper';
        break;
      case AscDFH.ZTd:
        f = 'Document_ChangeContentControlProperties';
        break;
      case AscDFH.cxc:
        f = 'DocumentMacros_Data';
        break;
      case AscDFH.tzd:
        f = 'Document_AddBookmark';
        break;
      case AscDFH.Izd:
        f = 'Document_AddTableOfContents';
        break;
      case AscDFH.Nzd:
        f = 'Document_ChangeOutlineLevel';
        break;
      case AscDFH.exc:
        f = 'Document_AddElementToOutline';
        break;
      case AscDFH.oAd:
        f = 'Document_ResizeTable';
        break;
      case AscDFH.G5d:
        f = 'Document_RemoveComplexField';
        break;
      case AscDFH.CRc:
        f = 'Document_SetComplexFieldPr';
        break;
      case AscDFH.mUd:
        f = 'Document_UpdateTableOfContents';
        break;
      case AscDFH.P5d:
        f = 'Document_SectionStartPage';
        break;
      case AscDFH.$Td:
        f = 'Document_DistributeTableCells';
        break;
      case AscDFH.kAd:
        f = 'Document_RemoveBookmark';
        break;
      case AscDFH.Pzd:
        f = 'Document_ContinueNumbering';
        break;
      case AscDFH.hxc:
        f =
          'Document_RestartNumbering';
        break;
      case AscDFH.Mzd:
        f = 'Document_AutomaticListAsType';
        break;
      case AscDFH.o5d:
        f = 'Document_CreateNum';
        break;
      case AscDFH.j5d:
        f = 'Document_ChangeNumLvl';
        break;
      case AscDFH.Lzd:
        f = 'Document_AutoCorrectSmartQuotes';
        break;
      case AscDFH.Ylf:
        f = 'Document_AutoCorrectHyphensWithDash';
        break;
      case AscDFH.V5d:
        f = 'Document_SetGlobalSdtHighlightColor';
        break;
      case AscDFH.W5d:
        f = 'Document_SetGlobalSdtShowHighlight';
        break;
      case AscDFH.kxc:
        f = 'Document_UpdateFields';
        break;
      case AscDFH.szd:
        f = 'Document_AddBlankPage';
        break;
      case AscDFH.Hzd:
        f = 'Document_AddTableFormula';
        break;
      case AscDFH.Ozd:
        f = 'Document_ChangeTableFormula';
        break;
      case AscDFH.n6d:
        f = 'Document_SetParagraphOutlineLvl';
        break;
      case AscDFH.L5d:
        f = 'Document_RemoveTableCells';
        break;
      case AscDFH.Nlf:
        f = 'Document_AddContentControlCheckBox';
        break;
      case AscDFH.R5d:
        f = 'Document_SetContentControlCheckBoxPr';
        break;
      case AscDFH.Qlf:
        f = 'Document_AddContentControlPicture';
        break;
      case AscDFH.emf:
        f = 'Document_SetContentControlPictureUrl';
        break;
      case AscDFH.E5d:
        f = 'Document_RemoveAllComments';
        break;
      case AscDFH.Plf:
        f = 'Document_AddContentControlList';
        break;
      case AscDFH.dUd:
        f = 'Document_SetContentControlListPr';
        break;
      case AscDFH.Q5d:
        f = 'Document_SelectContentControlListItem';
        break;
      case AscDFH.Olf:
        f = 'Document_AddContentControlDatePicker';
        break;
      case AscDFH.dmf:
        f = 'Document_SetContentControlDatePickerPr';
        break;
      case AscDFH.fxc:
        f = 'Document_AddTextWithProperties';
        break;
      case AscDFH.uzd:
        f = 'Document_AddCaption';
        break;
      case AscDFH.Zlf:
        f = 'Document_CompareDocuments';
        break;
      case AscDFH.Vzd:
        f = 'Document_DrawNewTable';
        break;
      case AscDFH.Wzd:
        f = 'Document_DrawTable';
    }
    return f;
  };
  f.AscDFH.Flg = function (e) {
    return e >> 16 & 65535;
  };
  f.AscDFH.KRc = 0;
  f.AscDFH.SUd = 1;
  f.AscDFH.TUd = 2;
  f.AscDFH.$0b = 3;
  f.AscDFH.UUd = 4;
  f.AscDFH.oHc = 0;
  f.AscDFH.QBd = 65536;
  f.AscDFH.EFa = 131072;
  f.AscDFH.Jy = 196608;
  f.AscDFH.tF = 262144;
  f.AscDFH.lS = 327680;
  f.AscDFH.iAg = 393216;
  f.AscDFH.kAg = 458752;
  f.AscDFH.jAg = 524288;
  f.AscDFH.sF = 589824;
  f.AscDFH.Kla = 655360;
  f.AscDFH.n2 = 720896;
  f.AscDFH.e1b = 786432;
  f.AscDFH.lAg = 851968;
  f.AscDFH.nAg = 917504;
  f.AscDFH.HBd = 983040;
  f.AscDFH.K1a = 1048576;
  f.AscDFH.pob = 1114112;
  f.AscDFH.DBd = 1179648;
  f.AscDFH.Snf = 1245184;
  f.AscDFH.mAg = 1310720;
  f.AscDFH.N1a = 1376256;
  f.AscDFH.rF = 1507328;
  f.AscDFH.CQ = 1572864;
  f.AscDFH.hAg = 1638400;
  f.AscDFH.Hq = 1703936;
  f.AscDFH.VUd = 1769472;
  f.AscDFH.pv = 1835008;
  f.AscDFH.JBd = 1900544;
  f.AscDFH.gC = 1966080;
  f.AscDFH.RBd = 2031616;
  f.AscDFH.SBd = 2097152;
  f.AscDFH.TBd = 2162688;
  f.AscDFH.UBd = 2228224;
  f.AscDFH.XBd = 2293760;
  f.AscDFH.YBd = 2359296;
  f.AscDFH.ZBd = 2424832;
  f.AscDFH.bCd = 2490368;
  f.AscDFH.$Bd = 2555904;
  f.AscDFH.aCd = 2621440;
  f.AscDFH.cCd = 2686976;
  f.AscDFH.dCd =
    2752512;
  f.AscDFH.qAg = 2818048;
  f.AscDFH.pAg = 2883584;
  f.AscDFH.tAg = 2949120;
  f.AscDFH.oAg = 3014656;
  f.AscDFH.sAg = 3080192;
  f.AscDFH.uAg = 3145728;
  f.AscDFH.eCd = 3211264;
  f.AscDFH.fCd = 3276800;
  f.AscDFH.WBd = 3342336;
  f.AscDFH.rAg = 3407872;
  f.AscDFH.VBd = 3473408;
  f.AscDFH.Unf = 3538944;
  f.AscDFH.Ggb = 3604480;
  f.AscDFH.KPa = 3670016;
  f.AscDFH.GBd = 3735552;
  f.AscDFH.Jla = 3801088;
  f.AscDFH.CBd = 3866624;
  f.AscDFH.d$ = 3932160;
  f.AscDFH.IBd = 3997696;
  f.AscDFH.WUd = 4063232;
  f.AscDFH.l1b = 4128768;
  f.AscDFH.rAb = 4194304;
  f.AscDFH.KBd = 4259840;
  f.AscDFH.Vnf =
    4325376;
  f.AscDFH.g6 = 65536E3;
  f.AscDFH.eHc = 65601536;
  f.AscDFH.fHc = 65667072;
  f.AscDFH.tAb = 65732608;
  f.AscDFH.LBd = 65798144;
  f.AscDFH.MBd = 65863680;
  f.AscDFH.NBd = 65929216;
  f.AscDFH.mHc = 65994752;
  f.AscDFH.PBd = 66060288;
  f.AscDFH.L1a = 66125824;
  f.AscDFH.OBd = 66191360;
  f.AscDFH.kHc = 66256896;
  f.AscDFH.iHc = 66322432;
  f.AscDFH.jHc = 66387968;
  f.AscDFH.Jgb = 66453504;
  f.AscDFH.o1b = 66519040;
  f.AscDFH.Tnf = 66584576;
  f.AscDFH.nHc = 66650112;
  f.AscDFH.f1b = 66715648;
  f.AscDFH.lHc = 66781184;
  f.AscDFH.Txa = 66846720;
  f.AscDFH.Egb = 66912256;
  f.AscDFH.CFa =
    66977792;
  f.AscDFH.Mgb = 67043328;
  f.AscDFH.O1a = 67108864;
  f.AscDFH.Ogb = 67174400;
  f.AscDFH.u1b = 67239936;
  f.AscDFH.hHc = 67305472;
  f.AscDFH.q_ = 67371008;
  f.AscDFH.Js = 67436544;
  f.AscDFH.Sxa = 67502080;
  f.AscDFH.xra = 67567616;
  f.AscDFH.nAb = 67633152;
  f.AscDFH.Q1a = 67698688;
  f.AscDFH.bY = 67764224;
  f.AscDFH.oAb = 67829760;
  f.AscDFH.Tga = 67895296;
  f.AscDFH.gAg = 67960832;
  f.AscDFH.m1b = 68026368;
  f.AscDFH.S1a = 68091904;
  f.AscDFH.JPa = 68157440;
  f.AscDFH.GI = 68222976;
  f.AscDFH.j2 = 68288512;
  f.AscDFH.uAb = 68354048;
  f.AscDFH.Qv = 68419584;
  f.AscDFH.ura = 68485120;
  f.AscDFH.RA = 68550656;
  f.AscDFH.Ila = 68616192;
  f.AscDFH.Bu = 68681728;
  f.AscDFH.yra = 68747264;
  f.AscDFH.EE = 68812800;
  f.AscDFH.k2 = 68878336;
  f.AscDFH.l2 = 68943872;
  f.AscDFH.a1b = 69009408;
  f.AscDFH.kS = 69074944;
  f.AscDFH.AQ = 69140480;
  f.AscDFH.DFa = 69206016;
  f.AscDFH.Rxa = 69271552;
  f.AscDFH.i1b = 69337088;
  f.AscDFH.pAb = 69402624;
  f.AscDFH.qAb = 69468160;
  f.AscDFH.n1b = 69533696;
  f.AscDFH.Vga = 69599232;
  f.AscDFH.w1b = 69664768;
  f.AscDFH.s1b = 69730304;
  f.AscDFH.q1b = 69795840;
  f.AscDFH.r1b = 69861376;
  f.AscDFH.T1a = 69926912;
  f.AscDFH.k1b = 69992448;
  f.AscDFH.j1b =
    70057984;
  f.AscDFH.t1b = 70123520;
  f.AscDFH.x1b = 70189056;
  f.AscDFH.aY = 70254592;
  f.AscDFH.M1a = 70320128;
  f.AscDFH.P1a = 70385664;
  f.AscDFH.zra = 70451200;
  f.AscDFH.e6 = 70516736;
  f.AscDFH.zQ = 70582272;
  f.AscDFH.h6 = 70647808;
  f.AscDFH.GFa = 70713344;
  f.AscDFH.f6 = 70778880;
  f.AscDFH.g1b = 70844416;
  f.AscDFH.p1b = 70909952;
  f.AscDFH.R1a = 70975488;
  f.AscDFH.lAb = 71041024;
  f.AscDFH.NPa = 71106560;
  f.AscDFH.d1b = 71172096;
  f.AscDFH.Ngb = 71237632;
  f.AscDFH.rca = 71303168;
  f.AscDFH.FFa = 71368704;
  f.AscDFH.dHc = 71434240;
  f.AscDFH.cHc = 71499776;
  f.AscDFH.h1b =
    71565312;
  f.AscDFH.Hgb = 71630848;
  f.AscDFH.mAb = 71696384;
  f.AscDFH.Igb = 71761920;
  f.AscDFH.v1b = 71827456;
  f.AscDFH.Kgb = 71892992;
  f.AscDFH.c1b = 71958528;
  f.AscDFH.b1b = 72024064;
  f.AscDFH.sAb = 72089600;
  f.AscDFH.wra = 72155136;
  f.AscDFH.LPa = 72220672;
  f.AscDFH.Sga = 72286208;
  f.AscDFH.ns = 72351744;
  f.AscDFH.Fgb = 72417280;
  f.AscDFH.tw = 72482816;
  f.AscDFH.vx = 72548352;
  f.AscDFH.vra = 72613888;
  f.AscDFH.MPa = 72679424;
  f.AscDFH.kUa = 72744960;
  f.AscDFH.fC = 72810496;
  f.AscDFH.Rv = 72876032;
  f.AscDFH.qob = 72941568;
  f.AscDFH.QA = 73007104;
  f.AscDFH.BQ = 73072640;
  f.AscDFH.uoa = 73138176;
  f.AscDFH.mS = 73203712;
  f.AscDFH.qca = 73269248;
  f.AscDFH.Ara = 73334784;
  f.AscDFH.J8b = 73400320;
  f.AscDFH.LRc = 73465856;
  f.AscDFH.Uga = 73531392;
  f.AscDFH.dz = 73596928;
  f.AscDFH.Rnf = 73662464;
  f.AscDFH.MO = 73728E3;
  f.AscDFH.FBd = 73793536;
  f.AscDFH.qF = 73859072;
  f.AscDFH.DBa = 73924608;
  f.AscDFH.Ada = 73990144;
  f.AscDFH.mX = 74055680;
  f.AscDFH.AJb = 74121216;
  f.AscDFH.yYc = 74186752;
  f.AscDFH.Lgb = 74252288;
  f.AscDFH.OJa = 74317824;
  f.AscDFH.CBa = 74383360;
  f.AscDFH.EBd = 74448896;
  f.AscDFH.gHc = 131072E3;
  f.AscDFH.xBd = f.AscDFH.oHc |
    0;
  f.AscDFH.O0b = f.AscDFH.QBd | 1;
  f.AscDFH.dgb = f.AscDFH.QBd | 65535;
  f.AscDFH.xBa = f.AscDFH.EFa | 1;
  f.AscDFH.yBa = f.AscDFH.EFa | 2;
  f.AscDFH.Ryb = f.AscDFH.EFa | 3;
  f.AscDFH.Syb = f.AscDFH.EFa | 4;
  f.AscDFH.nYb = f.AscDFH.EFa | 5;
  f.AscDFH.Tyb = f.AscDFH.EFa | 6;
  f.AscDFH.oYb = f.AscDFH.EFa | 7;
  f.AscDFH.Uyb = f.AscDFH.EFa | 8;
  f.AscDFH.Vyb = f.AscDFH.EFa | 9;
  f.AscDFH.zBa = f.AscDFH.Jy | 1;
  f.AscDFH.rIa = f.AscDFH.Jy | 2;
  f.AscDFH.xPa = f.AscDFH.Jy | 3;
  f.AscDFH.Z0a = f.AscDFH.Jy | 4;
  f.AscDFH.c1a = f.AscDFH.Jy | 5;
  f.AscDFH.e1a = f.AscDFH.Jy | 6;
  f.AscDFH.d1a = f.AscDFH.Jy |
    7;
  f.AscDFH.$0a = f.AscDFH.Jy | 8;
  f.AscDFH.f1a = f.AscDFH.Jy | 9;
  f.AscDFH.g1a = f.AscDFH.Jy | 10;
  f.AscDFH.h1a = f.AscDFH.Jy | 11;
  f.AscDFH.o1a = f.AscDFH.Jy | 12;
  f.AscDFH.p1a = f.AscDFH.Jy | 13;
  f.AscDFH.m1a = f.AscDFH.Jy | 14;
  f.AscDFH.k1a = f.AscDFH.Jy | 15;
  f.AscDFH.l1a = f.AscDFH.Jy | 16;
  f.AscDFH.n1a = f.AscDFH.Jy | 17;
  f.AscDFH.AFa = f.AscDFH.Jy | 18;
  f.AscDFH.yFa = f.AscDFH.Jy | 19;
  f.AscDFH.zFa = f.AscDFH.Jy | 20;
  f.AscDFH.sra = f.AscDFH.Jy | 21;
  f.AscDFH.r1a = f.AscDFH.Jy | 22;
  f.AscDFH.q1a = f.AscDFH.Jy | 23;
  f.AscDFH.wFa = f.AscDFH.Jy | 24;
  f.AscDFH.Qxa = f.AscDFH.Jy |
    25;
  f.AscDFH.pua = f.AscDFH.Jy | 26;
  f.AscDFH.qua = f.AscDFH.Jy | 27;
  f.AscDFH.rua = f.AscDFH.Jy | 28;
  f.AscDFH.sua = f.AscDFH.Jy | 29;
  f.AscDFH.Pv = f.AscDFH.Jy | 30;
  f.AscDFH.i1a = f.AscDFH.Jy | 31;
  f.AscDFH.j1a = f.AscDFH.Jy | 32;
  f.AscDFH.b1a = f.AscDFH.Jy | 33;
  f.AscDFH.gzb = f.AscDFH.Jy | 34;
  f.AscDFH.xFa = f.AscDFH.Jy | 35;
  f.AscDFH.yPa = f.AscDFH.Jy | 36;
  f.AscDFH.fzb = f.AscDFH.Jy | 37;
  f.AscDFH.a1a = f.AscDFH.Jy | 38;
  f.AscDFH.hgb = f.AscDFH.tF | 1;
  f.AscDFH.pgb = f.AscDFH.tF | 2;
  f.AscDFH.wgb = f.AscDFH.tF | 3;
  f.AscDFH.xgb = f.AscDFH.tF | 4;
  f.AscDFH.mgb = f.AscDFH.tF | 5;
  f.AscDFH.jgb = f.AscDFH.tF | 6;
  f.AscDFH.zgb = f.AscDFH.tF | 7;
  f.AscDFH.ogb = f.AscDFH.tF | 8;
  f.AscDFH.tgb = f.AscDFH.tF | 9;
  f.AscDFH.vgb = f.AscDFH.tF | 10;
  f.AscDFH.kgb = f.AscDFH.tF | 11;
  f.AscDFH.igb = f.AscDFH.tF | 12;
  f.AscDFH.ugb = f.AscDFH.tF | 13;
  f.AscDFH.sgb = f.AscDFH.tF | 14;
  f.AscDFH.PA = f.AscDFH.tF | 15;
  f.AscDFH.Hla = f.AscDFH.tF | 16;
  f.AscDFH.EPa = f.AscDFH.tF | 17;
  f.AscDFH.HPa = f.AscDFH.tF | 18;
  f.AscDFH.FPa = f.AscDFH.tF | 19;
  f.AscDFH.GPa = f.AscDFH.tF | 20;
  f.AscDFH.IPa = f.AscDFH.tF | 21;
  f.AscDFH.tra = f.AscDFH.tF | 22;
  f.AscDFH.BPa = f.AscDFH.tF | 23;
  f.AscDFH.CPa =
    f.AscDFH.tF | 24;
  f.AscDFH.DPa = f.AscDFH.tF | 25;
  f.AscDFH.ygb = f.AscDFH.tF | 26;
  f.AscDFH.ngb = f.AscDFH.tF | 27;
  f.AscDFH.qgb = f.AscDFH.tF | 28;
  f.AscDFH.lgb = f.AscDFH.tF | 29;
  f.AscDFH.sYb = f.AscDFH.lS | 1;
  f.AscDFH.azb = f.AscDFH.lS | 2;
  f.AscDFH.Xyb = f.AscDFH.lS | 3;
  f.AscDFH.qYb = f.AscDFH.lS | 4;
  f.AscDFH.uYb = f.AscDFH.lS | 5;
  f.AscDFH.vYb = f.AscDFH.lS | 6;
  f.AscDFH.rYb = f.AscDFH.lS | 7;
  f.AscDFH.Yyb = f.AscDFH.lS | 8;
  f.AscDFH.BYb = f.AscDFH.lS | 9;
  f.AscDFH.oSa = f.AscDFH.lS | 10;
  f.AscDFH.CYb = f.AscDFH.lS | 11;
  f.AscDFH.xYb = f.AscDFH.lS | 12;
  f.AscDFH.AYb = f.AscDFH.lS |
    13;
  f.AscDFH.wYb = f.AscDFH.lS | 14;
  f.AscDFH.zYb = f.AscDFH.lS | 15;
  f.AscDFH.yYb = f.AscDFH.lS | 16;
  f.AscDFH.tYb = f.AscDFH.lS | 17;
  f.AscDFH.Zyb = f.AscDFH.lS | 18;
  f.AscDFH.$yb = f.AscDFH.lS | 19;
  f.AscDFH.J1a = f.AscDFH.sF | 1;
  f.AscDFH.E1a = f.AscDFH.sF | 2;
  f.AscDFH.x1a = f.AscDFH.sF | 3;
  f.AscDFH.F1a = f.AscDFH.sF | 4;
  f.AscDFH.B1a = f.AscDFH.sF | 5;
  f.AscDFH.D1a = f.AscDFH.sF | 6;
  f.AscDFH.C1a = f.AscDFH.sF | 7;
  f.AscDFH.y1a = f.AscDFH.sF | 8;
  f.AscDFH.z1a = f.AscDFH.sF | 9;
  f.AscDFH.A1a = f.AscDFH.sF | 10;
  f.AscDFH.ggb = f.AscDFH.sF | 11;
  f.AscDFH.Zzb = f.AscDFH.sF | 12;
  f.AscDFH.BBa =
    f.AscDFH.sF | 13;
  f.AscDFH.tIa = f.AscDFH.sF | 14;
  f.AscDFH.cAb = f.AscDFH.sF | 15;
  f.AscDFH.dAb = f.AscDFH.sF | 16;
  f.AscDFH.I1a = f.AscDFH.sF | 17;
  f.AscDFH.H1a = f.AscDFH.sF | 18;
  f.AscDFH.eAb = f.AscDFH.sF | 19;
  f.AscDFH.Xzb = f.AscDFH.sF | 20;
  f.AscDFH.$zb = f.AscDFH.sF | 21;
  f.AscDFH.aAb = f.AscDFH.sF | 22;
  f.AscDFH.Yzb = f.AscDFH.sF | 23;
  f.AscDFH.LO = f.AscDFH.sF | 24;
  f.AscDFH.G1a = f.AscDFH.sF | 25;
  f.AscDFH.fgb = f.AscDFH.sF | 26;
  f.AscDFH.egb = f.AscDFH.sF | 27;
  f.AscDFH.Q0b = f.AscDFH.sF | 28;
  f.AscDFH.bAb = f.AscDFH.sF | 29;
  f.AscDFH.t1a = f.AscDFH.Kla | 1;
  f.AscDFH.s1a =
    f.AscDFH.Kla | 2;
  f.AscDFH.u1a = f.AscDFH.Kla | 3;
  f.AscDFH.v1a = f.AscDFH.Kla | 4;
  f.AscDFH.ABa = f.AscDFH.Kla | 5;
  f.AscDFH.sIa = f.AscDFH.Kla | 6;
  f.AscDFH.w1a = f.AscDFH.Kla | 7;
  f.AscDFH.Rga = f.AscDFH.Kla | 8;
  f.AscDFH.Wzb = f.AscDFH.Kla | 9;
  f.AscDFH.P0b = f.AscDFH.Kla | 10;
  f.AscDFH.Vfb = f.AscDFH.n2 | 1;
  f.AscDFH.Xfb = f.AscDFH.n2 | 2;
  f.AscDFH.Zfb = f.AscDFH.n2 | 3;
  f.AscDFH.bgb = f.AscDFH.n2 | 4;
  f.AscDFH.Sfb = f.AscDFH.n2 | 5;
  f.AscDFH.Tfb = f.AscDFH.n2 | 6;
  f.AscDFH.Ufb = f.AscDFH.n2 | 7;
  f.AscDFH.Rfb = f.AscDFH.n2 | 8;
  f.AscDFH.agb = f.AscDFH.n2 | 9;
  f.AscDFH.cgb = f.AscDFH.n2 |
    10;
  f.AscDFH.mW = f.AscDFH.n2 | 11;
  f.AscDFH.$fb = f.AscDFH.n2 | 12;
  f.AscDFH.Yfb = f.AscDFH.n2 | 13;
  f.AscDFH.Wfb = f.AscDFH.n2 | 14;
  f.AscDFH.Vzb = f.AscDFH.n2 | 15;
  f.AscDFH.vBa = f.AscDFH.e1b | 1;
  f.AscDFH.wBa = f.AscDFH.e1b | 2;
  f.AscDFH.kPa = f.AscDFH.K1a | 1;
  f.AscDFH.nfb = f.AscDFH.K1a | 2;
  f.AscDFH.mfb = f.AscDFH.K1a | 3;
  f.AscDFH.LXb = f.AscDFH.K1a | 4;
  f.AscDFH.KXb = f.AscDFH.K1a | 5;
  f.AscDFH.YZb = f.AscDFH.l1b | 1;
  f.AscDFH.XZb = f.AscDFH.l1b | 2;
  f.AscDFH.TDc = f.AscDFH.rAb | 1;
  f.AscDFH.SDc = f.AscDFH.rAb | 2;
  f.AscDFH.UDc = f.AscDFH.rAb | 3;
  f.AscDFH.oob = f.AscDFH.pob |
    1;
  f.AscDFH.H8b = f.AscDFH.pob | 2;
  f.AscDFH.W7d = f.AscDFH.pob | 3;
  f.AscDFH.mGb = f.AscDFH.DBd | 1;
  f.AscDFH.nGb = f.AscDFH.DBd | 2;
  f.AscDFH.SYb = f.AscDFH.N1a | 1;
  f.AscDFH.RYb = f.AscDFH.N1a | 2;
  f.AscDFH.NJa = f.AscDFH.N1a | 3;
  f.AscDFH.pSa = f.AscDFH.N1a | 4;
  f.AscDFH.QYb = f.AscDFH.N1a | 5;
  f.AscDFH.Qzb = f.AscDFH.rF | 1;
  f.AscDFH.xzb = f.AscDFH.rF | 2;
  f.AscDFH.Lzb = f.AscDFH.rF | 3;
  f.AscDFH.Mzb = f.AscDFH.rF | 4;
  f.AscDFH.Gzb = f.AscDFH.rF | 5;
  f.AscDFH.Czb = f.AscDFH.rF | 6;
  f.AscDFH.Dzb = f.AscDFH.rF | 7;
  f.AscDFH.Ezb = f.AscDFH.rF | 8;
  f.AscDFH.Fzb = f.AscDFH.rF | 9;
  f.AscDFH.Hzb =
    f.AscDFH.rF | 10;
  f.AscDFH.Izb = f.AscDFH.rF | 11;
  f.AscDFH.Jzb = f.AscDFH.rF | 12;
  f.AscDFH.Kzb = f.AscDFH.rF | 13;
  f.AscDFH.Nzb = f.AscDFH.rF | 14;
  f.AscDFH.Ozb = f.AscDFH.rF | 15;
  f.AscDFH.Azb = f.AscDFH.rF | 16;
  f.AscDFH.Bzb = f.AscDFH.rF | 17;
  f.AscDFH.Pzb = f.AscDFH.rF | 18;
  f.AscDFH.vzb = f.AscDFH.rF | 101;
  f.AscDFH.szb = f.AscDFH.rF | 102;
  f.AscDFH.wzb = f.AscDFH.rF | 103;
  f.AscDFH.Rzb = f.AscDFH.rF | 104;
  f.AscDFH.yzb = f.AscDFH.rF | 105;
  f.AscDFH.Szb = f.AscDFH.rF | 106;
  f.AscDFH.tzb = f.AscDFH.rF | 107;
  f.AscDFH.zzb = f.AscDFH.rF | 108;
  f.AscDFH.Tzb = f.AscDFH.rF | 109;
  f.AscDFH.uzb =
    f.AscDFH.rF | 110;
  f.AscDFH.vBd = f.AscDFH.rF | 111;
  f.AscDFH.zPa = f.AscDFH.CQ | 1;
  f.AscDFH.APa = f.AscDFH.CQ | 2;
  f.AscDFH.K0b = f.AscDFH.CQ | 3;
  f.AscDFH.E0b = f.AscDFH.CQ | 4;
  f.AscDFH.F0b = f.AscDFH.CQ | 5;
  f.AscDFH.s0b = f.AscDFH.CQ | 6;
  f.AscDFH.C0b = f.AscDFH.CQ | 7;
  f.AscDFH.J0b = f.AscDFH.CQ | 8;
  f.AscDFH.I0b = f.AscDFH.CQ | 9;
  f.AscDFH.y0b = f.AscDFH.CQ | 10;
  f.AscDFH.D0b = f.AscDFH.CQ | 11;
  f.AscDFH.x0b = f.AscDFH.CQ | 12;
  f.AscDFH.t0b = f.AscDFH.CQ | 13;
  f.AscDFH.z0b = f.AscDFH.CQ | 14;
  f.AscDFH.w0b = f.AscDFH.CQ | 15;
  f.AscDFH.v0b = f.AscDFH.CQ | 16;
  f.AscDFH.u0b = f.AscDFH.CQ |
    17;
  f.AscDFH.B0b = f.AscDFH.CQ | 18;
  f.AscDFH.L0b = f.AscDFH.CQ | 19;
  f.AscDFH.H0b = f.AscDFH.CQ | 20;
  f.AscDFH.G0b = f.AscDFH.CQ | 21;
  f.AscDFH.A0b = f.AscDFH.CQ | 22;
  f.AscDFH.r0b = f.AscDFH.CQ | 23;
  f.AscDFH.S0a = f.AscDFH.Hq | 101;
  f.AscDFH.T0a = f.AscDFH.Hq | 102;
  f.AscDFH.BZb = f.AscDFH.Hq | 103;
  f.AscDFH.SZb = f.AscDFH.Hq | 201;
  f.AscDFH.Q0a = f.AscDFH.Hq | 301;
  f.AscDFH.R0a = f.AscDFH.Hq | 302;
  f.AscDFH.eZb = f.AscDFH.Hq | 303;
  f.AscDFH.nZb = f.AscDFH.Hq | 304;
  f.AscDFH.cZb = f.AscDFH.Hq | 305;
  f.AscDFH.sZb = f.AscDFH.Hq | 306;
  f.AscDFH.rZb = f.AscDFH.Hq | 307;
  f.AscDFH.oZb =
    f.AscDFH.Hq | 308;
  f.AscDFH.dZb = f.AscDFH.Hq | 309;
  f.AscDFH.gZb = f.AscDFH.Hq | 310;
  f.AscDFH.bZb = f.AscDFH.Hq | 311;
  f.AscDFH.hZb = f.AscDFH.Hq | 312;
  f.AscDFH.kZb = f.AscDFH.Hq | 313;
  f.AscDFH.iZb = f.AscDFH.Hq | 314;
  f.AscDFH.jZb = f.AscDFH.Hq | 315;
  f.AscDFH.lZb = f.AscDFH.Hq | 316;
  f.AscDFH.fZb = f.AscDFH.Hq | 317;
  f.AscDFH.mZb = f.AscDFH.Hq | 318;
  f.AscDFH.pZb = f.AscDFH.Hq | 319;
  f.AscDFH.qZb = f.AscDFH.Hq | 320;
  f.AscDFH.ezb = f.AscDFH.Hq | 401;
  f.AscDFH.rfb = f.AscDFH.Hq | 402;
  f.AscDFH.IZb = f.AscDFH.Hq | 501;
  f.AscDFH.TZb = f.AscDFH.Hq | 601;
  f.AscDFH.PZb = f.AscDFH.Hq |
    701;
  f.AscDFH.RZb = f.AscDFH.Hq | 702;
  f.AscDFH.QZb = f.AscDFH.Hq | 703;
  f.AscDFH.DZb = f.AscDFH.Hq | 801;
  f.AscDFH.EZb = f.AscDFH.Hq | 802;
  f.AscDFH.FZb = f.AscDFH.Hq | 803;
  f.AscDFH.HZb = f.AscDFH.Hq | 804;
  f.AscDFH.GZb = f.AscDFH.Hq | 805;
  f.AscDFH.JZb = f.AscDFH.Hq | 901;
  f.AscDFH.KZb = f.AscDFH.Hq | 1001;
  f.AscDFH.xZb = f.AscDFH.Hq | 1101;
  f.AscDFH.tZb = f.AscDFH.Hq | 1102;
  f.AscDFH.vZb = f.AscDFH.Hq | 1103;
  f.AscDFH.wZb = f.AscDFH.Hq | 1104;
  f.AscDFH.uZb = f.AscDFH.Hq | 1105;
  f.AscDFH.AZb = f.AscDFH.Hq | 1106;
  f.AscDFH.yZb = f.AscDFH.Hq | 1107;
  f.AscDFH.zZb = f.AscDFH.Hq |
    1108;
  f.AscDFH.aZb = f.AscDFH.Hq | 1201;
  f.AscDFH.V0a = f.AscDFH.Hq | 1301;
  f.AscDFH.X0a = f.AscDFH.Hq | 1302;
  f.AscDFH.U0a = f.AscDFH.Hq | 1303;
  f.AscDFH.W0a = f.AscDFH.Hq | 1304;
  f.AscDFH.LZb = f.AscDFH.Hq | 1305;
  f.AscDFH.MZb = f.AscDFH.Hq | 1306;
  f.AscDFH.NZb = f.AscDFH.Hq | 1307;
  f.AscDFH.OZb = f.AscDFH.Hq | 1308;
  f.AscDFH.CZb = f.AscDFH.Hq | 1401;
  f.AscDFH.rea = f.AscDFH.pv | 1;
  f.AscDFH.zna = f.AscDFH.pv | 2;
  f.AscDFH.sfb = f.AscDFH.pv | 3;
  f.AscDFH.zfb = f.AscDFH.pv | 4;
  f.AscDFH.Gfb = f.AscDFH.pv | 5;
  f.AscDFH.Jfb = f.AscDFH.pv | 6;
  f.AscDFH.bnf = f.AscDFH.pv | 7;
  f.AscDFH.xfb =
    f.AscDFH.pv | 8;
  f.AscDFH.ufb = f.AscDFH.pv | 9;
  f.AscDFH.Lfb = f.AscDFH.pv | 10;
  f.AscDFH.yfb = f.AscDFH.pv | 11;
  f.AscDFH.Cfb = f.AscDFH.pv | 12;
  f.AscDFH.Ffb = f.AscDFH.pv | 13;
  f.AscDFH.wfb = f.AscDFH.pv | 14;
  f.AscDFH.tfb = f.AscDFH.pv | 15;
  f.AscDFH.Efb = f.AscDFH.pv | 16;
  f.AscDFH.Bfb = f.AscDFH.pv | 17;
  f.AscDFH.cnf = f.AscDFH.pv | 18;
  f.AscDFH.Gla = f.AscDFH.pv | 19;
  f.AscDFH.Oxa = f.AscDFH.pv | 20;
  f.AscDFH.sPa = f.AscDFH.pv | 21;
  f.AscDFH.vPa = f.AscDFH.pv | 22;
  f.AscDFH.tPa = f.AscDFH.pv | 23;
  f.AscDFH.uPa = f.AscDFH.pv | 24;
  f.AscDFH.wPa = f.AscDFH.pv | 25;
  f.AscDFH.lPa =
    f.AscDFH.pv | 26;
  f.AscDFH.mPa = f.AscDFH.pv | 27;
  f.AscDFH.nPa = f.AscDFH.pv | 28;
  f.AscDFH.Ox = f.AscDFH.pv | 29;
  f.AscDFH.Kfb = f.AscDFH.pv | 30;
  f.AscDFH.Dfb = f.AscDFH.pv | 31;
  f.AscDFH.Afb = f.AscDFH.pv | 32;
  f.AscDFH.Pxa = f.AscDFH.pv | 33;
  f.AscDFH.Y0a = f.AscDFH.pv | 34;
  f.AscDFH.qPa = f.AscDFH.pv | 35;
  f.AscDFH.Hfb = f.AscDFH.pv | 36;
  f.AscDFH.Ifb = f.AscDFH.pv | 37;
  f.AscDFH.rPa = f.AscDFH.pv | 38;
  f.AscDFH.vfb = f.AscDFH.pv | 39;
  f.AscDFH.hDc = f.AscDFH.pv | 40;
  f.AscDFH.gDc = f.AscDFH.pv | 41;
  f.AscDFH.oPa = f.AscDFH.pv | 42;
  f.AscDFH.pPa = f.AscDFH.pv | 43;
  f.AscDFH.X_b =
    f.AscDFH.gC | 1;
  f.AscDFH.Y_b = f.AscDFH.gC | 2;
  f.AscDFH.S_b = f.AscDFH.gC | 3;
  f.AscDFH.$_b = f.AscDFH.gC | 4;
  f.AscDFH.A_b = f.AscDFH.gC | 5;
  f.AscDFH.D_b = f.AscDFH.gC | 6;
  f.AscDFH.C_b = f.AscDFH.gC | 7;
  f.AscDFH.y_b = f.AscDFH.gC | 8;
  f.AscDFH.z_b = f.AscDFH.gC | 9;
  f.AscDFH.B_b = f.AscDFH.gC | 10;
  f.AscDFH.E_b = f.AscDFH.gC | 11;
  f.AscDFH.Qfb = f.AscDFH.gC | 12;
  f.AscDFH.R_b = f.AscDFH.gC | 13;
  f.AscDFH.Q_b = f.AscDFH.gC | 14;
  f.AscDFH.nzb = f.AscDFH.gC | 15;
  f.AscDFH.K_b = f.AscDFH.gC | 16;
  f.AscDFH.J_b = f.AscDFH.gC | 17;
  f.AscDFH.Z_b = f.AscDFH.gC | 18;
  f.AscDFH.V_b = f.AscDFH.gC |
    19;
  f.AscDFH.T_b = f.AscDFH.gC | 20;
  f.AscDFH.W_b = f.AscDFH.gC | 21;
  f.AscDFH.F_b = f.AscDFH.gC | 22;
  f.AscDFH.I_b = f.AscDFH.gC | 23;
  f.AscDFH.G_b = f.AscDFH.gC | 24;
  f.AscDFH.H_b = f.AscDFH.gC | 25;
  f.AscDFH.Ofb = f.AscDFH.gC | 26;
  f.AscDFH.Pfb = f.AscDFH.gC | 27;
  f.AscDFH.O_b = f.AscDFH.gC | 28;
  f.AscDFH.N_b = f.AscDFH.gC | 29;
  f.AscDFH.M_b = f.AscDFH.gC | 30;
  f.AscDFH.L_b = f.AscDFH.gC | 31;
  f.AscDFH.U_b = f.AscDFH.gC | 32;
  f.AscDFH.P_b = f.AscDFH.gC | 33;
  f.AscDFH.DRc = f.AscDFH.Unf | 1;
  f.AscDFH.O0a = f.AscDFH.Ggb | 1;
  f.AscDFH.P0a = f.AscDFH.Ggb | 2;
  f.AscDFH.FYb = f.AscDFH.Ggb |
    3;
  f.AscDFH.EYb = f.AscDFH.Ggb | 4;
  f.AscDFH.GYb = f.AscDFH.KPa | 1;
  f.AscDFH.NYb = f.AscDFH.KPa | 2;
  f.AscDFH.IYb = f.AscDFH.KPa | 3;
  f.AscDFH.HYb = f.AscDFH.KPa | 4;
  f.AscDFH.MYb = f.AscDFH.KPa | 5;
  f.AscDFH.LYb = f.AscDFH.KPa | 6;
  f.AscDFH.KYb = f.AscDFH.KPa | 7;
  f.AscDFH.JYb = f.AscDFH.KPa | 8;
  f.AscDFH.l_b = f.AscDFH.d$ | 1;
  f.AscDFH.s_b = f.AscDFH.d$ | 2;
  f.AscDFH.w_b = f.AscDFH.d$ | 3;
  f.AscDFH.t_b = f.AscDFH.d$ | 4;
  f.AscDFH.u_b = f.AscDFH.d$ | 5;
  f.AscDFH.q_b = f.AscDFH.d$ | 6;
  f.AscDFH.m_b = f.AscDFH.d$ | 7;
  f.AscDFH.n_b = f.AscDFH.d$ | 8;
  f.AscDFH.Mfb = f.AscDFH.d$ | 9;
  f.AscDFH.Nfb =
    f.AscDFH.d$ | 10;
  f.AscDFH.v_b = f.AscDFH.d$ | 11;
  f.AscDFH.o_b = f.AscDFH.d$ | 12;
  f.AscDFH.r_b = f.AscDFH.d$ | 13;
  f.AscDFH.p_b = f.AscDFH.d$ | 14;
  f.AscDFH.x_b = f.AscDFH.d$ | 15;
  f.AscDFH.pfb = f.AscDFH.g6 | 101;
  f.AscDFH.RXb = f.AscDFH.g6 | 102;
  f.AscDFH.rUd = f.AscDFH.g6 | 103;
  f.AscDFH.sUd = f.AscDFH.g6 | 104;
  f.AscDFH.cBd = f.AscDFH.g6 | 105;
  f.AscDFH.Lxc = f.AscDFH.g6 | 106;
  f.AscDFH.Kxc = f.AscDFH.g6 | 107;
  f.AscDFH.QXb = f.AscDFH.g6 | 108;
  f.AscDFH.Jxc = f.AscDFH.g6 | 109;
  f.AscDFH.Ixc = f.AscDFH.g6 | 110;
  f.AscDFH.dBd = f.AscDFH.g6 | 201;
  f.AscDFH.KO = f.AscDFH.g6 | 301;
  f.AscDFH.c$ = f.AscDFH.g6 | 302;
  f.AscDFH.N0a = f.AscDFH.g6 | 303;
  f.AscDFH.OC = f.AscDFH.g6 | 304;
  f.AscDFH.iYb = f.AscDFH.g6 | 401;
  f.AscDFH.f_b = f.AscDFH.Jla | 1;
  f.AscDFH.zbc = f.AscDFH.Jla | 2;
  f.AscDFH.ERc = f.AscDFH.Jla | 3;
  f.AscDFH.gnf = f.AscDFH.Jla | 4;
  f.AscDFH.a8d = f.AscDFH.Jla | 5;
  f.AscDFH.$7d = f.AscDFH.Jla | 6;
  f.AscDFH.b8d = f.AscDFH.Jla | 7;
  f.AscDFH.pBd = f.AscDFH.Jla | 8;
  f.AscDFH.Lzg = f.AscDFH.Jla | 9;
  f.AscDFH.Mzg = f.AscDFH.Jla | 10;
  f.AscDFH.hnf = f.AscDFH.Jla | 11;
  f.AscDFH.inf = f.AscDFH.Jla | 12;
  f.AscDFH.Myg = f.AscDFH.eHc | 1;
  f.AscDFH.Nyg = f.AscDFH.eHc |
    2;
  f.AscDFH.Oyg = f.AscDFH.fHc | 1;
  f.AscDFH.Pyg = f.AscDFH.fHc | 2;
  f.AscDFH.Yzg = f.AscDFH.tAb | 1;
  f.AscDFH.Zzg = f.AscDFH.tAb | 2;
  f.AscDFH.Xzg = f.AscDFH.tAb | 3;
  f.AscDFH.Wzg = f.AscDFH.tAb | 4;
  f.AscDFH.Nzg = f.AscDFH.LBd | 1;
  f.AscDFH.Ozg = f.AscDFH.MBd | 1;
  f.AscDFH.Pzg = f.AscDFH.NBd | 1;
  f.AscDFH.cAg = f.AscDFH.mHc | 1;
  f.AscDFH.dAg = f.AscDFH.mHc | 2;
  f.AscDFH.Tzg = f.AscDFH.PBd | 1;
  f.AscDFH.Cyg = f.AscDFH.L1a | 1;
  f.AscDFH.Hyg = f.AscDFH.L1a | 2;
  f.AscDFH.Eyg = f.AscDFH.L1a | 3;
  f.AscDFH.Fyg = f.AscDFH.L1a | 4;
  f.AscDFH.Gyg = f.AscDFH.L1a | 5;
  f.AscDFH.Dyg = f.AscDFH.L1a |
    6;
  f.AscDFH.Szg = f.AscDFH.OBd | 1;
  f.AscDFH.ozg = f.AscDFH.kHc | 1;
  f.AscDFH.pzg = f.AscDFH.kHc | 2;
  f.AscDFH.kzg = f.AscDFH.iHc | 1;
  f.AscDFH.lzg = f.AscDFH.iHc | 2;
  f.AscDFH.mzg = f.AscDFH.jHc | 1;
  f.AscDFH.nzg = f.AscDFH.jHc | 2;
  f.AscDFH.hzg = f.AscDFH.Jgb | 1;
  f.AscDFH.izg = f.AscDFH.Jgb | 2;
  f.AscDFH.jzg = f.AscDFH.Jgb | 3;
  f.AscDFH.Czg = f.AscDFH.o1b | 1;
  f.AscDFH.Dzg = f.AscDFH.o1b | 2;
  f.AscDFH.Bzg = f.AscDFH.o1b | 3;
  f.AscDFH.eAg = f.AscDFH.nHc | 1;
  f.AscDFH.fAg = f.AscDFH.nHc | 2;
  f.AscDFH.Syg = f.AscDFH.f1b | 1;
  f.AscDFH.Ryg = f.AscDFH.f1b | 2;
  f.AscDFH.Tyg = f.AscDFH.f1b |
    3;
  f.AscDFH.rzg = f.AscDFH.lHc | 1;
  f.AscDFH.qzg = f.AscDFH.lHc | 2;
  f.AscDFH.vzg = f.AscDFH.Txa | 1;
  f.AscDFH.yzg = f.AscDFH.Txa | 2;
  f.AscDFH.xzg = f.AscDFH.Txa | 3;
  f.AscDFH.wzg = f.AscDFH.Txa | 4;
  f.AscDFH.zzg = f.AscDFH.Txa | 5;
  f.AscDFH.szg = f.AscDFH.Txa | 6;
  f.AscDFH.tzg = f.AscDFH.Txa | 7;
  f.AscDFH.uzg = f.AscDFH.Txa | 8;
  f.AscDFH.Azg = f.AscDFH.Txa | 9;
  f.AscDFH.OAc = f.AscDFH.Egb | 1;
  f.AscDFH.kYb = f.AscDFH.Egb | 2;
  f.AscDFH.lYb = f.AscDFH.Egb | 3;
  f.AscDFH.PAc = f.AscDFH.Egb | 4;
  f.AscDFH.xyc = f.AscDFH.CFa | 1;
  f.AscDFH.zyc = f.AscDFH.CFa | 2;
  f.AscDFH.yyc = f.AscDFH.CFa |
    3;
  f.AscDFH.wyc = f.AscDFH.CFa | 4;
  f.AscDFH.Ayc = f.AscDFH.CFa | 5;
  f.AscDFH.bYb = f.AscDFH.CFa | 6;
  f.AscDFH.cYb = f.AscDFH.CFa | 7;
  f.AscDFH.FCc = f.AscDFH.Mgb | 1;
  f.AscDFH.HCc = f.AscDFH.Mgb | 2;
  f.AscDFH.GCc = f.AscDFH.Mgb | 3;
  f.AscDFH.ZZb = f.AscDFH.Mgb | 4;
  f.AscDFH.nDc = f.AscDFH.O1a | 1;
  f.AscDFH.oDc = f.AscDFH.O1a | 2;
  f.AscDFH.pDc = f.AscDFH.O1a | 3;
  f.AscDFH.qDc = f.AscDFH.O1a | 4;
  f.AscDFH.rDc = f.AscDFH.O1a | 5;
  f.AscDFH.pGc = f.AscDFH.Ogb | 1;
  f.AscDFH.wBd = f.AscDFH.Ogb | 2;
  f.AscDFH.qGc = f.AscDFH.Ogb | 3;
  f.AscDFH.V0b = f.AscDFH.Ogb | 4;
  f.AscDFH.Vzg = f.AscDFH.u1b |
    1;
  f.AscDFH.Uzg = f.AscDFH.u1b | 2;
  f.AscDFH.Zyg = f.AscDFH.hHc | 1;
  f.AscDFH.Yyg = f.AscDFH.hHc | 2;
  f.AscDFH.tzc = f.AscDFH.q_ | 1;
  f.AscDFH.uzc = f.AscDFH.q_ | 2;
  f.AscDFH.vzc = f.AscDFH.q_ | 3;
  f.AscDFH.wzc = f.AscDFH.q_ | 4;
  f.AscDFH.xzc = f.AscDFH.q_ | 5;
  f.AscDFH.gYb = f.AscDFH.q_ | 6;
  f.AscDFH.yzc = f.AscDFH.q_ | 7;
  f.AscDFH.zzc = f.AscDFH.q_ | 8;
  f.AscDFH.Azc = f.AscDFH.q_ | 9;
  f.AscDFH.Bzc = f.AscDFH.q_ | 10;
  f.AscDFH.Czc = f.AscDFH.q_ | 11;
  f.AscDFH.Dzc = f.AscDFH.q_ | 12;
  f.AscDFH.dYb = f.AscDFH.Js | 1;
  f.AscDFH.bzc = f.AscDFH.Js | 2;
  f.AscDFH.czc = f.AscDFH.Js | 3;
  f.AscDFH.dzc =
    f.AscDFH.Js | 4;
  f.AscDFH.fzc = f.AscDFH.Js | 5;
  f.AscDFH.izc = f.AscDFH.Js | 6;
  f.AscDFH.jzc = f.AscDFH.Js | 7;
  f.AscDFH.kzc = f.AscDFH.Js | 8;
  f.AscDFH.lzc = f.AscDFH.Js | 9;
  f.AscDFH.mzc = f.AscDFH.Js | 10;
  f.AscDFH.eYb = f.AscDFH.Js | 11;
  f.AscDFH.fYb = f.AscDFH.Js | 12;
  f.AscDFH.Jyg = f.AscDFH.Js | 13;
  f.AscDFH.nzc = f.AscDFH.Js | 14;
  f.AscDFH.ezc = f.AscDFH.Js | 15;
  f.AscDFH.hzc = f.AscDFH.Js | 16;
  f.AscDFH.gzc = f.AscDFH.Js | 17;
  f.AscDFH.Omf = f.AscDFH.Js | 18;
  f.AscDFH.Iyg = f.AscDFH.Js | 19;
  f.AscDFH.XBc = f.AscDFH.Sxa | 1;
  f.AscDFH.VYb = f.AscDFH.Sxa | 2;
  f.AscDFH.YBc = f.AscDFH.Sxa |
    3;
  f.AscDFH.ZBc = f.AscDFH.Sxa | 4;
  f.AscDFH.$Bc = f.AscDFH.Sxa | 5;
  f.AscDFH.aCc = f.AscDFH.Sxa | 6;
  f.AscDFH.LBc = f.AscDFH.xra | 1;
  f.AscDFH.MBc = f.AscDFH.xra | 2;
  f.AscDFH.NBc = f.AscDFH.xra | 3;
  f.AscDFH.OBc = f.AscDFH.xra | 4;
  f.AscDFH.PBc = f.AscDFH.xra | 5;
  f.AscDFH.QBc = f.AscDFH.xra | 6;
  f.AscDFH.RBc = f.AscDFH.xra | 7;
  f.AscDFH.SBc = f.AscDFH.xra | 8;
  f.AscDFH.TBc = f.AscDFH.xra | 9;
  f.AscDFH.UBc = f.AscDFH.nAb | 1;
  f.AscDFH.VBc = f.AscDFH.nAb | 2;
  f.AscDFH.WBc = f.AscDFH.nAb | 3;
  f.AscDFH.IDc = f.AscDFH.Q1a | 1;
  f.AscDFH.JDc = f.AscDFH.Q1a | 2;
  f.AscDFH.KDc = f.AscDFH.Q1a |
    3;
  f.AscDFH.LDc = f.AscDFH.Q1a | 4;
  f.AscDFH.MDc = f.AscDFH.Q1a | 5;
  f.AscDFH.Fzc = f.AscDFH.bY | 1;
  f.AscDFH.Ezc = f.AscDFH.bY | 2;
  f.AscDFH.Gzc = f.AscDFH.bY | 3;
  f.AscDFH.Hzc = f.AscDFH.bY | 4;
  f.AscDFH.Izc = f.AscDFH.bY | 5;
  f.AscDFH.Jzc = f.AscDFH.bY | 6;
  f.AscDFH.Kzc = f.AscDFH.bY | 7;
  f.AscDFH.Lzc = f.AscDFH.bY | 8;
  f.AscDFH.Mzc = f.AscDFH.bY | 9;
  f.AscDFH.Nzc = f.AscDFH.bY | 10;
  f.AscDFH.Ozc = f.AscDFH.bY | 11;
  f.AscDFH.Pzc = f.AscDFH.bY | 12;
  f.AscDFH.Qzc = f.AscDFH.bY | 13;
  f.AscDFH.Rzc = f.AscDFH.bY | 14;
  f.AscDFH.Szc = f.AscDFH.bY | 15;
  f.AscDFH.qCc = f.AscDFH.oAb | 1;
  f.AscDFH.rCc =
    f.AscDFH.oAb | 2;
  f.AscDFH.sCc = f.AscDFH.oAb | 3;
  f.AscDFH.jzb = f.AscDFH.Tga | 1;
  f.AscDFH.dnf = f.AscDFH.Tga | 2;
  f.AscDFH.enf = f.AscDFH.Tga | 3;
  f.AscDFH.PDc = f.AscDFH.Tga | 4;
  f.AscDFH.QDc = f.AscDFH.Tga | 5;
  f.AscDFH.Jzg = f.AscDFH.Tga | 6;
  f.AscDFH.RDc = f.AscDFH.Tga | 7;
  f.AscDFH.Kzg = f.AscDFH.Tga | 8;
  f.AscDFH.c_b = f.AscDFH.Tga | 9;
  f.AscDFH.e_b = f.AscDFH.Tga | 10;
  f.AscDFH.d_b = f.AscDFH.Tga | 11;
  f.AscDFH.xCc = f.AscDFH.m1b | 1;
  f.AscDFH.yCc = f.AscDFH.m1b | 2;
  f.AscDFH.mEc = f.AscDFH.S1a | 1;
  f.AscDFH.nEc = f.AscDFH.S1a | 2;
  f.AscDFH.oEc = f.AscDFH.S1a | 3;
  f.AscDFH.pEc =
    f.AscDFH.S1a | 4;
  f.AscDFH.qEc = f.AscDFH.S1a | 5;
  f.AscDFH.nAc = f.AscDFH.JPa | 1;
  f.AscDFH.oAc = f.AscDFH.JPa | 2;
  f.AscDFH.pAc = f.AscDFH.JPa | 3;
  f.AscDFH.qAc = f.AscDFH.JPa | 4;
  f.AscDFH.rAc = f.AscDFH.JPa | 5;
  f.AscDFH.sAc = f.AscDFH.JPa | 6;
  f.AscDFH.WYb = f.AscDFH.GI | 1;
  f.AscDFH.XYb = f.AscDFH.GI | 2;
  f.AscDFH.bCc = f.AscDFH.GI | 3;
  f.AscDFH.YYb = f.AscDFH.GI | 4;
  f.AscDFH.cCc = f.AscDFH.GI | 5;
  f.AscDFH.ZYb = f.AscDFH.GI | 6;
  f.AscDFH.czb = f.AscDFH.GI | 7;
  f.AscDFH.$Yb = f.AscDFH.GI | 8;
  f.AscDFH.dCc = f.AscDFH.GI | 9;
  f.AscDFH.eCc = f.AscDFH.GI | 10;
  f.AscDFH.Uzc = f.AscDFH.j2 |
    1;
  f.AscDFH.jYb = f.AscDFH.j2 | 2;
  f.AscDFH.Tzc = f.AscDFH.j2 | 3;
  f.AscDFH.Vzc = f.AscDFH.j2 | 4;
  f.AscDFH.Wzc = f.AscDFH.j2 | 5;
  f.AscDFH.Xzc = f.AscDFH.j2 | 6;
  f.AscDFH.Yzc = f.AscDFH.j2 | 7;
  f.AscDFH.Zzc = f.AscDFH.j2 | 8;
  f.AscDFH.$zc = f.AscDFH.j2 | 9;
  f.AscDFH.aAc = f.AscDFH.j2 | 10;
  f.AscDFH.bAc = f.AscDFH.j2 | 11;
  f.AscDFH.cAc = f.AscDFH.j2 | 12;
  f.AscDFH.dAc = f.AscDFH.j2 | 13;
  f.AscDFH.eAc = f.AscDFH.j2 | 14;
  f.AscDFH.fAc = f.AscDFH.j2 | 15;
  f.AscDFH.rGc = f.AscDFH.uAb | 1;
  f.AscDFH.sGc = f.AscDFH.uAb | 2;
  f.AscDFH.tGc = f.AscDFH.uAb | 3;
  f.AscDFH.SXb = f.AscDFH.Qv | 1;
  f.AscDFH.UXb =
    f.AscDFH.Qv | 2;
  f.AscDFH.VXb = f.AscDFH.Qv | 3;
  f.AscDFH.Oxc = f.AscDFH.Qv | 4;
  f.AscDFH.XXb = f.AscDFH.Qv | 5;
  f.AscDFH.Pxc = f.AscDFH.Qv | 6;
  f.AscDFH.Qyb = f.AscDFH.Qv | 7;
  f.AscDFH.Qxc = f.AscDFH.Qv | 8;
  f.AscDFH.Rxc = f.AscDFH.Qv | 9;
  f.AscDFH.TXb = f.AscDFH.Qv | 10;
  f.AscDFH.WXb = f.AscDFH.Qv | 11;
  f.AscDFH.YXb = f.AscDFH.Qv | 12;
  f.AscDFH.$Xb = f.AscDFH.ura | 1;
  f.AscDFH.dyc = f.AscDFH.ura | 2;
  f.AscDFH.eyc = f.AscDFH.ura | 3;
  f.AscDFH.fyc = f.AscDFH.ura | 4;
  f.AscDFH.aYb = f.AscDFH.ura | 5;
  f.AscDFH.gyc = f.AscDFH.ura | 6;
  f.AscDFH.hyc = f.AscDFH.ura | 7;
  f.AscDFH.iyc = f.AscDFH.ura |
    8;
  f.AscDFH.pYb = f.AscDFH.RA | 1;
  f.AscDFH.UAc = f.AscDFH.RA | 2;
  f.AscDFH.VAc = f.AscDFH.RA | 3;
  f.AscDFH.Wyb = f.AscDFH.RA | 4;
  f.AscDFH.WAc = f.AscDFH.RA | 5;
  f.AscDFH.$Zb = f.AscDFH.Ila | 1;
  f.AscDFH.ICc = f.AscDFH.Ila | 2;
  f.AscDFH.JCc = f.AscDFH.Ila | 3;
  f.AscDFH.KCc = f.AscDFH.Ila | 4;
  f.AscDFH.LCc = f.AscDFH.Ila | 5;
  f.AscDFH.a_b = f.AscDFH.Ila | 6;
  f.AscDFH.MCc = f.AscDFH.Ila | 7;
  f.AscDFH.NCc = f.AscDFH.Ila | 8;
  f.AscDFH.OCc = f.AscDFH.Ila | 9;
  f.AscDFH.PCc = f.AscDFH.Ila | 10;
  f.AscDFH.b_b = f.AscDFH.Bu | 1;
  f.AscDFH.yDc = f.AscDFH.Bu | 2;
  f.AscDFH.hzb = f.AscDFH.Bu | 3;
  f.AscDFH.zDc =
    f.AscDFH.Bu | 4;
  f.AscDFH.xDc = f.AscDFH.Bu | 5;
  f.AscDFH.g_b = f.AscDFH.yra | 1;
  f.AscDFH.h_b = f.AscDFH.yra | 2;
  f.AscDFH.cEc = f.AscDFH.yra | 3;
  f.AscDFH.kzb = f.AscDFH.yra | 4;
  f.AscDFH.dEc = f.AscDFH.yra | 5;
  f.AscDFH.i_b = f.AscDFH.EE | 1;
  f.AscDFH.j_b = f.AscDFH.EE | 2;
  f.AscDFH.k_b = f.AscDFH.EE | 3;
  f.AscDFH.mzb = f.AscDFH.EE | 4;
  f.AscDFH.rEc = f.AscDFH.EE | 5;
  f.AscDFH.n0b = f.AscDFH.k2 | 1;
  f.AscDFH.zFc = f.AscDFH.k2 | 2;
  f.AscDFH.AFc = f.AscDFH.k2 | 3;
  f.AscDFH.BFc = f.AscDFH.k2 | 4;
  f.AscDFH.o0b = f.AscDFH.k2 | 5;
  f.AscDFH.CFc = f.AscDFH.k2 | 6;
  f.AscDFH.M0b = f.AscDFH.l2 |
    1;
  f.AscDFH.N0b = f.AscDFH.l2 | 2;
  f.AscDFH.Uzb = f.AscDFH.l2 | 3;
  f.AscDFH.IFc = f.AscDFH.l2 | 4;
  f.AscDFH.Mxc = f.AscDFH.a1b | 1;
  f.AscDFH.Nxc = f.AscDFH.a1b | 2;
  f.AscDFH.MXb = f.AscDFH.kS | 1;
  f.AscDFH.NXb = f.AscDFH.kS | 2;
  f.AscDFH.wxc = f.AscDFH.kS | 3;
  f.AscDFH.OXb = f.AscDFH.kS | 4;
  f.AscDFH.ofb = f.AscDFH.kS | 5;
  f.AscDFH.xxc = f.AscDFH.kS | 6;
  f.AscDFH.sEc = f.AscDFH.AQ | 1;
  f.AscDFH.tEc = f.AscDFH.AQ | 2;
  f.AscDFH.uEc = f.AscDFH.AQ | 3;
  f.AscDFH.vEc = f.AscDFH.AQ | 4;
  f.AscDFH.wEc = f.AscDFH.AQ | 5;
  f.AscDFH.xEc = f.AscDFH.AQ | 6;
  f.AscDFH.yEc = f.AscDFH.AQ | 7;
  f.AscDFH.zEc =
    f.AscDFH.AQ | 8;
  f.AscDFH.AEc = f.AscDFH.AQ | 9;
  f.AscDFH.BEc = f.AscDFH.AQ | 10;
  f.AscDFH.CEc = f.AscDFH.AQ | 11;
  f.AscDFH.DEc = f.AscDFH.AQ | 12;
  f.AscDFH.gAc = f.AscDFH.DFa | 1;
  f.AscDFH.hAc = f.AscDFH.DFa | 2;
  f.AscDFH.iAc = f.AscDFH.DFa | 3;
  f.AscDFH.jAc = f.AscDFH.DFa | 4;
  f.AscDFH.kAc = f.AscDFH.DFa | 5;
  f.AscDFH.lAc = f.AscDFH.DFa | 6;
  f.AscDFH.mAc = f.AscDFH.DFa | 7;
  f.AscDFH.XAc = f.AscDFH.Rxa | 1;
  f.AscDFH.YAc = f.AscDFH.Rxa | 2;
  f.AscDFH.ZAc = f.AscDFH.Rxa | 3;
  f.AscDFH.$Ac = f.AscDFH.Rxa | 4;
  f.AscDFH.aBc = f.AscDFH.Rxa | 5;
  f.AscDFH.bBc = f.AscDFH.Rxa | 6;
  f.AscDFH.cBc =
    f.AscDFH.Rxa | 7;
  f.AscDFH.dBc = f.AscDFH.Rxa | 8;
  f.AscDFH.tCc = f.AscDFH.i1b | 1;
  f.AscDFH.uCc = f.AscDFH.i1b | 2;
  f.AscDFH.zCc = f.AscDFH.pAb | 1;
  f.AscDFH.VZb = f.AscDFH.pAb | 2;
  f.AscDFH.ACc = f.AscDFH.pAb | 3;
  f.AscDFH.CCc = f.AscDFH.qAb | 1;
  f.AscDFH.DCc = f.AscDFH.qAb | 2;
  f.AscDFH.ECc = f.AscDFH.qAb | 3;
  f.AscDFH.WZb = f.AscDFH.n1b | 1;
  f.AscDFH.BCc = f.AscDFH.n1b | 2;
  f.AscDFH.cGc = f.AscDFH.Vga | 1;
  f.AscDFH.dGc = f.AscDFH.Vga | 2;
  f.AscDFH.eGc = f.AscDFH.Vga | 3;
  f.AscDFH.fGc = f.AscDFH.Vga | 4;
  f.AscDFH.gGc = f.AscDFH.Vga | 5;
  f.AscDFH.hGc = f.AscDFH.Vga | 6;
  f.AscDFH.iGc =
    f.AscDFH.Vga | 7;
  f.AscDFH.jGc = f.AscDFH.Vga | 8;
  f.AscDFH.kGc = f.AscDFH.Vga | 9;
  f.AscDFH.lGc = f.AscDFH.Vga | 10;
  f.AscDFH.mGc = f.AscDFH.Vga | 11;
  f.AscDFH.nGc = f.AscDFH.w1b | 1;
  f.AscDFH.oGc = f.AscDFH.w1b | 2;
  f.AscDFH.GFc = f.AscDFH.s1b | 1;
  f.AscDFH.HFc = f.AscDFH.s1b | 2;
  f.AscDFH.p0b = f.AscDFH.q1b | 1;
  f.AscDFH.DFc = f.AscDFH.q1b | 2;
  f.AscDFH.EFc = f.AscDFH.r1b | 1;
  f.AscDFH.FFc = f.AscDFH.r1b | 2;
  f.AscDFH.VGc = f.AscDFH.T1a | 1;
  f.AscDFH.WGc = f.AscDFH.T1a | 2;
  f.AscDFH.XGc = f.AscDFH.T1a | 3;
  f.AscDFH.YGc = f.AscDFH.T1a | 4;
  f.AscDFH.ZGc = f.AscDFH.T1a | 5;
  f.AscDFH.vCc =
    f.AscDFH.k1b | 1;
  f.AscDFH.wCc = f.AscDFH.k1b | 2;
  f.AscDFH.UZb = f.AscDFH.j1b | 1;
  f.AscDFH.nBd = f.AscDFH.j1b | 2;
  f.AscDFH.q0b = f.AscDFH.t1b | 1;
  f.AscDFH.uBd = f.AscDFH.t1b | 2;
  f.AscDFH.aHc = f.AscDFH.x1b | 1;
  f.AscDFH.bHc = f.AscDFH.x1b | 2;
  f.AscDFH.yxc = f.AscDFH.aY | 1;
  f.AscDFH.zxc = f.AscDFH.aY | 2;
  f.AscDFH.PXb = f.AscDFH.aY | 3;
  f.AscDFH.Axc = f.AscDFH.aY | 4;
  f.AscDFH.Bxc = f.AscDFH.aY | 5;
  f.AscDFH.Cxc = f.AscDFH.aY | 6;
  f.AscDFH.Dxc = f.AscDFH.aY | 7;
  f.AscDFH.Exc = f.AscDFH.aY | 8;
  f.AscDFH.Fxc = f.AscDFH.aY | 9;
  f.AscDFH.Gxc = f.AscDFH.aY | 10;
  f.AscDFH.Hxc = f.AscDFH.aY |
    11;
  f.AscDFH.Xyc = f.AscDFH.M1a | 1;
  f.AscDFH.Yyc = f.AscDFH.M1a | 2;
  f.AscDFH.Zyc = f.AscDFH.M1a | 3;
  f.AscDFH.$yc = f.AscDFH.M1a | 4;
  f.AscDFH.azc = f.AscDFH.M1a | 5;
  f.AscDFH.sDc = f.AscDFH.P1a | 1;
  f.AscDFH.tDc = f.AscDFH.P1a | 2;
  f.AscDFH.uDc = f.AscDFH.P1a | 3;
  f.AscDFH.vDc = f.AscDFH.P1a | 4;
  f.AscDFH.wDc = f.AscDFH.P1a | 5;
  f.AscDFH.Qga = f.AscDFH.zra | 1;
  f.AscDFH.eEc = f.AscDFH.zra | 2;
  f.AscDFH.lzb = f.AscDFH.zra | 3;
  f.AscDFH.fEc = f.AscDFH.zra | 4;
  f.AscDFH.knf = f.AscDFH.zra | 5;
  f.AscDFH.lnf = f.AscDFH.zra | 6;
  f.AscDFH.mnf = f.AscDFH.zra | 7;
  f.AscDFH.nnf = f.AscDFH.zra |
    8;
  f.AscDFH.onf = f.AscDFH.zra | 9;
  f.AscDFH.Sxc = f.AscDFH.e6 | 1;
  f.AscDFH.Txc = f.AscDFH.e6 | 2;
  f.AscDFH.ZXb = f.AscDFH.e6 | 3;
  f.AscDFH.Uxc = f.AscDFH.e6 | 4;
  f.AscDFH.Vxc = f.AscDFH.e6 | 5;
  f.AscDFH.Wxc = f.AscDFH.e6 | 6;
  f.AscDFH.Xxc = f.AscDFH.e6 | 7;
  f.AscDFH.Yxc = f.AscDFH.e6 | 8;
  f.AscDFH.Zxc = f.AscDFH.e6 | 9;
  f.AscDFH.$xc = f.AscDFH.e6 | 10;
  f.AscDFH.ayc = f.AscDFH.e6 | 11;
  f.AscDFH.byc = f.AscDFH.e6 | 12;
  f.AscDFH.cyc = f.AscDFH.e6 | 13;
  f.AscDFH.fCc = f.AscDFH.zQ | 1;
  f.AscDFH.gCc = f.AscDFH.zQ | 2;
  f.AscDFH.dzb = f.AscDFH.zQ | 3;
  f.AscDFH.hCc = f.AscDFH.zQ | 4;
  f.AscDFH.iCc =
    f.AscDFH.zQ | 5;
  f.AscDFH.jCc = f.AscDFH.zQ | 6;
  f.AscDFH.kCc = f.AscDFH.zQ | 7;
  f.AscDFH.lCc = f.AscDFH.zQ | 8;
  f.AscDFH.mCc = f.AscDFH.zQ | 9;
  f.AscDFH.nCc = f.AscDFH.zQ | 10;
  f.AscDFH.oCc = f.AscDFH.zQ | 11;
  f.AscDFH.pCc = f.AscDFH.zQ | 12;
  f.AscDFH.ADc = f.AscDFH.h6 | 1;
  f.AscDFH.BDc = f.AscDFH.h6 | 2;
  f.AscDFH.izb = f.AscDFH.h6 | 3;
  f.AscDFH.CDc = f.AscDFH.h6 | 4;
  f.AscDFH.DDc = f.AscDFH.h6 | 5;
  f.AscDFH.EDc = f.AscDFH.h6 | 6;
  f.AscDFH.FDc = f.AscDFH.h6 | 7;
  f.AscDFH.GDc = f.AscDFH.h6 | 8;
  f.AscDFH.HDc = f.AscDFH.h6 | 9;
  f.AscDFH.JFc = f.AscDFH.GFa | 1;
  f.AscDFH.KFc = f.AscDFH.GFa |
    2;
  f.AscDFH.LFc = f.AscDFH.GFa | 3;
  f.AscDFH.MFc = f.AscDFH.GFa | 4;
  f.AscDFH.NFc = f.AscDFH.GFa | 5;
  f.AscDFH.OFc = f.AscDFH.GFa | 6;
  f.AscDFH.jyc = f.AscDFH.f6 | 1;
  f.AscDFH.kyc = f.AscDFH.f6 | 2;
  f.AscDFH.lyc = f.AscDFH.f6 | 3;
  f.AscDFH.myc = f.AscDFH.f6 | 4;
  f.AscDFH.nyc = f.AscDFH.f6 | 5;
  f.AscDFH.oyc = f.AscDFH.f6 | 6;
  f.AscDFH.pyc = f.AscDFH.f6 | 7;
  f.AscDFH.qyc = f.AscDFH.f6 | 8;
  f.AscDFH.ryc = f.AscDFH.f6 | 9;
  f.AscDFH.syc = f.AscDFH.f6 | 10;
  f.AscDFH.tyc = f.AscDFH.f6 | 11;
  f.AscDFH.uyc = f.AscDFH.f6 | 12;
  f.AscDFH.vyc = f.AscDFH.f6 | 13;
  f.AscDFH.fBd = f.AscDFH.g1b | 1;
  f.AscDFH.eBc =
    f.AscDFH.g1b | 2;
  f.AscDFH.NDc = f.AscDFH.p1b | 1;
  f.AscDFH.ODc = f.AscDFH.p1b | 2;
  f.AscDFH.YDc = f.AscDFH.R1a | 1;
  f.AscDFH.ZDc = f.AscDFH.R1a | 2;
  f.AscDFH.$Dc = f.AscDFH.R1a | 3;
  f.AscDFH.aEc = f.AscDFH.R1a | 4;
  f.AscDFH.bEc = f.AscDFH.R1a | 5;
  f.AscDFH.qzc = f.AscDFH.lAb | 1;
  f.AscDFH.rzc = f.AscDFH.lAb | 2;
  f.AscDFH.szc = f.AscDFH.lAb | 3;
  f.AscDFH.OGc = f.AscDFH.NPa | 1;
  f.AscDFH.PGc = f.AscDFH.NPa | 2;
  f.AscDFH.QGc = f.AscDFH.NPa | 3;
  f.AscDFH.RGc = f.AscDFH.NPa | 4;
  f.AscDFH.SGc = f.AscDFH.NPa | 5;
  f.AscDFH.TGc = f.AscDFH.NPa | 6;
  f.AscDFH.ozc = f.AscDFH.d1b | 1;
  f.AscDFH.pzc =
    f.AscDFH.d1b | 2;
  f.AscDFH.l0b = f.AscDFH.Ngb | 1;
  f.AscDFH.j0b = f.AscDFH.Ngb | 2;
  f.AscDFH.k0b = f.AscDFH.Ngb | 3;
  f.AscDFH.i0b = f.AscDFH.Ngb | 4;
  f.AscDFH.Dgb = f.AscDFH.rca | 1;
  f.AscDFH.kAb = f.AscDFH.rca | 2;
  f.AscDFH.Cgb = f.AscDFH.rca | 3;
  f.AscDFH.jAb = f.AscDFH.rca | 4;
  f.AscDFH.Bgb = f.AscDFH.rca | 5;
  f.AscDFH.iAb = f.AscDFH.rca | 6;
  f.AscDFH.Agb = f.AscDFH.rca | 7;
  f.AscDFH.hAb = f.AscDFH.rca | 8;
  f.AscDFH.X0b = f.AscDFH.rca | 9;
  f.AscDFH.Y0b = f.AscDFH.rca | 10;
  f.AscDFH.Z0b = f.AscDFH.rca | 11;
  f.AscDFH.$Gc = f.AscDFH.rca | 12;
  f.AscDFH.XEc = f.AscDFH.FFa | 1;
  f.AscDFH.ZEc =
    f.AscDFH.FFa | 2;
  f.AscDFH.m0b = f.AscDFH.FFa | 3;
  f.AscDFH.qzb = f.AscDFH.FFa | 4;
  f.AscDFH.rzb = f.AscDFH.FFa | 5;
  f.AscDFH.YEc = f.AscDFH.FFa | 6;
  f.AscDFH.pzb = f.AscDFH.FFa | 7;
  f.AscDFH.Kyg = f.AscDFH.dHc | 1;
  f.AscDFH.Lyg = f.AscDFH.dHc | 2;
  f.AscDFH.hYb = f.AscDFH.cHc | 1;
  f.AscDFH.DYb = f.AscDFH.h1b | 1;
  f.AscDFH.fBc = f.AscDFH.h1b | 2;
  f.AscDFH.Wyg = f.AscDFH.Hgb | 1;
  f.AscDFH.Xyg = f.AscDFH.Hgb | 2;
  f.AscDFH.Vyg = f.AscDFH.Hgb | 3;
  f.AscDFH.Uyg = f.AscDFH.Hgb | 4;
  f.AscDFH.bzg = f.AscDFH.mAb | 1;
  f.AscDFH.$yg = f.AscDFH.mAb | 2;
  f.AscDFH.azg = f.AscDFH.mAb | 3;
  f.AscDFH.gzg =
    f.AscDFH.Igb | 1;
  f.AscDFH.ezg = f.AscDFH.Igb | 2;
  f.AscDFH.fzg = f.AscDFH.Igb | 3;
  f.AscDFH.dzg = f.AscDFH.Igb | 4;
  f.AscDFH.czg = f.AscDFH.Igb | 5;
  f.AscDFH.$zg = f.AscDFH.v1b | 1;
  f.AscDFH.bAg = f.AscDFH.v1b | 2;
  f.AscDFH.aAg = f.AscDFH.v1b | 3;
  f.AscDFH.qBc = f.AscDFH.Kgb | 1;
  f.AscDFH.rBc = f.AscDFH.Kgb | 2;
  f.AscDFH.sBc = f.AscDFH.Kgb | 3;
  f.AscDFH.tBc = f.AscDFH.Kgb | 4;
  f.AscDFH.xyg = f.AscDFH.c1b | 1;
  f.AscDFH.yyg = f.AscDFH.c1b | 2;
  f.AscDFH.Byg = f.AscDFH.b1b | 1;
  f.AscDFH.zyg = f.AscDFH.b1b | 2;
  f.AscDFH.Ayg = f.AscDFH.b1b | 3;
  f.AscDFH.VDc = f.AscDFH.sAb | 1;
  f.AscDFH.WDc =
    f.AscDFH.sAb | 2;
  f.AscDFH.XDc = f.AscDFH.sAb | 3;
  f.AscDFH.uBc = f.AscDFH.wra | 1;
  f.AscDFH.vBc = f.AscDFH.wra | 2;
  f.AscDFH.wBc = f.AscDFH.wra | 3;
  f.AscDFH.xBc = f.AscDFH.wra | 4;
  f.AscDFH.yBc = f.AscDFH.wra | 5;
  f.AscDFH.zBc = f.AscDFH.wra | 6;
  f.AscDFH.ABc = f.AscDFH.wra | 7;
  f.AscDFH.BBc = f.AscDFH.wra | 8;
  f.AscDFH.CBc = f.AscDFH.wra | 9;
  f.AscDFH.QCc = f.AscDFH.LPa | 1;
  f.AscDFH.RCc = f.AscDFH.LPa | 2;
  f.AscDFH.SCc = f.AscDFH.LPa | 3;
  f.AscDFH.TCc = f.AscDFH.LPa | 4;
  f.AscDFH.UCc = f.AscDFH.LPa | 5;
  f.AscDFH.VCc = f.AscDFH.LPa | 6;
  f.AscDFH.WCc = f.AscDFH.Sga | 1;
  f.AscDFH.XCc =
    f.AscDFH.Sga | 2;
  f.AscDFH.YCc = f.AscDFH.Sga | 3;
  f.AscDFH.ZCc = f.AscDFH.Sga | 4;
  f.AscDFH.$Cc = f.AscDFH.Sga | 5;
  f.AscDFH.aDc = f.AscDFH.Sga | 6;
  f.AscDFH.bDc = f.AscDFH.Sga | 7;
  f.AscDFH.cDc = f.AscDFH.Sga | 8;
  f.AscDFH.dDc = f.AscDFH.Sga | 9;
  f.AscDFH.eDc = f.AscDFH.Sga | 10;
  f.AscDFH.fDc = f.AscDFH.Sga | 11;
  f.AscDFH.BFa = f.AscDFH.ns | 1;
  f.AscDFH.b0b = f.AscDFH.ns | 2;
  f.AscDFH.e0b = f.AscDFH.ns | 3;
  f.AscDFH.zJb = f.AscDFH.ns | 4;
  f.AscDFH.g0b = f.AscDFH.ns | 5;
  f.AscDFH.f0b = f.AscDFH.ns | 6;
  f.AscDFH.c0b = f.AscDFH.ns | 7;
  f.AscDFH.a0b = f.AscDFH.ns | 8;
  f.AscDFH.ozb = f.AscDFH.ns |
    9;
  f.AscDFH.h0b = f.AscDFH.ns | 10;
  f.AscDFH.d0b = f.AscDFH.ns | 11;
  f.AscDFH.QAc = f.AscDFH.Fgb | 1;
  f.AscDFH.RAc = f.AscDFH.Fgb | 2;
  f.AscDFH.SAc = f.AscDFH.Fgb | 3;
  f.AscDFH.TAc = f.AscDFH.Fgb | 4;
  f.AscDFH.PYb = f.AscDFH.tw | 1;
  f.AscDFH.pBc = f.AscDFH.tw | 2;
  f.AscDFH.xJb = f.AscDFH.tw | 3;
  f.AscDFH.oBc = f.AscDFH.tw | 4;
  f.AscDFH.nBc = f.AscDFH.tw | 5;
  f.AscDFH.yJb = f.AscDFH.tw | 6;
  f.AscDFH.TYb = f.AscDFH.vx | 1;
  f.AscDFH.JBc = f.AscDFH.vx | 2;
  f.AscDFH.bzb = f.AscDFH.vx | 3;
  f.AscDFH.IBc = f.AscDFH.vx | 4;
  f.AscDFH.FBc = f.AscDFH.vx | 5;
  f.AscDFH.KBc = f.AscDFH.vx | 6;
  f.AscDFH.EBc =
    f.AscDFH.vx | 7;
  f.AscDFH.DBc = f.AscDFH.vx | 8;
  f.AscDFH.UYb = f.AscDFH.vx | 9;
  f.AscDFH.GBc = f.AscDFH.vx | 10;
  f.AscDFH.HBc = f.AscDFH.vx | 11;
  f.AscDFH.mBd = f.AscDFH.vx | 12;
  f.AscDFH.hBc = f.AscDFH.vra | 1;
  f.AscDFH.gBd = f.AscDFH.vra | 2;
  f.AscDFH.iBd = f.AscDFH.vra | 3;
  f.AscDFH.hBd = f.AscDFH.vra | 4;
  f.AscDFH.kBd = f.AscDFH.vra | 5;
  f.AscDFH.jBd = f.AscDFH.vra | 6;
  f.AscDFH.gBc = f.AscDFH.vra | 7;
  f.AscDFH.lBd = f.AscDFH.vra | 8;
  f.AscDFH.iBc = f.AscDFH.vra | 9;
  f.AscDFH.mDc = f.AscDFH.MPa | 1;
  f.AscDFH.iDc = f.AscDFH.MPa | 2;
  f.AscDFH.jDc = f.AscDFH.MPa | 3;
  f.AscDFH.kDc =
    f.AscDFH.MPa | 4;
  f.AscDFH.lDc = f.AscDFH.MPa | 5;
  f.AscDFH.oBd = f.AscDFH.MPa | 6;
  f.AscDFH.R0b = f.AscDFH.kUa | 1;
  f.AscDFH.S0b = f.AscDFH.kUa | 2;
  f.AscDFH.PFc = f.AscDFH.kUa | 3;
  f.AscDFH.QFc = f.AscDFH.kUa | 4;
  f.AscDFH.Byc = f.AscDFH.fC | 1;
  f.AscDFH.Cyc = f.AscDFH.fC | 2;
  f.AscDFH.Dyc = f.AscDFH.fC | 3;
  f.AscDFH.Eyc = f.AscDFH.fC | 4;
  f.AscDFH.Fyc = f.AscDFH.fC | 5;
  f.AscDFH.Gyc = f.AscDFH.fC | 6;
  f.AscDFH.Hyc = f.AscDFH.fC | 7;
  f.AscDFH.Iyc = f.AscDFH.fC | 8;
  f.AscDFH.Jyc = f.AscDFH.fC | 9;
  f.AscDFH.Kyc = f.AscDFH.fC | 10;
  f.AscDFH.Lyc = f.AscDFH.fC | 11;
  f.AscDFH.Myc = f.AscDFH.fC |
    12;
  f.AscDFH.Nyc = f.AscDFH.fC | 13;
  f.AscDFH.Oyc = f.AscDFH.fC | 14;
  f.AscDFH.Pyc = f.AscDFH.fC | 15;
  f.AscDFH.Qyc = f.AscDFH.fC | 16;
  f.AscDFH.Ryc = f.AscDFH.fC | 17;
  f.AscDFH.Syc = f.AscDFH.fC | 18;
  f.AscDFH.Tyc = f.AscDFH.fC | 19;
  f.AscDFH.Uyc = f.AscDFH.fC | 20;
  f.AscDFH.Vyc = f.AscDFH.fC | 21;
  f.AscDFH.Wyc = f.AscDFH.fC | 22;
  f.AscDFH.uGc = f.AscDFH.Rv | 1;
  f.AscDFH.vGc = f.AscDFH.Rv | 2;
  f.AscDFH.wGc = f.AscDFH.Rv | 3;
  f.AscDFH.xGc = f.AscDFH.Rv | 4;
  f.AscDFH.yGc = f.AscDFH.Rv | 5;
  f.AscDFH.zGc = f.AscDFH.Rv | 6;
  f.AscDFH.AGc = f.AscDFH.Rv | 7;
  f.AscDFH.BGc = f.AscDFH.Rv | 8;
  f.AscDFH.CGc =
    f.AscDFH.Rv | 9;
  f.AscDFH.DGc = f.AscDFH.Rv | 10;
  f.AscDFH.EGc = f.AscDFH.Rv | 11;
  f.AscDFH.FGc = f.AscDFH.Rv | 12;
  f.AscDFH.GGc = f.AscDFH.Rv | 13;
  f.AscDFH.HGc = f.AscDFH.Rv | 14;
  f.AscDFH.IGc = f.AscDFH.Rv | 15;
  f.AscDFH.JGc = f.AscDFH.Rv | 16;
  f.AscDFH.KGc = f.AscDFH.Rv | 17;
  f.AscDFH.LGc = f.AscDFH.Rv | 18;
  f.AscDFH.MGc = f.AscDFH.Rv | 19;
  f.AscDFH.NGc = f.AscDFH.Rv | 20;
  f.AscDFH.p8d = f.AscDFH.qob | 1;
  f.AscDFH.q8d = f.AscDFH.qob | 2;
  f.AscDFH.r8d = f.AscDFH.qob | 3;
  f.AscDFH.tAc = f.AscDFH.QA | 1;
  f.AscDFH.uAc = f.AscDFH.QA | 2;
  f.AscDFH.vAc = f.AscDFH.QA | 3;
  f.AscDFH.wAc = f.AscDFH.QA |
    4;
  f.AscDFH.xAc = f.AscDFH.QA | 5;
  f.AscDFH.yAc = f.AscDFH.QA | 6;
  f.AscDFH.zAc = f.AscDFH.QA | 7;
  f.AscDFH.AAc = f.AscDFH.QA | 8;
  f.AscDFH.BAc = f.AscDFH.QA | 9;
  f.AscDFH.qfb = f.AscDFH.QA | 10;
  f.AscDFH.CAc = f.AscDFH.QA | 11;
  f.AscDFH.DAc = f.AscDFH.QA | 12;
  f.AscDFH.EAc = f.AscDFH.QA | 13;
  f.AscDFH.Qyg = f.AscDFH.QA | 14;
  f.AscDFH.FAc = f.AscDFH.QA | 15;
  f.AscDFH.GAc = f.AscDFH.QA | 16;
  f.AscDFH.HAc = f.AscDFH.QA | 17;
  f.AscDFH.IAc = f.AscDFH.QA | 18;
  f.AscDFH.JAc = f.AscDFH.QA | 19;
  f.AscDFH.KAc = f.AscDFH.QA | 20;
  f.AscDFH.LAc = f.AscDFH.QA | 21;
  f.AscDFH.MAc = f.AscDFH.QA | 22;
  f.AscDFH.NAc = f.AscDFH.QA | 23;
  f.AscDFH.EEc = f.AscDFH.BQ | 1;
  f.AscDFH.FEc = f.AscDFH.BQ | 2;
  f.AscDFH.GEc = f.AscDFH.BQ | 3;
  f.AscDFH.HEc = f.AscDFH.BQ | 4;
  f.AscDFH.IEc = f.AscDFH.BQ | 5;
  f.AscDFH.JEc = f.AscDFH.BQ | 6;
  f.AscDFH.KEc = f.AscDFH.BQ | 7;
  f.AscDFH.LEc = f.AscDFH.BQ | 8;
  f.AscDFH.MEc = f.AscDFH.BQ | 9;
  f.AscDFH.NEc = f.AscDFH.BQ | 10;
  f.AscDFH.OEc = f.AscDFH.BQ | 11;
  f.AscDFH.PEc = f.AscDFH.BQ | 12;
  f.AscDFH.QEc = f.AscDFH.BQ | 13;
  f.AscDFH.REc = f.AscDFH.BQ | 14;
  f.AscDFH.SEc = f.AscDFH.BQ | 15;
  f.AscDFH.TEc = f.AscDFH.BQ | 16;
  f.AscDFH.UEc = f.AscDFH.BQ | 17;
  f.AscDFH.VEc =
    f.AscDFH.BQ | 18;
  f.AscDFH.YFc = f.AscDFH.uoa | 1;
  f.AscDFH.ZFc = f.AscDFH.uoa | 2;
  f.AscDFH.$Fc = f.AscDFH.uoa | 3;
  f.AscDFH.aGc = f.AscDFH.uoa | 4;
  f.AscDFH.bGc = f.AscDFH.uoa | 5;
  f.AscDFH.Hnf = f.AscDFH.mS | 1;
  f.AscDFH.Knf = f.AscDFH.mS | 2;
  f.AscDFH.Mnf = f.AscDFH.mS | 3;
  f.AscDFH.Lnf = f.AscDFH.mS | 4;
  f.AscDFH.i8d = f.AscDFH.mS | 5;
  f.AscDFH.Jnf = f.AscDFH.mS | 6;
  f.AscDFH.l8d = f.AscDFH.mS | 7;
  f.AscDFH.k8d = f.AscDFH.mS | 8;
  f.AscDFH.MUd = f.AscDFH.mS | 9;
  f.AscDFH.j8d = f.AscDFH.mS | 10;
  f.AscDFH.qBd = f.AscDFH.mS | 11;
  f.AscDFH.xYc = f.AscDFH.mS | 12;
  f.AscDFH.Fnf = f.AscDFH.mS |
    13;
  f.AscDFH.Gnf = f.AscDFH.mS | 14;
  f.AscDFH.Inf = f.AscDFH.mS | 15;
  f.AscDFH.tnf = f.AscDFH.qca | 1;
  f.AscDFH.unf = f.AscDFH.qca | 2;
  f.AscDFH.ynf = f.AscDFH.qca | 3;
  f.AscDFH.d8d = f.AscDFH.qca | 4;
  f.AscDFH.qnf = f.AscDFH.qca | 5;
  f.AscDFH.vnf = f.AscDFH.qca | 6;
  f.AscDFH.xnf = f.AscDFH.qca | 7;
  f.AscDFH.wnf = f.AscDFH.qca | 8;
  f.AscDFH.rnf = f.AscDFH.qca | 9;
  f.AscDFH.c8d = f.AscDFH.qca | 10;
  f.AscDFH.e8d = f.AscDFH.qca | 11;
  f.AscDFH.snf = f.AscDFH.qca | 12;
  f.AscDFH.Anf = f.AscDFH.Ara | 1;
  f.AscDFH.Dnf = f.AscDFH.Ara | 2;
  f.AscDFH.f8d = f.AscDFH.Ara | 3;
  f.AscDFH.h8d = f.AscDFH.Ara |
    4;
  f.AscDFH.Bnf = f.AscDFH.Ara | 5;
  f.AscDFH.Cnf = f.AscDFH.Ara | 6;
  f.AscDFH.znf = f.AscDFH.Ara | 7;
  f.AscDFH.Enf = f.AscDFH.Ara | 8;
  f.AscDFH.g8d = f.AscDFH.Ara | 9;
  f.AscDFH.pnf = f.AscDFH.J8b | 1;
  f.AscDFH.LUd = f.AscDFH.J8b | 2;
  f.AscDFH.jnf = f.AscDFH.LRc | 1;
  f.AscDFH.fAb = f.AscDFH.Uga | 1;
  f.AscDFH.U0b = f.AscDFH.Uga | 2;
  f.AscDFH.T0b = f.AscDFH.Uga | 3;
  f.AscDFH.VFc = f.AscDFH.Uga | 4;
  f.AscDFH.TFc = f.AscDFH.Uga | 5;
  f.AscDFH.WFc = f.AscDFH.Uga | 6;
  f.AscDFH.UFc = f.AscDFH.Uga | 7;
  f.AscDFH.XFc = f.AscDFH.Uga | 8;
  f.AscDFH.RFc = f.AscDFH.Uga | 9;
  f.AscDFH.SFc = f.AscDFH.Uga |
    10;
  f.AscDFH.mBc = f.AscDFH.dz | 1;
  f.AscDFH.jBc = f.AscDFH.dz | 2;
  f.AscDFH.lBc = f.AscDFH.dz | 3;
  f.AscDFH.OYb = f.AscDFH.dz | 4;
  f.AscDFH.kBc = f.AscDFH.dz | 5;
  f.AscDFH.xFc = f.AscDFH.qF | 1;
  f.AscDFH.oFc = f.AscDFH.qF | 2;
  f.AscDFH.hFc = f.AscDFH.qF | 3;
  f.AscDFH.sFc = f.AscDFH.qF | 4;
  f.AscDFH.mFc = f.AscDFH.qF | 5;
  f.AscDFH.pFc = f.AscDFH.qF | 6;
  f.AscDFH.lFc = f.AscDFH.qF | 7;
  f.AscDFH.nFc = f.AscDFH.qF | 8;
  f.AscDFH.vFc = f.AscDFH.qF | 9;
  f.AscDFH.jFc = f.AscDFH.qF | 10;
  f.AscDFH.iFc = f.AscDFH.qF | 11;
  f.AscDFH.uFc = f.AscDFH.qF | 12;
  f.AscDFH.tFc = f.AscDFH.qF | 13;
  f.AscDFH.wFc =
    f.AscDFH.qF | 14;
  f.AscDFH.qFc = f.AscDFH.qF | 15;
  f.AscDFH.rFc = f.AscDFH.qF | 16;
  f.AscDFH.gFc = f.AscDFH.qF | 17;
  f.AscDFH.fFc = f.AscDFH.qF | 18;
  f.AscDFH.eFc = f.AscDFH.qF | 19;
  f.AscDFH.$Ec = f.AscDFH.qF | 20;
  f.AscDFH.dFc = f.AscDFH.qF | 21;
  f.AscDFH.aFc = f.AscDFH.qF | 22;
  f.AscDFH.yFc = f.AscDFH.qF | 23;
  f.AscDFH.bFc = f.AscDFH.qF | 24;
  f.AscDFH.cFc = f.AscDFH.qF | 25;
  f.AscDFH.kFc = f.AscDFH.qF | 26;
  f.AscDFH.rBd = f.AscDFH.qF | 27;
  f.AscDFH.sBd = f.AscDFH.qF | 28;
  f.AscDFH.tBd = f.AscDFH.qF | 29;
  f.AscDFH.bOf = f.AscDFH.yYc | 1;
  f.AscDFH.Smf = f.AscDFH.DBa | 1;
  f.AscDFH.Y7d =
    f.AscDFH.DBa | 2;
  f.AscDFH.Umf = f.AscDFH.DBa | 3;
  f.AscDFH.Qmf = f.AscDFH.DBa | 4;
  f.AscDFH.Rmf = f.AscDFH.DBa | 5;
  f.AscDFH.X7d = f.AscDFH.DBa | 6;
  f.AscDFH.aOf = f.AscDFH.DBa | 7;
  f.AscDFH.Tmf = f.AscDFH.DBa | 8;
  f.AscDFH.Wmf = f.AscDFH.Ada | 1;
  f.AscDFH.Zmf = f.AscDFH.Ada | 2;
  f.AscDFH.$mf = f.AscDFH.Ada | 3;
  f.AscDFH.Pmf = f.AscDFH.Ada | 4;
  f.AscDFH.Vmf = f.AscDFH.Ada | 5;
  f.AscDFH.Z7d = f.AscDFH.Ada | 6;
  f.AscDFH.Xmf = f.AscDFH.Ada | 7;
  f.AscDFH.anf = f.AscDFH.Ada | 8;
  f.AscDFH.Ymf = f.AscDFH.Ada | 9;
  f.AscDFH.fnf = f.AscDFH.AJb | 1;
  f.AscDFH.cOf = f.AscDFH.AJb | 2;
  f.AscDFH.dOf =
    f.AscDFH.AJb | 3;
  f.AscDFH.gEc = f.AscDFH.OJa | 1;
  f.AscDFH.hEc = f.AscDFH.OJa | 2;
  f.AscDFH.kEc = f.AscDFH.OJa | 3;
  f.AscDFH.lEc = f.AscDFH.OJa | 4;
  f.AscDFH.iEc = f.AscDFH.OJa | 5;
  f.AscDFH.jEc = f.AscDFH.OJa | 6;
  f.AscDFH.sxc = f.AscDFH.CBa | 1;
  f.AscDFH.txc = f.AscDFH.CBa | 2;
  f.AscDFH.qxc = f.AscDFH.CBa | 3;
  f.AscDFH.rxc = f.AscDFH.CBa | 4;
  f.AscDFH.uxc = f.AscDFH.CBa | 5;
  f.AscDFH.vxc = f.AscDFH.CBa | 6;
  f.AscDFH.mYb = f.Asc.gHc | 1;
  f.AscDFH.eBd = f.AscDFH.EBd | 1;
  f.AscDFH.U4d = 1;
  f.AscDFH.mmf = 2;
  f.AscDFH.nmf = 3;
  f.AscDFH.bxc = 4;
  f.AscDFH.ozd = 5;
  f.AscDFH.pzd = 6;
  f.AscDFH.ARc =
    7;
  f.AscDFH.Jlf = 8;
  f.AscDFH.STd = 9;
  f.AscDFH.Klf = 10;
  f.AscDFH.omf = 11;
  f.AscDFH.z5d = 12;
  f.AscDFH.eUd = 13;
  f.AscDFH.YTd = 14;
  f.AscDFH.V4d = 15;
  f.AscDFH.q5d = 16;
  f.AscDFH.tYc = 17;
  f.AscDFH.Tzd = 18;
  f.AscDFH.zzd = 19;
  f.AscDFH.xzd = 20;
  f.AscDFH.fAd = 21;
  f.AscDFH.eAd = 22;
  f.AscDFH.mAd = 23;
  f.AscDFH.nAd = 24;
  f.AscDFH.GAd = 25;
  f.AscDFH.b5d = 26;
  f.AscDFH.r5d = 27;
  f.AscDFH.D5d = 28;
  f.AscDFH.n5d = 29;
  f.AscDFH.O5d = 30;
  f.AscDFH.M5d = 31;
  f.AscDFH.N5d = 32;
  f.AscDFH.C5d = 33;
  f.AscDFH.k5d = 34;
  f.AscDFH.l5d = 35;
  f.AscDFH.v5d = 36;
  f.AscDFH.u5d = 37;
  f.AscDFH.t5d = 38;
  f.AscDFH.y5d =
    39;
  f.AscDFH.x5d = 40;
  f.AscDFH.s5d = 41;
  f.AscDFH.aUd = 42;
  f.AscDFH.w5d = 43;
  f.AscDFH.gxc = 44;
  f.AscDFH.T5d = 45;
  f.AscDFH.S5d = 46;
  f.AscDFH.U5d = 47;
  f.AscDFH.x6d = 48;
  f.AscDFH.z6d = 49;
  f.AscDFH.t6d = 50;
  f.AscDFH.C6d = 51;
  f.AscDFH.H6d = 52;
  f.AscDFH.G6d = 53;
  f.AscDFH.w6d = 54;
  f.AscDFH.F6d = 55;
  f.AscDFH.u6d = 56;
  f.AscDFH.E6d = 57;
  f.AscDFH.D6d = 58;
  f.AscDFH.lUd = 59;
  f.AscDFH.k6d = 60;
  f.AscDFH.l6d = 61;
  f.AscDFH.A5d = 62;
  f.AscDFH.p5d = 63;
  f.AscDFH.d6d = 64;
  f.AscDFH.p6d = 65;
  f.AscDFH.c6d = 66;
  f.AscDFH.I6d = 67;
  f.AscDFH.m6d = 68;
  f.AscDFH.r6d = 69;
  f.AscDFH.o6d = 70;
  f.AscDFH.s6d =
    71;
  f.AscDFH.i6d = 72;
  f.AscDFH.j6d = 73;
  f.AscDFH.e6d = 74;
  f.AscDFH.B6d = 75;
  f.AscDFH.A6d = 76;
  f.AscDFH.v6d = 77;
  f.AscDFH.q6d = 78;
  f.AscDFH.f6d = 79;
  f.AscDFH.Zzd = 80;
  f.AscDFH.Rzd = 81;
  f.AscDFH.h6d = 82;
  f.AscDFH.g6d = 83;
  f.AscDFH.a6d = 84;
  f.AscDFH.b6d = 85;
  f.AscDFH.UTd = 86;
  f.AscDFH.d5d = 87;
  f.AscDFH.c5d = 88;
  f.AscDFH.X5d = 89;
  f.AscDFH.Z5d = 90;
  f.AscDFH.Y5d = 91;
  f.AscDFH.$5d = 92;
  f.AscDFH.e5d = 93;
  f.AscDFH.M6d = 94;
  f.AscDFH.N6d = 95;
  f.AscDFH.K6d = 96;
  f.AscDFH.L6d = 97;
  f.AscDFH.P6d = 98;
  f.AscDFH.O6d = 99;
  f.AscDFH.K5d = 100;
  f.AscDFH.B5d = 101;
  f.AscDFH.J6d = 102;
  f.AscDFH.g5d = 103;
  f.AscDFH.$4d = 104;
  f.AscDFH.a5d = 105;
  f.AscDFH.Z4d = 106;
  f.AscDFH.XTd = 107;
  f.AscDFH.f5d = 108;
  f.AscDFH.Vlf = 109;
  f.AscDFH.Wlf = 110;
  f.AscDFH.Kzd = 111;
  f.AscDFH.X4d = 112;
  f.AscDFH.i5d = 113;
  f.AscDFH.J5d = 114;
  f.AscDFH.cUd = 115;
  f.AscDFH.W4d = 116;
  f.AscDFH.F5d = 117;
  f.AscDFH.h5d = 118;
  f.AscDFH.y6d = 119;
  f.AscDFH.Y4d = 120;
  f.AscDFH.m5d = 121;
  f.AscDFH.VTd = 122;
  f.AscDFH.TTd = 123;
  f.AscDFH.jUd = 124;
  f.AscDFH.iUd = 125;
  f.AscDFH.fUd = 126;
  f.AscDFH.jxc = 127;
  f.AscDFH.gUd = 128;
  f.AscDFH.hUd = 129;
  f.AscDFH.kUd = 130;
  f.AscDFH.Uzd = 131;
  f.AscDFH.vzd =
    132;
  f.AscDFH.IXb = 133;
  f.AscDFH.zAd = 134;
  f.AscDFH.sYc = 135;
  f.AscDFH.cAd = 136;
  f.AscDFH.Fzd = 137;
  f.AscDFH.uYc = 138;
  f.AscDFH.JXb = 139;
  f.AscDFH.kmf = 140;
  f.AscDFH.lmf = 141;
  f.AscDFH.Szd = 142;
  f.AscDFH.jmf = 143;
  f.AscDFH.vAd = 144;
  f.AscDFH.wAd = 145;
  f.AscDFH.xAd = 146;
  f.AscDFH.CAd = 147;
  f.AscDFH.yAd = 148;
  f.AscDFH.G8b = 149;
  f.AscDFH.wzd = 150;
  f.AscDFH.BAd = 151;
  f.AscDFH.fmf = 152;
  f.AscDFH.tAd = 153;
  f.AscDFH.gmf = 154;
  f.AscDFH.Ezd = 155;
  f.AscDFH.hmf = 156;
  f.AscDFH.DAd = 157;
  f.AscDFH.Xzd = 158;
  f.AscDFH.HXb = 159;
  f.AscDFH.bmf = 160;
  f.AscDFH.$lf = 161;
  f.AscDFH.imf =
    162;
  f.AscDFH.Slf = 163;
  f.AscDFH.EAd = 164;
  f.AscDFH.$zd = 165;
  f.AscDFH.FAd = 166;
  f.AscDFH.Azd = 167;
  f.AscDFH.dAd = 168;
  f.AscDFH.Yzd = 169;
  f.AscDFH.AAd = 170;
  f.AscDFH.Jzd = 171;
  f.AscDFH.Bzd = 172;
  f.AscDFH.bAd = 173;
  f.AscDFH.aAd = 174;
  f.AscDFH.pAd = 175;
  f.AscDFH.pxc = 176;
  f.AscDFH.QAd = 177;
  f.AscDFH.OAd = 178;
  f.AscDFH.VAd = 179;
  f.AscDFH.$Ad = 180;
  f.AscDFH.WAd = 181;
  f.AscDFH.XAd = 182;
  f.AscDFH.YAd = 183;
  f.AscDFH.MAd = 184;
  f.AscDFH.Pyb = 185;
  f.AscDFH.ZAd = 186;
  f.AscDFH.NAd = 187;
  f.AscDFH.UAd = 188;
  f.AscDFH.PAd = 189;
  f.AscDFH.RAd = 190;
  f.AscDFH.SAd = 191;
  f.AscDFH.TAd =
    192;
  f.AscDFH.JAd = 193;
  f.AscDFH.oxc = 194;
  f.AscDFH.IAd = 195;
  f.AscDFH.mxc = 196;
  f.AscDFH.oUd = 197;
  f.AscDFH.lxc = 198;
  f.AscDFH.LAd = 199;
  f.AscDFH.bBd = 200;
  f.AscDFH.aBd = 201;
  f.AscDFH.KAd = 202;
  f.AscDFH.Oyb = 203;
  f.AscDFH.pUd = 204;
  f.AscDFH.nxc = 205;
  f.AscDFH.QTd = 206;
  f.AscDFH.qYc = 207;
  f.AscDFH.RTd = 208;
  f.AscDFH.HAd = 209;
  f.AscDFH.y7d = 210;
  f.AscDFH.V6d = 211;
  f.AscDFH.k7d = 212;
  f.AscDFH.U7d = 213;
  f.AscDFH.Q6d = 214;
  f.AscDFH.o7d = 215;
  f.AscDFH.oua = 216;
  f.AscDFH.z7d = 217;
  f.AscDFH.L7d = 218;
  f.AscDFH.N7d = 219;
  f.AscDFH.O7d = 220;
  f.AscDFH.M7d = 221;
  f.AscDFH.wYc =
    222;
  f.AscDFH.A7d = 223;
  f.AscDFH.B7d = 224;
  f.AscDFH.K7d = 225;
  f.AscDFH.P7d = 226;
  f.AscDFH.j7d = 227;
  f.AscDFH.g7d = 228;
  f.AscDFH.Q7d = 229;
  f.AscDFH.p7d = 230;
  f.AscDFH.q7d = 231;
  f.AscDFH.r7d = 232;
  f.AscDFH.m7d = 233;
  f.AscDFH.n7d = 234;
  f.AscDFH.b7d = 235;
  f.AscDFH.a7d = 236;
  f.AscDFH.J7d = 237;
  f.AscDFH.$6d = 239;
  f.AscDFH.Z6d = 240;
  f.AscDFH.w7d = 241;
  f.AscDFH.u7d = 242;
  f.AscDFH.v7d = 243;
  f.AscDFH.x7d = 244;
  f.AscDFH.t7d = 245;
  f.AscDFH.Hmf = 246;
  f.AscDFH.nUd = 247;
  f.AscDFH.U6d = 248;
  f.AscDFH.c7d = 249;
  f.AscDFH.W6d = 250;
  f.AscDFH.R7d = 251;
  f.AscDFH.l7d = 252;
  f.AscDFH.f7d =
    253;
  f.AscDFH.h7d = 254;
  f.AscDFH.d7d = 255;
  f.AscDFH.T6d = 256;
  f.AscDFH.e7d = 257;
  f.AscDFH.ymf = 258;
  f.AscDFH.zmf = 259;
  f.AscDFH.wmf = 260;
  f.AscDFH.Bmf = 261;
  f.AscDFH.Gmf = 262;
  f.AscDFH.Fmf = 263;
  f.AscDFH.Cmf = 264;
  f.AscDFH.Emf = 265;
  f.AscDFH.Amf = 266;
  f.AscDFH.xmf = 267;
  f.AscDFH.F7d = 268;
  f.AscDFH.vmf = 269;
  f.AscDFH.Dmf = 270;
  f.AscDFH.tmf = 271;
  f.AscDFH.umf = 271;
  f.AscDFH.D7d = 271;
  f.AscDFH.E7d = 271;
  f.AscDFH.C7d = 271;
  f.AscDFH.pmf = 271;
  f.AscDFH.X6d = 272;
  f.AscDFH.Y6d = 273;
  f.AscDFH.R6d = 274;
  f.AscDFH.S6d = 275;
  f.AscDFH.H7d = 276;
  f.AscDFH.G7d = 277;
  f.AscDFH.I7d =
    278;
  f.AscDFH.s7d = 279;
  f.AscDFH.S7d = 280;
  f.AscDFH.T7d = 281;
  f.AscDFH.vYc = 282;
  f.AscDFH.qmf = 283;
  f.AscDFH.i7d = 284;
  f.AscDFH.Imf = 285;
  f.AscDFH.Jmf = 286;
  f.AscDFH.rmf = 287;
  f.AscDFH.smf = 288;
  f.AscDFH.Qzd = 289;
  f.AscDFH.e$f = 290;
  f.AscDFH.Czd = 291;
  f.AscDFH.lAd = 292;
  f.AscDFH.WTd = 293;
  f.AscDFH.iAd = 294;
  f.AscDFH.qzd = 295;
  f.AscDFH.gAd = 296;
  f.AscDFH.rzd = 297;
  f.AscDFH.hAd = 298;
  f.AscDFH.dxc = 299;
  f.AscDFH.cmf = 300;
  f.AscDFH.rYc = 301;
  f.AscDFH.a$f = 302;
  f.AscDFH.qAd = 303;
  f.AscDFH.ixc = 304;
  f.AscDFH.Mlf = 305;
  f.AscDFH.uAd = 306;
  f.AscDFH.Gzd = 307;
  f.AscDFH.sAd =
    308;
  f.AscDFH.Xlf = 309;
  f.AscDFH.BRc = 310;
  f.AscDFH.Tlf = 311;
  f.AscDFH.amf = 312;
  f.AscDFH.lGb = 313;
  f.AscDFH.lfb = 314;
  f.AscDFH.Dzd = 315;
  f.AscDFH.yzd = 316;
  f.AscDFH.rAd = 317;
  f.AscDFH.jAd = 318;
  f.AscDFH.bUd = 319;
  f.AscDFH.$Mf = 320;
  f.AscDFH.Llf = 321;
  f.AscDFH.Rlf = 322;
  f.AscDFH.H5d = 323;
  f.AscDFH.I5d = 324;
  f.AscDFH.ZTd = 325;
  f.AscDFH.c$f = 326;
  f.AscDFH.cxc = 327;
  f.AscDFH.tzd = 328;
  f.AscDFH.Izd = 329;
  f.AscDFH.Nzd = 330;
  f.AscDFH.exc = 331;
  f.AscDFH.oAd = 332;
  f.AscDFH.G5d = 333;
  f.AscDFH.CRc = 334;
  f.AscDFH.mUd = 335;
  f.AscDFH.P5d = 336;
  f.AscDFH.$Td = 337;
  f.AscDFH.kAd =
    338;
  f.AscDFH.Pzd = 339;
  f.AscDFH.hxc = 340;
  f.AscDFH.Mzd = 341;
  f.AscDFH.o5d = 342;
  f.AscDFH.j5d = 343;
  f.AscDFH.Lzd = 344;
  f.AscDFH.Ylf = 345;
  f.AscDFH.V5d = 346;
  f.AscDFH.W5d = 347;
  f.AscDFH.kxc = 348;
  f.AscDFH.szd = 349;
  f.AscDFH.Hzd = 350;
  f.AscDFH.Ozd = 350;
  f.AscDFH.aNf = 351;
  f.AscDFH.Ulf = 352;
  f.AscDFH.d$f = 353;
  f.AscDFH.Z9f = 354;
  f.AscDFH.n6d = 355;
  f.AscDFH.L5d = 356;
  f.AscDFH.Nlf = 357;
  f.AscDFH.R5d = 358;
  f.AscDFH.Qlf = 359;
  f.AscDFH.emf = 360;
  f.AscDFH.E5d = 361;
  f.AscDFH.Plf = 362;
  f.AscDFH.dUd = 363;
  f.AscDFH.Q5d = 364;
  f.AscDFH.Olf = 365;
  f.AscDFH.dmf = 366;
  f.AscDFH.$9f =
    367;
  f.AscDFH.b$f = 368;
  f.AscDFH.fxc = 369;
  f.AscDFH.uzd = 370;
  f.AscDFH.Zlf = 371;
  f.AscDFH.Vzd = 372;
  f.AscDFH.Wzd = 373;
  f.AscDFH.Ca = {};
  f.AscDFH.Ca[f.AscDFH.xBd] = Ia;
  f.AscDFH.Ac = {};
  Ia.prototype.ea = f.AscDFH.xBd;
  Ia.prototype.Ul = function () {
    this.Na && this.Na.Ul && this.Na.Ul(this);
  };
  Ia.prototype.oh = function () {
    this.Na && this.Na.oh && this.Na.oh(this);
  };
  Ia.prototype.se = function () {
  };
  Ia.prototype.ge = function () {
  };
  Ia.prototype.nh = function () {
    this.oh();
  };
  Ia.prototype.xT = function () {
    this.Na && this.Na.hf && this.Na.hf(this);
  };
  Ia.prototype.WWa =
    function () {
      return !1;
    };
  Ia.prototype.rn = function () {
    return null;
  };
  Ia.prototype.Dc = function () {
    return !0;
  };
  Ia.prototype.VOc = function () {
    return !1;
  };
  Ia.prototype.aid = function (e) {
    this.qlc = e;
  };
  Ia.prototype.PCa = function () {
    return !1;
  };
  Ia.prototype.taa = function () {
    return !0;
  };
  f.AscDFH.Km = Ia;
  cb.prototype = Object.create(Ia.prototype);
  cb.prototype.constructor = cb;
  cb.prototype.WWa = function () {
    return !0;
  };
  cb.prototype.KHa = function () {
    return this.ia;
  };
  cb.prototype.Sa = function () {
    var e = new this.constructor(this.Na, this.Qa, this.wd, this.ia);
    e.jA = this.jA;
    for (var f = 0, y = this.Vm.length; f < y; ++f) e.Vm[f] = this.Vm[f];
    return e;
  };
  cb.prototype.w6b = function () {
    return this.wd.length;
  };
  cb.prototype.se = function (f) {
    var y = this.jA, Ta = this.wd.length, Va = f.ua;
    f.Wm(4);
    for (var Pa = Ta, Ia = 0; Ia < Ta; ++Ia) !0 === y ? !1 === this.Vm[Ia] ? Pa-- : (f.cb(this.Vm[Ia]), this.yM(f, this.wd[Ia])) : (f.cb(this.Qa), this.yM(f, this.wd[Ia]));
    y = f.ua;
    f.kk(Va);
    f.cb(Pa);
    f.kk(y);
    Va = 0;
    e !== this.va && (Va |= 1, !0 === this.va && (Va |= 2));
    f.cb(Va);
  };
  cb.prototype.ge = function (e) {
    this.jA = !0;
    this.wd = [];
    this.Vm = [];
    for (var f =
      e.jb(), y = 0; y < f; ++y) this.Vm[y] = e.jb(), this.wd[y] = this.XN(e);
    e = e.jb();
    e & 1 && (this.va = e & 2 ? !0 : !1);
  };
  cb.prototype.yM = function () {
  };
  cb.prototype.XN = function () {
    return null;
  };
  cb.prototype.qOc = function () {
    var e = [];
    if (this.jA) for (var f = 0, y = this.wd.length; f < y; ++f) e.push({
      eba: this.wd[f],
      Qa: this.Vm[f],
      ia: this.ia
    }); else {
      var Ta = this.Qa;
      f = 0;
      for (y = this.wd.length; f < y; ++f) e.push({ eba: this.wd[f], Qa: Ta + f, ia: this.ia });
    }
    return e;
  };
  cb.prototype.oOc = function (e) {
    this.jA = !0;
    this.Qa = 0;
    this.wd = [];
    this.Vm = [];
    for (var f = 0, y = e.length; f <
    y; ++f) this.Vm[f] = e[f].Qa, this.wd[f] = e[f].eba;
  };
  cb.prototype.CS = function (e) {
    return this.Na !== e.Na || this.ea !== e.ea ? !1 : !0;
  };
  cb.prototype.MS = function (e) {
    e = new e;
    e.Na = this.Na;
    e.Qa = this.Qa;
    e.wd = this.wd;
    e.ia = !this.ia;
    e.jA = this.jA;
    e.Vm = [];
    for (var f = 0, y = this.Vm.length; f < y; ++f) e.Vm[f] = this.Vm[f];
    return e;
  };
  cb.prototype.Dc = function () {
    return !0;
  };
  cb.prototype.sOd = function () {
    var e = null;
    if (this.jA) {
      for (var f = 0, y = this.Vm.length; f < y; ++f) if (null === e || e > this.Vm[f]) e = this.Vm[f];
      null === e && (e = 0);
    } else e = this.Qa;
    return e;
  };
  f.AscDFH.Fv =
    cb;
  Xa.prototype = Object.create(Ia.prototype);
  Xa.prototype.constructor = Xa;
  Xa.prototype.Ul = function () {
    this.Oc(this.tb);
  };
  Xa.prototype.oh = function () {
    this.Oc(this.Ha);
  };
  Xa.prototype.Oc = function () {
  };
  Xa.prototype.rn = function () {
    return new this.constructor(this.Na, this.Ha, this.tb, this.va);
  };
  Xa.prototype.Dc = function (e) {
    return e.Na === this.Na && e.ea === this.ea ? (this.Ha = e.Ha, !1) : !0;
  };
  f.AscDFH.Pg = Xa;
  ib.prototype = Object.create(Xa.prototype);
  ib.prototype.constructor = ib;
  ib.prototype.se = function (f) {
    var y = 0;
    !1 !== this.va &&
    (y |= 1);
    e === this.Ha ? y |= 2 : !0 === this.Ha && (y |= 4);
    e === this.tb ? y |= 8 : !0 === this.tb && (y |= 16);
    f.cb(y);
  };
  ib.prototype.ge = function (f) {
    f = f.jb();
    this.va = f & 1 ? !0 : !1;
    this.Ha = f & 2 ? e : f & 4 ? !0 : !1;
    this.tb = f & 8 ? e : f & 16 ? !0 : !1;
  };
  f.AscDFH.tk = ib;
  y.prototype = Object.create(Xa.prototype);
  y.prototype.constructor = y;
  y.prototype.se = function (f) {
    var y = 0;
    !1 !== this.va && (y |= 1);
    e === this.Ha && (y |= 2);
    e === this.tb && (y |= 4);
    f.cb(y);
    e !== this.Ha && f.Ue(this.Ha);
    e !== this.tb && f.Ue(this.tb);
  };
  y.prototype.ge = function (f) {
    var y = f.jb();
    this.va = y & 1 ? !0 : !1;
    this.Ha =
      y & 2 ? e : f.mg();
    this.tb = y & 4 ? e : f.mg();
  };
  f.AscDFH.VB = y;
  kb.prototype = Object.create(Xa.prototype);
  kb.prototype.constructor = kb;
  kb.prototype.se = function (f) {
    var y = 0;
    !1 !== this.va && (y |= 1);
    e === this.Ha && (y |= 2);
    e === this.tb && (y |= 4);
    f.cb(y);
    e !== this.Ha && this.Ha.Bc && this.Ha.Bc(f);
    e !== this.tb && this.tb.Bc && this.tb.Bc(f);
  };
  kb.prototype.ge = function (f) {
    var y = f.jb();
    this.va = y & 1 ? !0 : !1;
    y & 2 ? this.Ha = !0 === this.Eda() ? this.el() : e : (this.Ha = this.el()) && this.Ha.zc && this.Ha.zc(f);
    y & 4 ? this.tb = !0 === this.Eda() ? this.el() : e : (this.tb = this.el()) &&
      this.tb.zc && this.tb.zc(f);
  };
  kb.prototype.el = function () {
    return null;
  };
  kb.prototype.Eda = function () {
    return !1;
  };
  f.AscDFH.Si = kb;
  rb.prototype = Object.create(Xa.prototype);
  rb.prototype.constructor = rb;
  rb.prototype.se = function (f) {
    var y = 0;
    !1 !== this.va && (y |= 1);
    e === this.Ha && (y |= 2);
    e === this.tb && (y |= 4);
    f.cb(y);
    e !== this.Ha && f.cb(this.Ha);
    e !== this.tb && f.cb(this.tb);
  };
  rb.prototype.ge = function (f) {
    var y = f.jb();
    this.va = y & 1 ? !0 : !1;
    this.Ha = y & 2 ? e : f.jb();
    this.tb = y & 4 ? e : f.jb();
  };
  f.AscDFH.xj = rb;
  mb.prototype = Object.create(Xa.prototype);
  mb.prototype.constructor = mb;
  mb.prototype.se = function (f) {
    var y = 0;
    !1 !== this.va && (y |= 1);
    e === this.Ha && (y |= 2);
    e === this.tb && (y |= 4);
    f.cb(y);
    e !== this.Ha && f.Rb(this.Ha);
    e !== this.tb && f.Rb(this.tb);
  };
  mb.prototype.ge = function (f) {
    var y = f.jb();
    this.va = y & 1 ? !0 : !1;
    this.Ha = y & 2 ? e : f.cc();
    this.tb = y & 4 ? e : f.cc();
  };
  f.AscDFH.hE = mb;
  Ta.prototype = Object.create(Xa.prototype);
  Ta.prototype.constructor = Ta;
  Ta.prototype.se = function (f) {
    var y = 0;
    !1 !== this.va && (y |= 1);
    e === this.Ha && (y |= 2);
    e === this.tb && (y |= 4);
    f.cb(y);
    e !== this.Ha && f.ra(this.Ha);
    e !== this.tb && f.ra(this.tb);
  };
  Ta.prototype.ge = function (f) {
    var y = f.jb();
    this.va = y & 1 ? !0 : !1;
    this.Ha = y & 2 ? e : f.mD();
    this.tb = y & 4 ? e : f.mD();
  };
  f.AscDFH.n1c = Ta;
  yb.prototype = Object.create(Xa.prototype);
  yb.prototype.constructor = yb;
  yb.prototype.se = function (e) {
    e.cb(this.Ha);
    e.cb(this.tb);
  };
  yb.prototype.ge = function (e) {
    this.Ha = e.jb();
    this.tb = e.jb();
  };
  f.AscDFH.fja = yb;
  Va.prototype = Object.create(Xa.prototype);
  Va.prototype.constructor = Va;
  Va.prototype.se = function (e) {
    e.Bb(this.Ha);
    e.Bb(this.tb);
  };
  Va.prototype.ge = function (e) {
    this.Ha =
      e.pb();
    this.tb = e.pb();
  };
  f.AscDFH.nV = Va;
  zb.prototype = Object.create(kb.prototype);
  zb.prototype.constructor = zb;
  zb.prototype.Eda = function () {
    return !0;
  };
  f.AscDFH.ax = zb;
  Ac.prototype = Object.create(Xa.prototype);
  Ac.prototype.constructor = Ac;
  Ac.prototype.se = function (e) {
    e.Rb(this.Ha);
    e.Rb(this.tb);
  };
  Ac.prototype.ge = function (e) {
    this.Ha = e.cc();
    this.tb = e.cc();
  };
  f.AscDFH.e9a = Ac;
  ec.prototype = Object.create(Xa.prototype);
  ec.prototype.constructor = ec;
  ec.prototype.se = function (e) {
    e.ra(this.Ha);
    e.ra(this.tb);
  };
  ec.prototype.ge =
    function (e) {
      this.Ha = e.mD();
      this.tb = e.mD();
    };
  f.AscDFH.Zua = ec;
  vc.prototype = Object.create(Xa.prototype);
  vc.prototype.constructor = vc;
  vc.prototype.se = function (e) {
    e.Ue(this.Ha);
    e.Ue(this.tb);
  };
  vc.prototype.ge = function (e) {
    this.Ha = e.mg();
    this.tb = e.mg();
  };
  f.AscDFH.pKa = vc;
})(window);
'use strict';
(function (f) {
  function e() {
    this.n2a = null;
    this.wG = !1;
    this.Vf = {};
    this.Ia = null;
    this.h8 = !1;
  }

  e.prototype.te = function () {
    this.n2a = {};
    this.wG = !1;
    this.Vf = {};
    this.Ia = AscCommon.eg.zg();
    this.ia(this, this.Ia);
    this.Euf();
    this.h8 = !0;
  };
  e.prototype.ia = function (e, f) {
    !1 === this.wG && (e.Ia = f, this.n2a[f] = e, AscCommon.History.ia(new AscCommon.q1c(this, f, e)));
  };
  e.prototype.Kv = function () {
    this.wG = !0;
  };
  e.prototype.St = function () {
    this.wG = !1;
  };
  e.prototype.cg = function (e) {
    return '' === e ? null : this.n2a[e] ? this.n2a[e] : null;
  };
  e.prototype.rb = function () {
    return this.Ia;
  };
  e.prototype.yg = function () {
    this.n2a = {};
    this.wG = !1;
    this.Ia = AscCommon.eg.zg();
    this.ia(this, this.Ia);
  };
  e.prototype.Euf = function () {
    this.Vf[AscDFH.Jy] = AscCommonWord.Ua;
    this.Vf[AscDFH.tF] = AscCommonWord.tN;
    this.Vf[AscDFH.N1a] = AscCommonWord.wue;
    this.Vf[AscDFH.lS] = AscCommonWord.W3;
    this.Vf[AscDFH.sF] = AscCommonWord.a$b;
    this.Vf[AscDFH.Kla] = AscCommonWord.Vee;
    this.Vf[AscDFH.n2] = AscCommonWord.See;
    this.Vf[AscDFH.e1b] = AscCommonWord.Jdc;
    this.Vf[AscDFH.HBd] = AscCommonWord.Mdc;
    this.Vf[AscDFH.K1a] = AscCommonWord.ide;
    this.Vf[AscDFH.pob] =
      AscCommon.Ssa;
    this.Vf[AscDFH.rF] = AscCommonWord.Qee;
    this.Vf[AscDFH.VUd] = AscCommon.P7;
    this.Vf[AscDFH.pv] = AscCommonWord.fwa;
    this.Vf[AscDFH.gC] = AscCommonWord.Jee;
    this.Vf[AscDFH.Ggb] = AscCommonWord.BXa;
    this.Vf[AscDFH.GBd] = AscCommonWord.Vde;
    this.Vf[AscDFH.Egb] = AscFormat.j5c;
    this.Vf[AscDFH.CFa] = AscFormat.G1c;
    this.Vf[AscDFH.Mgb] = AscFormat.Ate;
    this.Vf[AscDFH.O1a] = AscFormat.Vsb;
    this.Vf[AscDFH.Ogb] = AscFormat.s9;
    this.Vf[AscDFH.u1b] = AscFormat.jIb;
    this.Vf[AscDFH.hHc] = AscFormat.jp;
    this.Vf[AscDFH.q_] = AscFormat.$ua;
    this.Vf[AscDFH.Js] = AscFormat.O0;
    this.Vf[AscDFH.Sxa] = AscFormat.Kea;
    this.Vf[AscDFH.xra] = AscFormat.oV;
    this.Vf[AscDFH.nAb] = AscFormat.nLb;
    this.Vf[AscDFH.Q1a] = AscFormat.J1c;
    this.Vf[AscDFH.bY] = AscFormat.pP;
    this.Vf[AscDFH.oAb] = AscFormat.xX;
    this.Vf[AscDFH.Tga] = AscFormat.eva;
    this.Vf[AscDFH.m1b] = AscFormat.DM;
    this.Vf[AscDFH.S1a] = AscFormat.eI;
    this.Vf[AscDFH.JPa] = AscFormat.s1c;
    this.Vf[AscDFH.GI] = AscFormat.bva;
    this.Vf[AscDFH.j2] = AscFormat.iE;
    this.Vf[AscDFH.uAb] = AscFormat.r9a;
    this.Vf[AscDFH.Qv] = AscFormat.XUa;
    this.Vf[AscDFH.ura] =
      AscFormat.Cdc;
    this.Vf[AscDFH.RA] = AscFormat.Npb;
    this.Vf[AscDFH.Ila] = AscFormat.Pdc;
    this.Vf[AscDFH.Bu] = AscFormat.$Ua;
    this.Vf[AscDFH.yra] = AscFormat.Udc;
    this.Vf[AscDFH.EE] = AscFormat.l9a;
    this.Vf[AscDFH.k2] = AscFormat.n9a;
    this.Vf[AscDFH.l2] = AscFormat.Spb;
    this.Vf[AscDFH.a1b] = AscFormat.kLb;
    this.Vf[AscDFH.kS] = AscFormat.c9a;
    this.Vf[AscDFH.AQ] = AscFormat.dVa;
    this.Vf[AscDFH.DFa] = AscFormat.P0;
    this.Vf[AscDFH.Rxa] = AscFormat.g9a;
    this.Vf[AscDFH.i1b] = AscFormat.Odc;
    this.Vf[AscDFH.pAb] = AscFormat.ZUa;
    this.Vf[AscDFH.qAb] =
      AscFormat.cva;
    this.Vf[AscDFH.n1b] = AscFormat.YBa;
    this.Vf[AscDFH.Vga] = AscFormat.q9a;
    this.Vf[AscDFH.w1b] = AscFormat.hja;
    this.Vf[AscDFH.s1b] = AscFormat.fva;
    this.Vf[AscDFH.q1b] = AscFormat.o9a;
    this.Vf[AscDFH.r1b] = AscFormat.tKa;
    this.Vf[AscDFH.T1a] = AscFormat.fVa;
    this.Vf[AscDFH.k1b] = AscFormat.F1c;
    this.Vf[AscDFH.j1b] = AscFormat.E1c;
    this.Vf[AscDFH.t1b] = AscFormat.Pee;
    this.Vf[AscDFH.x1b] = AscFormat.gO;
    this.Vf[AscDFH.aY] = AscFormat.jLb;
    this.Vf[AscDFH.M1a] = AscFormat.mV;
    this.Vf[AscDFH.P1a] = AscFormat.Qpb;
    this.Vf[AscDFH.zra] =
      AscFormat.N1c;
    this.Vf[AscDFH.e6] = AscFormat.Kpb;
    this.Vf[AscDFH.zQ] = AscFormat.XBa;
    this.Vf[AscDFH.h6] = AscFormat.aVa;
    this.Vf[AscDFH.GFa] = AscFormat.qLb;
    this.Vf[AscDFH.f6] = AscFormat.j1c;
    this.Vf[AscDFH.g1b] = AscFormat.Qde;
    this.Vf[AscDFH.p1b] = AscFormat.K1c;
    this.Vf[AscDFH.R1a] = AscFormat.L1c;
    this.Vf[AscDFH.lAb] = AscFormat.ava;
    this.Vf[AscDFH.NPa] = AscFormat.uKa;
    this.Vf[AscDFH.d1b] = AscFormat.u8;
    this.Vf[AscDFH.Ngb] = AscFormat.P1c;
    this.Vf[AscDFH.rca] = AscFormat.oA;
    this.Vf[AscDFH.FFa] = AscFormat.Dg;
    this.Vf[AscDFH.dHc] =
      AscFormat.qHb;
    this.Vf[AscDFH.cHc] = AscFormat.N4a;
    this.Vf[AscDFH.h1b] = AscFormat.x6c;
    this.Vf[AscDFH.Hgb] = AscFormat.ake;
    this.Vf[AscDFH.mAb] = AscFormat.bke;
    this.Vf[AscDFH.Igb] = AscFormat.Yje;
    this.Vf[AscDFH.v1b] = AscFormat.Rkd;
    this.Vf[AscDFH.Kgb] = AscFormat.xUc;
    this.Vf[AscDFH.c1b] = AscFormat.Z9b;
    this.Vf[AscDFH.b1b] = AscFormat.xmb;
    this.Vf[AscDFH.sAb] = AscFormat.Tdc;
    this.Vf[AscDFH.wra] = AscFormat.Ndc;
    this.Vf[AscDFH.LPa] = AscFormat.Qdc;
    this.Vf[AscDFH.Sga] = AscFormat.Rdc;
    this.Vf[AscDFH.ns] = AscFormat.fv;
    this.Vf[AscDFH.Fgb] =
      AscFormat.u1c;
    this.Vf[AscDFH.tw] = AscFormat.v8;
    this.Vf[AscDFH.vx] = AscFormat.w8;
    this.Vf[AscDFH.vra] = AscFormat.dLa;
    this.Vf[AscDFH.MPa] = AscFormat.h5a;
    this.Vf[AscDFH.kUa] = AscFormat.a3;
    this.Vf[AscDFH.fC] = AscFormat.w4;
    this.Vf[AscDFH.Rv] = AscFormat.lT;
    this.Vf[AscDFH.qob] = AscCommonWord.cEf;
    this.Vf[AscDFH.QA] = AscFormat.rKa;
    this.Vf[AscDFH.BQ] = AscFormat.Rpb;
    this.Vf[AscDFH.uoa] = AscFormat.L$;
    this.Vf[AscDFH.MO] = AscFormat.oLb;
    this.Vf[AscDFH.mX] = AscFormat.lLb;
    this.Vf[AscDFH.FBd] = AscFormat.W6;
    this.Vf[AscDFH.Hq] = AscCommonWord.Ng;
    this.Vf[AscDFH.JBd] = AscCommonWord.oee;
    this.Vf[AscDFH.RBd] = AscCommonWord.jde;
    this.Vf[AscDFH.SBd] = AscCommonWord.ude;
    this.Vf[AscDFH.UBd] = AscCommonWord.zde;
    this.Vf[AscDFH.TBd] = AscCommonWord.yde;
    this.Vf[AscDFH.XBd] = AscCommonWord.Jde;
    this.Vf[AscDFH.YBd] = AscCommonWord.Pde;
    this.Vf[AscDFH.ZBd] = AscCommonWord.Wde;
    this.Vf[AscDFH.bCd] = AscCommonWord.pee;
    this.Vf[AscDFH.$Bd] = AscCommonWord.aee;
    this.Vf[AscDFH.aCd] = AscCommonWord.lee;
    this.Vf[AscDFH.cCd] = AscCommonWord.qee;
    this.Vf[AscDFH.dCd] = AscCommonWord.uee;
    this.Vf[AscDFH.eCd] =
      AscCommonWord.Bee;
    this.Vf[AscDFH.fCd] = AscCommonWord.Eee;
    this.Vf[AscDFH.WBd] = AscCommonWord.Ide;
    this.Vf[AscDFH.VBd] = AscCommonWord.Hde;
    this.Vf[AscDFH.CBd] = AscCommonWord.Lpb;
    this.Vf[AscDFH.IBd] = AscCommonWord.jHb;
    this.Vf[AscDFH.WUd] = AscCommonWord.CParagraphBookmark;
    this.Vf[AscDFH.l1b] = AscCommonWord.vee;
    this.Vf[AscDFH.rAb] = AscCommonWord.O6a;
    this.Vf[AscDFH.OJa] = AscFormat.k9a;
    this.Vf[AscDFH.CBa] = AscFormat.xdc;
    this.Vf[AscDFH.KBd] = AscCommon.Aee;
    this.Vf[AscDFH.Vnf] = AscCommon.Hee;
    f.AscCommonSlide && (this.Vf[AscDFH.mS] =
      AscCommonSlide.Slide, this.Vf[AscDFH.qca] = AscCommonSlide.SlideLayout, this.Vf[AscDFH.Ara] = AscCommonSlide.MasterSlide, this.Vf[AscDFH.J8b] = AscCommonSlide.EZf, this.Vf[AscDFH.LRc] = AscCommonSlide.ned, this.Vf[AscDFH.DBa] = AscCommonSlide.BYd, this.Vf[AscDFH.Ada] = AscCommonSlide.EEb, this.Vf[AscDFH.AJb] = AscCommonSlide.LTf);
    this.Vf[AscDFH.Uga] = AscFormat.X1c;
    this.Vf[AscDFH.dz] = AscFormat.F3;
    f.AscCommonExcel && (this.Vf[AscDFH.qF] = AscCommonExcel.pLd, this.Vf[AscDFH.yYc] = Asc.bEf);
    this.Vf[AscDFH.gHc] = AscCommon.v1c;
  };
  e.prototype.Cle =
    function (e) {
      return this.Vf[e] ? new this.Vf[e] : null;
    };
  e.prototype.hf = function () {
  };
  f.AscCommon.Fg = new e;
  f.AscCommon.EYd = e;
})(window);
'use strict';
(function (f) {
  function e(e, f, y) {
    AscDFH.Km.call(this, e);
    this.Ia = f;
    this.Hjc = y;
  }

  function Ia(e, f, y, Ia, cb, mb, Ta, yb, Va, zb) {
    AscDFH.Km.call(this, e);
    this.QMb = f;
    this.RMb = y;
    this.iTa = Ia;
    this.jad = cb;
    this.Qdd = mb;
    this.Ojd = Ta;
    this.Cad = yb;
    this.ukd = Va;
    this.Ifc = zb;
    this.Nld = '0.0.0.0.@@Rev';
  }

  function cb(e, f) {
    AscDFH.Km.call(this, e);
    this.S_ = f ? f : '';
  }

  e.prototype = Object.create(AscDFH.Km.prototype);
  e.prototype.constructor = e;
  e.prototype.ea = AscDFH.O0b;
  e.prototype.Ul = function () {
  };
  e.prototype.oh = function () {
  };
  e.prototype.se =
    function (e) {
      e.Rb(this.Ia);
      this.Hjc.Vg(e);
    };
  e.prototype.ge = function (e) {
    this.Ia = e.cc();
    this.Hjc = this.kvf(e);
  };
  e.prototype.nh = function () {
    this.Na.n2a[this.Ia] = this.Hjc;
  };
  e.prototype.xT = function () {
  };
  e.prototype.kvf = function (e) {
    var f = this.Na, y = e.jb();
    f.Kv();
    y = f.Cle(y);
    null !== y && y.eh(e);
    f.St();
    return y;
  };
  e.prototype.rn = function () {
    return null;
  };
  f.AscCommon.q1c = e;
  Ia.prototype = Object.create(AscDFH.Km.prototype);
  Ia.prototype.constructor = Ia;
  Ia.prototype.ea = AscDFH.dgb;
  Ia.prototype.Ul = function () {
  };
  Ia.prototype.oh = function () {
  };
  Ia.prototype.se = function (e) {
    e.cb(this.QMb);
    e.cb(this.RMb);
    e.cb(this.iTa);
    e.cb(this.jad);
    e.cb(this.Qdd);
    e.cb(this.Ojd);
    e.cb(this.Cad);
    e.cb(this.ukd);
    e.cb(null === this.Ifc ? -10 : this.Ifc);
    e.Rb(this.Nld);
  };
  Ia.prototype.ge = function (e) {
    this.QMb = e.jb();
    this.RMb = e.jb();
    this.iTa = e.jb();
    this.jad = e.jb();
    this.Qdd = e.jb();
    this.Ojd = e.jb();
    this.Cad = e.jb();
    this.ukd = e.jb();
    this.Ifc = e.jb();
    this.Nld = e.cc();
  };
  Ia.prototype.nh = function () {
  };
  Ia.prototype.xT = function () {
  };
  Ia.prototype.rn = function () {
    return null;
  };
  f.AscCommon.DNd =
    Ia;
  cb.prototype = Object.create(AscDFH.Km.prototype);
  cb.prototype.constructor = cb;
  cb.prototype.ea = AscDFH.iYb;
  cb.prototype.Ul = function () {
  };
  cb.prototype.oh = function () {
  };
  cb.prototype.se = function (e) {
    e.Rb(this.S_);
  };
  cb.prototype.ge = function (e) {
    this.S_ = e.cc();
  };
  cb.prototype.nh = function () {
    var e = this.S_;
    if (editor && editor.Fa && editor.Fa.Wa) {
      var Ia = editor.Fa.Wa;
      if (Ia instanceof AscCommonWord.Amb) {
        var y = Ia.ec.R8f(e), cb = Ia.$0();
        AscFormat.ej(function () {
          var e = new AscCommonWord.fwa;
          e.aa.splice(0, 0, y);
          cb.aa.splice(0, 0,
            e);
          Ia.ec.uIb(y);
        }, this, []);
      } else if (Ia instanceof AscCommonSlide.CPresentation && Ia.qe[0]) {
        var rb = Ia.qe[0].um.Buc(e);
        rb.fa.nb.Wj = (Ia.od - rb.fa.nb.eb) / 2;
        rb.fa.nb.ik = (Ia.Tc - rb.fa.nb.fb) / 2;
        rb.parent = Ia.qe[0];
        Ia.qe[0].Rf.Rc.push(rb);
      }
    } else if (rb = f.Asc.editor.Yn.Tm[0]) {
      var mb = (new AscFormat.ec).G_a(AscCommon.DP.aSa);
      e = AscFormat.TH.prototype.Buc(e);
      mb.ext.cn = e.fa.nb.eb;
      mb.ext.dn = e.fa.nb.fb;
      mb.Lc = e;
      rb.Qg.push(mb);
    }
  };
  cb.prototype.xT = function () {
  };
  cb.prototype.rn = function () {
    return null;
  };
  f.AscCommon.Bde = cb;
})(window);
AscDFH.Ca[AscDFH.O0b] = AscCommon.q1c;
AscDFH.Ca[AscDFH.dgb] = AscCommon.DNd;
AscDFH.Ca[AscDFH.iYb] = AscCommon.Bde;
AscDFH.Ac[AscDFH.O0b] = [AscDFH.O0b];
AscDFH.Ac[AscDFH.Nnf] = [AscDFH.Nnf];
AscDFH.Ac[AscDFH.dgb] = [AscDFH.dgb];
AscDFH.Ac[AscDFH.iYb] = [AscDFH.iYb];
'use strict';
(function (f) {
  function e(e, f) {
    this.plb = e;
    this.EYc = !!f;
    this.qEa = null;
    this.aPf = this.mSd = !1;
    this.G9 = this.qSc = this.pSc = this.z3d = null;
  }

  function Ia(e) {
    for (var f = [], y, Ta = e.encodings, Ia = 0; Ia < Ta.length; Ia++) y = new ib, y.te(Ta[Ia]), f.push(y);
    this.fcf = f;
    this.dzf = new cb(e.codepage, e.delimiter);
    this.data = e.data;
  }

  function cb(e, f, y) {
    this.Wdb = e;
    this.V_a = f;
    this.Zvd = y;
  }

  function Xa(e) {
    this.password = e;
  }

  function ib() {
    this.nIc = this.text = this.Wdb = this.cuc = null;
  }

  function y(e) {
    this.$vd = e;
  }

  function kb(e) {
    this.ylf = e;
    this.axd = [];
  }

  function rb(e) {
    this.name =
      e.name;
  }

  e.prototype.H8e = function (e) {
    this.plb = e;
  };
  e.prototype.V8e = function (e) {
    this.EYc = e;
  };
  e.prototype.UZa = function (e) {
    this.qEa = e;
  };
  e.prototype.r8e = function (e) {
    this.mSd = e;
  };
  Ia.prototype.z0e = function () {
    return this.fcf;
  };
  Ia.prototype.d4e = function () {
    return this.dzf;
  };
  Ia.prototype.sRd = function () {
    return this.data;
  };
  cb.prototype.I7b = function () {
    return this.V_a;
  };
  cb.prototype.x8e = function (e) {
    this.V_a = e;
  };
  cb.prototype.zFb = function () {
    return this.Zvd;
  };
  cb.prototype.y8e = function (e) {
    this.Zvd = e;
  };
  cb.prototype.HTa = function () {
    return this.Wdb;
  };
  cb.prototype.tsc = function (e) {
    this.Wdb = e;
  };
  Xa.prototype.cwb = function () {
    return this.password;
  };
  Xa.prototype.v9e = function (e) {
    this.password = e;
  };
  ib.prototype.te = function (e) {
    this.cuc = e.name;
    this.Wdb = e.codepage;
    this.text = e.text;
    this.nIc = e.lcid;
  };
  ib.prototype.y0e = function () {
    return this.cuc;
  };
  ib.prototype.h8e = function (e) {
    this.cuc = e;
  };
  ib.prototype.HTa = function () {
    return this.Wdb;
  };
  ib.prototype.tsc = function (e) {
    this.Wdb = e;
  };
  ib.prototype.Rka = function () {
    return this.text;
  };
  ib.prototype.xnb = function (e) {
    this.text = e;
  };
  ib.prototype.K2e =
    function () {
      return this.nIc;
    };
  ib.prototype.a9e = function (e) {
    this.nIc = e;
  };
  y.prototype.h1e = function () {
    return this.$vd;
  };
  y.prototype.z8e = function (e) {
    this.$vd = e;
  };
  kb.prototype.S1e = function () {
    return this.ylf;
  };
  kb.prototype.J1e = function () {
    return this.axd;
  };
  kb.prototype.N1d = function (e) {
    return this.axd.push(e);
  };
  rb.prototype.oC = function () {
    return this.name;
  };
  rb.prototype.b3e = function () {
    return AscCommonExcel.Gwb ? AscCommonExcel.Gwb[this.name] : this.name;
  };
  f.Asc = f.Asc || {};
  f.AscCommon = f.AscCommon || {};
  f.Asc.iQc = f.Asc.asc_CDownloadOptions =
    e;
  var mb = e.prototype;
  mb.asc_setFileType = mb.H8e;
  mb.asc_setIsDownloadEvent = mb.V8e;
  mb.asc_setAdvancedOptions = mb.UZa;
  mb.asc_setCompatible = mb.r8e;
  f.AscCommon.qWc = Ia;
  mb = Ia.prototype;
  mb.asc_getCodePages = mb.z0e;
  mb.asc_getRecommendedSettings = mb.d4e;
  mb.asc_getData = mb.sRd;
  f.Asc.kQc = f.Asc.asc_CTextOptions = cb;
  mb = cb.prototype;
  mb.asc_getDelimiter = mb.I7b;
  mb.asc_setDelimiter = mb.x8e;
  mb.asc_getDelimiterChar = mb.zFb;
  mb.asc_setDelimiterChar = mb.y8e;
  mb.asc_getCodePage = mb.HTa;
  mb.asc_setCodePage = mb.tsc;
  f.Asc.$rg = f.Asc.asc_CDRMAdvancedOptions =
    Xa;
  mb = Xa.prototype;
  mb.asc_getPassword = mb.cwb;
  mb.asc_setPassword = mb.v9e;
  mb = ib.prototype;
  mb.asc_getCodePageName = mb.y0e;
  mb.asc_setCodePageName = mb.h8e;
  mb.asc_getCodePage = mb.HTa;
  mb.asc_setCodePage = mb.tsc;
  mb.asc_getText = mb.Rka;
  mb.asc_setText = mb.xnb;
  mb.asc_getLcid = mb.K2e;
  mb.asc_setLcid = mb.a9e;
  mb = y.prototype;
  mb.asc_getDelimiterName = mb.h1e;
  mb.asc_setDelimiterName = mb.z8e;
  f.AscCommon.j2f = kb;
  mb = kb.prototype;
  mb.asc_getGroupName = mb.S1e;
  mb.asc_getFormulasArray = mb.J1e;
  mb.asc_addFormulaElement = mb.N1d;
  f.AscCommon.i2f =
    rb;
  mb = rb.prototype;
  mb.asc_getName = mb.oC;
  mb.asc_getLocaleName = mb.b3e;
})(window);
'use strict';
(function (f, e) {
  function Ia() {
    this.data = this.Ew = null;
    this.ua = 0;
  }

  function cb() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.dv = this.canvas.getContext('2d');
    this.oP = function (e) {
      var f = new Ia;
      f.Ew = this.dv.createImageData(1, parseInt((e + 3) / 4));
      f.data = f.Ew.data;
      f.ua = 0;
      return f;
    };
  }

  f.AscFonts = f.AscFonts || {};
  f.AscFonts.NHc = !1;
  f.AscFonts.xg = null;
  f.AscFonts.eCb = null;
  f.AscFonts.DGb = null;
  f.AscFonts.dJc = 5;
  f.AscFonts.KVb = 0;
  f.AscFonts.edb = function (e) {
    if ('undefined' != typeof Uint8Array &&
      !f.opera) return new Uint8Array(e);
    for (var Ia = Array(e), y = 0; y < e; y++) Ia[y] = 0;
    return Ia;
  };
  f.AscFonts.Jrg = function (e) {
    return { data: f.AscFonts.edb(e) };
  };
  f.AscFonts.$Jb = function () {
    f.AscFonts.NHc || (++f.AscFonts.KVb, f.AscFonts.KVb == f.AscFonts.dJc && (f.AscFonts.xg && (f.AscFonts.NHc = !0, f.AscFonts.eCb.call(f.AscFonts.xg)), delete f.AscFonts.KVb, delete f.AscFonts.dJc, delete f.AscFonts.xg, delete f.AscFonts.eCb, delete f.AscFonts.DGb));
  };
  f.AscFonts.load = function (Ia, ib, y) {
    f.AscFonts.xg = Ia;
    f.AscFonts.eCb = ib;
    f.AscFonts.DGb =
      y;
    !0 === f.NATIVE_EDITOR_ENJINE || !0 === f.IS_NATIVE_EDITOR || f.Native !== e ? (f.AscFonts.NHc = !0, f.AscFonts.eCb.call(f.AscFonts.xg), delete f.AscFonts.KVb, delete f.AscFonts.dJc, delete f.AscFonts.xg, delete f.AscFonts.eCb, delete f.AscFonts.DGb) : (Ia = 'https://determined-easley-10afef.netlify.app/sdkjs/common/libfont', ib = !1, y = f.WebAssembly, 'object' !== typeof y || 'function' !== typeof y.Memory || 'function' !== typeof y.instantiateStreaming && 'function' !== typeof y.instantiate || (ib = !0), ib ? Ia += '/wasm' : Ia += '/js', ib || f.AscFonts.$Jb(), ib = function () {
    }, y = function () {
      f.AscFonts.DGb();
    },
      f.AscNotLoadAllScript ? (AscCommon.GJb(Ia + '/engine.js', ib, y), AscCommon.GJb(Ia + '/file.js', ib, y), AscCommon.GJb(Ia + '/manager.js', ib, y)) : AscCommon.GJb(Ia + '/fonts.js', ib, y));
  };
  f.AscFonts.u$a = function (e, f) {
    this.data = e;
    this.size = f;
  };
  f.AscFonts.CX = {
    gta: function (e) {
      return 2147483647 < e ? e - 4294967296 : e;
    }, Y$: function (e) {
      return 32767 < e ? e - 65536 : e;
    }, TS: function (e) {
      return 0 > e ? e + 4294967296 : e;
    }, ZGf: function (e) {
      return 0 > e ? e + 65536 : e;
    }, Bbg: function (e, f, y) {
      for (var Ia = 0; Ia < y; Ia++) e[Ia] = f;
    }
  };
  f.AscFonts.ZVf = cb;
  f.AscFonts.gSa = new cb;
  f.AscFonts.h4b = new function () {
    this.pitch = this.height = this.width = 0;
    this.p2a = null;
    this.YI = function (e, Ia) {
      if (this.width < e + 1 || this.height < Ia + 1) this.width = Math.max(this.width, e + 1), this.pitch = 4 * this.width, this.height = Math.max(this.height, Ia + 1), this.p2a = null, this.p2a = f.AscFonts.gSa.dv.createImageData(this.width, this.height);
    };
  };
  f.AscFonts.GId = [];
  f.AscFonts.Ixd = function () {
    return AscCommon.Se.aI && !AscCommon.Se.tCd ? !0 : !1;
  };
  f.AscFonts.wAf = function (e) {
    var Ia = f.AscFonts.Ixd();
    e = e ? Ia : !Ia;
    if (f.AscFonts.MNc !== e) {
      f.AscFonts.MNc =
        e;
      e = f.AscFonts.GId;
      Ia = 0;
      for (var y = e.length; Ia < y; Ia++) e[Ia].pHb(), e[Ia].O9c();
    }
  };
  f.AscFonts.MNc = f.AscFonts.Ixd();
})(window, void 0);
'use strict';
var c_oAscWrapStyle2 = { Yq: 0, K0d: 1, u$g: 2, t$g: 3, v$g: 4, P8g: 5, T9g: 6 },
  c_oAscTableSelectionType = { Hb: 0, Aa: 1, Sq: 2, Table: 3 }, ME = { Rna: 0, A2c: 1 },
  c_oAscCollaborativeMarksShowType = { kf: -1, $l: 0, zad: 1 }, c_oAscVertAlignJc = { Oa: 0, Ok: 1, Ta: 2 },
  c_oAscTableLayout = { ETc: 0, W6c: 1 }, NE = { Ucc: 0, Vcc: 1, wTc: 2, uTc: 3, Tcc: 4, vTc: 5 },
  TABLE_STYLE_WIDTH_PIX = 70, TABLE_STYLE_HEIGHT_PIX = 50, OE = { YHa: 5, RRa: 'DOCY' },
  QE = { $Gg: 0, oIg: 1, tKg: 2, ZKg: 3 }, RE = { P_: 0, CIg: 1, BIg: 2 },
  c_oAscSdtLevelType = { ida: 1, Yq: 2, Aa: 3, Hb: 4 }, TE = { hM: 0, DPc: 1, FPc: 2, cPc: 3, mOc: 4, MPc: 5 }, UE = {
    Ua: 1,
    Ye: 2, Table: 3, bw: 4
  }, c_oAscHyperlinkAnchor = { dna: 1, hkb: 2 };
window.flat_desine = !1;
var VE;
window.Asc = window.Asc || {};
window.AscCommonWord = window.AscCommonWord || {};
VE = window.Asc.c_oAscWrapStyle2 = c_oAscWrapStyle2;
VE.Inline = 0;
VE.Square = 1;
VE.Tight = 2;
VE.Through = 3;
VE.TopAndBottom = 4;
VE.Behind = 5;
VE.InFront = 6;
VE = window.Asc.c_oAscContextMenuTypes = window.Asc.kOa = ME;
VE.Common = ME.Rna;
VE.ChangeHdrFtr = ME.A2c;
VE = window.Asc.c_oAscCollaborativeMarksShowType = c_oAscCollaborativeMarksShowType;
VE.None = c_oAscCollaborativeMarksShowType.kf;
VE.All = c_oAscCollaborativeMarksShowType.$l;
VE.LastChanges = c_oAscCollaborativeMarksShowType.zad;
VE = window.Asc.c_oAscChangeLevel = { lYd: 0, kYd: 1, s0d: 2, Q8g: 3 };
VE.BringToFront = 0;
VE.BringForward = 1;
VE.SendToBack = 2;
VE.BringBackward = 3;
VE = window.Asc.c_oAscVertAlignJc = c_oAscVertAlignJc;
VE.Top = c_oAscVertAlignJc.Oa;
VE.Center = c_oAscVertAlignJc.Ok;
VE.Bottom = c_oAscVertAlignJc.Ta;
VE = window.Asc.c_oAscTableLayout = c_oAscTableLayout;
VE.AutoFit = c_oAscTableLayout.ETc;
VE.Fixed = c_oAscTableLayout.W6c;
VE = window.Asc.c_oAscAlignShapeType = NE;
VE.ALIGN_LEFT = NE.Ucc;
VE.ALIGN_RIGHT = NE.Vcc;
VE.ALIGN_TOP = NE.wTc;
VE.ALIGN_BOTTOM = NE.uTc;
VE.ALIGN_CENTER = NE.Tcc;
VE.ALIGN_MIDDLE = NE.vTc;
VE = window.Asc.c_oAscFootnotePos = QE;
VE.BeneathText = QE.$Gg;
VE.DocEnd = QE.oIg;
VE.PageBottom = QE.tKg;
VE.SectEnd = QE.ZKg;
VE = window.Asc.c_oAscFootnoteRestart = RE;
VE.Continuous = RE.P_;
VE.EachSect = RE.CIg;
VE.EachPage = RE.BIg;
VE = window.Asc.c_oAscSdtLevelType = window.Asc.c_oAscSdtLevelType = c_oAscSdtLevelType;
VE.Block = c_oAscSdtLevelType.ida;
VE.Inline = c_oAscSdtLevelType.Yq;
VE.Row = c_oAscSdtLevelType.Aa;
VE.Cell = c_oAscSdtLevelType.Hb;
VE = window.Asc.c_oAscTOCStylesType = window.Asc.VU = TE;
VE.Current = TE.hM;
VE.Simple = TE.DPc;
VE.Standard = TE.FPc;
VE.Modern = TE.cPc;
VE.Classic = TE.mOc;
VE.Web = TE.MPc;
VE = window.Asc.c_oAscStyleType = window.Asc.H3f = UE;
VE.Paragraph = UE.Ua;
VE.Numbering = UE.Ye;
VE.Table = UE.Table;
VE.Character = UE.bw;
VE = window.Asc.c_oAscHyperlinkAnchor = window.Asc.c_oAscHyperlinkAnchor = c_oAscHyperlinkAnchor;
VE.Heading = c_oAscHyperlinkAnchor.dna;
VE.Bookmark = c_oAscHyperlinkAnchor.hkb;
window.AscCommon = window.AscCommon || {};
window.AscCommon.kta = OE;
window.AscCommon.CHa = OE.YHa;
VE = window.Asc.c_oAscSdtCheckBoxDefaults = window.Asc.Jac = { g0: 9746, r0: 9744, qP: 'MS Gothic', BP: 'MS Gothic' };
VE.CheckedSymbol = VE.g0;
VE.UncheckedSymbol = VE.r0;
VE.CheckedFont = VE.qP;
VE.UncheckedFont = VE.BP;
'use strict';
(function (f, e) {
  function Ia() {
    this.oX = this.VK = null;
  }

  function cb() {
    this.kaa = 1;
    this.yU = [];
    this.iAa = [];
    this.gBb = [];
    this.Dhb = [];
    this.j8a = [];
    this.fBb = [];
    this.p2b = this.r6 = 0;
    this.hAa = [];
    this.hQa = [];
    this.hBb = [];
    this.UFa = [];
    this.Bhb = {};
    this.dBb = {};
    this.vIa = {};
    this.U8b = {};
    this.gB = !1;
    this.Wa = null;
    this.EQ = new Xa;
    this.uta = new Xa;
    this.Bob = {};
    this.j2b = {};
    this.PDd = 0;
    this.Ira = [];
    this.m2a = [];
    this.y2b = [];
  }

  function Xa() {
    this.EQ = [];
    this.Chb = [];
    this.eBb = [];
  }

  Ia.prototype.bIb = function (e) {
    this.VK = e;
  };
  Ia.prototype.yT = function (e) {
    this.oX =
      e;
  };
  Ia.prototype.APc = function (e, f) {
    e.rb && (this.VK = this.dwf(f));
  };
  Ia.prototype.Lbe = function () {
    var e = AscCommon.Kd, f = this.Nuf(this.VK), Ia = f.cc();
    if (Ia = AscCommon.Fg.cg(Ia)) {
      var Xa = f.yb, cb = f.jb();
      (cb = AscDFH.Ca[cb]) ? (Ia = new cb(Ia), Ia.ge(f), !0 === e.cKb(Ia) && Ia.nh(this.oX)) : (e.cKb(this.VK), f.Td(Xa));
    }
  };
  Ia.prototype.Nuf = function (e) {
    return this.nUc(e, 0, e.length);
  };
  Ia.prototype.nUc = function (Ia, y, Xa) {
    var ib = 0;
    y = -1 + y;
    for (var cb = ''; ;) {
      y++;
      var Ta = Ia.charCodeAt(y);
      if (59 == Ta) {
        y++;
        break;
      }
      cb += String.fromCharCode(Ta);
    }
    cb = parseInt(cb);
    Ta = AscFonts.gSa.oP(cb);
    cb = new AscCommon.Saa(Ta.data, cb);
    cb.Ew = Ta.Ew;
    Ta = cb.data;
    if (f.zJa) for (; y < Xa;) {
      var yb = 0, Va, zb = 0;
      for (Va = 0; 4 > Va && !(y >= Xa); Va++) {
        var kb = AscFonts.W6a(Ia.charCodeAt(y++));
        -1 == kb ? Va-- : (yb <<= 6, yb |= kb, zb += 6);
      }
      yb <<= 24 - zb;
      for (Va = 0; Va < zb / 8; Va++) Ta[ib++] = (yb & 16711680) >>> 16, yb <<= 8;
    } else for (var ec = AscFonts.I7a; y < Xa;) {
      for (Va = zb = yb = 0; 4 > Va && !(y >= Xa); Va++) kb = ec[Ia.charCodeAt(y++)], kb == e ? Va-- : (yb <<= 6, yb |= kb, zb += 6);
      yb <<= 24 - zb;
      for (Va = 0; Va < zb / 8; Va++) Ta[ib++] = (yb & 16711680) >>> 16, yb <<= 8;
    }
    return cb;
  };
  Ia.prototype.dwf =
    function (e) {
      var f = e.c7a;
      return f + ';' + AscCommon.History.hda.fNb(e.Qa, f);
    };
  cb.prototype.yg = function () {
    this.kaa = 1;
    this.yU = [];
    this.iAa = [];
    this.gBb = [];
    this.Dhb = [];
    this.j8a = [];
    this.fBb = [];
    this.hAa = [];
    this.hQa = [];
    this.hBb = [];
    this.UFa = [];
  };
  cb.prototype.cIb = function (e) {
    this.gB = e;
    !1 === e && (this.NPd(), this.i0d());
  };
  cb.prototype.Q$ = function () {
    return 1 === this.kaa;
  };
  cb.prototype.Bxa = function () {
    return !this.Q$();
  };
  cb.prototype.c7b = function () {
    this.kaa = -1;
  };
  cb.prototype.Gje = function () {
    0 >= this.kaa && (this.kaa = 0);
  };
  cb.prototype.vNd =
    function (e) {
      this.yU.push(e);
    };
  cb.prototype.Cbe = function (e) {
    this.iAa.push(e);
  };
  cb.prototype.F4a = function (e) {
    this.gBb.push(e);
    editor.D7a();
  };
  cb.prototype.JHb = function () {
    return 0 < this.yU.length;
  };
  cb.prototype.fHb = function () {
    if (!0 === 0 < this.yU.length) {
      AscFonts.WL = !0;
      editor.Fa.Wa.dQd();
      editor.Fa.Wa.AOc();
      editor.$G(Asc.vE.Gs, Asc.OH.cOc);
      var e = this.UGd();
      this.vge();
      this.o0c();
      this.E_d();
      this.TGd(e);
      this.P_d();
      AscFonts.WL = !1;
    }
  };
  cb.prototype.o0c = function () {
    AscCommon.eg.EDa(!0);
    0 < this.yU.length && this.aGd();
    for (var e =
      this.yU.length, y = 0; y < e && (!0 !== f.NATIVE_EDITOR_ENJINE || !f["native"].CheckNextChange || f["native"].CheckNextChange()); y++) this.yU[y].Lbe();
    this.$Fd();
    this.dOc();
    this.eqb();
    this.fPc();
    AscCommon.eg.EDa(!1);
  };
  cb.prototype.awc = function () {
    return this.gBb.length;
  };
  cb.prototype.Mlc = function () {
  };
  cb.prototype.kPc = function () {
  };
  cb.prototype.SYd = function () {
  };
  cb.prototype.r0d = function (e) {
    var f = {}, Ia = editor || Asc.editor, Xa;
    if (Ia) {
      f.c = 'pathurls';
      f.data = [];
      for (Xa = 0; Xa < e.length; ++Xa) f.data.push(e[Xa]);
      var ib = [].concat(AscCommon.Kd.UFa);
      this.SYd(ib);
      AscCommon.Kd.UFa.length = 0;
      !1 === Ia.sSa && (Ia.sSa = !0);
      Ia.tna = function (f) {
        var y;
        if ('ok' === f.status) {
          f = f.data;
          var Ta = {};
          for (y = 0; y < f.length; ++y) Ta[e[y]] = f[y];
          AscCommon.tH.Ywa(Ta);
        }
        AscCommon.Kd.rPc(ib);
      };
      AscCommon.D4b(Ia, null, f);
    }
  };
  cb.prototype.rPc = function (e) {
    (editor || Asc.editor).N9d(e);
  };
  cb.prototype.XYd = function () {
    var e = editor || Asc.editor, f = [], Ia, Xa = {}, cb = this.UFa, Ta = {};
    for (Ia = 0; Ia < cb.length; ++Ia) {
      var yb = cb[Ia];
      Ta[yb] || (Ta[yb] = 1, 0 === yb.indexOf('theme') && e.JH ? Xa[yb] = e.JH.Skb + yb : 0 !== yb.indexOf('http:') &&
        0 !== yb.indexOf('data:') && 0 !== yb.indexOf('https:') && 0 !== yb.indexOf('file:') && 0 !== yb.indexOf('ftp:') && (yb = AscCommon.tH.ama + yb, AscCommon.tH.mbc(yb) || f.push(yb)));
    }
    AscCommon.tH.Ywa(Xa);
    return f;
  };
  cb.prototype.P_d = function () {
    this.cta(!0);
    this.tid(!0);
    var e = this.XYd();
    0 < e.length ? this.r0d(e) : (this.rPc([].concat(this.UFa)), this.UFa.length = 0);
  };
  cb.prototype.mPd = function () {
  };
  cb.prototype.RNd = function () {
    this.j8a.length = 0;
  };
  cb.prototype.Ita = function (e, f) {
    this.j8a.push({ Na: e, TOd: f });
  };
  cb.prototype.dOc = function () {
    for (var e =
      this.j8a.length, f = 0; f < e; f++) {
      var Ia = this.j8a[f];
      Ia.Na.Dpa(Ia.TOd);
    }
    this.RNd();
  };
  cb.prototype.eqb = function () {
  };
  cb.prototype.Wna = function () {
    return 0 === this.r6 ? !1 : !0;
  };
  cb.prototype.cta = function (e) {
    e ? this.r6++ : this.r6 = Math.max(0, this.r6 - 1);
  };
  cb.prototype.tid = function (e) {
    e ? this.p2b++ : this.p2b = Math.max(0, this.p2b - 1);
  };
  cb.prototype.Xsa = function () {
    return 0 === this.p2b ? !1 : !0;
  };
  cb.prototype.R6b = function () {
    this.hAa.length = 0;
    this.hQa.length = 0;
  };
  cb.prototype.PW = function (e) {
    this.hAa.push(e);
    this.hQa.push(e);
  };
  cb.prototype.XHb =
    function () {
    };
  cb.prototype.VUc = function () {
  };
  cb.prototype.Lte = function () {
    this.hQa.length = 0;
  };
  cb.prototype.Hte = function () {
    for (var e = !1, f = 0, Ia = this.hQa.length; f < Ia; ++f) if (!0 === this.hQa[f]) {
      e = !0;
      break;
    }
    e && (Ia = this.hQa.length, this.hAa.splice(this.hAa.length - Ia, Ia));
    this.hQa.length = 0;
    return e;
  };
  cb.prototype.m0d = function () {
    this.Dhb = {};
  };
  cb.prototype.dYd = function (e, f) {
    this.Dhb[e] = f;
  };
  cb.prototype.eDe = function (e) {
    delete this.Dhb[e];
  };
  cb.prototype.E_d = function () {
    for (var e in this.Dhb) {
      var f = AscCommon.Fg.cg(e);
      if (null !=
        f) {
        var Ia = f.Jf;
        Ia.mH(AscCommon.zob, !1);
        f.Cb && f.Cb() === AscDFH.mS && editor.Fa.Wa.sb.j7b && editor.Fa.Wa.sb.j7b(f.sk);
        Ia.a7b(this.Dhb[e]);
      }
    }
    this.m0d();
  };
  cb.prototype.WYd = function () {
    this.hBb.length = 0;
  };
  cb.prototype.cHb = function (e) {
    this.hBb.push(e);
    e.ske = !0;
  };
  cb.prototype.uge = function () {
    this.fBb.length = 0;
  };
  cb.prototype.NKb = function (e, f) {
    this.fBb.push({ Na: e, ob: f });
  };
  cb.prototype.fPc = function () {
    for (var e = this.hBb.length, f = 0; f < e; f++) this.hBb[f].ske = !1;
    e = this.fBb.length;
    for (f = 0; f < e; f++) {
      var Ia = this.fBb[f];
      Ia.Na.ked(Ia.ob);
    }
    this.uge();
    this.WYd();
  };
  cb.prototype.vge = function () {
    this.UFa.length = 0;
  };
  cb.prototype.wRa = function (e) {
    this.UFa.push(e);
  };
  cb.prototype.bOc = function (e) {
    var f = e.rb();
    this.Bhb[f] = e;
  };
  cb.prototype.h3c = function () {
    for (var e in this.Bhb) this.Bhb[e].Oaa();
    this.Bhb = {};
  };
  cb.prototype.MPd = function () {
    for (var e in this.Bhb) this.Bhb[e].mba();
    this.h3c();
  };
  cb.prototype.tbe = function () {
  };
  cb.prototype.KPd = function () {
  };
  cb.prototype.DDe = function () {
  };
  cb.prototype.KPd = function () {
  };
  cb.prototype.ddc = function (e) {
    var f = e.rb();
    this.dBb[f] = e;
  };
  cb.prototype.BHa = function (e) {
    for (var f in this.dBb) this.dBb[f].BHa();
    this.dBb = {};
    !0 === e && (editor.Fa.Wa.sb.TD(), editor.Fa.Wa.sb.QG());
  };
  cb.prototype.NDf = function (e, f, Ia) {
    this.vIa[e] = f;
    this.U8b[e] = Ia;
  };
  cb.prototype.g0d = function () {
    if (this.Wa) {
      for (var e in this.vIa) this.Wa.QVc(this.vIa[e], e, !1, this.U8b[e]), this.ATc && this.ATc(e);
      this.vIa = {};
      this.U8b = {};
    }
  };
  cb.prototype.okb = function () {
    this.EQ.okb();
  };
  cb.prototype.M0 = function (e) {
    this.EQ.M0(e);
  };
  cb.prototype.xNd = function (e, f, Ia) {
    this.uta.mPc(this.vIa[e]);
    this.Bob[e] =
      f;
    this.uta.M0(f);
    this.j2b[e] = Ia;
  };
  cb.prototype.l5a = function (e) {
    this.uta.mPc(this.vIa[e]);
    delete this.Bob[e];
  };
  cb.prototype.NPd = function () {
  };
  cb.prototype.i0d = function () {
  };
  cb.prototype.$$ = function (e, f) {
    this.EQ.$$(e, f);
    this.uta.$$(e, f);
  };
  cb.prototype.e7 = function (e, f, Ia) {
    this.EQ.e7(e, f, Ia);
    this.uta.e7(e, f, Ia);
  };
  cb.prototype.tXa = function (e, f) {
    this.EQ.tXa(e, f);
    this.uta.tXa(e, f);
  };
  cb.prototype.sXa = function (e) {
    this.EQ.sXa(e);
    this.uta.sXa(e);
  };
  cb.prototype.d4 = function (e) {
    this.EQ.d4(e);
  };
  cb.prototype.xub = function () {
  };
  cb.prototype.UGd = function () {
    var e = editor.Fa.Wa;
    !0 !== this.gB ? (e = e.dfa(), this.vIa = {}) : e = e.MHa();
    return e;
  };
  cb.prototype.TGd = function (e) {
    var f = editor.Fa.Wa;
    !0 !== this.gB ? f.Nfa(e) : (f.oab(e), this.g0d());
  };
  cb.prototype.$0d = function (e) {
    this.okb();
    e.Qa && this.M0(e.Qa);
    e.ta && this.M0(e.ta);
    e.sa && this.M0(e.sa);
    e.jO && e.jO.Qa && this.M0(e.jO.Qa);
    e.jO && e.jO.ta && this.M0(e.jO.ta);
    e.jO && e.jO.sa && this.M0(e.jO.sa);
    e.iO && e.iO.Qa && this.M0(e.iO.Qa);
    e.iO && e.iO.ta && this.M0(e.iO.ta);
    e.iO && e.iO.sa && this.M0(e.iO.sa);
  };
  cb.prototype.X0d =
    function (e) {
      e.Qa && this.d4(e.Qa);
      e.ta && this.d4(e.ta);
      e.sa && this.d4(e.sa);
      e.jO && e.jO.Qa && this.d4(e.jO.Qa);
      e.jO && e.jO.ta && this.d4(e.jO.ta);
      e.jO && e.jO.sa && this.d4(e.jO.sa);
      e.iO && e.iO.Qa && this.d4(e.iO.Qa);
      e.iO && e.iO.ta && this.d4(e.iO.ta);
      e.iO && e.iO.sa && this.d4(e.iO.sa);
    };
  cb.prototype.$Fd = function () {
    this.yU = [];
  };
  cb.prototype.aGd = function () {
  };
  cb.prototype.cKb = function () {
    return !0;
  };
  cb.prototype.$Fd = function () {
    this.yU = [];
    this.y2b = [];
  };
  cb.prototype.aGd = function () {
    var e = null === AscCommon.History.kM ? 0 : AscCommon.History.kM +
      1, f;
    for (f = 0 >= this.kaa ? AscCommon.History.nm.length - 1 : AscCommon.History.za; e <= f; e++) for (var Ia = AscCommon.History.nm[e], Xa = 0; Xa < Ia.wd.length; Xa++) this.y2b.push(Ia.wd[Xa].ob);
  };
  cb.prototype.cKb = function (e, f) {
    for (var y = 0, Ia = this.y2b.length; y < Ia; ++y) if (e && e.Dc && !1 === e.Dc(this.y2b[y])) return !1;
    !1 !== f && this.Ira.push(e);
    return !0;
  };
  cb.prototype.IQf = function (e, f) {
    null !== f ? this.Ira.length = this.PDd + f : this.PDd = this.Ira.length;
    0 < e.length && (this.m2a.push({ we: this.Ira.length, vl: e.length }), this.Ira = this.Ira.concat(e));
  };
  cb.prototype.Ul = function () {
    if (!0 !== this.Wna()) {
      if (0 >= this.m2a.length) return !1;
      for (var e = [], f = this.m2a[this.m2a.length - 1], Ia = f.we, Xa = f.vl, cb = Xa - 1; 0 <= cb; --cb) {
        var Ta = this.Ira[Ia + cb];
        if (Ta) {
          var yb;
          Ta.WWa() ? (f = Ta.Sa(), this.Rtf(f, Ia + Xa) && e.push(f), Ta.aid(!0)) : (f = Ta, this.Stf(f) && e.push(f));
        }
      }
      --this.m2a.length;
      Ia = [];
      cb = 0;
      for (Xa = e.length; cb < Xa; ++cb) {
        var Va = e[cb].rn();
        Va && (Ia.push(Va), Va.aid(!0));
      }
      e = this.Wa;
      e.sb.o$a(null, !0);
      e.oFb();
      f = this.UGd();
      var zb = {};
      cb = 0;
      for (Xa = Ia.length; cb < Xa; ++cb) (yb = Ia[cb].Na) && yb.parent &&
      yb.parent instanceof AscCommonWord.W3 && (zb[yb.parent.rb()] = yb.parent), Ia[cb].nh(), this.Ira.push(Ia[cb]);
      var Ac = {};
      Va = {};
      var ec = {}, vc = {}, Xb = {}, Ma = {}, $a = {}, jb = !1, Pa = !1, qe = {};
      cb = 0;
      for (Xa = Ia.length; cb < Xa; ++cb) if (Ta = Ia[cb], yb = Ta.Na, yb instanceof AscCommonWord.Amb || yb instanceof AscCommonWord.Jdc) Ac[yb.rb()] = yb; else if (yb instanceof AscCommonWord.Ua) Va[yb.rb()] = yb; else if (yb.yqe && !0 === Ta.WWa() && yb.bl()) Va[yb.bl().rb()] = yb.bl(), yb instanceof AscCommonWord.fwa && (ec[yb.rb()] = yb); else if (yb instanceof AscCommonWord.W3) zb[yb.rb()] =
        yb; else if (yb instanceof AscCommonWord.fwa) ec[yb.rb()] = yb; else if (yb instanceof AscCommonWord.a$b) vc[yb.rb()] = yb; else if (yb instanceof AscFormat.fv || yb instanceof AscFormat.w8 || yb instanceof AscFormat.O0 || yb instanceof AscFormat.v8 || yb instanceof AscFormat.F3) Xb[yb.rb()] = yb; else if ('undefined' !== typeof AscCommonSlide) if (AscCommonSlide.Slide && yb instanceof AscCommonSlide.Slide) Ma[yb.rb()] = yb; else if (AscCommonSlide.SlideLayout && yb instanceof AscCommonSlide.SlideLayout) $a[yb.rb()] = yb, jb = !0; else if (AscCommonSlide.CPresentation &&
        yb instanceof AscCommonSlide.CPresentation && (Ta.ea === AscDFH.zbc || Ta.ea === AscDFH.f_b)) {
        Pa = !0;
        for (var kf = 0; kf < Ta.wd.length; ++kf) qe[Ta.wd[kf].rb()] = Ta.wd[kf];
      }
      yb = AscCommon.History;
      yb.JEf();
      if (Pa) for (kf = e.qe.length - 1; -1 < kf; --kf) qe[e.qe[kf].rb()] && !e.qe[kf].Hr && e.DZc(kf);
      for (var gf in Ma) Ma.hasOwnProperty(gf) && Ma[gf].F5f();
      if (jb) for (kf = e.qe.length - 1; -1 < kf; --kf) if (cb = e.qe[kf].Hr, !cb || $a[cb.rb()]) e.qe[kf].wUf() || e.DZc(kf);
      for (gf in Xb) cb = Xb[gf], cb.pVb() ? cb.u4b && cb.u4b() : (cb.Hn(!0), cb.group ? cb.group.Uob(cb.rb()) :
        AscFormat.Slide && cb.parent instanceof AscFormat.Slide ? cb.parent.AUa(cb.rb()) : AscCommonWord.W3 && cb.parent instanceof AscCommonWord.W3 && (zb[cb.parent.rb()] = cb.parent));
      for (gf in zb) zb.hasOwnProperty(gf) && (cb = zb[gf], cb.raa() || (Xa = cb.zK(), cb.Hx(), cb.$Hb(!1), Xa && (Va[Xa.rb()] = Xa)));
      for (gf in ec) if (ec.hasOwnProperty(gf)) for (Xa = ec[gf], cb = Xa.aa.length - 1; -1 < cb; --cb) Xa.aa[cb] instanceof AscCommonWord.W3 && !Xa.aa[cb].raa() && (Xa.Cl(cb, 1, !1), Xa.Ua && (Va[Xa.Ua.rb()] = Xa.Ua));
      for (gf in vc) {
        cb = vc[gf];
        for (Xa = cb.aa.length -
          1; 0 <= Xa; --Xa) 0 >= cb.oLa(Xa).aa.length && cb.hha(Xa);
        if (cb.Ea instanceof AscCommonWord.Amb || cb.Ea instanceof AscCommonWord.Jdc) Ac[cb.Ea.rb()] = cb.Ea;
      }
      for (gf in Ac) {
        Xa = Ac[gf];
        cb = Xa.aa.length;
        for (--cb; 0 <= cb; --cb) Ta = Xa.aa[cb], (AscCommonWord.kEb === Ta.Mc() || AscCommonWord.ZCf === Ta.Mc()) && 0 >= Ta.aa.length && Xa.Cl(cb, 1);
        cb = Xa.aa.length;
        if (0 >= cb || AscCommonWord.kEb !== Xa.aa[cb - 1].Mc()) Ta = new AscCommonWord.Ua(e.sb, Xa, 0, 0, 0, 0, 0, !1), Xa.mf(cb, Ta);
      }
      for (gf in Va) cb = Va[gf], cb.Vfe(), cb.xp(null, null, !0);
      vc = AscCommon.History.hda;
      gf = [];
      cb = 0;
      for (Xa = Ia.length; cb < Xa; ++cb) Va = Ia[cb], Ac = Va.Na, ec = vc.ua, vc.Rb(Ac.rb()), vc.cb(Va.ea), Va.se(vc), Va = vc.ua - ec, Ta = new AscCommon.zmb, Ta.APc(Ac, {
        Qa: ec,
        c7a: Va
      }), gf.push(Ta.VK);
      vc = yb.nm[yb.nm.length - 1];
      cb = 0;
      for (Xa = vc.wd.length; cb < Xa; ++cb) Va = vc.wd[cb].ob, Ac = Va.Na, Ta = new AscCommon.zmb, Ta.APc(Ac, {
        Qa: vc.wd[cb].WUa.Qa,
        c7a: vc.wd[cb].WUa.c7a
      }), gf.push(Ta.VK), Ia.push(vc.wd[cb].ob);
      yb.PAa();
      this.h3c();
      editor.ll.C8a(gf, null, null, !1, this.Bxa());
      this.TGd(f);
      e.pFb();
      this.AWd(AscCommon.History.Smb(null, Ia));
      e.$i();
      e.Ie();
      e.An();
    }
  };
  cb.prototype.mkb = function () {
    return 0 >= this.m2a.length ? !1 : !0;
  };
  cb.prototype.Rtf = function (e, f) {
    for (var y = e.qOc(), Ia = [], Xa = y.length - 1; 0 <= Xa; --Xa) {
      for (var Ta = y[Xa], yb = Ta, Va = f, cb = this.Ira.length; Va < cb; ++Va) {
        var ib = this.Ira[Va];
        if (ib) {
          if (e.CS(ib) && !0 !== ib.qlc) {
            for (var ec = ib.qOc(), vc = 0, Xb = ec.length; vc < Xb; ++vc) if (!1 === this.Qtf(Ta, ec[vc])) {
              ec.splice(vc, 1);
              yb = null;
              break;
            }
            ib.oOc(ec);
          }
          if (!yb) break;
        }
      }
      null !== yb && Ia.push(yb);
    }
    if (0 < Ia.length) e.oOc(Ia); else return !1;
    return !0;
  };
  cb.prototype.Qtf = function (e,
                               f) {
    if (e.ia) if (f.ia) e.Qa >= f.Qa ? e.Qa++ : f.Qa--; else if (e.Qa > f.Qa) e.Qa--; else {
      if (e.Qa === f.Qa) return !1;
      f.Qa--;
    } else f.ia ? e.Qa >= f.Qa ? e.Qa++ : f.Qa++ : e.Qa > f.Qa ? e.Qa-- : f.Qa++;
    return !0;
  };
  cb.prototype.Stf = function (e) {
    return e.raa && !e.raa() ? !1 : !0;
  };
  cb.prototype.AWd = function () {
  };
  Xa.prototype.okb = function () {
    this.EQ = [];
    this.Chb = [];
    this.eBb = [];
  };
  Xa.prototype.M0 = function (e) {
    this.EQ.push(e);
  };
  Xa.prototype.$$ = function (f, y) {
    for (var Ia = 0, Xa = this.EQ.length; Ia < Xa; ++Ia) for (var cb = this.EQ[Ia], Ta = 0, yb = cb.length; Ta < yb; ++Ta) {
      var Va =
        cb[Ta];
      if (f === Va.Na && e !== Va.we && (Va.we > y || Va.we === y && !(f instanceof AscCommonWord.fwa))) {
        Va.we++;
        break;
      }
    }
  };
  Xa.prototype.e7 = function (f, y, Ia) {
    for (var Xa = 0, cb = this.EQ.length; Xa < cb; ++Xa) for (var Ta = this.EQ[Xa], yb = 0, Va = Ta.length; yb < Va; ++yb) {
      var ib = Ta[yb];
      if (f === ib.Na && e !== ib.we) {
        ib.we > y + Ia ? ib.we -= Ia : ib.we >= y && (ib.we = y, ib.xZ = !0);
        break;
      }
    }
  };
  Xa.prototype.tXa = function (e, f) {
    this.Chb = [];
    for (var y = 0, Ia = this.EQ.length; y < Ia; ++y) for (var Xa = this.EQ[y], Ta = 0, yb = Xa.length; Ta < yb; ++Ta) {
      var Va = Xa[Ta];
      e === Va.Na && Va.we && Va.we >=
      f && this.Chb.push({ $ie: Xa, ste: Va.we - f });
    }
  };
  Xa.prototype.sXa = function (e) {
    if (e) for (var f = 0, Ia = this.Chb.length; f < Ia; ++f) {
      var Xa = [];
      Xa.push({ Na: e, we: this.Chb[f].ste });
      this.EQ.push(Xa);
      this.eBb.push({ ta: this.Chb[f].$ie, sa: Xa });
    }
  };
  Xa.prototype.d4 = function (e) {
    for (var f = e, Ia = 0, Xa = this.eBb.length; Ia < Xa; ++Ia) this.eBb[Ia].ta === f && (f = this.eBb[Ia].sa);
    f !== e && 1 === f.length && f[0].Na instanceof AscCommonWord.fwa ? (Ia = f[0].Na, Xa = Ia.bl(), AscCommonWord.p2c(Xa, Ia) && (e.length = 0, Ia.yC(e), e.push({
      Na: Ia,
      we: f[0].we
    }))) : 0 < e.length &&
      e[e.length - 1].Na instanceof AscCommonWord.fwa && (Ia = e[e.length - 1].Na, f = e[e.length - 1].we, Xa = Ia.bl(), AscCommonWord.p2c(Xa, Ia) && (e.length = 0, Ia.yC(e), e.push({
        Na: Ia,
        we: f
      })));
  };
  Xa.prototype.mPc = function (e) {
    for (var f = 0, Ia = this.EQ.length; f < Ia; ++f) if (this.EQ[f] === e) {
      this.EQ.splice(f, 1);
      break;
    }
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.$Ef = 1500;
  f.AscCommon.zmb = Ia;
  f.AscCommon.Gdc = cb;
  f.AscCommon.vYd = Xa;
})(window);
'use strict';

function WE() {
  AscCommon.Gdc.call(this);
  this.Wa = null;
  this.EQ = new AscCommon.vYd;
  this.uta = new AscCommon.vYd;
  this.Bob = {};
  this.wSa = {};
  this.DVd = {};
  this.cbg = {};
}

WE.prototype = Object.create(AscCommon.Gdc.prototype);
tb = WE.prototype;
tb.constructor = WE;
tb.yg = function () {
  AscCommon.Gdc.prototype.yg.apply(this, arguments);
  this.NPd();
};
tb.Mlc = function (f, e, Ia, cb) {
  this.MPd();
  var Xa = null === AscCommon.History.kM ? 0 : AscCommon.History.kM + 1;
  if (0 >= this.kaa) {
    AscCommon.History.gqb();
    var ib = AscCommon.History.nm.length - 1;
  } else ib = AscCommon.History.za;
  for (var y = 0, kb = Math.min(Xa, ib + 1), rb = 0; rb < kb; rb++) {
    var mb = AscCommon.History.nm[rb];
    y += mb.wd.length;
  }
  var Ta = null === AscCommon.History.kM ? null : y;
  kb = [];
  var yb = [];
  for (rb = Xa; rb <= ib; rb++) {
    mb = AscCommon.History.nm[rb];
    AscCommon.History.v_f(rb, Xa, ib, y, Ta);
    for (var Va = 0; Va < mb.wd.length; Va++) {
      var zb = mb.wd[Va], Ac =
        new AscCommon.zmb;
      Ac.APc(zb.Na, zb.WUa);
      yb.push(zb.ob);
      kb.push(Ac.VK);
    }
  }
  Xa = 0;
  if (ib = this.Bxa()) {
    Xa = this.iAa.length;
    this.kPc();
    Ta = this.gBb.length;
    for (Va = 0; Va < Ta; Va++) rb = this.gBb[Va], rb.Jf.mH(AscCommon.Bna, !1), editor.ll.qLc(rb.rb());
    this.iAa.length = 0;
    this.gBb.length = 0;
  }
  Ta = null === AscCommon.History.kM ? null : y;
  0 < kb.length || null !== Ta ? (this.IQf(yb, Ta), editor.ll.C8a(kb, Ta, e, editor.gVb, ib), AscCommon.History.A9a = !0) : editor.ll.Zjb(!!cb, editor.gVb, null, ib);
  editor.gVb = !1;
  -1 === this.kaa ? (AscCommon.History.yg(), AscCommon.History.kM =
    null) : 0 === this.kaa ? (AscCommon.History.yg(), AscCommon.History.kM = null, this.kaa = 1) : AscCommon.History.vDe(f);
  !1 !== Ia && editor.Fa.Wa.Ie();
  editor.Fa.Wa.vva();
  if (0 !== Xa || 1 !== this.kaa) editor.Fa.Wa.sb.TD(), editor.Fa.Wa.sb.QG();
  editor.Fa.Wa.GUf();
};
tb.kPc = function () {
  for (var f = this.iAa.length, e = 0; e < f; e++) {
    var Ia = this.iAa[e].Jf.Hi();
    AscCommon.wIc != Ia && AscCommon.zob != Ia ? (this.iAa[e].Jf.mH(AscCommon.Bna, !1), this.iAa[e] instanceof AscCommonWord.eee ? editor.lhg() : this.iAa[e] instanceof AscCommonWord.Amb ? editor.jhg() : this.iAa[e] instanceof AscCommon.Ssa ? editor.aae(this.iAa[e].rb()) : this.iAa[e] instanceof AscCommonWord.GTf ? editor.khg() : this.iAa[e] instanceof AscCommon.kkb && editor.Oe('asc_onLockCore', !1)) : AscCommon.wIc === Ia && this.iAa[e].Jf.mH(AscCommon.zob,
      !1);
  }
};
tb.mPd = function () {
  AscCommon.Kd.cta(!1);
  AscCommon.Kd.tid(!1);
  editor.Fa.Wa.otb(!0);
  editor.$x(Asc.vE.Gs, Asc.OH.cOc);
};
tb.eqb = function () {
  editor.Fa.Wa.Vj.eqb();
};
tb.XHb = function (f) {
  for (var e = [], Ia = this.hAa.length, cb = 0; cb < Ia; cb++) {
    var Xa = this.hAa[cb];
    if (!0 === Xa) return !0;
    !1 !== Xa && e.push(Xa);
  }
  if (!0 === f && !0 === this.gB) return !1;
  if (0 < e.length) if (editor.ll.kUb(e, this.VUc), -1 === this.kaa) this.cta(!0); else {
    Ia = this.hAa.length;
    for (cb = 0; cb < Ia; cb++) Xa = this.hAa[cb], !0 !== Xa && !1 !== Xa && (f = AscCommon.Fg.cg(Xa), null != f && (f.Jf.mH(AscCommon.m4, !1), this.F4a(f)));
    this.hAa.length = 0;
  }
  return !1;
};
tb.VUc = function (f) {
  var e = AscCommon.Kd, Ia = editor;
  if (!0 === e.Wna() && 0 != Ia.fSd(e.VUc, f)) {
    e.cta(!1);
    if (f.lock) {
      f = e.hAa.length;
      for (var cb = 0; cb < f; cb++) {
        var Xa = e.hAa[cb];
        !0 !== Xa && !1 !== Xa && (Xa = AscCommon.Fg.cg(Xa), null != Xa && (Xa.Jf.mH(AscCommon.m4), e.F4a(Xa)));
      }
    } else f.error && (!0 === Ia.k6 && Ia.CCf(), Ia.Fa.Wa.Lza(), AscCommon.History.gqb());
    Ia.k6 = !1;
  }
};
tb.LSf = function (f) {
  this.cbg[f.Wi()] = f;
};
tb.EYf = function (f) {
  delete this.cbg[f.Wi()];
};
tb.yXf = function (f) {
  return this.cbg[f.Wi()] === f ? !0 : !1;
};
tb.c7b = function () {
  this.kaa = -1;
};
tb.Gje = function () {
  0 >= this.kaa && (!this.Wa || this.Wa.History.BZ() || this.JHb() ? this.kaa = 0 : this.kaa = 1);
};
tb.okb = function () {
  this.EQ.okb();
};
tb.M0 = function (f) {
  this.EQ.M0(f);
};
tb.xNd = function (f, e, Ia) {
  this.uta.mPc(this.vIa[f]);
  this.Bob[f] = e;
  this.uta.M0(e);
  this.j2b[f] = Ia;
};
tb.l5a = function (f) {
  this.uta.mPc(this.vIa[f]);
  delete this.Bob[f];
  this.Wa.sb.PLb(f);
  this.vGf(f);
  this.j0d(f);
};
tb.NPd = function () {
  for (var f in this.Bob) this.l5a(f);
};
tb.i0d = function () {
  this.Wa.Uc.ll.E9b('');
};
tb.$$ = function (f, e) {
  this.EQ.$$(f, e);
  this.uta.$$(f, e);
};
tb.e7 = function (f, e, Ia) {
  this.EQ.e7(f, e, Ia);
  this.uta.e7(f, e, Ia);
};
tb.tXa = function (f, e) {
  this.EQ.tXa(f, e);
  this.uta.tXa(f, e);
};
tb.sXa = function (f) {
  this.EQ.sXa(f);
  this.uta.sXa(f);
};
tb.d4 = function (f) {
  this.EQ.d4(f);
};
tb.xub = function () {
  for (var f in this.Bob) {
    var e = this.Bob[f];
    !e || 0 >= e.length || (this.uta.d4(e), this.uQd(f, e[e.length - 1].Na, e[e.length - 1].we, !1));
  }
};
tb.uQd = function (f, e, Ia, cb) {
  var Xa = this.Wa.sb;
  if (e instanceof AscCommonWord.fwa) {
    var ib = e.bl();
    ib ? (e = ib.oD(e)) ? (e.Ge(Ia, e.xW() + 1), (Ia = ib.tFf(e)) && .001 < Ia.Tc ? (Xa.Cge(f, this.j2b[f] ? this.j2b[f] : f, Ia.ka, Ia.la, Ia.Tc, Ia.Fe, ib.nr()), this.XSf(f, Ia.ka, Ia.la, Ia.Fe, Ia.Tc, ib, cb), !0 === this.DVd[f] && (this.iIe(f), this.j0d(f))) : (Xa.PLb(f), this.vGf(f), this.j0d(f))) : Xa.PLb(f) : Xa.PLb(f);
  }
};
tb.hge = function (f, e, Ia) {
  if (this.Wa) {
    var cb = this.Wa.sb, Xa = cb.Vna(7);
    cb = cb.Vna(3);
    for (var ib in this.wSa) {
      var y = this.wSa[ib];
      (!0 === y.Is && y.Ij === Ia && y.Oj - cb < f && f < y.Ag + cb && y.hp - cb < e && e < y.kh + cb || Math.abs(f - y.ka) < Xa && y.la - cb < e && e < y.la + y.Jb + cb && y.Ij === Ia) && this.iIe(ib);
    }
  }
};
tb.iIe = function (f) {
  if (this.Wa) {
    var e = this.Wa.Uc, Ia = this.Wa.sb;
    if (this.wSa[f]) {
      var cb = this.wSa[f];
      cb.BYa && clearTimeout(cb.BYa);
      cb.BYa = setTimeout(function () {
        cb.BYa = null;
        e.rXd(f);
      }, AscCommon.$Ef);
      var Xa = AscCommon.hGb(this.j2b[f] ? this.j2b[f] : f, null, !0);
      Ia = Ia.KUf(f);
      Xa && Ia && this.OLe(f, Ia.ka, Ia.la, Xa);
    }
  }
};
tb.ATc = function (f) {
  this.DVd[f] = !0;
};
tb.j0d = function (f) {
  delete this.DVd[f];
};
tb.XSf = function (f, e, Ia, cb, Xa, ib, y) {
  if (this.wSa[f]) {
    var kb = this.wSa[f];
    kb.BYa ? !0 === y && (y = this.Wa.Uc, clearTimeout(kb.BYa), kb.BYa = null, y.rXd(f)) : kb.BYa = null;
    kb.ka = e;
    kb.la = Ia;
    kb.Ij = cb;
    kb.Jb = Xa;
  } else kb = { ka: e, la: Ia, Jb: Xa, Ij: cb, Is: !1, BYa: null }, this.wSa[f] = kb;
  (cb = ib.nr()) ? (kb.Is = !0, f = cb.Tb(kb.ka, kb.la), e = cb.Sb(kb.ka, kb.la), Ia = cb.Tb(kb.ka, kb.la + kb.Jb), cb = cb.Sb(kb.ka, kb.la + kb.Jb), kb.Oj = Math.min(f, Ia), kb.hp = Math.min(e, cb), kb.Ag = Math.max(f, Ia), kb.kh = Math.max(e, cb)) : kb.Is = !1;
};
tb.vGf = function (f) {
  this.wSa[f] && (this.wSa[f].BYa && (this.Wa.Uc.rXd(f), clearTimeout(this.wSa[f].BYa)), delete this.wSa[f]);
};
tb.OLe = function (f, e, Ia, cb) {
  if (this.Wa) {
    var Xa = this.wSa[f];
    Xa && Xa.BYa && this.Wa.Uc.chg(f, e, Ia, cb);
  }
};
tb.fPc = function () {
  AscCommon.Gdc.prototype.fPc.apply(this, arguments);
  if (this.Wa && this.Wa.Uc) {
    var f = this.Wa.Uc;
    this.Wa.mC.WHb && f.nsg();
  }
};
tb.AWd = function (f) {
  this.Wa.P$b(f);
};
window.AscCommon = window.AscCommon || {};
window.AscCommon.JYd = WE;
window.AscCommon.Kd = new WE;
'use strict';
(function (f) {
  function e() {
    this.Ia = '_macrosGlobalId';
    this.Jf = new AscCommon.C7;
    this.ob = '';
    AscCommon.Fg.ia(this, this.Ia);
  }

  function Ia(e, f, Ia) {
    AscDFH.hE.call(this, e, f, Ia);
  }

  e.prototype.Btb = function (e) {
    AscCommon.History.ia(new Ia(this, this.ob, e));
    this.ob = e;
  };
  e.prototype.jpa = function () {
    return this.ob;
  };
  e.prototype.rb = function () {
    return this.Ia;
  };
  e.prototype.Pfe = function () {
    this.Jf.En(this.Ia);
  };
  e.prototype.Vg = function (e) {
    e.cb(AscDFH.gHc);
    e.Rb('' + this.Ia);
    e.Rb(this.ob);
  };
  e.prototype.eh = function (e) {
    this.Ia = e.cc();
    this.ob = e.cc();
  };
  e.prototype.hf = function () {
  };
  e.prototype.Nzf = function () {
    try {
      var e = JSON.parse(this.ob);
      if (e.macrosArray) for (var f = 0; f < e.macrosArray.length; f++) !0 === e.macrosArray[f].autostart && eval('(function(){ var Api = window.g_asc_plugins.api;\n' + e.macrosArray[f].value + '\n})();');
    } catch (ib) {
    }
  };
  AscDFH.Ca[AscDFH.mYb] = Ia;
  AscDFH.Ac[AscDFH.mYb] = [AscDFH.mYb];
  Ia.prototype = Object.create(AscDFH.hE.prototype);
  Ia.prototype.constructor = Ia;
  Ia.prototype.ea = AscDFH.mYb;
  Ia.prototype.Oc = function (e) {
    this.Na.ob = e;
  };
  f.AscCommon =
    f.AscCommon || {};
  f.AscCommon.v1c = e;
})(window);
'use strict';
(function (f, e) {
  function Ia(y, Ia) {
    this.Wy = Ia;
    this.OCd = this.l6 = !1;
    this.l3b = null;
    this.D9c = y['id-view'] || '';
    this.Xe = null;
    this.IP = !0 === y.mobile;
    this.M8b = !0 === y.embedded;
    this.Ex = !1;
    this.hKb = Asc.HIb.kf;
    this.SOb = this.tt = this.K4 = null;
    this.DocumentType = 0;
    this.To = null;
    this.Cga = this.f_ = e;
    this.nlb = 'null';
    this.fwd = null;
    this.cwd = e;
    this.ara = this.XIb = 'null';
    this.dwd = Asc.Inb.gld;
    this.BXc = e;
    this.w7b = AscCommon.Hwb.kf;
    this.PRa = new AscCommon.xee;
    Ia = f.location.protocol;
    this.UKf = (Ia && '' !== Ia ? Ia + '//' : '') + f.location.host;
    this.z6f = f.location.pathname;
    this.sVc = !1;
    this.Fkb = 0;
    this.ssb = [];
    this.UOb = [];
    this.osd = 0;
    this.ohb = null;
    this.Z9e = 2E3;
    this.$9e = 6E5;
    this.NOf = 1E3;
    this.c2a = this.Uwb = this.gVb = this.e_ = !1;
    this.Ws = AscCommon.Ws.te(y.translate);
    this.KSa = this.QBa = this.Nnb = null;
    this.PUc = this.R8b = this.k6 = !1;
    this.$W = e;
    this.ll = new AscCommon.FNd;
    this.KHc = !0;
    this.OTb = [];
    this.MRb = '';
    this.Era = null;
    this.vca = this.W1b = !1;
    this.I1 = this.CYc = this.VCd = !0;
    this.QHc = this.NLa = !1;
    this.k0a = null;
    this.$Ea = !1;
    this.xxb = this.POa = null;
    this.ayb = !1;
    this.Wfa =
      null;
    this.WCd = this.lcc = this.L5a = this.sna = this.zIa = !1;
    this.t7 = this.tna = this.mNc = null;
    this.dag = !1;
    this.lIc = 0;
    this.oRa = [];
    this.cSa = '';
    this.awd = !1;
    this.k3b = this.i$ = null;
    this.tvd = !1 !== y.copyoutenabled;
    this.LP = y.watermark_on_draw ? new AscCommon.$1c(y.watermark_on_draw, this) : null;
    this.kbb = !1;
    this.s5 = new AscCommon.Oee;
    this.KYc = !0;
    this.SPa = {};
    this.jib = [];
    this.fhb = !1;
    return this;
  }

  var cb = AscCommon.bs, Xa = AscCommon.Std, ib = AscCommon.bUc, y = Asc.Fk, kb = Asc.OH, rb = Asc.vE;
  Ia.prototype.U_ = function () {
    f.AscDesktopEditor &&
    f.AscDesktopEditor.CreateEditorApi(this);
    var e = this;
    this.Xe = document.getElementById(this.D9c);
    AscCommon.qpe(function (f, Ta) {
      y.pg.JZ !== f ? e.Oe('asc_onError', f, y.Lk.Vo) : e.ppc([Ta]);
      e.$x(rb.Gs, kb.uda);
    });
    AscCommon.Apf(this.Qod(), function () {
      e.l6 = !0;
      e.iqc();
      e.ZEd();
    }, function () {
      e.Oe('asc_onError', Asc.Fk.pg.ajc, y.Lk.JU);
    });
    AscFonts.load(e, function () {
      e.OCd = !0;
      e.i3b(null);
    }, function () {
      e.Oe('asc_onError', Asc.Fk.pg.ajc, y.Lk.JU);
    });
    var Ia = f.onerror;
    f.onerror = function (Ta, Xa, yb, cb, ib) {
      f.onerror = Ia;
      e.ll.aHa('Error: ' +
        Ta + ' Script: ' + Xa + ' Line: ' + yb + ':' + cb + ' userAgent: ' + (navigator.userAgent || navigator.vendor || f.opera) + ' platform: ' + navigator.platform + ' isLoadFullApi: ' + e.l6 + ' isDocumentLoadComplete: ' + e.vca + ' StackTrace: ' + (ib ? ib.stack : ''));
      e.l6 && (e.vca ? (e.Oe('asc_onError', Asc.Fk.pg.e6c, y.Lk.Vo), e.VZa(!0)) : e.Oe('asc_onError', Asc.Fk.pg.QIa, y.Lk.JU));
      return Ia ? Ia.apply(this, arguments) : !1;
    };
    AscCommon.Se.PFa && (document.body.onmousewheel = function (e) {
      e.stopPropagation && e.stopPropagation();
      return e.returnValue = !1;
    });
  };
  Ia.prototype.Qod =
    function () {
      var e = '';
      switch (this.Wy) {
        case cb.Tl:
          e = 'word';
          break;
        case cb.NK:
          e = 'cell';
          break;
        case cb.$y:
          e = 'slide';
      }
      return e;
    };
  Ia.prototype.G5e = function (e) {
    e || (e = ['Arial', 'Symbol', 'Wingdings', 'Courier New', 'Times New Roman']);
    this.K4.Xic(e);
  };
  Ia.prototype.YZe = function () {
    return '../Common/Images/';
  };
  Ia.prototype.n1e = function () {
    return this.ara;
  };
  Ia.prototype.ord = function () {
    return null;
  };
  Ia.prototype.T0e = function () {
    var e = this.Wvc();
    return e ? e.Io() : null;
  };
  Ia.prototype.Wvc = function () {
    return null;
  };
  Ia.prototype.Trd = function () {
  };
  Ia.prototype.wsc = function (y) {
    var Ta = this.To;
    y && (this.To = y);
    this.To && (this.f_ = this.To.F0a(), this.Cga = this.To.Ala(), this.nlb = this.To.zRc(), this.ara = this.To.eYc(), this.XIb = this.To.E0a(), this.cwd = this.To.gjf(), this.BXc = this.To.vJa(), this.$W = new AscCommon.STb, this.$W.vw(this.To.Ala()), this.$W.jMc(this.To.rJb()), this.$W.HAf(this.To.Cwc()), this.$W.XAf(this.To.Kwc()), this.ll.M4b(this.f_), this.LP && this.LP.O2c());
    AscCommon.ubf === this.nlb ? (this.k6 = !0, AscCommon.WD.k6 = !0, this.To.uHd(!0)) : AscCommon.wrf === this.nlb &&
      this.To.uHd(!0);
    this.To.Kyd() && e !== f.AscDesktopEditor && (y = this.To.Kyd(), y.userId = this.Cga, f.AscDesktopEditor.execCommand('portal:cryptoinfo', JSON.stringify(y)));
    e === f.AscDesktopEditor || this.To && this.To.NRa || f.AscDesktopEditor.SetDocumentName(this.ara);
    this.k6 || e === f.AscDesktopEditor || e === f.AscDesktopEditor.CryptoMode || this.To.cxf(0 < f.AscDesktopEditor.CryptoMode);
    Ta || this.ZEd();
  };
  Ia.prototype.B5e = function () {
    return this.To && !0 === this.To.Awc() ? !0 : !1;
  };
  Ia.prototype.z9 = function () {
  };
  Ia.prototype.Wza = function (e) {
    var f =
      !1;
    this.Fa.Rva && (f = !0);
    f && e && this.Fa.oHf && (f = !1);
    return f;
  };
  Ia.prototype.Zgb = function () {
    return this.tvd;
  };
  Ia.prototype.O8d = function () {
    return !1;
  };
  Ia.prototype.Oe = function () {
  };
  Ia.prototype.BQb = function () {
    this.Oe('asc_onOpenDocumentProgress', this.PRa);
  };
  Ia.prototype.jCf = function (e) {
    this.Ex || this.Oe('asc_onInitEditorFonts', e);
  };
  Ia.prototype.$G = function (e, f) {
    this.Oe('asc_onStartAction', e, f);
    rb.Gs === e && this.Elb();
  };
  Ia.prototype.$x = function (e, f) {
    this.Oe('asc_onEndAction', e, f);
    rb.Gs === e && this.llb();
  };
  Ia.prototype.ihg =
    function () {
      this.Oe('asc_OnTryUndoInFastCollaborative');
    };
  Ia.prototype.VZa = function () {
  };
  Ia.prototype.B9e = function (e) {
    this.hKb = e;
  };
  Ia.prototype.Dyb = function () {
    return this.Ex;
  };
  Ia.prototype.eK = function () {
    return !this.Ex && this.hKb === Asc.HIb.kf;
  };
  Ia.prototype.rVd = function () {
    return this.hKb === Asc.HIb.WUc;
  };
  Ia.prototype.TRc = function () {
    return this.hKb === Asc.HIb.Ucd;
  };
  Ia.prototype.q2 = function () {
    return 0 !== this.Fkb;
  };
  Ia.prototype.Elb = function () {
    ++this.Fkb;
  };
  Ia.prototype.llb = function () {
    this.Fkb--;
    0 > this.Fkb && (this.Fkb =
      0);
    if (!this.q2()) {
      for (var e = this.ssb.length, f = 0; f < e; f++) this.ssb[f](this.UOb[f]);
      this.ssb.splice(0, e);
      this.UOb.splice(0, e);
    }
  };
  Ia.prototype.fSd = function (e, f) {
    return this.q2() ? (this.ssb[this.ssb.length] = e, this.UOb[this.UOb.length] = f, !1) : !0;
  };
  Ia.prototype.wqe = function () {
    var e = !1;
    switch (this.Wy) {
      case cb.Tl:
        e = !this.O8d();
        break;
      case cb.$y:
        e = !0;
    }
    return e;
  };
  Ia.prototype.nZc = function () {
    this.Oe('asc_onPrint');
  };
  Ia.prototype.hrc = function (y, Ia) {
    this.w7b = AscCommon.Hwb.ORa;
    var Ta = null;
    this.To && this.To.NRa || (Ta = !f.NATIVE_EDITOR_ENJINE &&
      this.pQc() || e, 'string' === typeof Ta && (Ta = Asc.ROa ? Asc.ROa[Ta] : e), Ta = {
      c: 'open',
      id: this.f_,
      userid: this.Cga,
      format: this.XIb,
      url: this.nlb,
      title: this.ara,
      lcid: Ta,
      nobase64: !0
    }, y && (Ta.serverVersion = y.v$d, Ta.closeonerror = y.HYc, Ta.tokenHistory = y.k_c, Ta.userconnectionid = this.ll.mSa()));
    y ? this.ll.NNc(Ta) : this.ll.lUb(this.Dyb(), Ta);
    Ia || this.$G(rb.Gs, kb.ORa);
    if (this.To.Awc() && f.AscDesktopEditor && !f.AscDesktopEditor.IsLocalFile(!0)) {
      var Xa = this;
      f.AscDesktopEditor.OpenFileCrypt(this.To.eYc(), this.To.zRc(), function () {
        Xa.dFd.apply(Xa,
          arguments);
      });
    }
  };
  Ia.prototype.JXe = function () {
    this.KXe();
  };
  Ia.prototype.KXe = function () {
    var e = new AscCommon.Wcd;
    e.data = 'XLSY;v2;5958;BAKAAgAAA7kDAAAEzAMAAABaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUBAAAAHgAAAAEZAAAAAAAAAAABAAAAAAIAAAAABAAAAAAFAAAAAAQKAAAABQAAAAAFAAAAAAYvAAAAByoAAAABBgMAAAACAQEEBg4AAABDAGEAbABpAGIAcgBpAAkBAQYFAAAAAAAAJkAOHQAAAAMYAAAABgQAAAAABwQAAAAACAQAAAAACQQAAAAAAiMAAAADHgAAAAYEAAAAAAcEAAAAAAgEAAAAAAkEAAAAAAwEAAAAAA8oAAAAECMAAAAABAAAAAAAAAAEDAAAAE4AbwByAG0AYQBsAAUEAAAAAAAAAAoAAAAADE4AAAAAIgAAAFQAYQBiAGwAZQBTAHQAeQBsAGUATQBlAGQAaQB1AG0AMgABIgAAAFAAaQB2AG8AdABTAHQAeQBsAGUATABpAGcAaAB0ADEANgAPAAAAAAAAAAABBQAAAAIAAAAAigAAAACFAAAAARgAAAAABgwAAABTAGgAZQBlAHQAMQABBAEAAAAEBAAAAEEAMQAWBQAAABcAAAAACwoAAAABBQAAAAAAAC5ADjwAAAAABUfhehSuxzFAAQXMzMzMzAwzQAIFR+F6FK7HMUADBczMzMzMDDNABAV7FK5H4XoeQAUFexSuR+F6HkAJAAAAAOgSAAAF4xIAABTeEgAA+gAMAAAATwBmAGYAaQBjAGUAIABUAGgAZQBtAGUA+wCxEgAAABUBAAD6AAYAAABPAGYAZgBpAGMAZQD7DB4AAAAEGQAAAPoABgAAAHcAaQBuAGQAbwB3AAH/Av8D//sNDQAAAAEIAAAA+gDuAewC4fsIJgAAAAQhAAAA+gAKAAAAdwBpAG4AZABvAHcAVABlAHgAdAABAAIAAwD7Cg0AAAABCAAAAPoAgAEAAoD7AA0AAAABCAAAAPoATwGBAr37CQ0AAAABCAAAAPoAHwFJAn37AQ0AAAABCAAAAPoAwAFQAk37Ag0AAAABCAAAAPoAmwG7Aln7Aw0AAAABCAAAAPoAgAFkAqL7Cw0AAAABCAAAAPoAAAEAAv/7BA0AAAABCAAAAPoASwGsAsb7BQ0AAAABCAAAAPoA9wGWAkb7AakKAAD6AAkAAABDAG8AbQBwAG8AcwBpAHQAZQD7AEMFAAAAFQAAAPoDBwAAAEMAYQBsAGkAYgByAGkA+wERAAAA+gMFAAAAQQByAGkAYQBsAPsCEQAAAPoDBQAAAEEAcgBpAGEAbAD7A/gEAAAeAAAAACQAAAD6AAQAAABKAHAAYQBuAAEIAAAALf8z/yAAMP+0MLcwwzCvMPsAHgAAAPoABAAAAEgAYQBuAGcAAQUAAADRuUDHIADgrBW1+wAYAAAA+gAEAAAASABhAG4AcwABAgAAAItbU0/7AB4AAAD6AAQAAABIAGEAbgB0AAEFAAAArl/fjmNr0Z7UmvsAHgAAAPoABAAAAEEAcgBhAGIAAQUAAABBAHIAaQBhAGwA+wAeAAAA+gAEAAAASABlAGIAcgABBQAAAEEAcgBpAGEAbAD7ACgAAAD6AAQAAABUAGgAYQBpAAEKAAAAQwBvAHIAZABpAGEAIABOAGUAdwD7AB4AAAD6AAQAAABFAHQAaABpAAEFAAAATgB5AGEAbABhAPsAIAAAAPoABAAAAEIAZQBuAGcAAQYAAABWAHIAaQBuAGQAYQD7ACAAAAD6AAQAAABHAHUAagByAAEGAAAAUwBoAHIAdQB0AGkA+wAkAAAA+gAEAAAASwBoAG0AcgABCAAAAEQAYQB1AG4AUABlAG4AaAD7AB4AAAD6AAQAAABLAG4AZABhAAEFAAAAVAB1AG4AZwBhAPsAHgAAAPoABAAAAEcAdQByAHUAAQUAAABSAGEAYQB2AGkA+wAkAAAA+gAEAAAAQwBhAG4AcwABCAAAAEUAdQBwAGgAZQBtAGkAYQD7ADwAAAD6AAQAAABDAGgAZQByAAEUAAAAUABsAGEAbgB0AGEAZwBlAG4AZQB0ACAAQwBoAGUAcgBvAGsAZQBlAPsAOAAAAPoABAAAAFkAaQBpAGkAARIAAABNAGkAYwByAG8AcwBvAGYAdAAgAFkAaQAgAEIAYQBpAHQAaQD7ADgAAAD6AAQAAABUAGkAYgB0AAESAAAATQBpAGMAcgBvAHMAbwBmAHQAIABIAGkAbQBhAGwAYQB5AGEA+wAiAAAA+gAEAAAAVABoAGEAYQABBwAAAE0AVgAgAEIAbwBsAGkA+wAgAAAA+gAEAAAARABlAHYAYQABBgAAAE0AYQBuAGcAYQBsAPsAIgAAAPoABAAAAFQAZQBsAHUAAQcAAABHAGEAdQB0AGEAbQBpAPsAHgAAAPoABAAAAFQAYQBtAGwAAQUAAABMAGEAdABoAGEA+wA2AAAA+gAEAAAAUwB5AHIAYwABEQAAAEUAcwB0AHIAYQBuAGcAZQBsAG8AIABFAGQAZQBzAHMAYQD7ACIAAAD6AAQAAABPAHIAeQBhAAEHAAAASwBhAGwAaQBuAGcAYQD7ACIAAAD6AAQAAABNAGwAeQBtAAEHAAAASwBhAHIAdABpAGsAYQD7ACYAAAD6AAQAAABMAGEAbwBvAAEJAAAARABvAGsAQwBoAGEAbQBwAGEA+wAsAAAA+gAEAAAAUwBpAG4AaAABDAAAAEkAcwBrAG8AbwBsAGEAIABQAG8AdABhAPsAMgAAAPoABAAAAE0AbwBuAGcAAQ8AAABNAG8AbgBnAG8AbABpAGEAbgAgAEIAYQBpAHQAaQD7AB4AAAD6AAQAAABWAGkAZQB0AAEFAAAAQQByAGkAYQBsAPsANAAAAPoABAAAAFUAaQBnAGgAARAAAABNAGkAYwByAG8AcwBvAGYAdAAgAFUAaQBnAGgAdQByAPsAIgAAAPoABAAAAEcAZQBvAHIAAQcAAABTAHkAbABmAGEAZQBuAPsBQwUAAAAVAAAA+gMHAAAAQwBhAGwAaQBiAHIAaQD7AREAAAD6AwUAAABBAHIAaQBhAGwA+wIRAAAA+gMFAAAAQQByAGkAYQBsAPsD+AQAAB4AAAAAJAAAAPoABAAAAEoAcABhAG4AAQgAAAAt/zP/IAAw/7QwtzDDMK8w+wAeAAAA+gAEAAAASABhAG4AZwABBQAAANG5QMcgAOCsFbX7ABgAAAD6AAQAAABIAGEAbgBzAAECAAAAi1tTT/sAHgAAAPoABAAAAEgAYQBuAHQAAQUAAACuX9+OY2vRntSa+wAeAAAA+gAEAAAAQQByAGEAYgABBQAAAEEAcgBpAGEAbAD7AB4AAAD6AAQAAABIAGUAYgByAAEFAAAAQQByAGkAYQBsAPsAKAAAAPoABAAAAFQAaABhAGkAAQoAAABDAG8AcgBkAGkAYQAgAE4AZQB3APsAHgAAAPoABAAAAEUAdABoAGkAAQUAAABOAHkAYQBsAGEA+wAgAAAA+gAEAAAAQgBlAG4AZwABBgAAAFYAcgBpAG4AZABhAPsAIAAAAPoABAAAAEcAdQBqAHIAAQYAAABTAGgAcgB1AHQAaQD7ACQAAAD6AAQAAABLAGgAbQByAAEIAAAARABhAHUAbgBQAGUAbgBoAPsAHgAAAPoABAAAAEsAbgBkAGEAAQUAAABUAHUAbgBnAGEA+wAeAAAA+gAEAAAARwB1AHIAdQABBQAAAFIAYQBhAHYAaQD7ACQAAAD6AAQAAABDAGEAbgBzAAEIAAAARQB1AHAAaABlAG0AaQBhAPsAPAAAAPoABAAAAEMAaABlAHIAARQAAABQAGwAYQBuAHQAYQBnAGUAbgBlAHQAIABDAGgAZQByAG8AawBlAGUA+wA4AAAA+gAEAAAAWQBpAGkAaQABEgAAAE0AaQBjAHIAbwBzAG8AZgB0ACAAWQBpACAAQgBhAGkAdABpAPsAOAAAAPoABAAAAFQAaQBiAHQAARIAAABNAGkAYwByAG8AcwBvAGYAdAAgAEgAaQBtAGEAbABhAHkAYQD7ACIAAAD6AAQAAABUAGgAYQBhAAEHAAAATQBWACAAQgBvAGwAaQD7ACAAAAD6AAQAAABEAGUAdgBhAAEGAAAATQBhAG4AZwBhAGwA+wAiAAAA+gAEAAAAVABlAGwAdQABBwAAAEcAYQB1AHQAYQBtAGkA+wAeAAAA+gAEAAAAVABhAG0AbAABBQAAAEwAYQB0AGgAYQD7ADYAAAD6AAQAAABTAHkAcgBjAAERAAAARQBzAHQAcgBhAG4AZwBlAGwAbwAgAEUAZABlAHMAcwBhAPsAIgAAAPoABAAAAE8AcgB5AGEAAQcAAABLAGEAbABpAG4AZwBhAPsAIgAAAPoABAAAAE0AbAB5AG0AAQcAAABLAGEAcgB0AGkAawBhAPsAJgAAAPoABAAAAEwAYQBvAG8AAQkAAABEAG8AawBDAGgAYQBtAHAAYQD7ACwAAAD6AAQAAABTAGkAbgBoAAEMAAAASQBzAGsAbwBvAGwAYQAgAFAAbwB0AGEA+wAyAAAA+gAEAAAATQBvAG4AZwABDwAAAE0AbwBuAGcAbwBsAGkAYQBuACAAQgBhAGkAdABpAPsAHgAAAPoABAAAAFYAaQBlAHQAAQUAAABBAHIAaQBhAGwA+wA0AAAA+gAEAAAAVQBpAGcAaAABEAAAAE0AaQBjAHIAbwBzAG8AZgB0ACAAVQBpAGcAaAB1AHIA+wAiAAAA+gAEAAAARwBlAG8AcgABBwAAAFMAeQBsAGYAYQBlAG4A+wLkBgAA+gAGAAAATwBmAGYAaQBjAGUA+wCyAgAAAwAAAAATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wBDAQAABD4BAAD6AQH7ACcBAAADAAAAAFwAAAD6AAAAAAD7AFAAAAADSwAAAPoADvsAQgAAAAIAAAABGAAAAPoABgAAAGEAOgB0AGkAbgB0AAFQwwAA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAHgkwQA+wBcAAAA+gC4iAAA+wBQAAAAA0sAAAD6AA77AEIAAAACAAAAARgAAAD6AAYAAABhADoAdABpAG4AdAABiJAAAPsBHAAAAPoACAAAAGEAOgBzAGEAdABNAG8AZAAB4JMEAPsAXAAAAPoAoIYBAPsAUAAAAANLAAAA+gAO+wBCAAAAAgAAAAEYAAAA+gAGAAAAYQA6AHQAaQBuAHQAAZg6AAD7ARwAAAD6AAgAAABhADoAcwBhAHQATQBvAGQAATBXBQD7AQkAAAD6AEAx9wABAfsASQEAAAREAQAA+gEB+wAtAQAAAwAAAABeAAAA+gAAAAAA+wBSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAE4xwAA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAHQ+wEA+wBeAAAA+gCAOAEA+wBSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAFIawEA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAHQ+wEA+wBeAAAA+gCghgEA+wBSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAEwbwEA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAFYDwIA+wEJAAAA+gBAMfcAAQD7AQoBAAADAAAAAIMAAAD6AAABAAIBAzUlAAD7AFwAAAADVwAAAABSAAAAA00AAAD6AA77AEQAAAACAAAAARoAAAD6AAcAAABhADoAcwBoAGEAZABlAAEYcwEA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAEomgEA+wEEAAAA+gAG+wIHAAAA+gAAAAAA+wA6AAAA+gAAAQACAQM4YwAA+wATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wEEAAAA+gAG+wIHAAAA+gAAAAAA+wA6AAAA+gAAAQACAQPUlAAA+wATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wEEAAAA+gAG+wIHAAAA+gAAAAAA+wITAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAPuAgAAAwAAAAATAAAAAw4AAAAACQAAAAMEAAAA+gAO+wCmAQAABKEBAAD6AQH7AEgBAAADAAAAAFwAAAD6AAAAAAD7AFAAAAADSwAAAPoADvsAQgAAAAIAAAABGAAAAPoABgAAAGEAOgB0AGkAbgB0AAFAnAAA+wEcAAAA+gAIAAAAYQA6AHMAYQB0AE0AbwBkAAEwVwUA+wB7AAAA+gBAnAAA+wBvAAAAA2oAAAD6AA77AGEAAAADAAAAARgAAAD6AAYAAABhADoAdABpAG4AdAAByK8AAPsBGgAAAPoABwAAAGEAOgBzAGgAYQBkAGUAAbiCAQD7ARwAAAD6AAgAAABhADoAcwBhAHQATQBvAGQAATBXBQD7AF4AAAD6AKCGAQD7AFIAAAADTQAAAPoADvsARAAAAAIAAAABGgAAAPoABwAAAGEAOgBzAGgAYQBkAGUAASBOAAD7ARwAAAD6AAgAAABhADoAcwBhAHQATQBvAGQAARjkAwD7AksAAAD6AAD7AEIAAAD6AAUAAAA1ADAAMAAwADAAAQYAAAAtADgAMAAwADAAMAACBQAAADUAMAAwADAAMAADBgAAADEAOAAwADAAMAAwAPsAIgEAAAQdAQAA+gEB+wDIAAAAAgAAAABcAAAA+gAAAAAA+wBQAAAAA0sAAAD6AA77AEIAAAACAAAAARgAAAD6AAYAAABhADoAdABpAG4AdAABgDgBAPsBHAAAAPoACAAAAGEAOgBzAGEAdABNAG8AZAAB4JMEAPsAXgAAAPoAoIYBAPsAUgAAAANNAAAA+gAO+wBEAAAAAgAAAAEaAAAA+gAHAAAAYQA6AHMAaABhAGQAZQABMHUAAPsBHAAAAPoACAAAAGEAOgBzAGEAdABNAG8AZAABQA0DAPsCRwAAAPoAAPsAPgAAAPoABQAAADUAMAAwADAAMAABBQAAADUAMAAwADAAMAACBQAAADUAMAAwADAAMAADBQAAADUAMAAwADAAMAD7BAQAAAAAAAAA';
    e.Bnb = AscCommon.Mud(e.data, AscCommon.kta.RRa);
    this.i3b(e);
  };
  Ia.prototype.uFb = function () {
  };
  Ia.prototype.VQd = function () {
  };
  Ia.prototype.Mpd = function (e) {
    var f = this;
    AscCommon.Grf(e, this.fwd, AscCommon.kta.RRa, function (e, Ta) {
      e || !Ta.Bnb && !Asc.baf.test(f.To && f.To.E0a()) ? f.Oe('asc_onError', e ? y.pg.QN : y.pg.QIa, y.Lk.JU) : f.i3b(Ta);
    });
    this.VQd();
  };
  Ia.prototype.dFd = function (e) {
    if (this.l6) if (this.k3b = null, null == e) this.Oe('asc_onError', y.pg.QIa, y.Lk.JU); else {
      var f = new AscCommon.Wcd;
      f.Bnb = AscCommon.Mud(e, AscCommon.kta.RRa);
      f.data = e;
      this.V2a(f);
      this.Oe('asc_onDocumentPassword', '' !== this.cSa);
    } else this.k3b = e;
  };
  Ia.prototype.Ocb = function () {
  };
  Ia.prototype.dsd = function () {
    this.sVc = !0;
    this.uFb();
  };
  Ia.prototype.X9e = function () {
    this.$G(rb.tP, kb.FH);
  };
  Ia.prototype.mZc = function () {
    var e = this;
    this.vca = !0;
    f.IS_NATIVE_EDITOR || setInterval(function () {
      e.lUe();
    }, 40);
    this.$x(rb.Gs, kb.ORa);
    this.Oe('asc_onDocumentContentReady');
    f.gj && f.gj.zUa('onDocumentContentReady');
    cb.NK === this.Wy && this.bFd(this.lJf());
    this.To && this.pluginMethod_SetProperties(this.To.vJa());
    this.i$ && !this.awd && this.i$.Nzf();
    if (f.AscDesktopEditor && f.AscDesktopEditor.onDocumentContentReady) f.AscDesktopEditor.onDocumentContentReady();
  };
  Ia.prototype.hHd = function (e, f) {
    AscCommon.bUc.kf !== f ? this.Oe(f, e, function () {
    }) : AscCommon.getFile(e);
  };
  Ia.prototype.j0a = function () {
    return this.ll.j0a();
  };
  Ia.prototype.W8e = function (e) {
    this.QHc = e;
  };
  Ia.prototype.D7a = function () {
  };
  Ia.prototype.Tpd = function () {
  };
  Ia.prototype.rqc = function () {
    return !1;
  };
  Ia.prototype.qpd = function () {
    return !1;
  };
  Ia.prototype.Ppd = function (e) {
    var f =
      this;
    0 == e.saveLock ? this.q2() ? (this.ll.csa = function () {
      f.I1 = !0;
      f.NLa = !1;
      f.ohb = null;
      f.e_ && f.GTb();
    }, this.ll.K5b()) : (this.$G(rb.tP, kb.lH), (this.gVb = this.e_) && this.Uwb && this.ll.rya(!0), this.e_ = this.Uwb = !1, this.Qpd()) : (e = this.ll.I0a(), AscCommon.WLb.k3c === e || AscCommon.WLb.j3c === e ? (this.NLa = !1, this.I1 = !0) : this.NLa ? setTimeout(function () {
      f.ll.G7a(function (e) {
        f.Ppd(e);
      });
    }, 1E3) : (this.I1 = !0, this.e_ && this.GTb()));
  };
  Ia.prototype.Qpd = function () {
  };
  Ia.prototype.lUe = function () {
    !this.I1 || this.Ex || !this.e_ && 0 === this.osd ||
    (this.e_ ? (this.ohb = new Date, this.xda(!0, !0)) : this.hod());
  };
  Ia.prototype.hod = function () {
  };
  Ia.prototype.w1d = function () {
    return !0;
  };
  Ia.prototype.GTb = function (e) {
    e && this.vca && !this.I1 && this.ll.aHa('Error: connection state changed waitAuth;this.canSave:' + this.I1);
    this.vca ? (this.Uwb = this.e_ = !0, this.I1 && (this.ll.Zjb(!1, !0, AscCommon.History.L7c()), this.UGb(), AscCommon.History.$Ce(), this.D7a(), this.Tpd(), this.e_ = this.Uwb = !1)) : (this.UGb(), this.ll.Zjb(!1, !0));
  };
  Ia.prototype.a8e = function (e) {
    'number' === typeof e &&
    (this.osd = 1E3 * e);
  };
  Ia.prototype.A_e = function (e) {
    this.ll.LLc(e);
  };
  Ia.prototype.z_e = function () {
    this.ll.Zvc();
  };
  Ia.prototype.B_e = function () {
    this.ll.pwc();
  };
  Ia.prototype.q1e = function () {
    this.g1d();
  };
  Ia.prototype.Kpd = function () {
    if (this.W1b) {
      var e = new AscCommon.Wqd;
      null !== this.Era && (e.gKd(this.Era.type), e.qAf(this.Era.branding), e.vAf(this.Era.customization), e.SAf(this.Era.light), e.YAf(this.Era.mode), e.lBf(this.Era.rights), e.oAf(this.Era.buildVersion), e.nAf(this.Era.buildNumber));
      this.Oe('asc_onGetEditorPermissions',
        e);
    }
  };
  Ia.prototype.azd = function () {
  };
  Ia.prototype.g1d = function () {
    var Ta = this;
    if (null == this.$W || null == this.$W.sE()) this.$W = new AscCommon.STb, this.$W.vw('Unknown'), this.$W.jMc('Unknown');
    (f.NATIVE_EDITOR_ENJINE || this.To && this.To.NRa) && !f.IS_NATIVE_EDITOR || this.ll.Q3a(null);
    this.ll.rGa = function (e, f) {
      Ta.Oe('asc_onCoAuthoringChatReceiveMessage', e, f);
    };
    this.ll.uGa = function (e, f) {
      Ta.Oe('asc_onServerVersion', e, f);
    };
    this.ll.asa = function (e, f) {
      Ta.Oe('asc_onAuthParticipantsChanged', e, f);
    };
    this.ll.EQa = function (e) {
      Ta.Oe('asc_onParticipantsChanged',
        e);
    };
    this.ll.xGa = function (e) {
      Ta.MRb = e;
      Ta.uVe();
    };
    this.ll.wGa = function (e) {
      AscCommon.eg.a7b('' + e);
    };
    this.ll.pya = function () {
      Ta.dsd();
    };
    this.ll.oGa = function () {
      Ta.W1b ? Ta.ll.qXb() ? Ta.ll.lUb(Ta.Dyb(), e, Ta.ECd()) : Ta.hrc(e, !0) : Ta.Kpd();
    };
    this.ll.qGa = function (e) {
      Ta.Era = e;
      Ta.W1b = !0;
      Ta.Kpd();
    };
    this.ll.DQa = function (e) {
      Ta.Era = e;
      Ta.W1b = !0;
      var f = new AscCommon.Wqd;
      f.gKd(e);
      Ta.Oe('asc_onLicenseChanged', f);
    };
    this.ll.yGa = function (e) {
      Ta.Oe('asc_onError', e || y.pg.m7b, y.Lk.Vo);
    };
    this.ll.sGa = function (e) {
      var f = e.title;
      f && (Ta.ara =
        f, Ta.To && Ta.To.VNa(f));
      Ta.Oe('asc_onMeta', e);
    };
    this.ll.vGa = function (e) {
      var f = e.code, y = e.reason;
      e = e.interval;
      var Ia = !0;
      if (Xa.yJd == f) {
        var cb = Ta.ECd();
        cb > e ? Ia = !1 : Ta.ll.jvc(cb);
      } else Xa.xJd == f && (Ia = !1);
      Ia || (Ta.xda(!1, !0) ? (Ta.UKd(AscCommon.Nxd(AscCommon.Rvc(Ta.vca, f))), Ta.xxb = {
        code: f,
        reason: y
      }) : Ta.ll.disconnect(f, y));
    };
    this.ll.nma = function (e) {
      if (AscCommon.Otd.UF === e.type) e.start ? (null !== Ta.k0a || Ta.$Ea ? clearInterval(Ta.k0a) : Ta.$G(rb.tP, kb.aLa), Ta.k0a = setTimeout(function () {
        Ta.k0a = null;
        Ta.$Ea ? Ta.$x(rb.tP, kb.lH) :
          Ta.$x(rb.tP, kb.aLa);
        Ta.$Ea = !1;
        Ta.Oe('asc_onError', Asc.Fk.pg.aLa, y.Lk.Vo);
      }, Asc.Gtd)) : e.izf ? (Ta.$Ea && Ta.$x(rb.tP, kb.lH), Ta.$Ea = !1) : null !== Ta.k0a && (clearInterval(Ta.k0a), Ta.k0a = null, Ta.$Ea ? Ta.$x(rb.tP, kb.lH) : Ta.$x(rb.tP, kb.aLa), Ta.$Ea = !1, e.success || Ta.Oe('asc_onError', Asc.Fk.pg.aLa, y.Lk.Vo)); else if (AscCommon.Kd.gB || null !== Ta.POa) e.start ? (null === Ta.POa ? Ta.$G(rb.tP, kb.bLa) : clearInterval(Ta.POa), Ta.POa = setTimeout(function () {
          Ta.POa = null;
          Ta.$x(rb.tP, kb.bLa);
          Ta.Oe('asc_onError', Asc.Fk.pg.bLa, y.Lk.Vo);
        }, Asc.Gtd)) :
        null !== Ta.POa && (clearInterval(Ta.POa), Ta.POa = null, Ta.$x(rb.tP, kb.bLa), e.success || Ta.Oe('asc_onError', Asc.Fk.pg.bLa, y.Lk.Vo));
    };
    this.ll.nGa = function (e) {
      Ta.$x(rb.Gs, kb.ORa);
      Ta.Wfa && Ta.Wfa.HYc ? Ta.Oe('asc_onError', AscCommon.Rvc(Ta.vca, e.code), Ta.vca ? Asc.Fk.Lk.Vo : Asc.Fk.Lk.JU) : (Ta.Wfa = null, Ta.Oe('asc_onExpiredToken'));
    };
    this.ll.pGa = function () {
      var e = Ta.c2a, f = Ta.I1;
      Ta.c2a = !0;
      Ta.I1 = !1;
      Ta.Oe('asc_onDocumentModifiedChanged');
      Ta.c2a = e;
      Ta.I1 = f;
      Ta.Oe('asc_onDocumentModifiedChanged');
    };
    this.ll.C2 = function (e, f) {
      AscCommon.WLb.kf ===
      Ta.ll.I0a() && Ta.dsd();
      null != f && (e = AscCommon.Rvc(Ta.vca, f), f = Ta.vca ? Asc.Fk.Lk.Vo : Asc.Fk.Lk.JU, Ta.UKd(AscCommon.Nxd(e)), Ta.Oe('asc_onError', e, f));
    };
    this.ll.CQa = function (f) {
      if (AscCommon.WD.e2a()) Ta.tna && (Ta.tna(f ? f.data : e), Ta.tna = null); else if (f.data) switch (f = f.data, f.type) {
        case 'reopen':
        case 'open':
          switch (f.status) {
            case 'updateversion':
            case 'ok':
              var Ia = f.data;
              AscCommon.tH.te(Ia);
              null != Ia['Editor.bin'] ? 'ok' === f.status || Ta.Dyb() ? Ta.Mpd(Ia['Editor.bin']) : Ta.Oe('asc_onDocumentUpdateVersion', function () {
                Ta.KHc &&
                Ta.lrc();
                Ta.Mpd(Ia['Editor.bin']);
              }) : Ta.Oe('asc_onError', y.pg.QIa, y.Lk.JU);
              break;
            case 'needparams':
              Ta.Ocb(f.data);
              break;
            case 'needpassword':
              Ta.Ocb(null, !0);
              break;
            case 'err':
              Ta.Oe('asc_onError', AscCommon.yGb(parseInt(f.data), Asc.Fk.pg.QIa), y.Lk.JU);
          }
          break;
        default:
          Ta.tna ? (Ta.tna(f), Ta.tna = null) : Ta.Oe('asc_onError', y.pg.QN, y.Lk.Vo);
      }
    };
    this.ll.rya = function (e, f) {
      Ta.Ex || (e ? Ta.UGb() : Ta.GTb(f));
    };
    this.ll.U2a = function () {
      Ta.e_ ? Ta.Uwb = !1 : Ta.dRc();
    };
    this.Hod();
    this.ll.te(this.$W, this.f_, this.cwd, 'fghhfgsjdgfjs', this.Wy,
      this.dwd, this.To);
  };
  Ia.prototype.Hod = function () {
  };
  Ia.prototype.UGb = function () {
  };
  Ia.prototype.dRc = function () {
  };
  Ia.prototype.God = function (e) {
    if (this.VCd) {
      var f = this.ll, y = Array.prototype.slice.call(arguments, 1);
      this.OTb.push(function () {
        e.apply(f, y);
      });
      return !0;
    }
    return !1;
  };
  Ia.prototype.hUe = function () {
    this.VCd = !1;
    for (var e = 0; e < this.OTb.length; ++e) this.OTb[e]();
    this.OTb = [];
  };
  Ia.prototype.lrc = function () {
    this.ll.disconnect();
    this.KHc = !1;
    this.VZa(!0);
  };
  Ia.prototype.p2d = function () {
    this.Elb();
  };
  Ia.prototype.P1d = function () {
    this.llb();
  };
  Ia.prototype.eJf = function () {
    this.s5 && (this.s5.disconnect(), this.KYc = !1, this.tqd());
  };
  Ia.prototype.eWc = function () {
  };
  Ia.prototype.tqd = function () {
  };
  Ia.prototype.uVe = function () {
    if (this.s5) {
      var e = this;
      f.AscDesktopEditor ? (f.asc_nativeOnSpellCheck = function (e) {
        var y = f.Asc.editor ? f.Asc.editor : f.editor;
        y.s5 && y.s5.FQa(e);
      }, this.s5.Njb = function (e) {
        f.AscDesktopEditor.SpellCheck(JSON.stringify(e));
      }, this.s5.disconnect = function () {
      }, f.AscDesktopEditor.IsLocalFile && !f.AscDesktopEditor.IsLocalFile() && this.Oe('asc_onSpellCheckInit',
        '1026 1027 1029 1030 1031 1032 1033 1036 1038 1040 1042 1043 1044 1045 1046 1048 1049 1050 1051 1053 1055 1057 1058 1060 1062 1063 1066 1068 1069 1087 1104 1110 1134 2051 2055 2057 2068 2070 3079 3081 3082 4105 7177 9242 10266'.split(' '))) : this.MRb && this.KYc && this.s5.Q3a(this.MRb);
      this.s5.lib = function (f) {
        e.Oe('asc_onSpellCheckInit', f);
      };
      this.s5.FQa = function (f) {
        e.I0d(f);
      };
      this.s5.te(this.f_);
    }
  };
  Ia.prototype.U9e = function (e) {
    e = 'string' === typeof e ? e : e.Tl;
    f.AscDesktopEditor && (f.AscDesktopEditor.SpellCheck('{"type":"add","usrWords":["' +
      e + '"]}'), this.eWc(e));
  };
  Ia.prototype.DRd = function () {
  };
  Ia.prototype.B1d = function () {
    return !1;
  };
  Ia.prototype.Wpd = function () {
  };
  Ia.prototype.ywd = function () {
  };
  Ia.prototype.Ood = function () {
  };
  Ia.prototype.avc = function (e, Ia) {
    var Ta = !!(f.AscDesktopEditor && 0 < f.AscDesktopEditor.CryptoMode);
    Ta && (f.JHc = !0);
    if (!this.B1d(e, Ia)) {
      e && this.$G(rb.Gs, e);
      var Xa = Ia.EYc ? Ia.pSc ? ib.ejc : e === kb.Kab ? ib.Kab : ib.rZd : ib.kf;
      Ta = 'undefined' !== typeof ArrayBuffer && !Ta;
      var cb = { data: null, p3b: null, index: 0, count: 0 }, yb = { c: 'save' };
      yb.id = this.f_;
      yb.userid = this.Cga;
      yb.tokenSession = this.ll.uFa();
      yb.outputformat = Ia.plb;
      yb.title = AscCommon.kbf(this.ara, AscCommon.whf(Ia.plb), Asc.L$e);
      yb.nobase64 = Ta;
      ib.Kab === Xa && (yb.inline = 1);
      if (!this.Ood(e, Ia, yb, cb)) {
        var mb = this;
        this.tna = null;
        Ia.G9 || (this.tna = function (f, Ma) {
          Ma = 403 === Ma ? y.pg.Wcc : y.pg.QN;
          if (null != f && yb.c === f.type) if ('ok' === f.status) {
            if (f = f.data) Ma = y.pg.JZ, mb.hHd(f, Xa);
          } else Ma = AscCommon.yGb(parseInt(f.data), AscCommon.Hwb.lH);
          y.pg.JZ !== Ma && (mb.ywd(), mb.Oe('asc_onError', Ia.z3d || Ma, y.Lk.Vo));
          e && mb.$x(rb.Gs,
            e);
        });
        AscCommon.n$d(function (e, f, y) {
          AscCommon.D4b(mb, e, f, y);
        }, this.tna, Ia.G9, yb, cb);
      }
    }
  };
  Ia.prototype.w0e = function (e) {
    return this.Nnb.dhf(e);
  };
  Ia.prototype.X4e = function () {
    return this.QBa.Zif();
  };
  Ia.prototype.zRd = function () {
    this.IP || (this.R8b = !0);
  };
  Ia.prototype.Src = function () {
    this.R8b = !1;
  };
  Ia.prototype.U8e = function (e) {
    this.KSa = e;
  };
  Ia.prototype.Z3e = function () {
    return [AscCommon.Jgf, AscCommon.Kgf];
  };
  Ia.prototype.$3e = function () {
    return [AscCommon.Mgf, AscCommon.ygf];
  };
  Ia.prototype.ppc = function () {
  };
  Ia.prototype.Vvb = function (e) {
    var f =
      this;
    this.Fa && (this.Fa.Cob = !1);
    AscCommon.ajd(this.f_, this.Cga, this.ll.uFa(), function (y, Ia) {
      f.xqd(y, Ia, e);
    }, function (e) {
      y.pg.JZ !== e && f.Oe('asc_onError', e, y.Lk.Vo);
      f.$G(rb.Gs, kb.uda);
    });
  };
  Ia.prototype.xqd = function (e, f, Ia) {
    var Ta = this;
    y.pg.JZ !== e ? this.Oe('asc_onError', e, y.Lk.Vo) : (this.$G(rb.Gs, kb.uda), AscCommon.Eld(f, this.f_, this.Cga, this.ll.uFa(), function (e, f) {
      y.pg.JZ !== e ? Ta.Oe('asc_onError', e, y.Lk.Vo) : Ta.ppc(f, Ia);
      Ta.$x(rb.Gs, kb.uda);
    }));
  };
  Ia.prototype.Qrd = function () {
  };
  Ia.prototype.Frd = function (e, f) {
    e =
      this.tt.MK(AscCommon.jW(e), 1);
    null != e ? f(e) : this.Qrd(f);
  };
  Ia.prototype.jrd = function (e, f) {
    function y() {
      Ia.$x(rb.Gs, kb.uda);
      f.apply(Ia, arguments);
    }

    var Ia = this;
    this.$G(rb.Gs, kb.uda);
    var Ta = AscCommon.tH.pca(e);
    Ta ? this.Frd(Ta, y) : AscCommon.x$(Ia, [e], function (e) {
      e[0] && null != e[0].path && 'error' !== e[0].url && Ia.Frd(AscCommon.tH.d8a(e[0].path), y);
    }, this.Wy === cb.NK);
  };
  Ia.prototype.irc = function (e) {
    if (!this.Ex) if (this.fhb) this.jib.push({ data: e, type: 'addOleObject' }); else {
      this.fhb = !0;
      var f = this, y = e.imgSrc, Ia = e.widthPix,
        Ta = e.heightPix, Xa = e.width, cb = e.height, ib = e.data, Ma = e.guid;
      'string' === typeof y && 0 < y.length && 'string' === typeof ib && 'string' === typeof Ma && 0 < Ma.length && AscFormat.hb(Ia) && AscFormat.hb(Ta) && AscFormat.hb(Xa) && AscFormat.hb(cb) && this.jrd(y, function (e) {
        f.hrd(AscCommon.tH.pca(e.src), ib, Ma, Xa, cb, Ia, Ta);
        this.fhb = !1;
        this.jib.length && (e = this.jib.shift(), 'editOleObject' === e.type && this.mrc(e.data), 'addOleObject' === e.type && this.irc(e.data));
      });
    }
  };
  Ia.prototype.mrc = function (e) {
    if (!this.Ex) if (this.fhb) this.jib.push({
      data: e,
      type: 'editOleObject'
    }); else {
      this.fhb = !0;
      var f = this, y = e.imgSrc, Ia = AscCommon.Fg.cg(e.objectId), Ta = e.widthPix, Xa = e.heightPix, cb = e.data;
      'string' === typeof y && 0 < y.length && 'string' === typeof cb && Ia && AscFormat.hb(Ta) && AscFormat.hb(Xa) && this.jrd(y, function (e) {
        f.mrd(Ia, AscCommon.tH.pca(e.src), cb, Ta, Xa);
        this.fhb = !1;
        this.jib.length && (e = this.jib.shift(), 'editOleObject' === e.type && this.mrc(e.data), 'addOleObject' === e.type && this.irc(e.data));
      });
    }
  };
  Ia.prototype.hrd = function () {
  };
  Ia.prototype.mrd = function () {
  };
  Ia.prototype.Z7e =
    function (e) {
      this.lcc !== e && (this.lcc = e, this.AIf(e));
    };
  Ia.prototype.asd = function () {
  };
  Ia.prototype.ird = function () {
  };
  Ia.prototype.$rd = function () {
  };
  Ia.prototype.nrd = function () {
  };
  Ia.prototype.lrd = function () {
  };
  Ia.prototype.krd = function () {
  };
  Ia.prototype.frd = function () {
  };
  Ia.prototype.T9e = function (e) {
    if (e.Yuc) {
      this.KHc && this.lrc();
      var y = !0;
      null === this.Wfa ? this.Wfa = new f.Asc.n2f(e) : y = this.Wfa.update(e);
      y ? (this.UZe(), this.To.sHd(this.Wfa.Yuc), this.To.xyf(this.Wfa.url), this.fwd = this.Wfa.MMd, this.wsc(this.To), this.hrc(this.Wfa)) :
        this.Wfa.g8b < e.g8b && (AscCommon.Kd.BHa(), editor.Wfa.nWc(editor), AscCommon.Kd.fHb());
    }
  };
  Ia.prototype.q2d = function () {
  };
  Ia.prototype.oRd = function () {
    var e = { codepage: AscCommon.EIb, encodings: AscCommon.gTd() };
    return new AscCommon.qWc(e);
  };
  Ia.prototype.b_e = function (e) {
    f.AscDesktopEditor && this.Wpd(e) || (e || (e = new Asc.iQc), e.plb = Asc.Inb.YHb, this.avc(kb.Kab, e));
  };
  Ia.prototype.xda = function (e, f) {
    var y = this, Ia = !1;
    this.I1 && this.rqc() && (this.NLa = !e, this.Erd() || AscCommon.History.BZ() || this.qpd() || this.e_ || this.ayb ? this.w1d(f) &&
      (this.I1 = !1, this.ll.G7a(function (e) {
        y.Ppd(e);
      }), Ia = !0) : this.QHc && this.NLa && this.j0a());
    return Ia;
  };
  Ia.prototype.Erd = function () {
    return this.c2a;
  };
  Ia.prototype.n0e = function () {
    return AscCommon.History.C9a();
  };
  Ia.prototype.m0e = function () {
    return AscCommon.History.FEb();
  };
  Ia.prototype.D5e = function () {
    return 0 == f.location.protocol.indexOf('file') ? !0 : !1;
  };
  Ia.prototype.g2d = function (e) {
    return AscCommon.Ayd(e);
  };
  Ia.prototype.V2a = function () {
  };
  Ia.prototype.Frf = function () {
  };
  Ia.prototype.ZEd = function () {
    this.l6 && this.To &&
    (this.To.NRa && this.JXe(), this.i3b(null));
  };
  Ia.prototype.i3b = function (e) {
    e && (this.l3b = e);
    this.l6 && this.To && this.l3b && this.OCd && (this.V2a(this.l3b), this.l3b = null);
  };
  Ia.prototype.iqc = function () {
    AscCommon.Fg.te();
    var e = this;
    AscCommon.ppe(this.Xe, function (f, y) {
      e.xqd(f, y);
    });
    AscFonts.T5.Gu();
    this.K4 = AscCommon.TK;
    this.tt = AscCommon.Fgf;
    this.K4.BSa(this);
    this.tt.BSa(this);
    this.K4.vGe();
    this.Nnb = new AscCommon.Gfe;
    this.QBa = new AscCommon.jLe;
    AscFormat.kof();
    null !== this.mNc && this.z9(this.mNc);
    this.t7 = Asc.tef(this);
    this.i$ = new AscCommon.v1c;
    this.r1d();
    AscFonts.tp && this.ara && AscFonts.tp.jJ(this.ara);
  };
  Ia.prototype.r1d = function () {
  };
  Ia.prototype.hAf = function () {
    if (!this.WCd) {
      this.WCd = !0;
      for (var e = AscCommon.nIa.length, f = Array(e), y = [], Ia = 0; Ia < e; ++Ia) f[Ia] = new AscCommon.SZe, f[Ia].Ia = Ia, f[Ia].Image = AscCommon.nIa[Ia], y.push(AscCommon.nIa[Ia]);
      this.Wy === cb.Tl && y.push(AscCommon.Ngf);
      this.tt.a5a(y, function () {
      }, 0);
      this.Oe('asc_onInitStandartTextures', f);
    }
  };
  Ia.prototype.fAf = function () {
    this.PUc || ((new AscFormat.ree(this)).zkb(),
      this.PUc = !0);
  };
  Ia.prototype.LZc = function (e) {
    this.Oe('asc_onMathTypes', e);
  };
  Ia.prototype.N2f = function (e) {
    this.$x(rb.tP, kb.FH);
    e.ale();
  };
  Ia.prototype.nhf = function () {
    var e = this.lJb();
    return e && e.Tf && e.Tf.RB;
  };
  Ia.prototype.WZe = function () {
    var e = this.nhf();
    return e && 'string' === typeof e.name ? e.name : '';
  };
  Ia.prototype.VZe = function () {
    var e = this.lJb();
    return e ? this.Kvc(e).index : -1;
  };
  Ia.prototype.lJb = function () {
    return null;
  };
  Ia.prototype.Kvc = function (e) {
    var f = AscCommon.fob.slice();
    var y = e.Tvc();
    var Ia = e.Tf && e.Tf.RB;
    var Ta = -1;
    if (Ia && (e = AscCommon.IWb(Ia, e), Ta = AscCommon.VWb(f, e), -1 === Ta && y.push(e), y.sort(function (e, f) {
      return '' === e.name || null === e.name ? -1 : '' === f.name || null === f.name || e.name > f.name ? 1 : e.name < f.name ? -1 : 0;
    }), f = f.concat(y), -1 === Ta)) for (y = 0; y < f.length; ++y) if (f[y] === e) {
      Ta = y;
      break;
    }
    return { hJd: f, index: Ta };
  };
  Ia.prototype.r8b = function (e) {
    var f = AscCommon.r8b(e);
    f || (f = (e = this.Kvc(this.lJb()).hJd[e]) && e.scheme);
    return f;
  };
  Ia.prototype.dAf = function (e) {
    this.Oe('asc_onSendThemeColorSchemes', this.Kvc(e).hJd);
  };
  Ia.prototype.k5b =
    function (e, y, Ia, Xa) {
      if (f.AscDesktopEditor && f.AscDesktopEditor.MediaStart) switch (this.Wy) {
        case cb.$y:
          var Va = this.Fa.sN;
          if (Va.qo) {
            var Ta = this.Fa.sN.tda;
            if (0 <= Va.vI && Va.vI < Va.WG && (!Ta || !Ta.IsPlaying())) {
              var ib = Ta.Rect.lb, yb = Va.di.Wa.od;
              Va = Ta.Rect.x;
              this.Cda && (Va += this.Fa.laa.Xq.nf * AscCommon.NA >> 0);
              ib /= yb * AscCommon.NA;
              Xa ? f.AscDesktopEditor.MediaStart(e, Va, Ta.Rect.y, y, Ia, ib, Xa.Nf, Xa.Nj, Xa.Kj, Xa.jg, Xa.Gb, Xa.Ff) : f.AscDesktopEditor.MediaStart(e, Va, Ta.Rect.y, y, Ia, ib);
            }
          } else Ta = this.Fa.xd.vy(0, 0, this.Fa.Wa.gc,
            null, !0), Ta.ka += this.Fa.ka, Ta.la += this.Fa.la, Xa ? f.AscDesktopEditor.MediaStart(e, Ta.ka, Ta.la, y, Ia, this.Fa.io / 100, Xa.Nf, Xa.Nj, Xa.Kj, Xa.jg, Xa.Gb, Xa.Ff) : f.AscDesktopEditor.MediaStart(e, Ta.ka, Ta.la, y, Ia, this.Fa.io / 100);
      }
    };
  Ia.prototype.wJb = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.MediaEnd && f.AscDesktopEditor.MediaEnd();
  };
  Ia.prototype.Grd = function (e, f) {
    null != this.t7 && this.t7.register(e, f);
  };
  Ia.prototype.BFb = function (e, f, y) {
    null != this.t7 && this.t7.QF(e, f, y);
  };
  Ia.prototype.L5e = function (e) {
    null != this.t7 &&
    this.t7.close(e);
  };
  Ia.prototype.Urc = function (e) {
    null != this.t7 && this.t7.Ozf(e);
  };
  Ia.prototype.Trc = function (e) {
    null != this.t7 && this.t7.Btd(e);
  };
  Ia.prototype.K5e = function (e) {
    this.t7 && this.t7.Crf(e);
  };
  Ia.prototype.D8d = function () {
    return !0;
  };
  Ia.prototype.BQc = function () {
  };
  Ia.prototype.eRc = function () {
  };
  Ia.prototype.asc_insertSymbol = function (f, y) {
    var Ia = [y];
    AscFonts.tp.ilb(Ia, !0);
    y = [new AscFonts.gja(AscFonts.T5.v6b(f), 0, '', 0, null)];
    AscFonts.tp.jIa(y);
    this.Dia = function () {
      switch (this.Wy) {
        case cb.Tl:
        case cb.$y:
          var e =
            new AscCommonWord.YSa;
          e.HQb(f);
          this.Fa.Wa.$Nc(new AscCommon.IYd(Ia), e, !0);
          break;
        case cb.NK:
          this.$Nc(f, Ia);
      }
    };
    !1 === AscCommon.TK.bqb(y) ? (this.Dia(), this.Dia = e) : AscCommon.TK.KRa(y);
  };
  Ia.prototype.asc_registerPlaceholderCallback = function (e, f) {
    this.Fa && this.Fa.xd && this.Fa.xd.WJa && this.Fa.xd.WJa.eRf(e, f);
  };
  Ia.prototype.asc_uncheckPlaceholders = function () {
    this.Fa && this.Fa.xd && this.Fa.xd.WJa && this.Fa.xd.WJa.sKf();
  };
  Ia.prototype.I5e = function () {
    this.wsc(new Asc.OZe);
  };
  Ia.prototype.lQc = function () {
  };
  Ia.prototype.nQc =
    function () {
      return !1;
    };
  Ia.prototype.TTb = function () {
  };
  Ia.prototype.asc_nativeCheckPdfRenderer = function (e, f) {
    e.Sa = e.Copy;
    e.Tsa = e.ClearNoAttack;
    e.ra = e.WriteByte;
    e.Bb = e.WriteBool;
    e.cb = e.WriteLong;
    e.Ue = e.WriteDouble;
    e.bEa = e.WriteString;
    e.Rb = e.WriteString2;
    f.Sa = e.Copy;
    f.Tsa = e.ClearNoAttack;
    f.ra = e.WriteByte;
    f.Bb = e.WriteBool;
    f.cb = e.WriteLong;
    f.Ue = e.WriteDouble;
    f.bEa = e.WriteString;
    f.Rb = e.WriteString2;
    var y = new AscCommon.mLb;
    y.Memory = e;
    y.Uy = f;
    return y;
  };
  Ia.prototype.J6a = function () {
  };
  Ia.prototype.aOc = function () {
  };
  Ia.prototype.lPc = function () {
  };
  Ia.prototype.gbb = function () {
  };
  Ia.prototype.Ptb = function () {
  };
  Ia.prototype.Rmb = function () {
  };
  Ia.prototype.p$a = function () {
  };
  Ia.prototype.UEb = function () {
  };
  Ia.prototype.BOd = function () {
  };
  Ia.prototype.setInputParams = function (e) {
    f.AscInputMethod = f.AscInputMethod || {};
    for (var y in e) f.AscInputMethod[y] = e[y];
  };
  Ia.prototype.jrc = function () {
  };
  Ia.prototype.nac = function () {
    return [];
  };
  Ia.prototype.crd = function () {
  };
  Ia.prototype.MZe = function (e) {
    var f = 50 * AscCommon.NA >> 0, y = 50 * AscCommon.NA >> 0,
      Ia = document.createElement('canvas');
    Ia.width = f;
    Ia.height = y;
    var Ta = Ia.getContext('2d');
    Ta.fillStyle = '#000000';
    Ta.strokeStyle = '#000000';
    Ta.font = '10pt \'Courier New\'';
    Ta.lineWidth = 3;
    Ta.beginPath();
    y = (y >> 1) + .5;
    Ta.moveTo(0, y);
    Ta.lineTo(f, y);
    Ta.stroke();
    Ta.beginPath();
    Ta.lineWidth = 2;
    y -= 10;
    Ta.moveTo(10, y);
    Ta.lineTo(25, y - 10);
    Ta.lineTo(10, y - 20);
    Ta.stroke();
    Ta.beginPath();
    Ta.fillText(e.Jrc(), 10, y + 25);
    Ta.fillText(e.Krc(), 10, y + 40);
    Ta.fillText(e.trc(), 10, y + 55);
    f = Ia.toDataURL('image/png');
    Ia = null;
    e = [AscCommon.SIa(),
      e.Jrc(), e.Krc(), e.trc(), 50, 50, f];
    this.tt.a5a([f], function (e) {
      this.jrc(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
    }, e);
  };
  Ia.prototype.e4e = function () {
    for (var e = this.nac(), f = [], y, Ia = e.length - 1; 0 <= Ia; Ia--) {
      var Xa = e[Ia];
      y = !1;
      for (var cb = this.oRa.length - 1; 0 <= cb; cb--) if (this.oRa[cb].Qz == Xa.id) {
        y = !0;
        break;
      }
      y || (y = new AscCommon.ard, y.Qz = Xa.id, y.m5b = Xa.mHa, y.Zca = Xa.Zca, y.jca = Xa.jca, f.push(y));
    }
    return f;
  };
  Ia.prototype.m_e = function (e, y, Ia, Xa) {
    f.AscDesktopEditor && f.AscDesktopEditor.Sign(e, y, Ia, Xa);
  };
  Ia.prototype.f_e = function (e) {
    e =
      'unvisibleAdd' == e ? AscCommon.SIa() : e;
    f.asc_LocalRequestSign && f.asc_LocalRequestSign(e);
  };
  Ia.prototype.p_e = function (e) {
    f.AscDesktopEditor && f.AscDesktopEditor.ViewCertificate(parseInt('' + e));
  };
  Ia.prototype.g_e = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.SelectCertificate();
  };
  Ia.prototype.XZe = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.GetDefaultCertificate();
  };
  Ia.prototype.y4e = function () {
    return this.oRa;
  };
  Ia.prototype.e_e = function (e) {
    f.AscDesktopEditor && f.AscDesktopEditor.RemoveSignature(e);
  };
  Ia.prototype.d_e = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.RemoveAllSignatures();
  };
  Ia.prototype.F5e = function () {
    return f.AscDesktopEditor && f.AscDesktopEditor.IsSignaturesSupport ? f.AscDesktopEditor.IsSignaturesSupport() : !1;
  };
  Ia.prototype.E5e = function () {
    return f.AscDesktopEditor && f.AscDesktopEditor.IsProtectionSupport ? f.AscDesktopEditor.IsProtectionSupport() : !1;
  };
  Ia.prototype.z5e = function (e) {
    f.AscDesktopEditor && f.asc_IsVisibleSign && f.asc_IsVisibleSign(e) && this.lRd && this.lRd(e);
  };
  Ia.prototype.x4e =
    function (e) {
      for (var f = this.nac(), y = f.length - 1; 0 <= y; y--) {
        var Ia = f[y];
        if (Ia.id == e) {
          e = new AscCommon.ard;
          e.Qz = Ia.id;
          e.m5b = Ia.mHa;
          e.Zca = Ia.Zca;
          e.jca = Ia.jca;
          e.$1b = !0;
          for (Ia = 0; Ia < this.oRa.length; Ia++) if (f = this.oRa[Ia], f.Qz == e.Qz) {
            e.valid = f.valid;
            e.$1b = !1;
            break;
          }
          return e;
        }
      }
      return null;
    };
  Ia.prototype.w4e = function (e) {
    for (var f = this.oRa.length, y = 0; y < f; y++) if (this.oRa[y].Qz == e) return this.oRa[y].image;
    return '';
  };
  Ia.prototype.Ard = function () {
    return this.ll.uFa();
  };
  Ia.prototype.a_e = function () {
    AscCommon.Rn && (AscCommon.Rn.RO =
      null);
  };
  Ia.prototype.ztf = function (e) {
    if (e && e.type) {
      var f = { pageX: e.x, pageY: e.y };
      switch (e.type) {
        case 'onbeforedrop':
          this.BQc(f);
          break;
        case 'ondrop':
          this.eRc(), e.html ? this.pluginMethod_PasteHtml(e.html) : e.text && this.pluginMethod_PasteText(e.text);
      }
    }
  };
  Ia.prototype.Pif = function () {
    var e = { ka: 0, la: 0, W: 0, Jb: 0, SDa: 0 };
    e.W = Math.max(document.documentElement.clientWidth, f.innerWidth || 0);
    e.Jb = Math.max(document.documentElement.clientHeight, f.innerHeight || 0);
    switch (this.Wy) {
      case cb.Tl:
        e.ka += this.Fa.ka;
        e.la += this.Fa.la;
        e.ka += this.Fa.dT.Xq.nf * AscCommon.NA;
        e.la += this.Fa.dT.Xq.wg * AscCommon.NA;
        e.ka += this.Fa.xd.SRa;
        e.la += this.Fa.xd.TRa;
        e.ka >>= 0;
        e.la >>= 0;
        e.SDa = this.Fa.xd.QJa * this.Fa.io * AscCommon.NA / 100 >> 0;
        break;
      case cb.$y:
        e.ka += this.Fa.ka;
        e.la += this.Fa.la;
        e.ka += this.Fa.laa.Xq.nf * AscCommon.NA;
        e.la = this.Fa.Wa.kR ? e.la + this.Fa.Ora.Xq.wg * AscCommon.NA : e.la + this.Fa.dT.Xq.wg * AscCommon.NA;
        e.ka += this.Fa.xd.SRa;
        e.la += this.Fa.xd.TRa;
        e.ka >>= 0;
        e.la >>= 0;
        e.SDa = this.Fa.xd.QJa * this.Fa.io * AscCommon.NA / 100 >> 0;
        break;
      case cb.NK:
        var y = this.oQc().rrd().zrd();
        if (this.pRd()) {
          var Ia = this.td.Mz;
          e.ka = Ia.N5f;
          e.la = Ia.O5f;
          e.SDa = Ia.M5f;
          Ia = Ia.cursor;
        } else if (Asc.qna.ikc === y || Asc.qna.hkc === y) Ia = this.td.Yf().Hg.controller.Zq, e.ka = Ia.SRa, e.la = Ia.TRa, e.SDa = Ia.QJa * this.xWc() * AscCommon.NA, Ia = this.Xe;
        Ia && (Ia = jQuery(Ia).offset()) && (e.ka += Ia.left, e.la += Ia.top);
        e.ka >>= 0;
        e.la >>= 0;
        e.SDa >>= 0;
    }
    return e;
  };
  Ia.prototype.Sia = function () {
  };
  Ia.prototype.BIa = function () {
  };
  Ia.prototype.m6a = function () {
  };
  Ia.prototype.bTd = function () {
    return [];
  };
  Ia.prototype.DN = function () {
  };
  Ia.prototype.c_e = function () {
    AscCommon.Rn &&
    AscCommon.Rn.uwd(46);
  };
  Ia.prototype.VGe = function (e) {
    AscCommon.Ync = e;
    AscCommon.Rn && AscCommon.Rn.ILd(AscCommon.Ync);
  };
  Ia.prototype.Hne = function () {
    return AscCommon.Ync;
  };
  Ia.prototype.mRd = function () {
  };
  Ia.prototype.erd = function () {
  };
  Ia.prototype.ECd = function () {
    return 0 == this.lIc || this.t7 && this.t7.Yof() || this.M8b || !this.I1 || !this.rqc() ? 0 : (new Date).getTime() - this.lIc;
  };
  Ia.prototype.hIa = function () {
    this.lIc = (new Date).getTime();
  };
  Ia.prototype.UKd = function (e) {
    this.Oe('asc_onCoAuthoringDisconnect', e);
    this.VZa(!0);
  };
  Ia.prototype.s8e = function (f) {
    this.cSa = f;
    this.xda(!1, e, !0);
  };
  Ia.prototype.X7e = function () {
    this.cSa = '';
    this.xda(!1, e, !0);
  };
  Ia.prototype.h9e = function (e) {
    if (!this.i$ || !0 === AscCommon.Kd.Wna()) return !0;
    AscCommon.Kd.R6b();
    this.i$.Pfe();
    if (this.Wy == AscCommon.bs.NK) {
      var f = Asc.editor.td.Yf().Hg.xv;
      f.f7(this.i$.rb());
      var y = this;
      f.gaa(function (f) {
        f && (AscCommon.History.uh(AscDFH.cxc), y.i$.Btb(e));
      });
    } else !1 === AscCommon.Kd.XHb(!1) && (AscCommon.History.uh(AscDFH.cxc), this.i$.Btb(e));
  };
  Ia.prototype.m3e = function () {
    return this.i$.jpa();
  };
  Ia.prototype.yrd = function () {
    return 0;
  };
  Ia.prototype.fJf = function (e, f, y) {
    var Ia = new FileReader;
    Ia.onload = Ia.onerror = function (e) {
      e = e.target.result ? e.target.result : '';
      f instanceof Asc.kQc ? y(AscCommon.wSc(e, f)) : y(e.match(/[^\r\n]+/g));
    };
    for (var Va = 'UTF-8', Ta = f.HTa(), Xa = AscCommon.Jwb.length, cb = 0; cb < Xa; ++cb) if (AscCommon.Jwb[cb][0] == Ta) {
      Va = AscCommon.Jwb[cb][2];
      break;
    }
    Ia.readAsText(new Blob([e]), Va);
  };
  Ia.prototype.xhf = function () {
    var e = null, f = null;
    if (this.Wy === AscCommon.bs.Tl && this.Fa && this.Fa.Wa && this.Fa.Wa.IRa()) {
      var y =
        1 === this.Fa.Wa.lJa.mode ? !0 : !1;
      e = function (e) {
        e.Fa.Wa.v7a();
        e.aJf();
      };
      f = function (e) {
        e.TIf(y);
        e.Fa.Wa.q$a(!1);
      };
    }
    e && e(this);
    e = this.H5e();
    f && f(this);
    return e;
  };
  Ia.prototype.asc_isSupportFeature = function (e) {
    return f.Asc && f.Asc.Addons && !0 === f.Asc.Addons[e] ? !0 : !1;
  };
  Ia.prototype.asc_setDefaultBlitMode = function (e) {
    AscFonts.wAf(e);
  };
  Ia.prototype.attachEvent = function (f, y, Ia) {
    this.SPa.hasOwnProperty(f) || (this.SPa[f] = {});
    this.SPa[f]['' + (e === Ia ? 0 : Ia)] = y;
  };
  Ia.prototype.detachEvent = function (f, y) {
    if (this.SPa.hasOwnProperty(f)) {
      var Ia =
        this.SPa[f];
      y = '' + (e === y ? 0 : y);
      Ia[y] && delete Ia[y];
      0 === Object.getOwnPropertyNames(Ia).length && delete this.SPa[f];
    }
  };
  Ia.prototype.eAf = function () {
    var e = arguments[0];
    if (this.SPa.hasOwnProperty(e)) {
      e = this.SPa[e];
      for (var y in e) e[y].apply(this || f, Array.prototype.slice.call(arguments, 1));
    }
    return !1;
  };
  Ia.prototype.asc_onShowPopupWindow = function () {
    this.wJb();
  };
  f.AscCommon = f.AscCommon || {};
  f.AscCommon.Enb = Ia;
  var mb = Ia.prototype;
  mb.asc_loadFontsFromServer = mb.G5e;
  mb.asc_selectSearchingResults = mb.Z7e;
  mb.asc_showRevision =
    mb.T9e;
  mb.asc_getAdvancedOptions = mb.oRd;
  mb.asc_Print = mb.b_e;
  mb.asc_GetCurrentColorSchemeName = mb.WZe;
  mb.asc_GetCurrentColorSchemeIndex = mb.VZe;
  mb.asc_isCrypto = mb.B5e;
})(window);
'use strict';
(function (f, e) {
  var Ia = f.AscCommon.Enb;
  Ia.prototype.pluginMethod_AddOleObject = function (e) {
    return this.irc(e);
  };
  Ia.prototype.pluginMethod_EditOleObject = function (e) {
    return this.mrc(e);
  };
  Ia.prototype.pluginMethod_GetFontList = function () {
    return AscFonts.T5.fJb.mEe();
  };
  Ia.prototype.pluginMethod_InputText = function (e, f) {
    if (!this.Ex && AscCommon.Rn) {
      var Ia = [];
      for (e = e.aR(); e.check(); e.next()) Ia.push(e.value());
      if (f) for (e = 0; e < f.length; e++) AscCommon.Rn.uwd(8);
      AscCommon.Rn.Wqc(Ia);
      AscCommon.Rn.eya = '';
    }
  };
  Ia.prototype.pluginMethod_PasteHtml =
    function (f) {
      if (!AscCommon.q3) return null;
      var Ia = document.getElementById('pmpastehtml');
      if (!Ia) {
        Ia = document.createElement('div');
        Ia.id = 'pmpastehtml';
        if (this.Wy == AscCommon.bs.Tl || this.Wy == AscCommon.bs.$y) {
          var cb = this.J4d();
          cb && (e !== cb.mb.Vb && (Ia.style.fontSize = cb.mb.Vb + 'pt'), Ia.style.fontWeight = !0 === cb.mb.ud ? 'bold' : 'normal', Ia.style.fontStyle = !0 === cb.mb.bf ? 'italic' : 'normal', cb = cb.mb.va, Ia.style.color = cb ? 'rgb(' + cb.r + ',' + cb.vb + ',' + cb.Xa + ')' : 'rgb(0,0,0)');
        } else this.Wy == AscCommon.bs.NK && (cb = this.oQc()) &&
        cb.font && (e != cb.font.size && (Ia.style.fontSize = cb.font.size + 'pt'), Ia.style.fontWeight = !0 === cb.font.bold ? 'bold' : 'normal', Ia.style.fontStyle = !0 === cb.font.dIc ? 'italic' : 'normal');
        Ia.innerHTML = f;
        document.body.appendChild(Ia);
        this.Elb();
        var y = AscCommon.q3.Anb;
        AscCommon.q3.Anb = !0;
        this.tJa(AscCommon.wt.Xe, Ia);
        this.llb();
        f = function () {
          document.body.removeChild(Ia);
          Ia = null;
          AscCommon.q3.Anb = y;
        };
        this.fSd(f, null) && f();
      }
    };
  Ia.prototype.pluginMethod_PasteText = function (e) {
    if (!AscCommon.q3) return null;
    this.tJa(AscCommon.wt.Text,
      e);
  };
  Ia.prototype.pluginMethod_GetMacros = function () {
    return this.m3e();
  };
  Ia.prototype.pluginMethod_SetMacros = function (e) {
    return this.h9e(e);
  };
  Ia.prototype.pluginMethod_StartAction = function (e, f) {
    this.$G('Block' == e ? Asc.vE.Gs : Asc.vE.tP, f);
  };
  Ia.prototype.pluginMethod_EndAction = function (Ia, Xa, ib) {
    this.$x('Block' == Ia ? Asc.vE.Gs : Asc.vE.tP, Xa);
    f.AscDesktopEditor && null != ib && '' != ib ? (f.AscDesktopEditor.IsLocalFile() ? (this.Oe('asc_onError', 'Encryption error: ' + ib + '. End-to-end encryption mode is disabled.', c_oAscError.Lk.Vo),
      f.AscDesktopEditor.CryptoMode = 0, e !== f.Pic && (AscCommon.History.Vza = f.Pic, this.Wy == AscCommon.bs.NK ? this.bFd(AscCommon.History.BZ()) : this.XHa())) : (this.Oe('asc_onError', 'Encryption error: ' + ib + '. The file was not compiled.', c_oAscError.Lk.JU), f.AscDesktopEditor.CryptoMode = 0), f.Pic = e, setTimeout(function () {
      f.AscDesktopEditor.buildCryptedEnd(!1);
    }, 500)) : (f.Pic = e, this.Bpc && this.Bpc.call(this));
  };
  Ia.prototype.pluginMethod_OnEncryption = function (Ia) {
    var Xa = f.Asc.editor ? f.Asc.editor : f.editor;
    switch (Ia.type) {
      case 'generatePassword':
        if ('' ==
          Ia.password) {
          Xa.Oe('asc_onError', 'There is no connection with the blockchain', c_oAscError.Lk.JU);
          break;
        }
        if ('no_build' === Ia.error) {
          f.AscDesktopEditor.buildCryptedEnd(!0);
          break;
        }
        var cb = Xa.xhf();
        AscCommon.WD.Hbc = !0;
        Xa.Hvd = Ia.docinfo;
        f.AscDesktopEditor.buildCryptedStart(cb.data, cb.header, Ia.password, Ia.docinfo ? Ia.docinfo : '');
        break;
      case 'getPasswordByFile':
        '' != Ia.password ? (cb = '<m_sPassword>' + AscCommon.o4c(Ia.password) + '</m_sPassword>', Xa.cSa = Ia.password, Xa.VQc = Ia.hash, Xa.WQc = Ia.docinfo, AscCommon.WD.Hbc =
          !0, f.U1b ? f.AscDesktopEditor.NativeViewerOpen(Ia.password) : f.AscDesktopEditor.SetAdvancedOptions(cb)) : this.Ocb(e, !0);
        break;
      case 'encryptData':
      case 'decryptData':
        AscCommon.WD.czf(Ia);
    }
  };
  Ia.prototype.pluginMethod_SetProperties = function (e) {
    if (e) for (var f in e) switch (f) {
      case 'copyoutenabled':
        this.tvd = e[f];
        break;
      case 'watermark_on_draw':
        this.LP = e[f] ? new AscCommon.$1c(e[f], this) : null;
        this.LP.Jbf();
        break;
      case 'hideContentControlTrack':
        this.Wy === AscCommon.bs.Tl && this.Fa && this.Fa.Wa && this.Fa.Wa.sFe(e[f]);
        break;
      case 'disableAutostartMacros':
        this.awd = !0;
    }
  };
  Ia.prototype.pluginMethod_ShowInputHelper = function (e, f, Ia, y) {
    var Xa = document.getElementById('iframe_' + e);
    if (Xa) {
      var cb = this.Pif();
      f > cb.W && (f = cb.W);
      Ia > cb.Jb && (Ia = cb.Jb);
      var ib = cb.ka + 10 + f, Ta = cb.la - 10 - Ia, yb = cb.la + cb.SDa + 10 + Ia, Va = cb.ka + 10;
      ib > cb.W && (Va += cb.W - ib);
      yb < cb.Jb ? ib = cb.la + cb.SDa + 10 : 0 < Ta ? ib = Ta : (ib = cb.la + cb.SDa + 10, Ia += cb.Jb - yb);
      Xa.style.left = Va + 'px';
      Xa.style.top = ib + 'px';
      Xa.style.width = f + 'px';
      Xa.style.height = Ia + 'px';
      Xa.style.zIndex = this.IP ? 5001 : 1E3;
      Xa.style.boxShadow ||
      (Xa.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.175)', Xa.style.webkitBoxShadow = '0 6px 12px rgba(0, 0, 0, 0.175)');
      y ? (Xa.setAttribute('oo_editor_input', 'true'), Xa.focus()) : (Xa.removeAttribute('oo_editor_input'), AscCommon.Rn && (AscCommon.Rn.WHc = !0, AscCommon.Rn.Uo.focus()));
      AscCommon.Rn && (AscCommon.Rn.UHc = !0, AscCommon.Rn.chb[e] = !0);
    }
  };
  Ia.prototype.pluginMethod_UnShowInputHelper = function (e, f) {
    var Ia = document.getElementById('iframe_' + e);
    if (Ia) {
      Ia.style.width = '10px';
      Ia.style.height = '10px';
      Ia.removeAttribute('oo_editor_input');
      Ia.style.zIndex = -1E3;
      if (AscCommon.Rn && AscCommon.Rn.Uo) {
        AscCommon.Rn.Uo.focus();
        AscCommon.Rn.chb[e] && delete AscCommon.Rn.chb[e];
        e = 0;
        for (var y in AscCommon.Rn.chb) AscCommon.Rn.chb[y] && e++;
        AscCommon.Rn.UHc = 0 != e;
      }
      AscCommon.Rn && f && (AscCommon.Rn.eya = '');
    }
  };
})(window);
'use strict';
(function (f, e) {
  function Ia(y) {
    y ? (this.va = y.ab && y.ab.fill && y.ab.fill.type === f.Asc.Iy.nC && y.ab.fill.color ? AscCommon.vqb(y.ab.fill.color) : e != y.va && null != y.va ? AscCommon.RIa(y.va.r, y.va.vb, y.va.Xa) : null, this.pa = e != y.pa ? y.pa : null) : (this.va = AscCommon.RIa(0, 0, 0), this.pa = 1);
  }

  function cb(f) {
    f ? (this.He = e === f.He ? Asc.cua.sx : f.He, this.yq = e === f.yq ? !1 : f.yq, this.Ze = e === f.Ze ? e : f.Ze, this.pa = e === f.pa ? 0 : f.pa) : (this.He = Asc.cua.Sq, this.yq = !1, this.Ze = e, this.pa = 0);
  }

  function Xa(f) {
    f ? (this.He = e === f.He ? Asc.dua.Text : f.He, this.yq =
      e === f.yq ? !1 : f.yq, this.Ze = e === f.Ze ? e : f.Ze, this.pa = e === f.pa ? 0 : f.pa) : (this.He = Asc.dua.Text, this.yq = !1, this.Ze = e, this.pa = 0);
  }

  function ib(f) {
    this.lKa = this.OIa = this.Su = this.PLa = this.dw = this.UIa = !1;
    f && (this.UIa = e === f.yca ? !1 : f.yca, this.dw = e === f.q6 ? !1 : f.q6, this.PLa = e === f.aha ? !1 : f.aha, this.Su = e === f.zca ? !1 : f.zca, this.OIa = e === f.Vla ? !1 : f.Vla, this.lKa = e === f.Jra ? !1 : f.Jra);
  }

  function y(f) {
    f ? (this.H3 = e != f.H3 ? f.H3 : !1, this.oia = e != f.oia ? f.oia : !1, this.oia = e != f.oia ? f.oia : !1, this.Dwa = e != f.Dwa ? f.Dwa : null, this.Rfa = e != f.Rfa ?
      f.Rfa : null, this.UHa = e != f.UHa && null != f.UHa ? new Asc.ldb(f.UHa) : null, this.jo = e != f.jo && null != f.jo ? new rb(f.jo) : null, this.NDa = e != f.NDa ? f.NDa : null, this.PDa = e != f.PDa ? f.PDa : null, this.RDa = e != f.RDa ? f.RDa : null, this.Cwa = e != f.Cwa && null != f.Cwa ? new Asc.ldb(f.Cwa) : null, this.$c = e != f.$c && null != f.$c ? new kb(f.$c) : null, this.sq = e != f.sq && null != f.sq ? new kb(f.sq) : null, this.RX = e != f.RX && null != f.RX ? new Ia(f.RX) : null, this.Vt = e != f.Vt && null != f.Vt ? new Ia(f.Vt) : null, this.we = e != f.we && null != f.we ? new Asc.DYd(f.we) : null, this.Cf = e != f.Cf &&
    null != f.Cf ? new cb(f.Cf) : e, this.Ef = e != f.Ef && null != f.Ef ? new Xa(f.Ef) : e, this.Mu = e != f.Mu ? f.Mu : e, this.w$a = e != f.w$a ? f.w$a : !0, this.Sw = e != f.Sw ? f.Sw : null, this.oJ = e != f.oJ ? new ib(f.oJ) : null, this.vMa = e !== f.vMa ? f.vMa : !1, this.X6 = e != f.X6 ? f.X6 : c_oAscVertAlignJc.Oa, this.Bz = e != f.Bz ? f.Bz : e, this.Ay = f.Ay, this.Pea = f.Pea, this.bCa = f.bCa, this.xKa = f.xKa, this.Vpb = f.Vpb, this.eo = e != f.eo ? f.eo : !1, this.ckc = f.ckc, this.aG = f.aG, this.$F = f.$F, this.Q9a = f.Q9a, this.c7 = f.c7) : this.eo = this.oia = !1;
  }

  function kb(f) {
    f && (this.Ba = e != f.Ba && null !=
    f.Ba ? new Asc.Qka(f.Ba) : null, this.Oa = e != f.Oa && null != f.Oa ? new Asc.Qka(f.Oa) : null, this.Ra = e != f.Ra && null != f.Ra ? new Asc.Qka(f.Ra) : null, this.Ta = e != f.Ta && null != f.Ta ? new Asc.Qka(f.Ta) : null, this.fk = e != f.fk && null != f.fk ? new Asc.Qka(f.fk) : null, this.rk = e != f.rk && null != f.rk ? new Asc.Qka(f.rk) : null);
  }

  function rb(f) {
    f ? (this.Ba = e != f.Ba ? f.Ba : null, this.Ra = e != f.Ra ? f.Ra : null, this.Oa = e != f.Oa ? f.Oa : null, this.Ta = e != f.Ta ? f.Ta : null, this.If = e != f.If ? f.If : null) : this.If = this.Ta = this.Oa = this.Ra = this.Ba = null;
  }

  function mb(f) {
    f ? (this.Hp =
      e != f.Hp ? f.Hp : null, this.$b = e != f.$b && null != f.$b ? new Asc.sWc(f.$b) : null, this.Me = e != f.Me ? f.Me : null, this.Kn = e != f.Kn ? f.Kn : null, this.Zn = e != f.Zn ? f.Zn : null, this.Lp = e != f.Lp ? f.Lp : null, this.dc = e != f.dc && null != f.dc ? new AscCommon.RTb(f.dc) : null, this.Pb = e != f.Pb && null != f.Pb ? new Asc.tWc(f.Pb) : null, this.Op = e != f.Op ? f.Op : null, this.ug = f.ug, this.Ts = e !== f.Ts ? f.Ts : 0) : (this.Hp = !1, this.$b = new Asc.sWc, this.Me = AscCommon.Gr, this.Lp = this.Zn = this.Kn = !1, this.dc = new AscCommon.RTb, this.Pb = new Asc.tWc, this.Op = !0, this.ug = null, this.Ts =
      0);
  }

  function Ta(f) {
    f ? (this.ud = e != f.ud ? f.ud : null, this.bf = e != f.bf ? f.bf : null, this.lj = e != f.lj ? f.lj : null, this.fj = e != f.fj ? f.fj : null, this.wf = e != f.wf && null != f.wf ? new AscCommon.yFb(f.wf) : new AscCommon.yFb({
      Ja: '',
      za: -1
    }), this.Vb = e != f.Vb ? f.Vb : null, this.va = e != f.va && null != f.va ? AscCommon.RIa(f.va.r, f.va.vb, f.va.Xa) : null, this.zj = e != f.zj ? f.zj : null, this.xh = e != f.xh ? f.xh == AscCommonWord.xbc ? f.xh : new AscCommon.BM(f.xh.r, f.xh.vb, f.xh.Xa) : null, this.Fj = e != f.Fj ? f.Fj : null, this.dc = e != f.dc ? f.dc : null, this.hn = e != f.hn ? f.hn : null,
      this.gl = e != f.gl ? f.gl : null, this.Uf = e != f.Uf ? f.Uf.Jc : null) : (this.fj = this.lj = this.bf = this.ud = !1, this.wf = new AscCommon.yFb, this.Vb = 12, this.va = AscCommon.RIa(0, 0, 0), this.zj = AscCommon.fR, this.xh = AscCommonWord.xbc, this.Fj = !1, this.dc = 0, this.gl = this.hn = !1, this.Uf = null);
  }

  function yb(f, y) {
    this.Ib = e != f && null != f ? new mb(f) : null;
    this.mb = e != y && null != y ? new Ta(y) : null;
  }

  function Va(f) {
    f ? (this.BXb = e != f.BXb ? f.BXb : null, this.n6a = e != f.n6a ? f.n6a : null, this.ka = e != f.ka ? f.ka : null, this.la = e != f.la ? f.la : null, this.level = e != f.level ? f.level :
      null) : this.level = this.la = this.ka = this.n6a = this.BXb = null;
  }

  function zb() {
    this.Ri = !0;
    this.vXa = this.wXa = -1;
    this.Ug = [];
    this.oQb = this.uPb = !0;
    this.$bb = e;
    this.Hnc = Asc.VU.hM;
    this.jw = null;
  }

  function Ac() {
    this.Ja = '';
    this.ea = Asc.H3f.Ua;
    this.aP = this.LI = e;
    this.Fnc = '';
  }

  function ec() {
    this.ae = '';
    this.tc = Array(9);
    for (var e = 0; 9 > e; ++e) this.tc[e] = new Xb(e);
  }

  function vc(f, y) {
    this.ea = e !== f ? f : Asc.K7a.Text;
    this.pa = e !== y ? y : '';
  }

  function Xb(e) {
    this.tse = e;
    this.Bk = Asc.ag.vf;
    this.Text = [];
    this.mb = new AscCommonWord.YSa;
    this.Ib = new AscCommonWord.zee;
    this.Mb = 1;
    this.pI = -1;
    this.VJ = Asc.b_.QX;
    this.Ze = AscCommon.Gr;
  }

  function Ma() {
    this.ea = Asc.ala.kf;
    this.Uc = this.DMb = this.mbb = this.Am = this.s$c = this.Opacity = this.mb = this.Text = null;
  }

  function $a() {
    this.IC = this.Zw = this.Ja = null;
    this.igc = this.Ji = !1;
    this.Bk = Asc.ag.sB;
    this.Whc = !1;
    this.$Nb = null;
    this.Ypa = ':';
    this.Document = null;
  }

  Ia.prototype.qJb = function () {
    return this.va;
  };
  Ia.prototype.Yib = function (e) {
    this.va = e ? e : null;
  };
  Ia.prototype.xQ = function () {
    return this.pa;
  };
  Ia.prototype.kP = function (e) {
    this.pa = e;
  };
  f.Asc.CBackground =
    f.Asc.Zig = Ia;
  Ia.prototype.get_Color = Ia.prototype.qJb;
  Ia.prototype.put_Color = Ia.prototype.Yib;
  Ia.prototype.get_Value = Ia.prototype.xQ;
  Ia.prototype.put_Value = Ia.prototype.kP;
  cb.prototype.G0a = function () {
    return this.He;
  };
  cb.prototype.RGa = function (e) {
    this.He = e;
  };
  cb.prototype.H0a = function () {
    return this.yq;
  };
  cb.prototype.XJa = function (e) {
    this.yq = e;
  };
  cb.prototype.Oga = function () {
    return this.Ze;
  };
  cb.prototype.naa = function (e) {
    this.Ze = e;
  };
  cb.prototype.xQ = function () {
    return this.pa;
  };
  cb.prototype.kP = function (e) {
    this.pa =
      e;
  };
  Xa.prototype.G0a = function () {
    return this.He;
  };
  Xa.prototype.RGa = function (e) {
    this.He = e;
  };
  Xa.prototype.H0a = function () {
    return this.yq;
  };
  Xa.prototype.XJa = function (e) {
    this.yq = e;
  };
  Xa.prototype.Oga = function () {
    return this.Ze;
  };
  Xa.prototype.naa = function (e) {
    this.Ze = e;
  };
  Xa.prototype.xQ = function () {
    return this.pa;
  };
  Xa.prototype.kP = function (e) {
    this.pa = e;
  };
  f.Asc.CTablePositionH = cb;
  cb.prototype.get_RelativeFrom = cb.prototype.G0a;
  cb.prototype.put_RelativeFrom = cb.prototype.RGa;
  cb.prototype.get_UseAlign = cb.prototype.H0a;
  cb.prototype.put_UseAlign =
    cb.prototype.XJa;
  cb.prototype.get_Align = cb.prototype.Oga;
  cb.prototype.put_Align = cb.prototype.naa;
  cb.prototype.get_Value = cb.prototype.xQ;
  cb.prototype.put_Value = cb.prototype.kP;
  f.Asc.CTablePositionV = Xa;
  Xa.prototype.get_RelativeFrom = Xa.prototype.G0a;
  Xa.prototype.put_RelativeFrom = Xa.prototype.RGa;
  Xa.prototype.get_UseAlign = Xa.prototype.H0a;
  Xa.prototype.put_UseAlign = Xa.prototype.XJa;
  Xa.prototype.get_Align = Xa.prototype.Oga;
  Xa.prototype.put_Align = Xa.prototype.naa;
  Xa.prototype.get_Value = Xa.prototype.xQ;
  Xa.prototype.put_Value =
    Xa.prototype.kP;
  ib.prototype.Ajf = function () {
    return this.UIa;
  };
  ib.prototype.exf = function (e) {
    this.UIa = e;
  };
  ib.prototype.Bjf = function () {
    return this.dw;
  };
  ib.prototype.fxf = function (e) {
    this.dw = e;
  };
  ib.prototype.gkf = function () {
    return this.PLa;
  };
  ib.prototype.Jxf = function (e) {
    this.PLa = e;
  };
  ib.prototype.hkf = function () {
    return this.Su;
  };
  ib.prototype.Kxf = function (e) {
    this.Su = e;
  };
  ib.prototype.djf = function () {
    return this.OIa;
  };
  ib.prototype.Lwf = function (e) {
    this.OIa = e;
  };
  ib.prototype.ejf = function () {
    return this.lKa;
  };
  ib.prototype.Mwf =
    function (e) {
      this.lKa = e;
    };
  f.Asc.CTablePropLook = f.Asc.U1c = ib;
  ib.prototype.get_FirstCol = ib.prototype.Ajf;
  ib.prototype.put_FirstCol = ib.prototype.exf;
  ib.prototype.get_FirstRow = ib.prototype.Bjf;
  ib.prototype.put_FirstRow = ib.prototype.fxf;
  ib.prototype.get_LastCol = ib.prototype.gkf;
  ib.prototype.put_LastCol = ib.prototype.Jxf;
  ib.prototype.get_LastRow = ib.prototype.hkf;
  ib.prototype.put_LastRow = ib.prototype.Kxf;
  ib.prototype.get_BandHor = ib.prototype.djf;
  ib.prototype.put_BandHor = ib.prototype.Lwf;
  ib.prototype.get_BandVer =
    ib.prototype.ejf;
  ib.prototype.put_BandVer = ib.prototype.Mwf;
  y.prototype.gYc = function () {
    return this.Dwa;
  };
  y.prototype.GWd = function (e) {
    this.Dwa = e;
  };
  y.prototype.ffb = function () {
    return this.Rfa;
  };
  y.prototype.e4b = function (e) {
    this.Rfa = e;
  };
  y.prototype.yjf = function () {
    return this.UHa;
  };
  y.prototype.bxf = function (e) {
    this.UHa = e;
  };
  y.prototype.ijf = function () {
    return this.jo;
  };
  y.prototype.Qwf = function (e) {
    this.jo = e;
  };
  y.prototype.Hkf = function () {
    return this.NDa;
  };
  y.prototype.jyf = function (e) {
    this.NDa = e;
  };
  y.prototype.Mkf = function () {
    return this.PDa;
  };
  y.prototype.oyf = function (e) {
    this.PDa = e;
  };
  y.prototype.Rkf = function () {
    return this.RDa;
  };
  y.prototype.tyf = function (e) {
    this.RDa = e;
  };
  y.prototype.Pkf = function () {
    return this.Cwa;
  };
  y.prototype.ryf = function (e) {
    this.Cwa = e;
  };
  y.prototype.Jkf = function () {
    return this.$c;
  };
  y.prototype.lyf = function (e) {
    this.$c = e;
  };
  y.prototype.hjf = function () {
    return this.sq;
  };
  y.prototype.Pwf = function (e) {
    this.sq = e;
  };
  y.prototype.Ikf = function () {
    return this.RX;
  };
  y.prototype.kyf = function (e) {
    this.RX = e;
  };
  y.prototype.kjf = function () {
    return this.Vt;
  };
  y.prototype.Swf =
    function (e) {
      this.Vt = e;
    };
  y.prototype.qbc = function () {
    return this.we;
  };
  y.prototype.fcc = function (e) {
    this.we = e;
  };
  y.prototype.ATd = function () {
    return this.Cf;
  };
  y.prototype.EWd = function (e) {
    this.Cf = e;
  };
  y.prototype.BTd = function () {
    return this.Ef;
  };
  y.prototype.FWd = function (e) {
    this.Ef = e;
  };
  y.prototype.CTd = function (f) {
    return e != this.Mu ? this.Mu.ZSa(f) : 0;
  };
  y.prototype.DTd = function (f) {
    return e != this.Mu ? this.Mu.$Sa(f) : 0;
  };
  y.prototype.Fjf = function () {
    return this.w$a;
  };
  y.prototype.ixf = function (e) {
    this.w$a = e;
  };
  y.prototype.Rwf = function (e) {
    this.oia =
      e;
  };
  y.prototype.jjf = function () {
    return this.oia;
  };
  y.prototype.yTd = function () {
    return this.H3;
  };
  y.prototype.Akf = function () {
    return this.vMa;
  };
  y.prototype.ayf = function (e) {
    this.vMa = e;
  };
  y.prototype.aYc = function () {
    return this.eo;
  };
  y.prototype.njf = function () {
    return this.X6;
  };
  y.prototype.c4b = function (e) {
    this.X6 = e;
  };
  y.prototype.Okf = function () {
    return this.oJ;
  };
  y.prototype.qyf = function (e) {
    this.oJ = e;
  };
  y.prototype.Qkf = function () {
    return this.Sw;
  };
  y.prototype.syf = function (e) {
    this.Sw = e;
  };
  y.prototype.xTd = function () {
    return this.Bz;
  };
  y.prototype.DWd = function (e) {
    this.Bz = e;
  };
  y.prototype.Nkf = function () {
    return this.Ay;
  };
  y.prototype.pyf = function (e) {
    this.Ay = e;
  };
  y.prototype.mjf = function () {
    return this.Pea;
  };
  y.prototype.Uwf = function (e) {
    this.Pea = e;
  };
  y.prototype.ljf = function () {
    return this.bCa;
  };
  y.prototype.Twf = function (e) {
    this.bCa = e;
  };
  y.prototype.ojf = function () {
    return this.xKa;
  };
  y.prototype.Vwf = function (e) {
    this.xKa = e;
  };
  y.prototype.ukf = function () {
    return this.ckc;
  };
  y.prototype.pjf = function () {
    return this.Vpb;
  };
  y.prototype.Lkf = function () {
    return this.aG;
  };
  y.prototype.nyf = function (e) {
    this.aG = e;
  };
  y.prototype.Kkf = function () {
    return this.$F;
  };
  y.prototype.myf = function (e) {
    this.$F = e;
  };
  y.prototype.ujf = function () {
    return this.Q9a;
  };
  y.prototype.axf = function (e) {
    this.Q9a = e;
  };
  y.prototype.ykf = function () {
    return this.c7;
  };
  y.prototype.Zxf = function (e) {
    this.c7 = e;
  };
  f.Asc.CTableProp = f.Asc.JTc = y;
  y.prototype.get_Width = y.prototype.gYc;
  y.prototype.put_Width = y.prototype.GWd;
  y.prototype.get_Spacing = y.prototype.ffb;
  y.prototype.put_Spacing = y.prototype.e4b;
  y.prototype.get_DefaultMargins =
    y.prototype.yjf;
  y.prototype.put_DefaultMargins = y.prototype.bxf;
  y.prototype.get_CellMargins = y.prototype.ijf;
  y.prototype.put_CellMargins = y.prototype.Qwf;
  y.prototype.get_TableAlignment = y.prototype.Hkf;
  y.prototype.put_TableAlignment = y.prototype.jyf;
  y.prototype.get_TableIndent = y.prototype.Mkf;
  y.prototype.put_TableIndent = y.prototype.oyf;
  y.prototype.get_TableWrap = y.prototype.Rkf;
  y.prototype.put_TableWrap = y.prototype.tyf;
  y.prototype.get_TablePaddings = y.prototype.Pkf;
  y.prototype.put_TablePaddings = y.prototype.ryf;
  y.prototype.get_TableBorders = y.prototype.Jkf;
  y.prototype.put_TableBorders = y.prototype.lyf;
  y.prototype.get_CellBorders = y.prototype.hjf;
  y.prototype.put_CellBorders = y.prototype.Pwf;
  y.prototype.get_TableBackground = y.prototype.Ikf;
  y.prototype.put_TableBackground = y.prototype.kyf;
  y.prototype.get_CellsBackground = y.prototype.kjf;
  y.prototype.put_CellsBackground = y.prototype.Swf;
  y.prototype.get_Position = y.prototype.qbc;
  y.prototype.put_Position = y.prototype.fcc;
  y.prototype.get_PositionH = y.prototype.ATd;
  y.prototype.put_PositionH =
    y.prototype.EWd;
  y.prototype.get_PositionV = y.prototype.BTd;
  y.prototype.put_PositionV = y.prototype.FWd;
  y.prototype.get_Value_X = y.prototype.CTd;
  y.prototype.get_Value_Y = y.prototype.DTd;
  y.prototype.get_ForSelectedCells = y.prototype.Fjf;
  y.prototype.put_ForSelectedCells = y.prototype.ixf;
  y.prototype.put_CellSelect = y.prototype.Rwf;
  y.prototype.get_CellSelect = y.prototype.jjf;
  y.prototype.get_CanBeFlow = y.prototype.yTd;
  y.prototype.get_RowsInHeader = y.prototype.Akf;
  y.prototype.put_RowsInHeader = y.prototype.ayf;
  y.prototype.get_Locked =
    y.prototype.aYc;
  y.prototype.get_CellsVAlign = y.prototype.njf;
  y.prototype.put_CellsVAlign = y.prototype.c4b;
  y.prototype.get_TableLook = y.prototype.Okf;
  y.prototype.put_TableLook = y.prototype.qyf;
  y.prototype.get_TableStyle = y.prototype.Qkf;
  y.prototype.put_TableStyle = y.prototype.syf;
  y.prototype.get_AllowOverlap = y.prototype.xTd;
  y.prototype.put_AllowOverlap = y.prototype.DWd;
  y.prototype.get_TableLayout = y.prototype.Nkf;
  y.prototype.put_TableLayout = y.prototype.pyf;
  y.prototype.get_CellsTextDirection = y.prototype.mjf;
  y.prototype.put_CellsTextDirection = y.prototype.Uwf;
  y.prototype.get_CellsNoWrap = y.prototype.ljf;
  y.prototype.put_CellsNoWrap = y.prototype.Twf;
  y.prototype.get_CellsWidth = y.prototype.ojf;
  y.prototype.put_CellsWidth = y.prototype.Vwf;
  y.prototype.get_PercentFullWidth = y.prototype.ukf;
  y.prototype.get_CellsWidthNotEqual = y.prototype.pjf;
  y.prototype.get_TableDescription = y.prototype.Lkf;
  y.prototype.put_TableDescription = y.prototype.nyf;
  y.prototype.get_TableCaption = y.prototype.Kkf;
  y.prototype.put_TableCaption = y.prototype.myf;
  y.prototype.get_ColumnWidth = y.prototype.ujf;
  y.prototype.put_ColumnWidth = y.prototype.axf;
  y.prototype.get_RowHeight = y.prototype.ykf;
  y.prototype.put_RowHeight = y.prototype.Zxf;
  kb.prototype.Lwc = function () {
    return this.Ba;
  };
  kb.prototype.UKc = function (e) {
    this.Ba = e ? new Asc.Qka(e) : null;
  };
  kb.prototype.Wwc = function () {
    return this.Oa;
  };
  kb.prototype.dLc = function (e) {
    this.Oa = e ? new Asc.Qka(e) : null;
  };
  kb.prototype.Twc = function () {
    return this.Ra;
  };
  kb.prototype.aLc = function (e) {
    this.Ra = e ? new Asc.Qka(e) : null;
  };
  kb.prototype.zwc =
    function () {
      return this.Ta;
    };
  kb.prototype.RKc = function (e) {
    this.Ta = e ? new Asc.Qka(e) : null;
  };
  kb.prototype.akf = function () {
    return this.fk;
  };
  kb.prototype.Fxf = function (e) {
    this.fk = e ? new Asc.Qka(e) : null;
  };
  kb.prototype.bkf = function () {
    return this.rk;
  };
  kb.prototype.Gxf = function (e) {
    this.rk = e ? new Asc.Qka(e) : null;
  };
  rb.prototype.Lwc = function () {
    return this.Ba;
  };
  rb.prototype.UKc = function (e) {
    this.Ba = e;
  };
  rb.prototype.Twc = function () {
    return this.Ra;
  };
  rb.prototype.aLc = function (e) {
    this.Ra = e;
  };
  rb.prototype.Wwc = function () {
    return this.Oa;
  };
  rb.prototype.dLc = function (e) {
    this.Oa = e;
  };
  rb.prototype.zwc = function () {
    return this.Ta;
  };
  rb.prototype.RKc = function (e) {
    this.Ta = e;
  };
  rb.prototype.Cjf = function () {
    return this.If;
  };
  rb.prototype.gxf = function (e) {
    this.If = e;
  };
  f.Asc.CBorders = f.Asc.$ig = kb;
  kb.prototype.get_Left = kb.prototype.Lwc;
  kb.prototype.put_Left = kb.prototype.UKc;
  kb.prototype.get_Top = kb.prototype.Wwc;
  kb.prototype.put_Top = kb.prototype.dLc;
  kb.prototype.get_Right = kb.prototype.Twc;
  kb.prototype.put_Right = kb.prototype.aLc;
  kb.prototype.get_Bottom = kb.prototype.zwc;
  kb.prototype.put_Bottom = kb.prototype.RKc;
  kb.prototype.get_InsideH = kb.prototype.akf;
  kb.prototype.put_InsideH = kb.prototype.Fxf;
  kb.prototype.get_InsideV = kb.prototype.bkf;
  kb.prototype.put_InsideV = kb.prototype.Gxf;
  f.Asc.CMargins = f.Asc.hjg = rb;
  rb.prototype.get_Left = rb.prototype.Lwc;
  rb.prototype.put_Left = rb.prototype.UKc;
  rb.prototype.get_Right = rb.prototype.Twc;
  rb.prototype.put_Right = rb.prototype.aLc;
  rb.prototype.get_Top = rb.prototype.Wwc;
  rb.prototype.put_Top = rb.prototype.dLc;
  rb.prototype.get_Bottom = rb.prototype.zwc;
  rb.prototype.put_Bottom = rb.prototype.RKc;
  rb.prototype.get_Flag = rb.prototype.Cjf;
  rb.prototype.put_Flag = rb.prototype.gxf;
  mb.prototype.Iyd = function () {
    return this.Hp;
  };
  mb.prototype.$jf = function () {
    return this.$b;
  };
  mb.prototype.Lyd = function () {
    return this.Me;
  };
  mb.prototype.Myd = function () {
    return this.Kn;
  };
  mb.prototype.Nyd = function () {
    return this.Zn;
  };
  mb.prototype.Qyd = function () {
    return this.Lp;
  };
  mb.prototype.ffb = function () {
    return this.dc;
  };
  mb.prototype.Syd = function () {
    return this.Pb;
  };
  mb.prototype.Yyd = function () {
    return this.Op;
  };
  mb.prototype.Vyd = function () {
    return this.ug;
  };
  mb.prototype.Pyd = function () {
    return this.Ts;
  };
  Ta.prototype.ZXc = function () {
    return this.ud;
  };
  Ta.prototype.$Xc = function () {
    return this.bf;
  };
  Ta.prototype.fYc = function () {
    return this.lj;
  };
  Ta.prototype.dYc = function () {
    return this.fj;
  };
  Ta.prototype.xRc = function () {
    return this.wf;
  };
  Ta.prototype.Dwc = function () {
    return this.Vb;
  };
  Ta.prototype.qJb = function () {
    return this.va;
  };
  Ta.prototype.Xyd = function () {
    return this.zj;
  };
  Ta.prototype.Yjf = function () {
    return this.xh;
  };
  Ta.prototype.ffb =
    function () {
      return this.dc;
    };
  Ta.prototype.Jyd = function () {
    return this.Fj;
  };
  Ta.prototype.Fyd = function () {
    return this.hn;
  };
  Ta.prototype.Uyd = function () {
    return this.gl;
  };
  Ta.prototype.efb = function () {
    return this.Uf;
  };
  mb.prototype.get_ContextualSpacing = mb.prototype.Iyd;
  mb.prototype.get_Ind = mb.prototype.$jf;
  mb.prototype.get_Jc = mb.prototype.Lyd;
  mb.prototype.get_KeepLines = mb.prototype.Myd;
  mb.prototype.get_KeepNext = mb.prototype.Nyd;
  mb.prototype.get_PageBreakBefore = mb.prototype.Qyd;
  mb.prototype.get_Spacing = mb.prototype.ffb;
  mb.prototype.get_Shd = mb.prototype.Syd;
  mb.prototype.get_WidowControl = mb.prototype.Yyd;
  mb.prototype.get_Tabs = mb.prototype.Vyd;
  mb.prototype.get_OutlineLvl = mb.prototype.Pyd;
  Ta.prototype.get_Bold = Ta.prototype.ZXc;
  Ta.prototype.get_Italic = Ta.prototype.$Xc;
  Ta.prototype.get_Underline = Ta.prototype.fYc;
  Ta.prototype.get_Strikeout = Ta.prototype.dYc;
  Ta.prototype.get_FontFamily = Ta.prototype.xRc;
  Ta.prototype.get_FontSize = Ta.prototype.Dwc;
  Ta.prototype.get_Color = Ta.prototype.qJb;
  Ta.prototype.get_VertAlign = Ta.prototype.Xyd;
  Ta.prototype.get_HighLight = Ta.prototype.Yjf;
  Ta.prototype.get_Spacing = Ta.prototype.ffb;
  Ta.prototype.get_DStrikeout = Ta.prototype.Jyd;
  Ta.prototype.get_Caps = Ta.prototype.Fyd;
  Ta.prototype.get_SmallCaps = Ta.prototype.Uyd;
  Ta.prototype.get_Lang = Ta.prototype.efb;
  Ta.prototype.put_Bold = function (e) {
    this.ud = e;
  };
  Ta.prototype.put_Italic = function (e) {
    this.bf = e;
  };
  Ta.prototype.put_Underline = function (e) {
    this.lj = e;
  };
  Ta.prototype.put_Strikeout = function (e) {
    this.fj = e;
  };
  Ta.prototype.put_FontFamily = Ta.prototype.qHd = function (e) {
    this.wf =
      e;
  };
  Ta.prototype.put_FontSize = Ta.prototype.rHd = function (e) {
    this.Vb = e;
  };
  Ta.prototype.put_Color = Ta.prototype.Yib = function (e) {
    this.va = e;
  };
  Ta.prototype.put_VertAlign = function (e) {
    this.zj = e;
  };
  Ta.prototype.put_HighLight = function (e) {
    this.xh = e;
  };
  Ta.prototype.put_Spacing = Ta.prototype.e4b = function (e) {
    this.dc = e;
  };
  Ta.prototype.put_DStrikeout = function (e) {
    this.Fj = e;
  };
  Ta.prototype.put_Caps = function (e) {
    this.hn = e;
  };
  Ta.prototype.put_SmallCaps = function (e) {
    this.gl = e;
  };
  Ta.prototype.put_Lang = Ta.prototype.HSc = function (e) {
    this.Uf =
      e;
  };
  f.Asc.CTextProp = f.Asc.W1c = Ta;
  yb.prototype.dPa = function () {
    return this.Ib;
  };
  yb.prototype.dAa = function () {
    return this.mb;
  };
  f.Asc.CParagraphAndTextProp = f.Asc.ZDf = yb;
  yb.prototype.get_ParaPr = yb.prototype.dPa;
  yb.prototype.get_TextPr = yb.prototype.dAa;
  Va.prototype.nlf = function () {
    return this.BXb;
  };
  Va.prototype.slf = function () {
    return this.n6a;
  };
  Va.prototype.tBa = function () {
    return this.ka;
  };
  Va.prototype.uBa = function () {
    return this.la;
  };
  Va.prototype.ikf = function () {
    return this.level;
  };
  f.Asc.CHeader = f.Asc.yYd = Va;
  Va.prototype.get_headerText =
    Va.prototype.nlf;
  Va.prototype.get_pageNumber = Va.prototype.slf;
  Va.prototype.get_X = Va.prototype.tBa;
  Va.prototype.get_Y = Va.prototype.uBa;
  Va.prototype.get_Level = Va.prototype.ikf;
  zb.prototype.oXf = function (e) {
    if (e) {
      var f = e.TY();
      f && (this.Ri = f.wLa, this.wXa = f.FWa, this.vXa = f.R$a, this.Ug = f.Ug, this.uPb = !f.T$c(), this.oQb = '' === f.Ypa, (f = e.lD) && f.VC() && f.VC().bl() && (f = f.VC().bl().h8c(), 0 < f.ug.length && (this.$bb = f.ug[f.ug.length - 1].Q_)), this.jw = e);
    }
  };
  zb.prototype.nXf = function (e) {
    this.jw = e;
  };
  zb.prototype.CUf = function (e) {
    e &&
    (this.Hnc = e.oUc());
  };
  zb.prototype.pXb = function () {
    return this.Ri;
  };
  zb.prototype.Dxf = function (e) {
    this.Ri = e;
  };
  zb.prototype.cYc = function () {
    return this.wXa;
  };
  zb.prototype.bYc = function () {
    return this.vXa;
  };
  zb.prototype.Vxf = function (e, f) {
    this.wXa = e;
    this.vXa = f;
  };
  zb.prototype.H4d = function () {
    return this.Ug.length;
  };
  zb.prototype.G4d = function (e) {
    return 0 > e || e >= this.Ug.length ? '' : this.Ug[e].Ja;
  };
  zb.prototype.F4d = function (e) {
    return 0 > e || e >= this.Ug.length ? -1 : this.Ug[e].tc;
  };
  zb.prototype.ecf = function () {
    this.Ug = [];
  };
  zb.prototype.sZe =
    function (e, f) {
      this.Ug.push({ Ja: e, tc: f });
    };
  zb.prototype.eyf = function (e) {
    this.uPb = e;
  };
  zb.prototype.E4d = function () {
    return this.uPb;
  };
  zb.prototype.Xxf = function (e) {
    this.oQb = e;
  };
  zb.prototype.D4d = function () {
    return this.oQb;
  };
  zb.prototype.iyf = function (e) {
    this.$bb = e;
  };
  zb.prototype.I4d = function () {
    return this.$bb;
  };
  zb.prototype.yRc = function () {
    return this.Hnc;
  };
  zb.prototype.hyf = function (e) {
    this.Hnc = e;
  };
  zb.prototype.dkf = function () {
    return this.jw;
  };
  f.Asc.CTableOfContentsPr = f.Asc.T1c = zb;
  zb.prototype.get_Hyperlink = zb.prototype.pXb;
  zb.prototype.put_Hyperlink = zb.prototype.Dxf;
  zb.prototype.get_OutlineStart = zb.prototype.cYc;
  zb.prototype.get_OutlineEnd = zb.prototype.bYc;
  zb.prototype.put_OutlineRange = zb.prototype.Vxf;
  zb.prototype.get_StylesCount = zb.prototype.H4d;
  zb.prototype.get_StyleName = zb.prototype.G4d;
  zb.prototype.get_StyleLevel = zb.prototype.F4d;
  zb.prototype.clear_Styles = zb.prototype.ecf;
  zb.prototype.add_Style = zb.prototype.sZe;
  zb.prototype.put_ShowPageNumbers = zb.prototype.eyf;
  zb.prototype.get_ShowPageNumbers = zb.prototype.E4d;
  zb.prototype.put_RightAlignTab = zb.prototype.Xxf;
  zb.prototype.get_RightAlignTab = zb.prototype.D4d;
  zb.prototype.get_TabLeader = zb.prototype.I4d;
  zb.prototype.put_TabLeader = zb.prototype.iyf;
  zb.prototype.get_StylesType = zb.prototype.yRc;
  zb.prototype.put_StylesType = zb.prototype.hyf;
  zb.prototype.get_InternalClass = zb.prototype.dkf;
  Ac.prototype.rBa = function () {
    return this.Ja;
  };
  Ac.prototype.w8a = function (e) {
    this.Ja = e;
  };
  Ac.prototype.AN = function () {
    return this.ea;
  };
  Ac.prototype.iU = function (e) {
    this.ea = e;
  };
  Ac.prototype.wkf =
    function () {
      return this.LI;
    };
  Ac.prototype.Wxf = function (e) {
    this.LI = e;
  };
  Ac.prototype.Vkf = function () {
    return this.aP;
  };
  Ac.prototype.wyf = function (e) {
    this.aP = e;
  };
  Ac.prototype.Gkf = function () {
    return this.Fnc;
  };
  f.Asc.CAscStyle = f.Asc.sde = Ac;
  Ac.prototype.get_Name = Ac.prototype.rBa;
  Ac.prototype.put_Name = Ac.prototype.w8a;
  Ac.prototype.get_Type = Ac.prototype.AN;
  Ac.prototype.put_Type = Ac.prototype.iU;
  Ac.prototype.get_QFormat = Ac.prototype.wkf;
  Ac.prototype.put_QFormat = Ac.prototype.Wxf;
  Ac.prototype.get_UIPriority = Ac.prototype.Vkf;
  Ac.prototype.put_UIPriority = Ac.prototype.wyf;
  Ac.prototype.get_StyleId = Ac.prototype.Gkf;
  ec.prototype.ekf = function () {
    return this.ae;
  };
  ec.prototype.Nwc = function (e) {
    return 0 > e ? this.tc[0] : 8 < e ? this.tc[8] : this.tc[e] ? this.tc[e] : this.tc[0];
  };
  f.Asc.CAscNumbering = f.Asc.wTf = ec;
  ec.prototype.get_InternalId = ec.prototype.ekf;
  ec.prototype.get_Lvl = ec.prototype.Nwc;
  vc.prototype.AN = function () {
    return this.ea;
  };
  vc.prototype.iU = function (e) {
    this.ea = e;
  };
  vc.prototype.xQ = function () {
    return this.pa;
  };
  vc.prototype.kP = function (e) {
    this.pa =
      e;
  };
  f.Asc.CAscNumberingLvlText = f.Asc.rde = vc;
  vc.prototype.get_Type = vc.prototype.AN;
  vc.prototype.put_Type = vc.prototype.iU;
  vc.prototype.get_Value = vc.prototype.xQ;
  vc.prototype.put_Value = vc.prototype.kP;
  Xb.prototype.okf = function () {
    return this.tse;
  };
  Xb.prototype.E0a = function () {
    return this.Bk;
  };
  Xb.prototype.d4b = function (e) {
    this.Bk = e;
  };
  Xb.prototype.LJa = function () {
    return this.Text;
  };
  Xb.prototype.sAa = function (e) {
    this.Text = e;
  };
  Xb.prototype.dAa = function () {
    return this.mb;
  };
  Xb.prototype.dPa = function () {
    return this.Ib;
  };
  Xb.prototype.Uwc = function () {
    return this.Mb;
  };
  Xb.prototype.xHd = function (e) {
    this.Mb = e;
  };
  Xb.prototype.Swc = function () {
    return this.pI;
  };
  Xb.prototype.vHd = function (e) {
    this.pI = e;
  };
  Xb.prototype.Vwc = function () {
    return this.VJ;
  };
  Xb.prototype.yHd = function (e) {
    this.VJ = e;
  };
  Xb.prototype.Oga = function () {
    return this.Ze;
  };
  Xb.prototype.naa = function (e) {
    this.Ze = e;
  };
  f.Asc.CAscNumberingLvl = f.Asc.xTf = Xb;
  Xb.prototype.get_LvlNum = Xb.prototype.okf;
  Xb.prototype.get_Format = Xb.prototype.E0a;
  Xb.prototype.put_Format = Xb.prototype.d4b;
  Xb.prototype.get_Text =
    Xb.prototype.LJa;
  Xb.prototype.put_Text = Xb.prototype.sAa;
  Xb.prototype.get_TextPr = Xb.prototype.dAa;
  Xb.prototype.get_ParaPr = Xb.prototype.dPa;
  Xb.prototype.get_Start = Xb.prototype.Uwc;
  Xb.prototype.put_Start = Xb.prototype.xHd;
  Xb.prototype.get_Restart = Xb.prototype.Swc;
  Xb.prototype.put_Restart = Xb.prototype.vHd;
  Xb.prototype.get_Suff = Xb.prototype.Vwc;
  Xb.prototype.put_Suff = Xb.prototype.yHd;
  Xb.prototype.get_Align = Xb.prototype.Oga;
  Xb.prototype.put_Align = Xb.prototype.naa;
  f.Asc.CAscWatermarkProperties = f.Asc.L6a = Ma;
  Ma.prototype.put_Api = Ma.prototype.BSa = function (e) {
    this.Uc = e;
  };
  Ma.prototype.put_Type = Ma.prototype.iU = function (e) {
    this.ea = e;
  };
  Ma.prototype.get_Type = Ma.prototype.AN = function () {
    return this.ea;
  };
  Ma.prototype.put_Text = Ma.prototype.sAa = function (e) {
    this.Text = e;
  };
  Ma.prototype.get_Text = Ma.prototype.LJa = function () {
    return this.Text;
  };
  Ma.prototype.put_TextPr = Ma.prototype.zHd = function (e) {
    this.mb = e;
  };
  Ma.prototype.get_TextPr = Ma.prototype.dAa = function () {
    return this.mb;
  };
  Ma.prototype.put_Opacity = Ma.prototype.YKc = function (e) {
    this.Opacity =
      e;
  };
  Ma.prototype.get_Opacity = Ma.prototype.c9f = function () {
    return this.Opacity;
  };
  Ma.prototype.put_IsDiagonal = Ma.prototype.tHd = function (e) {
    this.s$c = e;
  };
  Ma.prototype.get_IsDiagonal = Ma.prototype.JMf = function () {
    return this.s$c;
  };
  Ma.prototype.put_ImageUrl = Ma.prototype.MQf = function (f, y) {
    var Ma = this;
    Ma.Uc && AscCommon.x$(Ma.Uc, [f], function (e) {
        if (e && e[0] && 'error' !== e[0].url) {
          var f = AscCommon.tH.d8a(e[0].path);
          Ma.Uc.tt.a5a([AscCommon.jW(f)], function () {
            Ma.Am = f;
            Ma.ea = Asc.ala.Image;
            Ma.Exb();
            Ma.Uc.Oe('asc_onWatermarkImageLoaded');
          });
        }
      },
      !1, e, y);
  };
  Ma.prototype.put_ImageUrl2 = Ma.prototype.Exf = function (e) {
    this.Am = e;
  };
  Ma.prototype.get_ImageUrl = Ma.prototype.C4d = function () {
    return this.Am;
  };
  Ma.prototype.put_Scale = Ma.prototype.cLc = function (e) {
    this.mbb = e;
  };
  Ma.prototype.get_Scale = Ma.prototype.g9f = function () {
    return this.mbb;
  };
  Ma.prototype.put_DivId = function (e) {
    this.DMb = e;
    this.Exb();
  };
  Ma.prototype.updateView = function () {
    this.Exb();
  };
  Ma.prototype.showFileDialog = function () {
    if (this.Uc && this.DMb) {
      var e = this.Uc, f = this;
      AscCommon.ajd(e.f_, e.Cga, e.ll.uFa(),
        function (y, Ma) {
          Asc.Fk.pg.JZ !== y ? e.Oe('asc_onError', y, Asc.Fk.Lk.Vo) : (e.$G(Asc.vE.Gs, Asc.OH.uda), AscCommon.Eld(Ma, e.f_, e.Cga, e.ll.uFa(), function (y, Ma) {
            Asc.Fk.pg.JZ !== y ? (e.Oe('asc_onError', y, Asc.Fk.Lk.Vo), e.$x(Asc.vE.Gs, Asc.OH.uda)) : e.tt.a5a(Ma, function () {
              0 < Ma.length && (f.Am = Ma[0], f.ea = Asc.ala.Image, f.Exb(), e.Oe('asc_onWatermarkImageLoaded'));
              e.$x(Asc.vE.Gs, Asc.OH.uda);
            });
          }));
        }, function (f) {
          Asc.Fk.pg.JZ !== f && e.Oe('asc_onError', f, Asc.Fk.Lk.Vo);
          e.$G(Asc.vE.Gs, Asc.OH.uda);
        });
    }
  };
  Ma.prototype.loadImageUrl = function (f,
                                        y) {
    var Ma = this;
    Ma.Uc && AscCommon.x$(Ma.Uc, [f], function (e) {
      e && e[0] && 'error' !== e[0].url && Ma.tt.a5a([e[0].url], function () {
        Ma.Am = e[0].url;
        Ma.ea = Asc.ala.Image;
        Ma.Exb();
        Ma.Oe('asc_onWatermarkImageLoaded');
      });
    }, !1, e, y);
  };
  Ma.prototype.drawTexture = Ma.prototype.Exb = function () {
    if (this.Am && this.Uc) {
      var f = document.getElementById(this.DMb);
      if (f) {
        for (var y = f.children, Ma = null, Ia = 0; Ia < y.length; ++Ia) if (y[Ia].nodeName && 'CANVAS' === y[Ia].nodeName.toUpperCase()) {
          Ma = y[Ia];
          break;
        }
        y = f.clientWidth;
        Ia = f.clientHeight;
        null === Ma &&
        (Ma = document.createElement('canvas'), Ma.width = parseInt(y), Ma.height = parseInt(Ia), f.appendChild(Ma));
        f = Ma.getContext('2d');
        f.clearRect(0, 0, Ma.width, Ma.height);
        Ma = this.Uc.tt.Z_[AscCommon.jW(this.Am)];
        if (Ma != e && null != Ma.Image && Ma.sz != AscFonts.KAa.Epa) {
          var Va = 0, Ta = 0, jb = Math.max(Ma.Image.width, 1), Xa = Math.max(Ma.Image.height, 1), $a = jb / Xa;
          jb = y;
          Xa = Ia;
          y / Ia >= $a ? (jb = $a * Ia, Va = (y - jb) / 2) : (Xa = jb / $a, Ta = (Ia - Xa) / 2);
          f.drawImage(Ma.Image, Va, Ta, jb, Xa);
        } else Ma && Ma.Image || (f.lineWidth = 1, f.beginPath(), f.moveTo(0, 0), f.lineTo(y,
          Ia), f.moveTo(y, 0), f.lineTo(0, Ia), f.strokeStyle = '#FF0000', f.stroke(), f.beginPath(), f.moveTo(0, 0), f.lineTo(y, 0), f.lineTo(y, Ia), f.lineTo(0, Ia), f.closePath(), f.strokeStyle = '#000000', f.stroke(), f.beginPath());
      }
    }
  };
  f.Asc.CAscCaptionProperties = f.Asc.Yig = $a;
  var jb = $a.prototype;
  jb.rBa = jb.get_Name = function () {
    return this.Ja;
  };
  jb.Jwc = jb.get_Label = function () {
    return this.IC;
  };
  jb.oXb = jb.get_Before = function () {
    return this.Ji;
  };
  jb.zjf = jb.get_ExcludeLabel = function () {
    return this.igc;
  };
  jb.E0a = jb.get_Format = function () {
    return this.Bk;
  };
  jb.Gjf = jb.get_FormatGeneral = function () {
    switch (this.Bk) {
      case Asc.ag.s0:
        return 'ALPHABETIC';
      case Asc.ag.ES:
        return 'alphabetic';
      case Asc.ag.t0:
        return 'Roman';
      case Asc.ag.FS:
        return 'roman';
      default:
        return 'Arabic';
    }
  };
  jb.Zjf = jb.get_IncludeChapterNumber = function () {
    return this.Whc;
  };
  jb.Jjf = jb.get_HeadingLvl = function () {
    return this.$Nb;
  };
  jb.Ckf = jb.get_Separator = function () {
    return this.Ypa;
  };
  jb.bjf = jb.get_Additional = function () {
    return this.Zw;
  };
  jb.w8a = jb.put_Name = function (e) {
    this.Ja = e;
  };
  jb.KDg = jb.put_Label = function (e) {
    this.IC =
      e;
  };
  jb.BDg = jb.put_Before = function (e) {
    this.Ji = e;
  };
  jb.EDg = jb.put_ExcludeLabel = function (e) {
    this.igc = e;
  };
  jb.d4b = jb.put_Format = function (e) {
    this.Bk = e;
  };
  jb.HDg = jb.put_IncludeChapterNumber = function (e) {
    this.Whc = e;
  };
  jb.GDg = jb.put_HeadingLvl = function (e) {
    this.$Nb = e;
  };
  jb.PDg = jb.put_Separator = function (e) {
    this.Ypa = e;
  };
  jb.ADg = jb.put_Additional = function (e) {
    this.Zw = e;
  };
  jb.Aif = function () {
    var e = new CFieldInstructionSEQ;
    this.Bk && e.OQb([this.Bk]);
    this.IC && e.SQb(this.IC);
    AscFormat.hb(this.$Nb) && e.YQb(this.$Nb);
    return e;
  };
  jb.Mxg =
    function () {
      return this.Aif().qqa();
    };
  jb.pGg = jb.updateName = function () {
    this.Ja = '';
    !this.igc && 'string' === typeof this.IC && 0 < this.IC.length && (this.Ja += this.IC + ' ');
    this.Whc && (this.Ja += '1', this.Ja = 'string' === typeof this.Ypa && 0 < this.Ypa.length ? this.Ja + this.Ypa : this.Ja + ' ');
    this.Ja += AscCommon.D6b(1, this.Bk);
  };
})(window, void 0);
'use strict';
(function (f, e) {
  function Ia() {
    this.tbd = this.ubd = this.bPc = this.aPc = this.M$b = this.N$b = 0;
  }

  function cb(e) {
    e ? (this.ea = void 0 != e.ea ? e.ea : null, this.we = void 0 != e.we ? e.we : null, this.Pqb = void 0 != e.Pqb ? e.Pqb : null, this.A5c = void 0 != e.A5c ? e.A5c : null, this.ZOc = void 0 != e.ZOc ? e.ZOc : null, this.eo = void 0 != e.eo ? e.eo : !1, this.Njd = void 0 != e.Njd ? e.Njd : -1) : (this.ea = AscCommon.wbc, this.we = 12.5, this.A5c = this.Pqb = !1, this.ZOc = null, this.eo = !1, this.Njd = -1);
  }

  function Xa(e) {
    e ? ('undefined' != typeof e.from && (this.from = e.from), 'undefined' !=
    typeof e.to && (this.to = e.to), 'undefined' != typeof e.paa && (this.subject = e.paa), 'undefined' != typeof e.W2g && (this.mailFormat = e.W2g), 'undefined' != typeof e.fileName && (this.fileName = e.fileName), 'undefined' != typeof e.message && (this.message = e.message), 'undefined' != typeof e.R5g && (this.recordFrom = e.R5g), 'undefined' != typeof e.S5g && (this.recordTo = e.S5g), 'undefined' != typeof e.l2g && (this.isJson = e.l2g)) : this.isJson = this.userId = this.recordCount = this.recordTo = this.recordFrom = this.message = this.fileName = this.mailFormat =
      this.subject = this.to = this.from = null;
  }

  function ib(e) {
    this.Qa = this.CY = this.pA = this.AW = void 0;
    e && (this.AW = e.AW, this.pA = e.pA, this.CY = e.CY, this.Qa = e.Qa);
  }

  function y(e) {
    AscCommon.Enb.call(this, e, AscCommon.bs.Tl);
    this.Fa = null;
    this.dwd = qb.ZTc;
    this.$lg = null;
    this.jr = !1;
    this.HVc = !0;
    this.Z5a = zb.Ana;
    this.tob = this.bhb = this.F0 = this.qGb = !1;
    this.bRd = '';
    this.URc = !0;
    this.V$c = this.BYc = this.Uof = !1;
    this.KFa = this.cEd = null;
    this.SFg = this.QRc = !1;
    this.i_c = this.nNc = this.EXd = null;
    this.zof = this.QK = this.qVd = !1;
    this.DXd = null;
    this.iWf =
      0;
    this.hWf = null;
    this.vob = !1;
    this.aKc = this.qma = null;
    this.wkb = 0;
    this.sSa = !1;
    this.HZc = null;
    this.XOf = !1;
    this.Y8d = null;
    this.vOc = this.nEe = !1;
    this.lM = [];
    this.gGa = -1;
    this.uca = !0;
    this.ZNd = null;
    this.MTc = c_oAscCollaborativeMarksShowType.$l;
    this.wOc = this.n1d = null;
    void 0 == f.editor && (f.editor = this, f.editor = f.editor, f.NATIVE_EDITOR_ENJINE && (editor = f.editor));
    this.BGf = [];
    this.U_();
  }

  function kb(e) {
    e ? (this.R$ = e.R$, this.n7b = e.n7b, this.S6b = e.S6b, this.f7b = e.f7b, this.g7b = e.g7b) : this.g7b = this.f7b = this.S6b = this.n7b = this.R$ =
      -1;
  }

  function rb(e) {
    if (e) switch (this.ea = void 0 != e.ea ? e.ea : Asc.kOa.Rna, this.wN = void 0 != e.wN ? e.wN : 0, this.xN = void 0 != e.xN ? e.xN : 0, this.ea) {
      case Asc.kOa.A2c:
        this.Fe = void 0 != e.Fe ? e.Fe : 0, this.Hk = void 0 != e.Hk ? e.Hk : !0;
    } else this.ea = Asc.kOa.Rna, this.xN = this.wN = 0;
  }

  function mb(e) {
    if (e) {
      if (this.Npf = void 0 != e.Npf ? e.Npf : !1, this.dY = void 0 != e.dY ? e.dY : '', this.KY = void 0 != e.KY ? e.KY : '', this.maa = void 0 != e.maa ? e.maa : '', this.BN = void 0 != e.BN ? e.BN : '', this.xua = void 0 != e.xua ? e.xua : '', this.LS = void 0 != e.LS ? e.LS : null, this.l8 = void 0 !=
      e.l8 ? e.l8 : !1, this.WN = void 0 != e.WN ? e.WN : '', this.wua = void 0 != e.wua ? e.wua : this.Hsg(this.WN), this.n4 = void 0 != e.n4 ? e.n4 : AscCommon.f$b(), this.GK = [], void 0 != e.GK) for (var f = e.GK.length, y = 0; y < f; y++) {
        var Ma = new mb(e.GK[y]);
        this.GK.push(Ma);
      }
    } else this.Npf = !1, this.xua = this.BN = this.maa = this.KY = this.dY = '', this.LS = null, this.l8 = !1, this.wua = this.WN = '', this.n4 = AscCommon.f$b(), this.GK = [];
  }

  var Ta = null, yb = AscCommon.Hwb, Va = AscCommon.bUc, zb = AscCommon.GFb, Ac = AscCommon.Bna, ec = AscCommon.m4,
    vc = AscCommon.zob, Xb = AscCommon.vIc,
    Ma = AscCommon.wIc, $a = AscCommon.rR, jb = AscCommon.LG, Pa = AscCommon.hJ, qe = AscCommon.mea, kf = AscCommon.Pdb,
    gf = AscCommon.yFb, Ie = AscCommon.xFb, kg = AscCommon.tH, Di = AscCommon.D4b, gh = AscCommon.eg, ue = AscCommon.Fg,
    Wc = null, Xc = null, Td = null, id = Asc.Fk, qb = Asc.Inb, rc = Asc.OH, $e = Asc.OUb, hi = Asc.J2d, og = Asc.vE,
    $g = Asc.IFb, ek = Asc.Iy, ah = Asc.k3, Cc = Asc.E5a, Oc = Asc.G7b, kc = Asc.HFb;
  Ia.prototype.n1g = function () {
    return this.N$b;
  };
  Ia.prototype.l1g = function () {
    return this.M$b;
  };
  Ia.prototype.e1g = function () {
    return this.aPc;
  };
  Ia.prototype.f1g =
    function () {
      return this.bPc;
    };
  Ia.prototype.g1g = function () {
    return this.ubd;
  };
  Ia.prototype.d1g = function () {
    return this.tbd;
  };
  cb.prototype.AN = function () {
    return this.ea;
  };
  cb.prototype.iU = function (e) {
    this.ea = e;
  };
  cb.prototype.qbc = function () {
    return this.we;
  };
  cb.prototype.fcc = function (e) {
    this.we = e;
  };
  cb.prototype.L0g = function () {
    return this.Pqb;
  };
  cb.prototype.s4g = function (e) {
    this.Pqb = e;
  };
  cb.prototype.K0g = function () {
    return this.A5c;
  };
  cb.prototype.r4g = function (e) {
    this.A5c = e;
  };
  cb.prototype.X0g = function () {
    return this.ZOc;
  };
  cb.prototype.aYc = function () {
    return this.eo;
  };
  cb.prototype.B1g = function () {
    return this.Njd;
  };
  cb.prototype.i5g = function (e) {
    this.Njd = e;
  };
  var rk = new function () {
    this.T2a = [{ name: 'US Letter', Mm: 215.9, Lm: 279.4, Rcc: 12240, ubc: 15840 }, {
      name: 'US Legal',
      Mm: 215.9,
      Lm: 355.6,
      Rcc: 12240,
      ubc: 20160
    }, { name: 'A4', Mm: 210, Lm: 297, Rcc: 11907, ubc: 16839 }, {
      name: 'A5',
      Mm: 148.1,
      Lm: 209.9,
      Rcc: 8391,
      ubc: 11907
    }, { name: 'B5', Mm: 176, Lm: 250.1, Rcc: 9979, ubc: 14175 }, {
      name: 'Envelope #10',
      Mm: 104.8,
      Lm: 241.3,
      Rcc: 5940,
      ubc: 13680
    }, {
      name: 'Envelope DL', Mm: 110.1,
      Lm: 220.1, Rcc: 6237, ubc: 12474
    }, { name: 'Tabloid', Mm: 279.4, Lm: 431.7, Rcc: 15842, ubc: 24477 }, {
      name: 'A3',
      Mm: 297,
      Lm: 420.1,
      Rcc: 16840,
      ubc: 23820
    }, { name: 'Tabloid Oversize', Mm: 304.8, Lm: 457.1, Rcc: 17282, ubc: 25918 }, {
      name: 'ROC 16K',
      Mm: 196.8,
      Lm: 273,
      Rcc: 11164,
      ubc: 15485
    }, { name: 'Envelope Coukei 3', Mm: 119.9, Lm: 234.9, Rcc: 6798, ubc: 13319 }, {
      name: 'Super B/A3',
      Mm: 330.2,
      Lm: 482.5,
      Rcc: 18722,
      ubc: 27358
    }];
    this.pFg = .5;
    this.FD = function (e, f) {
      for (var y in this.T2a) {
        var Ma = this.T2a[y];
        if (Math.abs(e - Ma.Mm) < this.pFg && Math.abs(f - Ma.Lm) < this.pFg) return Ma;
      }
      return {
        Mm: e,
        Lm: f
      };
    };
  };
  Xa.prototype.R0g = function () {
    return this.from;
  };
  Xa.prototype.v4g = function (e) {
    this.from = e;
  };
  Xa.prototype.D1g = function () {
    return this.to;
  };
  Xa.prototype.r5g = function (e) {
    this.to = e;
  };
  Xa.prototype.C1g = function () {
    return this.subject;
  };
  Xa.prototype.k5g = function (e) {
    this.subject = e;
  };
  Xa.prototype.Vxg = function () {
    return this.mailFormat;
  };
  Xa.prototype.N4g = function (e) {
    this.mailFormat = e;
  };
  Xa.prototype.Q0g = function () {
    return this.fileName;
  };
  Xa.prototype.t4g = function (e) {
    this.fileName = e;
  };
  Xa.prototype.i1g = function () {
    return this.message;
  };
  Xa.prototype.P4g = function (e) {
    this.message = e;
  };
  Xa.prototype.Yxg = function () {
    return this.recordFrom;
  };
  Xa.prototype.X4g = function (e) {
    this.recordFrom = e;
  };
  Xa.prototype.Zxg = function () {
    return this.recordTo;
  };
  Xa.prototype.Y4g = function (e) {
    this.recordTo = e;
  };
  Xa.prototype.s1g = function () {
    return this.recordCount;
  };
  Xa.prototype.ODg = function (e) {
    this.recordCount = e;
  };
  Xa.prototype.Ala = function () {
    return this.userId;
  };
  Xa.prototype.f4b = function (e) {
    this.userId = e;
  };
  Xa.prototype.JDg = function (e) {
    this.isJson = e;
  };
  ib.prototype.U5a = function () {
    return this.Qa;
  };
  ib.prototype.q6a = function (e) {
    this.Qa = e;
  };
  ib.prototype.MMf = function () {
    return this.CY;
  };
  ib.prototype.RQf = function (e) {
    this.CY = e;
  };
  ib.prototype.KMf = function () {
    return this.pA;
  };
  ib.prototype.PQf = function (e) {
    this.pA = e;
  };
  ib.prototype.LMf = function () {
    return this.AW;
  };
  ib.prototype.QQf = function (e) {
    this.AW = e;
  };
  AscCommon.cjg = function (e, y) {
    this.xg = e;
    this.yxb = y;
    this.oRf = [];
    this.current = -1;
    this.Qz = '';
    this.start = function () {
      this.xg.b1d = this;
      this.xg.Elb();
      f.gj && (this.Qz = f.gj.ffg());
      this.QF();
    };
    this.end = function () {
      f.gj && f.gj.ncg(this.Qz,
        this.oRf);
      delete this.xg.b1d;
      this.xg.llb();
      this.xg.Fa.Wa.Sf();
    };
    this.QF = function () {
      ++this.current;
      var y = this.xg.Fa.Wa;
      0 == this.current && y.gg(AscDFH.bUd);
      if (this.current >= this.yxb.length) this.end(); else {
        for (var Ma = null; this.current < this.yxb.length;) {
          var Pa = this.yxb[this.current];
          void 0 === Pa.Props && (Pa.Props = {});
          var Ia = !1;
          Ia = void 0 === Pa.Url && void 0 === Pa.Script || void 0 === Pa.Props.InternalId ? y.Ke(AscCommon.K5) : y.Ke(AscCommon.rR, {
            ea: AscCommon.Aaa,
            Xb: [ue.cg(Pa.Props.InternalId)],
            Lu: AscCommon.K5
          });
          if (!1 ===
            Ia) {
            Ia = !1;
            if (void 0 !== Pa.Url || void 0 !== Pa.Script) {
              var Va = null;
              void 0 !== Pa.Props.InternalId && (Va = y.oHb(Pa.Props.InternalId), Ia = !0);
              Ma = new AscCommon.rYd;
              Ma.Ia = Pa.Props.Id;
              Ma.ey = Pa.Props.Tag;
              Ma.Jf = kc.Sza;
              Ma.BLa = Pa.Props.InternalId;
              Ma.OB = Pa.Props.Alias;
              void 0 !== Pa.Props.Appearance && (Ma.JB = Pa.Props.Appearance);
              void 0 !== Pa.Props.Color && (Ma.va = new Asc.ita(Pa.Props.Color.R, Pa.Props.Color.G, Pa.Props.Color.B));
              if (null === Va) {
                var Ta = y.kp();
                Ta && !Ta.BK() && y.ay(!1, !0);
                Va = y.uJ(c_oAscSdtLevelType.ida);
              }
              Va.S$b(Ma);
              Ma = Va.F$a();
              this.oRf.push({ Tag: Ma.ey, Id: Ma.Ia, Lock: Ma.Jf, InternalId: Ma.BLa, Alias: Ma.OB, Appearance: Ma.JB });
            }
            if (void 0 !== Pa.Url) {
              this.xg.KFa = {
                YUd: null, yxb: [{ url: Pa.Url, format: Pa.Format, k_c: Pa.Token }], fvg: function (e, f) {
                  e.KFa.YUd = f;
                  AscCommon.qPf(f['output.bin'], function (f) {
                    var y;
                    null !== f && (y = AscCommon.E$f(f)) ? e.tJa(AscCommon.wt.Ll, y, void 0, void 0, !0, function () {
                      e.Fa.Wa.zt(!1, !1, !0);
                      e.Fa.Wa.Bd();
                      if (0 < e.KFa.yxb.length) {
                        var f = new Asc.iQc(Asc.Inb.BNd);
                        f.aPf = !0;
                        e.drd(f);
                      } else e.ywd();
                    }) : (e.ywd(), e.Oe('asc_onError',
                      id.pg.qZd, id.Lk.Vo));
                  }, 'arraybuffer');
                }, ZZg: function (e) {
                  Va.aa.Cl(Va.aa.cs() - 1, 1);
                  Va.Uh(!1, !1);
                  e = e.b1d;
                  e.yxb[e.current].Props && Va.S$b({ Jf: e.yxb[e.current].Props.Lock });
                  Va = e = null;
                  f.gj.xg.TTb(!0);
                  setTimeout(function () {
                    f.gj.xg.b1d.QF();
                  }, 1);
                }
              };
              y = new Asc.iQc(Asc.Inb.BNd);
              y.aPf = !0;
              this.xg.drd(y);
              return;
            }
            if (void 0 !== Pa.Script) {
              eval('(function(){ var Api = window.g_asc_plugins.api;\n' + Pa.Script + '\n})();');
              c_oAscSdtLevelType.ida === Va.vV() ? Ia ? (1 < Va.aa.cs() && Va.aa.Cl(Va.aa.cs() - 1, 1), Va.ee(!1)) : (1 < Va.aa.cs() && (Va.aa.Cl(Va.aa.cs() -
                1, 1), Va.Uh(!1, !1)), y.zt(!1, !1, !0)) : Ia ? (1 < Va.cs() && Va.Cl(Va.cs() - 1, 1), Va.ee(), Va.DW()) : (1 < Va.aa.cs() && (Va.Cl(Va.cs() - 1, 1), Va.Uh(), Va.DW()), y.zt(!1, !1, !0));
              Pa = e.b1d;
              Pa.yxb[Pa.current].Props && Va.S$b({ Jf: Pa.yxb[Pa.current].Props.Lock });
              Pa = null;
              Pa = y.cr();
              y = y.C8c();
              Ia = {};
              for (Ma = 0; Ma < y.length; Ma++) Ia[y[Ma]] = y[Ma];
              f.gj.Dlb = Ia;
              AscCommon.lOc(f.gj.xg, Pa, Ia, function () {
                var e = f.gj.xg;
                delete f.gj.Dlb;
                e.TTb(!0);
                e.Fa.Wa.W0d(!0);
                setTimeout(function () {
                  f.gj.xg.b1d.QF();
                }, 1);
              });
              return;
            }
            Pa.Props && (Va = y.BHb(Pa.Props.InternalId)) &&
            (Ma = new AscCommon.rYd, Ma.Ia = Pa.Props.Id, Ma.ey = Pa.Props.Tag, Ma.Jf = Pa.Props.Lock, Ma.BLa = Pa.Props.InternalId, Ma.OB = Pa.Props.Alias, void 0 !== Pa.Props.Appearance && (Ma.JB = Pa.Props.Appearance), void 0 !== Pa.Props.Color && (Ma.va = new Asc.ita(Pa.Props.Color.R, Pa.Props.Color.G, Pa.Props.Color.B)), Va.S$b(Ma), Ma = Va.F$a(), this.oRf.push({
              Tag: Ma.ey,
              Id: Ma.Ia,
              Lock: Ma.Jf,
              InternalId: Ma.BLa,
              Alias: Ma.OB,
              Appearance: Ma.JB
            }));
          } else !1 === y.Ke(AscCommon.IQc) && (Pa = this.yxb[this.current], Pa.Props && void 0 === Pa.Url && void 0 === Pa.Script &&
          (Va = y.BHb(Pa.Props.InternalId))) && (Ma = new AscCommon.rYd, Ma.Ia = Pa.Props.Id, Ma.ey = Pa.Props.Tag, Ma.Jf = Pa.Props.Lock, Ma.BLa = Pa.Props.InternalId, Ma.OB = Pa.Props.Alias, void 0 !== Pa.Props.Appearance && (Ma.JB = Pa.Props.Appearance), void 0 !== Pa.Props.Color && (Ma.va = new Asc.ita(Pa.Props.Color.R, Pa.Props.Color.G, Pa.Props.Color.B)), Va.S$b(Ma), Ma = Va.F$a(), this.oRf.push({
            Tag: Ma.ey,
            Id: Ma.Ia,
            Lock: Ma.Jf,
            InternalId: Ma.BLa,
            Alias: Ma.OB,
            Appearance: Ma.JB
          }));
          ++this.current;
        }
        this.current >= this.yxb.length && this.end();
      }
    };
    this.delete =
      function () {
        for (var e = this.xg.Fa.Wa, f = [], y = 0; y < this.yxb.length; y++) {
          var Ma = ue.cg(this.yxb[y].InternalId);
          Ma && (Ma instanceof AscCommonWord.Lpb || Ma instanceof AscCommonWord.jHb) && f.push(ue.cg(this.yxb[y].InternalId));
        }
        e.hFb(!1);
        if (!1 === e.Ke(AscCommon.rR, { ea: AscCommon.Aaa, Xb: f, Lu: AscCommon.n3 })) {
          e.gg(AscDFH.bUd);
          for (y = 0; y < this.yxb.length; y++) e.tGf(this.yxb[y].InternalId);
          e.Sf();
        }
        e.hFb(!0);
        this.xg.TTb(!0);
        delete this.xg.b1d;
      };
  };
  y.prototype = Object.create(AscCommon.Enb.prototype);
  y.prototype.constructor = y;
  y.prototype.Oe =
    function () {
      this.eAf.apply(this, arguments);
      var e = arguments[0];
      if (bh.hasOwnProperty(e)) {
        for (var y = 0; y < bh[e].length; ++y) bh[e][y].apply(this || f, Array.prototype.slice.call(arguments, 1));
        return !0;
      }
      return !1;
    };
  y.prototype.O8d = function () {
    return null === this.Fa.Wa;
  };
  y.prototype.t0d = function (e) {
    c_oAscCollaborativeMarksShowType.kf !== this.MTc && c_oAscCollaborativeMarksShowType.kf === e && this.Fa && this.Fa.Wa ? (this.MTc = e, AscCommon.Kd.BHa(!0)) : this.MTc = e;
  };
  y.prototype.NZd = function () {
    return this.MTc;
  };
  y.prototype.Pca = function () {
    return this.Fa &&
    this.Fa.Wa ? this.Fa.Wa : null;
  };
  y.prototype.q2 = function () {
    return this.Fa.Wa ? 0 !== this.Fkb || this.Fa.Wa.GFf() : 0 !== this.Fkb;
  };
  y.prototype.BHa = function () {
    AscCommon.Kd.BHa(!0);
  };
  y.prototype.SPd = function (e) {
    e = e.toLowerCase();
    void 0 !== AscCommonWord.Dhg[e] && (this.ZNd = AscCommonWord.Dhg[e]);
  };
  y.prototype.KLg = function (e) {
    var f = this.ZNd.W0[e];
    return void 0 !== f ? f : e;
  };
  y.prototype.E2c = function () {
    !0 === Td.BZ() ? this.uPc(!0) : this.uPc(!1);
    this.D7a();
  };
  y.prototype.rZf = function () {
    this.uPc(!1);
    this.D7a();
  };
  y.prototype.uPc = function (e) {
    this.zof =
      e;
    this.Oe('asc_onDocumentModifiedChanged');
    if (void 0 !== f.AscDesktopEditor) f.AscDesktopEditor.onDocumentModifiedChanged(e);
  };
  y.prototype.yof = function () {
    return this.I1 ? this.zof : !0;
  };
  y.prototype.nXd = function () {
    0 != this.lM.length && this.lM.splice(0, this.lM.length);
    this.Fa && this.Fa.xd && this.Fa.xd.Yng();
  };
  y.prototype.HLd = function () {
    this.Fa && this.Fa.xd && this.Fa.xd.Xkg();
    this.Oe('asc_onFocusObject', this.lM);
  };
  y.prototype.H8f = function (e) {
    !0 === e && this.Fa.Wa.Ie();
    return this.lM;
  };
  y.prototype.Mgg = function (e, f) {
    var y =
      null;
    switch (e) {
      case $g.Ua:
        y = new Asc.mdb(f);
        break;
      case $g.Image:
        y = new ah(f);
        break;
      case $g.Table:
        y = new Asc.JTc(f);
        break;
      case $g.Hk:
        y = new cb(f);
    }
    f = this.lM.length - 1;
    for (var Ma = !1; 0 <= f;) {
      if (this.lM[f].ea == e) {
        this.lM[f].pa = y;
        Ma = !0;
        break;
      }
      f--;
    }
    Ma || (this.lM[this.lM.length] = new Ie(e, y));
  };
  y.prototype.Gu = function () {
    this.Fa.Gu();
  };
  y.prototype.CRd = function (e) {
    this.$lg = e;
  };
  y.prototype.pQc = function () {
    return this.$lg;
  };
  y.prototype.fEf = function () {
    return this.Fa.fEf();
  };
  y.prototype.oLg = function () {
    this.qVd = !0;
    this.tt && (this.tt.ona =
      !1);
  };
  y.prototype.lXf = function () {
    return this.Fa.lXf();
  };
  y.prototype.oVf = function () {
    return this.Fa.oVf();
  };
  y.prototype.FEf = function () {
    !0 === f.flat_desine && AscCommonWord.Uhg(AscCommonWord.bXf);
    var y = e.getElementsByTagName('head')[0], Ma = e.createElement('style');
    Ma.type = 'text/css';
    Ma.innerHTML = '.block_elem { position:absolute;padding:0;margin:0; }';
    y.appendChild(Ma);
    Ma = e.createElement('style');
    Ma.type = 'text/css';
    Ma.innerHTML = '.buttonRuler {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAwCAYAAAAYX/pXAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABhElEQVRIS62Uwa6CMBBF/VQNQcOCBS5caOICApEt3+Wv+AcmfQ7pbdreqY+CJifTdjpng727aZrMFmbB+/3erYEE+/3egMPhMPP57QR/EJCgKAoTs1hQlqURjsdjAESyPp1O7pwEVVWZ1+s1VyB7DemRoK5rN+CvNaRPgqZpgqHz+UwSnEklweVyCQbivX8mlQTX65UGfG63m+vLXRLc7/ekQHoAexK0bWs0uq5TKwli8Afq+94Mw+CQPe78K5D6eDzMOI4GVcCdr4IlOMEWfiP4fJpVkEDLA38ghgR+DgB/ICYQ5OYBCez7d1mAvQZ6gcBmAK010A8ENg8c9u2rZ6iBwL51R7z3z1ADgc2DJDYPZnA3ENi3rhLlgauBAO8/JpUHJEih5QF6iwRaHqC3SPANJ9jCbwTP53MVJNDywB+IIYGfA8AfiAkEqTyQDEAO+HlAgtw8IEFuHpAgNw9IkJsHJMjNAxLk5gEJ8P5jUnlAghRaHqC3SKDlAXqLBN9wgvVM5g/dFuEU6U2wnAAAAABJRU5ErkJggg==);background-position: 0px 0px;background-repeat: no-repeat;}';
    y.appendChild(Ma);
    Ma = e.createElement('style');
    Ma.type = 'text/css';
    Ma.innerHTML = '.buttonPrevPage {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABgBAMAAADm/++TAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA////UVNVu77Cenp62Nrc3x8hMQAAAAF0Uk5TAEDm2GYAAABySURBVCjPY2AgETDBGEoKUAElJcJSxANjKGAwDQWDYAKMIBhDSRXCCFJSIixF0GS4M+AMExcwcCbAcIQxBEUgDEdBQcJSBE2GO4PU6IJHASxS4NGER4p28YWIAlikwKMJjxTt4gsRBbBIgUcTHini4wsAwMmIvYZODL0AAAAASUVORK5CYII=);background-position: 0px 0px;background-repeat: no-repeat;}';
    y.appendChild(Ma);
    Ma = e.createElement('style');
    Ma.type = 'text/css';
    Ma.innerHTML = '.buttonNextPage {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABgBAMAAADm/++TAAAABGdBTUEAALGPC/xhBQAAABJQTFRFAAAA////UVNVu77Cenp62Nrc3x8hMQAAAAF0Uk5TAEDm2GYAAABySURBVCjPY2AgETDBGEoKUAElJcJSxANjKGAwDQWDYAKMIBhDSRXCCFJSIixF0GS4M+AMExcwcCbAcIQxBEUgDEdBQcJSBE2GO4PU6IJHASxS4NGER4p28YWIAlikwKMJjxTt4gsRBbBIgUcTHini4wsAwMmIvYZODL0AAAAASUVORK5CYII=);background-position: 0px -48px;background-repeat: no-repeat;}';
    y.appendChild(Ma);
  };
  y.prototype.XUf = function () {
    this.FEf();
    null != this.Xe && (this.Xe.innerHTML = '<div id="id_main" class="block_elem" style="touch-action:none;-ms-touch-action: none;-moz-user-select:none;-khtml-user-select:none;user-select:none;background-color:' + AscCommonWord.YP.Rsa + ';overflow:hidden;" UNSELECTABLE="on">\t\t\t\t\t\t\t\t<div id="id_panel_left" class="block_elem">\t\t\t\t\t\t\t\t\t<canvas id="id_buttonTabs" class="block_elem"></canvas>\t\t\t\t\t\t\t\t\t<canvas id="id_vert_ruler" class="block_elem"></canvas>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_panel_top" class="block_elem">\t\t\t\t\t\t\t\t\t<canvas id="id_hor_ruler" class="block_elem"></canvas>\t\t\t\t\t\t\t\t\t</div>                                    <div id="id_main_view" class="block_elem" style="touch-action:none;overflow:hidden">                                        <canvas id="id_viewer" class="block_elem" style="touch-action:none;-ms-touch-action: none;-webkit-user-select: none; background-color:' +
      AscCommonWord.YP.Rsa + ';z-index:1"></canvas>\t\t\t\t\t\t\t\t\t    <canvas id="id_viewer_overlay" class="block_elem" style="touch-action:none;-ms-touch-action: none;-webkit-user-select: none; z-index:2"></canvas>\t\t\t\t\t\t\t\t\t    <canvas id="id_target_cursor" class="block_elem" width="1" height="1" style="touch-action:none;-ms-touch-action: none;-webkit-user-select: none;width:2px;height:13px;z-index:4;"></canvas>                                    </div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_panel_right" class="block_elem" style="touch-action:none;margin-right:1px;background-color:' +
      AscCommonWord.YP.vmb + ';">\t\t\t\t\t\t\t\t\t<div id="id_buttonRulers" class="block_elem buttonRuler"></div>\t\t\t\t\t\t\t\t\t<div id="id_vertical_scroll" style="left:0;top:0px;width:14px;overflow:hidden;position:absolute;">\t\t\t\t\t\t\t\t\t<div id="panel_right_scroll" class="block_elem" style="left:0;top:0;width:1px;height:6000px;"></div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_buttonPrevPage" class="block_elem buttonPrevPage"></div>\t\t\t\t\t\t\t\t\t<div id="id_buttonNextPage" class="block_elem buttonNextPage"></div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div id="id_horscrollpanel" class="block_elem" style="touch-action:none;margin-bottom:1px;background-color:' +
      AscCommonWord.YP.vmb + ';">\t\t\t\t\t\t\t\t\t<div id="id_horizontal_scroll" style="left:0px;top:0;height:14px;overflow:hidden;position:absolute;width:100%;">\t\t\t\t\t\t\t\t\t\t<div id="panel_hor_scroll" class="block_elem" style="left:0;top:0;width:6000px;height:1px;"></div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>' + this.Xe.innerHTML);
  };
  y.prototype.qJg = function () {
    return this.IP ? this.Fa.Ja : '';
  };
  y.prototype.yEf = function () {
    this.wOc = new AscCommon.CTf;
    this.Fa.Wa.Jg();
    var e = {
      data: '', Eua: function (e, f) {
        this.data =
          f;
      }
    };
    this.H7b(e, 2);
    this.Fa.Wa.Yc();
    return e.data;
  };
  y.prototype.zOd = function () {
    this.Fa.Wa = new AscCommonWord.Amb(this.Fa.xd);
    this.Fa.xd.Wa = this.Fa.Wa;
    this.KYc || this.Fa.Wa.R0d();
    this.Fa.Zs && (this.Fa.Zs.delegate.Ga = this.Fa.Wa);
    if (this.rVd() || this.TRc()) this.jr = !1, this.Fa.g_d();
  };
  y.prototype.CFf = function () {
    this.Fa.xd.u_ = new AscCommonWord.fHg;
    this.Fa.xd.u_.Gu();
    this.Fa.xd.BBf(!1);
    this.Fa.g_d();
  };
  y.prototype.Ote = function (e, f) {
    this.qVd = !1;
    this.CFf();
    this.SOb = null;
    this.DocumentType = 1;
    this.sVc = !0;
    this.Fa.xd.u_.nh(e,
      f);
    this.K4.d7a(this.Fa.xd.u_.SP, !0);
  };
  y.prototype.Q_d = function (e, f) {
    this.zOd();
    this.DocumentType = 2;
    this.IXf = this.Fa.Wa.rOc();
    gh.EDa(!0);
    AscFonts.WL = !0;
    e = new AscCommonWord.Y8a(this.Fa.Wa, { Ptc: !1, eua: 0, o3b: 0 });
    e.lq(f) ? (Td && Td.NLe && Td.NLe(e.stream), gh.EDa(!1), this.SOb = 1, (new AscCommonWord.rjg).LHg(this, this.IXf), this.Fa.xd.NYd(), AscCommon.Ata.vUf(this.Fa.Wa), this.K4.d7a(this.Fa.Wa.SP, !1)) : editor.Oe('asc_onError', id.pg.gPd, id.Lk.JU);
    AscFonts.WL = !1;
    editor.vOc = null == editor.Fa.Wa ? !0 : !editor.Fa.Wa.Tta;
    f = editor.vOc ?
      rk.FD(AscCommon.fFb, AscCommon.g5a) : rk.FD(AscCommon.g5a, AscCommon.fFb);
    editor.e_c(f.Mm, f.Lm);
    editor.kTc(editor.zTd());
    this.IP && (AscCommon.Se.f2a = !1, Wc.Img = 'wrd_pastebin', Wc.Mkg = 'none');
  };
  var bh = {};
  y.prototype.TZa = function (e, f) {
    bh.hasOwnProperty(e) || (bh[e] = []);
    bh[e].push(f);
  };
  y.prototype.V9e = function (e, f) {
    if (bh.hasOwnProperty(e)) for (var y = bh[e].length - 1; 0 <= y; --y) bh[e][y] == f && bh[e].splice(y, 1);
  };
  y.prototype.krc = function (e) {
    return bh.hasOwnProperty(e);
  };
  y.prototype.r1g = function () {
    return [this.n1d.qVa, this.n1d.Ung];
  };
  y.prototype.azd = function (e) {
    if (this.Fa && this.Fa.Wa && e) switch (e.type) {
      case 'bookmark':
        this.Fa.Wa.qpa(e.data, !0);
        break;
      case 'comment':
        if (e = this.Fa.Wa.Vj.iFf(e.data)) this.Rrd(e), this.Zrd(e);
    }
  };
  y.prototype.tVe = function (e, f) {
    var y = new AscCommon.zmb;
    y.bIb(e);
    y.yT(f);
    AscCommon.Kd.vNd(y);
  };
  y.prototype.SHf = function (e, f) {
    for (var y = e.length, Ma = 0; Ma < y; ++Ma) this.tVe(e[Ma], f);
  };
  y.prototype.Hod = function () {
    var e = this;
    this.ll.AIa = function (f) {
      !0 === AscCommon.Kd.gB && e.Fa.Wa.QVc(f[f.length - 1].cursor, f[f.length - 1].user, !0,
        f[f.length - 1].useridoriginal);
    };
    this.ll.bsa = function (f) {
      !0 === AscCommon.Kd.gB && !1 === f.state && e.Fa.Wa.l5a(f.id);
      e.Oe('asc_onConnectionStateChanged', f);
    };
    this.ll.qya = function (f) {
      if (!e.God(e.ll.qya, f) && 2 != f.state) {
        var y = f.block, Pa = ue.cg(y);
        if (null != Pa) {
          y = Pa.Jf;
          y.a7b(f.user);
          var Ia = Pa.Jf.Hi();
          Xb === Ia || Ma === Ia ? y.mH(Ma, !0) : y.mH(vc, !0);
          Pa instanceof AscCommonWord.eee ? e.Vgg() : Pa instanceof AscCommonWord.Amb ? e.Tgg() : Pa instanceof AscCommon.Ssa ? e.W$d(Pa.rb(), f.user) : Pa instanceof AscCommonWord.GTf ? e.Ugg() : Pa instanceof
            AscCommon.kkb && editor.Oe('asc_onLockCore', !0);
          e.Fa.Wa.Ie();
        } else AscCommon.Kd.dYd(y, f.user);
      }
    };
    this.ll.oma = function (f, y) {
      if (!e.God(e.ll.oma, f, y)) {
        var Pa = f.block, Ia = ue.cg(Pa);
        if (null != Ia) {
          if (Pa = Ia.Jf, 'undefined' != typeof Pa) {
            var Va = Pa.Hi(), Ta = Ac;
            if (Va === vc) 1 != y ? Ta = Ac : (Ta = Xb, AscCommon.Kd.Cbe(Ia)); else if (Va === ec) Ta = ec; else if (Va === Xb || Va === Ma) Ta = Xb;
            Pa.mH(Ta, !0);
            e.Fa.Wa.Ie();
            Ia instanceof AscCommonWord.eee ? Ta !== ec && Ta !== Ac ? e.Vgg() : e.lhg() : Ia instanceof AscCommonWord.Amb ? Ta !== ec && Ta !== Ac ? e.Tgg() : e.jhg() :
              Ia instanceof AscCommon.Ssa ? Ta !== ec && Ta !== Ac ? e.W$d(Ia.rb(), f.user) : e.aae(Ia.rb()) : Ia instanceof AscCommonWord.GTf ? Ta !== ec && Ta !== Ac ? e.Ugg() : e.khg() : Ia instanceof AscCommon.kkb && (Ta !== ec && Ta !== Ac ? editor.Oe('asc_onLockCore', !0) : editor.Oe('asc_onLockCore', !1));
          }
        } else AscCommon.Kd.eDe(Pa);
      }
    };
    this.ll.zua = function (f, y, Ma) {
      var Pa;
      Ma && (Pa = -1 === AscCommon.Kd.kaa);
      e.MTc === c_oAscCollaborativeMarksShowType.kf && (Pa = !1);
      y = AscCommon.hGb(y, null, !1, !1);
      e.tVe(f, !1 === Pa ? null : y);
      !Ma && e.QK && e.gCf();
    };
    this.ll.tGa = function (e) {
      e &&
      !0 === AscCommon.Kd.gB && (e = JSON.parse(e), AscCommon.Kd.NDf(e.Yl, e.dVf, e.x_f));
    };
  };
  y.prototype.UGb = function () {
    AscCommon.Kd.c7b();
    this.Fa && this.Fa.Wa && this.Fa.Wa.L0d();
    this.j2d(!0);
    f.AscCommon.Gh && AscCommon.Kd.gB && f.AscCommon.Gh.aoa();
  };
  y.prototype.dRc = function () {
    AscCommon.Kd.Gje();
    this.j2d(!1);
  };
  y.prototype.I0d = function (e) {
    if (void 0 != e && void 0 != e.ParagraphId) {
      var f = ue.cg(e.ParagraphId), y = e.type;
      null != f && ('spell' === y ? (f.bz.oEf(e.RecalcId, e.usrCorrect), f.vTa()) : 'suggest' === y && (f.bz.pEf(e.RecalcId, e.ElementId,
        e.usrSuggest), this.pCf()));
    }
  };
  y.prototype.tqd = function () {
    this.Fa.Wa && this.Fa.Wa.R0d();
  };
  y.prototype.D7a = function () {
    var e = AscCommon.Kd, f = this.yof() || !0 !== e.Q$() && 0 !== e.awc();
    !0 === e.gB && !0 !== e.Q$() && (f = !1);
    f !== this.c2a && (this.c2a = f, this.Oe('asc_onDocumentCanSaveChanged', this.c2a));
  };
  y.prototype.Tpd = function () {
    this.Fa && this.Fa.Wa && this.Fa.Wa.vva();
  };
  y.prototype.u4g = function (e) {
    if (void 0 != e.wf) {
      var f = AscCommon.TK, y = Ta.bna(e.wf);
      f = f.FH(y, editor.etg, e);
      e.wf = new gf({ Ja: y.Ja, za: -1 });
      !1 === f && !1 === this.Fa.Wa.Ke(Pa) &&
      (this.Fa.Wa.gg(AscDFH.T5d), this.Fa.Wa.JV(e), this.Fa.Wa.Sf());
    } else !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.S5d), this.Fa.Wa.JV(e), this.Fa.Wa.Sf());
  };
  y.prototype.etg = function (e) {
    this.$x(og.tP, rc.FH);
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.U5d), this.Fa.Wa.JV(e), this.Fa.Wa.Sf());
  };
  y.prototype.MSg = function (e) {
    this.Fa.Wa.NSf(e);
  };
  y.prototype.W5g = function (e) {
    this.Fa.Wa.FYf(e);
  };
  y.prototype.J4d = function () {
    var e = this.Fa.Wa, f = e.mu();
    e = e.Wp();
    return new Asc.ZDf(f, e);
  };
  y.prototype.wJg = function () {
    return JSON.stringify(this.Fa.Wa);
  };
  y.prototype.Uxg = function () {
    return this.Fa.Wa.aa.length;
  };
  y.prototype.t6g = function (e) {
    var f = this.Fa.Wa;
    !0 === f.Selection.Ka && f.Yc();
    f.sb.JD(!0);
    f.sb.pM();
    f.Selection.Ka = !0;
    f.Selection.Mb = !1;
    f.Selection.If = AscCommon.Neg;
    f.Selection.ta = e;
    f.Selection.sa = e;
    f.aa[e].Selection.Ka = !0;
    f.aa[e].Selection.ta = f.aa[e].LHb();
    f.aa[e].Selection.sa = f.aa[e].aa.length - 1;
    f.j$g();
  };
  y.prototype.$Ya = function (e) {
    'undefined' != typeof e && (this.fCf(e.ud), this.kCf(e.bf), this.zCf(e.lj), this.qCf(e.fj), this.wCf(e.Vb), this.vCf(e.wf),
      this.ACf(e.zj), this.nSf(e.xh), this.yCf(e.dc), this.sCf(e.Fj), this.rCf(e.hn), this.xCf(e.gl), this.uCf(e.we), this.tCf(e.Uf), this.mSf(e), this.IP && this.Oe('asc_onTextShd', new Asc.tWc(e.Pb)));
  };
  y.prototype.z7a = function (e) {
    var f = editor.Fa.Wa.Wp();
    e.p0 = f.zj === AscCommon.IE;
    e.n1 = f.zj === AscCommon.WE;
    e.fj = f.fj;
    e.Fj = f.Fj;
    e.oU = f.hn;
    e.gl = f.gl;
    e.TU = f.dc;
    e.we = f.we;
    !0 === e.dc.Ks ? e.dc.kg = AscCommonWord.oLd : void 0 === e.dc.Ks && (e.dc.kg = AscCommonWord.V0d);
    !0 === e.dc.Us ? e.dc.Ji = AscCommonWord.oLd : void 0 === e.dc.Us && (e.dc.Ji = AscCommonWord.V0d);
    e.SHa = -1 === e.cm ? '' : void 0 === e.cm || void 0 === this.Fa.Wa.Ug.ef[e.cm] ? this.Fa.Wa.Ug.ef[this.Fa.Wa.Ug.wb.Ua].Ja : this.Fa.Wa.Ug.ef[e.cm].Ja;
    var y = f = -1;
    if (null != e.Kf && 0 !== e.Kf.ae && '0' !== e.Kf.ae) {
      var Ma = this.Fa.Wa.us().jm(e.Kf.ae);
      Ma && Ma.$k(e.Kf.tc) && (y = Ma.$k(e.Kf.tc).nFf(), f = y.ea, y = y.MC);
    }
    e.nab = { ea: f, MC: y };
    void 0 !== e.vi && void 0 !== e.vi.KG && (e.vi.KG = AscCommonWord.wig === e.vi.KG ? !1 : AscCommonWord.vig === e.vi.KG ? !0 : void 0);
    this.vXd(e.dc);
    this.vQd(e.$b);
    this.xXd(e.Me);
    this.wXd(e.SHa);
    this.tXd(e.nab);
    this.mCf(e);
  };
  y.prototype.Wpd = function (e) {
    if (null != this.Fa.xd.u_) !0 === f.AscDesktopEditor.IsSupportNativePrint(this.MEf) && f.AscDesktopEditor.Print(); else {
      var y = {};
      e && e.qEa && e.qEa && Asc.GIb.Selection === e.qEa.pac() && (y.printOptions = { selection: 1 });
      f.AscDesktopEditor.Print(JSON.stringify(y));
    }
    return !0;
  };
  y.prototype.Ul = function () {
    this.Fa.Wa.Lza();
  };
  y.prototype.oh = function () {
    this.Fa.Wa.aUc();
  };
  y.prototype.Sa = function () {
    return f.AscDesktopEditor ? (f.asc_desktop_copypaste(this, 'Copy'), !0) : AscCommon.q3.c1c();
  };
  y.prototype.w5a =
    function (e, f) {
      this.Fa.xd.w5a(e, f);
    };
  y.prototype.eVf = function () {
    return f.AscDesktopEditor ? (f.asc_desktop_copypaste(this, 'Cut'), !0) : AscCommon.q3.fde();
  };
  y.prototype.fYf = function () {
    return f.AscDesktopEditor ? (f.asc_desktop_copypaste(this, 'Paste'), !0) : !this.Fa.Wa || AscCommon.q3.x_d() ? !1 : AscCommon.q3.gde();
  };
  y.prototype.yZf = function () {
  };
  y.prototype.H7b = function (e, y) {
    if (this.Fa.Wa) {
      var Ma = null;
      if (AscCommon.wt.Text & y) {
        var Pa = this.Fa.Wa.Jq(!1, { ePc: !0 });
        e.Eua(AscCommon.wt.Text, '' === Pa ? null : Pa);
      }
      AscCommon.wt.tia &
      y && (Pa = new AscCommon.RTc(this), Ma = Pa.Mb(), Pa = Pa.nJb(), e.Eua(AscCommon.wt.tia, '' === Pa ? null : Pa));
      AscCommon.wt.Ll & y && (null === Ma && (f.NATIVE_EDITOR_ENJINE ? (Pa = new AscCommon.RTc(this, !0), Ma = Pa.G8f()) : (Pa = new AscCommon.RTc(this), Ma = Pa.Mb())), e.Eua(AscCommon.wt.Ll, '' === Ma ? null : Ma));
    } else Ma = AscCommon.wt.Text & y ? { Text: '' } : null, Pa = this.Fa.xd.u_.Sa(Ma), AscCommon.wt.Text & y && e.Eua(AscCommon.wt.Text, Ma.Text), AscCommon.wt.tia & y && e.Eua(AscCommon.wt.tia, Pa);
  };
  y.prototype.grd = function () {
    if (!AscCommon.Kd.Wna()) {
      var e =
        this.Fa.Wa;
      e && !e.hm(!0) && !1 === e.Ke(AscCommon.n3) && (e.gg(AscDFH.U4d), e.ng(-1, !0, !0), e.sr(), e.Sf());
    }
  };
  y.prototype.tJa = function (e, y, Ma, Pa, Ia, Va) {
    if (!AscCommon.Kd.Wna()) {
      var Ta = this.Fa.Wa;
      Ta && !1 === Ta.Ke(jb, null, !0, !1) && (f.AscCommon.Gh.Ddd(Va), Ia || Ta.gg(AscDFH.HXb), AscCommon.dOd(this, e, y, Ma, Pa, void 0, Va));
    }
  };
  y.prototype.i1d = function () {
    var e = this.Fa.Wa;
    e && e.Sf();
  };
  y.prototype.n_e = function (e) {
    return AscCommon.Gh.rIe(e);
  };
  y.prototype.o_e = function (e) {
    if (!AscCommon.Kd.Wna()) {
      var y = this.Fa.Wa;
      y && !1 === y.Ke(jb, null,
        !0, !1) && (f.AscCommon.Gh.Ddd(), f.AscCommon.Gh.uIe(), this.Fa.Wa.Lza(), y.gg(AscDFH.HXb), AscCommon.dOd(this, null, null, null, null, e), y.Sf());
    }
  };
  y.prototype.o2d = function () {
    var e = f.AscCommon.Gh;
    if (e && !e.MYd()) {
      var y = e.MT ? e.MT : null;
      if (y && null !== e.U2) {
        var Ma = y.eBa, Pa = ue.cg(e.U2), Ia = Pa.ka, Va = Pa.la, Ta = Pa.AWf(), jb = Pa.bv(!0);
        jb && jb.le && (Ia = jb.le.ka + jb.le.W, Va = jb.le.la + jb.le.Jb, Ta = jb.le.Qc);
        if (Pa = Pa.nr()) jb = Pa.Sb(Ia, Va), Ia = Pa.Tb(Ia, Va), Va = jb;
        e.MT.aob = { x: Ia, y: Va, uya: Ta };
        Ia = this.Fa.Wa.sb.vy(Ia, Va, Ta);
        Ia = new AscCommon.sJa(Ia.ka,
          Ia.la, 0, 0);
        y.vnb(Ia);
        Ma ? (y.options = [], this.L1d(y)) : this.mQc(y);
      }
      e.U2 = null;
      return !0;
    }
  };
  y.prototype.mQc = function (e) {
    this.Oe('asc_onShowSpecialPasteOptions', e);
  };
  y.prototype.$Ze = function () {
    this.Oe('asc_onHideSpecialPasteOptions');
  };
  y.prototype.L1d = function () {
    var e = AscCommon.Gh;
    if (e) {
      if (e.MT && e.MT.aob) {
        var f = e.MT;
        e = this.Fa.Wa.sb.vy(f.aob.x, f.aob.y, f.aob.uya);
        e = new AscCommon.sJa(e.ka, e.la, 0, 0);
        f.vnb(e);
      }
      f && this.Oe('asc_onShowSpecialPasteOptions', f);
    }
  };
  y.prototype.BQc = function (e) {
    this.Fa.Wa && this.Fa.xd && (this.Fa.xd.bQd(),
      this.Fa.UAa(), this.Fa.Tr(e), this.Fa.fL());
  };
  y.prototype.eRc = function () {
    this.Fa.Wa && this.Fa.xd && this.Fa.xd.WEf(!0);
  };
  y.prototype.Qpd = function () {
    var e = this;
    Td.kOc();
    c_oAscCollaborativeMarksShowType.zad === this.MTc && AscCommon.Kd.BHa();
    var y = AscCommon.Kd.JHb();
    AscCommon.Kd.fHb();
    this.ll.csa = function () {
      e.ll.csa = null;
      e.QHc && e.NLa && (e.$Ea = e.j0a());
      e.E2c();
      e.I1 = !0;
      e.NLa = !1;
      e.$Ea || e.$x(og.tP, rc.lH);
      e.D7a();
      void 0 !== f.AscDesktopEditor && f.AscDesktopEditor.OnSave();
      e.xxb && (e.ll.disconnect(e.xxb.code, e.xxb.reason),
        e.xxb = null);
      AscCommon.Gh && !AscCommon.Kd.Q$() && AscCommon.Gh.aoa();
      e.e_ && e.GTb();
    };
    var Ma = null;
    !0 === AscCommon.Kd.gB && (Ma = Td.wOd());
    this.ayb ? (AscCommon.Kd.cta(!1), AscCommon.Kd.Ul(), this.ayb = !1) : AscCommon.Kd.Mlc(this.NLa, {
      Yl: this.ll.mSa(),
      x_f: this.To.Ala(),
      dVf: Ma
    }, y, !0);
  };
  y.prototype.hod = function () {
    var e = new Date;
    null === this.ohb && (this.ohb = e);
    if (AscCommon.Kd.gB && !AscCommon.Kd.Q$()) this.Fa.Wa.dhe(); else {
      var f = !1;
      Td.nm && 0 <= Td.za && Td.za < Td.nm.length && e - Td.nm[Td.za].sda < this.NOf && (f = !0);
      !f && e - this.ohb > (0 >=
      AscCommon.Kd.kaa ? this.$9e : this.Z9e) && (1 == Td.BZ(!0) && this.xda(!0), this.ohb = e);
    }
  };
  y.prototype.rqc = function () {
    return !this.q2() && !(this.Fa.Wa && this.Fa.Wa.IRa());
  };
  y.prototype.qpd = function () {
    return AscCommon.Kd.JHb();
  };
  y.prototype.gRg = function (e) {
    var f = e ? Va.rZd : Va.kf;
    e = { c: 'pathurl', title: this.ara, data: 'origin.' + this.XIb };
    var y = this;
    y.tna = function (e) {
      null != e && 'pathurl' == e.type ? 'ok' == e.status ? (e = e.data) ? y.hHd(e, f) : y.Yd.trigger('asc_onError', id.pg.QN, id.Lk.Vo) : y.Yd.trigger('asc_onError', AscCommon.yGb(parseInt(e.data)),
        id.Lk.Vo) : y.Yd.trigger('asc_onError', id.pg.QN, id.Lk.Vo);
    };
    Di(this, null, e);
  };
  y.prototype.drd = function (e) {
    this.avc(this.cEd ? rc.ZOb : rc.Rfc, e);
  };
  y.prototype.fRg = function (e, f, y, Ma) {
    f = this.Fa.Wa.$Wf(f, y);
    null != f && (y = null, e = new Asc.iQc(e, !0), e.pSc = f, e.z3d = id.pg.I_d, Ma && (y = Asc.OH.sZd, e.EYc = !1), this.avc(y, e));
    return null != f;
  };
  y.prototype.jB = function () {
    !1 !== this.QK && this.Fa.m7a(!1);
  };
  y.prototype.WSf = function () {
  };
  y.prototype.hXf = function () {
  };
  y.prototype.UZa = function (e, f) {
    if (this.w7b === yb.ORa && !AscCommon.WD.UZa(this,
      e, f)) switch (e) {
      case $e.t5a:
        Di(this, null, {
          id: this.f_,
          userid: this.Cga,
          format: this.XIb,
          c: 'reopen',
          title: this.ara,
          codepage: f.HTa(),
          nobase64: !0
        });
        break;
      case $e.sMb:
        Di(this, null, {
          id: this.f_,
          userid: this.Cga,
          format: this.XIb,
          c: 'reopen',
          title: this.ara,
          password: f.cwb(),
          nobase64: !0
        });
    }
  };
  y.prototype.mFe = function (e) {
    this.l6 ? (hi.FEd === e ? AscCommon.gP.RQb(!1, !1) : hi.nzd === e ? AscCommon.gP.RQb(!0, !1) : hi.oYc === e && AscCommon.gP.RQb(!0, !0), this.Fa.xd.TD(), void 0 !== AscCommon.dUa && null !== AscCommon.dUa && AscCommon.dUa.pHb(), this.QK &&
    this.Fa.BW()) : this.DXd = e;
  };
  y.prototype.hHd = function (e, f) {
    var y = this;
    this.cEd ? (this.cEd = null, AscCommon.qPf(e, function (e) {
      if (null === e) y.Oe('asc_onError', id.pg.ZOb, id.Lk.Vo); else try {
        y.t2f(JSON.parse(e.responseText));
      } catch (Vk) {
        y.Oe('asc_onError', id.pg.ZOb, id.Lk.Vo);
      }
    })) : this.KFa && this.KFa.fvg ? this.KFa.fvg(this, e) : AscCommon.Enb.prototype.hHd.call(this, e, f);
  };
  y.prototype.ywd = function () {
    this.KFa && (this.KFa.ZZg(this), this.KFa = null);
  };
  y.prototype.rgg = function () {
    this.hCf();
    if (null != this.Fa.xd.u_) {
      var e = this.Fa.xd.u_;
      this.Oe('asc_onDocInfo', new kb({ R$: e.DF, n7b: e.DEf, S6b: e.BEf, f7b: e.She, g7b: e.She + e.CEf }));
      this.qXd();
    } else this.Fa.Wa.aHf();
  };
  y.prototype.ugg = function () {
    this.iCf();
    null != this.Fa.Wa && this.Fa.Wa.bHf();
  };
  y.prototype.U$d = function (e) {
    this.Oe('asc_onDocInfo', new kb(e));
  };
  y.prototype.hCf = function () {
    this.Oe('asc_onGetDocInfoStart');
  };
  y.prototype.iCf = function () {
    this.Oe('asc_onGetDocInfoStop');
  };
  y.prototype.qXd = function () {
    this.Oe('asc_onGetDocInfoEnd');
  };
  y.prototype.iTc = function (e) {
    this.Oe('asc_onCanUndo', e);
  };
  y.prototype.hTc =
    function (e) {
      !0 === AscCommon.Kd.gB && !0 !== AscCommon.Kd.Q$() && (e = !1);
      this.Oe('asc_onCanRedo', e);
    };
  y.prototype.e4f = function () {
    return this.Fa.Wa.Qna();
  };
  y.prototype.cSf = function (e) {
    this.Oe('asc_onCanCopyCut', e);
  };
  y.prototype.pBf = function () {
    this.sna = this.zIa = !0;
    this.Elb();
    this.Fa.Wa.VDa();
  };
  y.prototype.DAf = function () {
    this.zIa = !1;
    this.L5a = !0;
    this.llb();
    this.Fa.Wa.WDa();
  };
  kb.prototype.e9f = function () {
    return this.R$;
  };
  kb.prototype.sdg = function (e) {
    this.R$ = e;
  };
  kb.prototype.m9f = function () {
    return this.n7b;
  };
  kb.prototype.Odg =
    function (e) {
      this.n7b = e;
    };
  kb.prototype.f9f = function () {
    return this.S6b;
  };
  kb.prototype.tdg = function (e) {
    this.S6b = e;
  };
  kb.prototype.j9f = function () {
    return this.f7b;
  };
  kb.prototype.Cdg = function (e) {
    this.f7b = e;
  };
  kb.prototype.k9f = function () {
    return this.g7b;
  };
  kb.prototype.Ddg = function (e) {
    this.g7b = e;
  };
  y.prototype.mhg = function () {
    this.Oe('asc_onUndo');
  };
  y.prototype.Zgg = function () {
    this.Oe('asc_onRedo');
  };
  y.prototype.Ogg = function () {
    this.Oe('asc_onCopy');
  };
  y.prototype.Pgg = function () {
    this.Oe('asc_onCut');
  };
  y.prototype.Ygg = function () {
    this.Oe('asc_onPaste');
  };
  y.prototype.bhg = function () {
    this.Oe('asc_onShare');
  };
  y.prototype.$gg = function () {
    this.Oe('asc_onSave');
  };
  y.prototype.Qgg = function () {
    this.Oe('asc_onDownload');
  };
  y.prototype.Jgg = function () {
    this.Oe('asc_onAddURL');
  };
  y.prototype.Rgg = function (e, f) {
    this.Oe('asc_onError', e, f);
  };
  y.prototype.Sgg = function (e) {
    this.Oe('asc_onHelp', e);
  };
  y.prototype.nhg = function (e) {
    this.Oe('asc_onZoom', e);
  };
  y.prototype.QNd = function (e) {
    this.Oe('asc_onClearPropObj', e);
  };
  y.prototype.p2f = function () {
    this.Fa.Wa && (this.Fa.xd.Yng(), this.Fa.xd.Jkd =
      new Asc.U1c, this.Fa.xd.Jkd.UIa = !0, this.Fa.xd.Jkd.dw = !0, this.Fa.xd.Jkd.OIa = !0, this.Fa.xd.Xkg());
  };
  y.prototype.LUf = function () {
    this.oCf([]);
  };
  y.prototype.tWf = function () {
  };
  y.prototype.w9f = function (e) {
    this.fPa(e);
  };
  y.prototype.Lgg = function (e, f) {
    this.Oe('asc_onChangeActiveHeader', e, new Asc.yYd(f));
  };
  y.prototype.oCf = function (e) {
    for (var f = [], y = 0; y < e.length; y++) f[y] = new Asc.yYd(e[y]);
    this.Oe('asc_onReturnHeaders', f);
  };
  y.prototype.Y7e = function () {
    null != this.Fa.xd.u_ && (this.Fa.xd.u_.sA.BXf = !1, this.Fa.Er());
  };
  y.prototype.E_e =
    function (e, f, y) {
      if (null != this.Fa.xd.u_) return this.Fa.xd.u_.findText(e, y, f), this.Fa.xd.u_.sA.vl;
      e = editor.Fa.Wa.az(e, { VLa: y });
      f = this.Fa.Wa.uq(f);
      null != f && this.Fa.Wa.qPc(f);
      return e.vl;
    };
  y.prototype.W7e = function (e, f, y, Ma) {
    if (null != this.Fa.Wa) if (this.Fa.Wa.az(e, { VLa: Ma }), !0 === y) this.Fa.Wa.pPc(f, !0, -1); else return e = this.Fa.Wa.rA.XTc, y = this.Fa.Wa.rA.Ci, -1 != e && this.Fa.Wa.pPc(f, !1, e), f = this.Fa.Wa.uq(y), null != f ? (this.Fa.Wa.qPc(f), !0) : !1;
  };
  y.prototype.AIf = function (e) {
    null != this.Fa.xd.u_ ? (this.Fa.xd.u_.sA.Ofa =
      e, this.Fa.Er()) : this.Fa.Wa.png(e);
  };
  y.prototype.eVg = function () {
    return null != this.Fa.xd.u_ ? this.Fa.xd.u_.sA.Ofa : this.Fa.Wa.rA.Selection;
  };
  y.prototype.nCf = function (e, f) {
    this.Oe('asc_onReplaceAll', f, e);
  };
  y.prototype.lTc = function () {
    this.Oe('asc_onSearchEnd');
  };
  y.prototype.Idg = function (e) {
    var f = AscCommon.TK, y = Ta.bna(e);
    !1 === f.FH(y) && !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.x6d), this.Fa.Wa.$g(new AscCommonWord.tN({
      wf: {
        Ja: e,
        za: -1
      }
    })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.Jdg =
    function (e) {
      !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.z6d), this.Fa.Wa.$g(new AscCommonWord.tN({ Vb: Math.min(e, 100) })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
    };
  y.prototype.Hdg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.t6d), this.Fa.Wa.$g(new AscCommonWord.tN({ ud: e })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.Kdg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.C6d), this.Fa.Wa.$g(new AscCommonWord.tN({ bf: e })), this.Fa.Wa.Bd(),
      this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.Ndg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.H6d), this.Fa.Wa.$g(new AscCommonWord.tN({ lj: e })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.Mdg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.G6d), this.Fa.Wa.$g(new AscCommonWord.tN({
      fj: e,
      Fj: !1
    })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.n5g = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.w6d), this.Fa.Wa.$g(new AscCommonWord.tN({
      Fj: e,
      fj: !1
    })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.q5g = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.F6d), this.Fa.Wa.$g(new AscCommonWord.tN({ dc: e })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.m5g = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.u6d), this.Fa.Wa.$g(new AscCommonWord.tN({
      hn: e,
      gl: !1
    })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.p5g = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.E6d),
      this.Fa.Wa.$g(new AscCommonWord.tN({ gl: e, hn: !1 })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.o5g = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.D6d), this.Fa.Wa.$g(new AscCommonWord.tN({ we: e })), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.Ldg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.lUd), this.Fa.Wa.$g(new AscCommonWord.tN({ Uf: { Jc: e } })), this.Fa.Wa.cP.rEf(), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.ydg =
    function (e, f) {
      !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.k6d), this.Fa.Wa.KD({
        jj: e,
        qc: f
      }), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
    };
  y.prototype.qdg = function (e, f) {
    if (!1 === this.Fa.Wa.Ke(Pa)) {
      this.Fa.Wa.gg(AscDFH.l6d);
      switch (e) {
        case 0:
          AscCommonWord.oLd === f ? this.Fa.Wa.KD({ Us: !0 }) : this.Fa.Wa.KD({ Ji: f, Us: !1 });
          break;
        case 1:
          AscCommonWord.oLd === f ? this.Fa.Wa.KD({ Ks: !0 }) : this.Fa.Wa.KD({ kg: f, Ks: !1 });
      }
      this.Fa.Wa.Sf();
    }
  };
  y.prototype.hOd = function () {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.A5d),
      this.Fa.Wa.WC(!0), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.iOd = function () {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.p5d), this.Fa.Wa.WC(!1), this.Fa.Wa.Bd(), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
  };
  y.prototype.n4g = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.d6d), this.Fa.Wa.GG(e), this.Fa.Wa.Sf());
  };
  y.prototype.fCf = function (e) {
    this.Oe('asc_onBold', e);
  };
  y.prototype.kCf = function (e) {
    this.Oe('asc_onItalic', e);
  };
  y.prototype.zCf = function (e) {
    this.Oe('asc_onUnderline', e);
  };
  y.prototype.qCf = function (e) {
    this.Oe('asc_onStrikeout', e);
  };
  y.prototype.vCf = function (e) {
    void 0 != e ? this.Oe('asc_onFontFamily', new gf(e)) : this.Oe('asc_onFontFamily', new gf({ Ja: '', za: -1 }));
  };
  y.prototype.wCf = function (e) {
    this.Oe('asc_onFontSize', e);
  };
  y.prototype.iSf = function (e) {
    this.Oe('asc_onLineSpacing', new Asc.sWc(e));
  };
  y.prototype.A7g = function (e) {
    this.Ex || this.Oe('asc_onInitEditorStyles', e);
  };
  y.prototype.eSf = function (e, f) {
    this.Ex || this.Oe('asc_onInitTableTemplates', e, f);
  };
  y.prototype.Fcg = function (e) {
    var f =
      this.Pca();
    if (f) {
      var y = [];
      void 0 != e.uv && y.push({ ea: AscCommon.fBa, Element: f, Lu: AscCommon.sga });
      void 0 === e.p0 && void 0 === e.fj && void 0 === e.Fj && void 0 === e.gl && void 0 === e.oU && void 0 === e.TU && void 0 === e.we || y.push({
        ea: AscCommon.kVb,
        aNa: [AscCommon.fP]
      });
      if (!f.YL(Pa, y)) {
        f.gg(AscDFH.p6d);
        'undefined' != typeof e.Hp && null != e.Hp && this.Fa.Wa.aJ(e.Hp);
        'undefined' != typeof e.$b && null != e.$b && this.Fa.Wa.$B(e.$b);
        'undefined' != typeof e.Me && null != e.Me && this.Fa.Wa.vu(e.Me);
        'undefined' != typeof e.Kn && null != e.Kn && this.Fa.Wa.bJ(e.Kn);
        void 0 != e.Zn && null != e.Zn && this.Fa.Wa.cJ(e.Zn);
        void 0 != e.Op && null != e.Op && this.Fa.Wa.dJ(e.Op);
        'undefined' != typeof e.Lp && null != e.Lp && this.Fa.Wa.DK(e.Lp);
        'undefined' != typeof e.dc && null != e.dc && this.Fa.Wa.KD(e.dc);
        void 0 !== e.Ts && this.Fa.Wa.PGf(e.Ts);
        'undefined' != typeof e.Pb && null != e.Pb && (y = new AscFormat.Mj, y.fill = new AscFormat.cH, y.fill.color = AscFormat.tHb(e.Pb.va, y.fill.color, 1), this.Fa.Wa.qI({
          pa: e.Pb.pa,
          va: { r: e.Pb.va.ewb(), vb: e.Pb.va.Zvb(), Xa: e.Pb.va.Xvb() },
          ab: y
        }));
        'undefined' != typeof e.nc && null != e.nc &&
        (e.nc.Ba && e.nc.Ba.va && (e.nc.Ba.ab = AscFormat.Vea(e.nc.Ba.va, 1)), e.nc.Oa && e.nc.Oa.va && (e.nc.Oa.ab = AscFormat.Vea(e.nc.Oa.va, 1)), e.nc.Ra && e.nc.Ra.va && (e.nc.Ra.ab = AscFormat.Vea(e.nc.Ra.va, 1)), e.nc.Ta && e.nc.Ta.va && (e.nc.Ta.ab = AscFormat.Vea(e.nc.Ta.va, 1)), e.nc.fk && e.nc.fk.va && (e.nc.fk.ab = AscFormat.Vea(e.nc.fk.va, 1)), e.nc.rk && e.nc.rk.va && (e.nc.rk.ab = AscFormat.Vea(e.nc.rk.va, 1)), this.Fa.Wa.GG(e.nc));
        void 0 != e.ug && (y = new AscCommonWord.YDf, y.tf(e.ug.ug), this.Fa.Wa.GH(y));
        void 0 != e.uv && this.Fa.Wa.UGf(e.uv);
        y =
          new AscCommonWord.YSa;
        if (!0 === e.p0) y.zj = AscCommon.IE; else if (!0 === e.n1) y.zj = AscCommon.WE; else if (!1 === e.n1 || !1 === e.p0) y.zj = AscCommon.fR;
        void 0 != e.fj && (y.fj = e.fj, y.Fj = !1);
        void 0 != e.Fj && (y.Fj = e.Fj, !0 === y.Fj && (y.fj = !1));
        void 0 != e.gl && (y.gl = e.gl, y.oU = !1);
        void 0 != e.oU && (y.hn = e.oU, !0 === y.oU && (y.gl = !1));
        void 0 != e.TU && (y.dc = e.TU);
        void 0 != e.we && (y.we = e.we);
        f.$g(new AscCommonWord.tN(y));
        f.Bd();
        f.Kl();
        f.Sf();
      }
    }
  };
  y.prototype.udg = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.c6d), this.Fa.Wa.vu(e), this.Fa.Wa.Sf());
  };
  y.prototype.Gdg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.I6d), this.Fa.Wa.$g(new AscCommonWord.tN({ zj: e })), this.XHa(), this.Fa.Wa.Sf());
  };
  y.prototype.rdg = function (e, f) {
    function y() {
      if (!1 === Ma.Ke(Pa)) {
        var y = { ea: 0, MC: -1 };
        y.ea = e;
        y.MC = f;
        Ma.gg(AscDFH.m6d);
        Ma.anb(y);
        Ma.Sf();
      }
    }

    var Ma = this.Fa.Wa, Ia = '';
    if (0 === e) switch (f) {
      case 1:
        Ia = String.fromCharCode(183);
        break;
      case 2:
        Ia = 'o';
        break;
      case 3:
        Ia = String.fromCharCode(167);
        break;
      case 4:
        Ia = String.fromCharCode(118);
        break;
      case 5:
        Ia = String.fromCharCode(216);
        break;
      case 6:
        Ia = String.fromCharCode(252);
        break;
      case 7:
        Ia = String.fromCharCode(168);
        break;
      case 8:
        Ia = String.fromCharCode(8211);
    }
    0 < Ia.length ? AscFonts.tp.UTa(Ia, this, y) : y();
  };
  y.prototype.ZQg = function () {
    var e = this.Fa.Wa;
    e && e.QUf();
  };
  y.prototype.gSg = function (e) {
    var f = this.Fa.Wa;
    f && f.PYf(e);
  };
  y.prototype.qRg = function () {
    var e = this.Fa.Wa;
    if (!e) return null;
    var f = e.JOc(!0);
    return f && e.us().jm(f.ae) ? f.ae : null;
  };
  y.prototype.rRg = function () {
    var e = this.Fa.Wa;
    return e ? (e = e.JOc(!0)) && void 0 !== e.tc && null !== e.tc ? e.tc : -1 : -1;
  };
  y.prototype.mRg = function () {
    var e = this.Pca();
    return e ? (e = e.kp(!0)) ? e.Ye.Ll.fUc : -1 : -1;
  };
  y.prototype.ARg = function (e) {
    var f = this.Fa.Wa;
    if (!f) return null;
    e = f.us().jm(e);
    if (!e) return null;
    f = new Asc.wTf;
    e.cWf(f);
    return f;
  };
  y.prototype.NQg = function (e, f) {
    var y = this.Fa.Wa;
    if (!y) return null;
    if (f) {
      var Ma = y.Pmb();
      if (y.Ke(AscCommon.rR, { ea: AscCommon.Aaa, Xb: Ma, Lu: AscCommon.hJ })) return null;
    }
    y.gg(AscDFH.o5d);
    f = y.us().D7();
    f.bWf(e);
    e = f.Wi();
    if (Ma) {
      f = 0;
      for (var Pa = Ma.length; f < Pa; ++f) {
        var Ia = Ma[f], Va = Ia.bk();
        Va ? Ia.I$(e,
          Va.tc) : Ia.I$(e, 0);
      }
      y.Bd();
      y.Kl();
      y.sr();
    }
    y.Sf();
  };
  y.prototype.XQg = function (e, f, y) {
    var Ma = this.Fa.Wa;
    if (Ma && (e = Ma.us().jm(e)) && !Ma.Ke(AscCommon.rR, { ea: AscCommon.Aaa, Xb: [e], Lu: AscCommon.hJ })) {
      Ma.gg(AscDFH.j5d);
      if (f instanceof Asc.xTf) e.IGf(f, y); else if (void 0 !== f.length && f.length === y.length) for (var Pa = 0, Ia = f.length; Pa < Ia; ++Pa) e.IGf(f[Pa], y[Pa]);
      Ma.Bd();
      Ma.Kl();
      Ma.sr();
      Ma.Sf();
    }
  };
  y.prototype.j5g = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.r6d), this.Fa.Wa.tA(e, !0), this.Fa.Wa.Sf());
  };
  y.prototype.fZf =
    function (y) {
      void 0 === f.POc && null != this.Fa.dT && (f.POc = e.getElementById(y), f.POc.onkeypress = function (e) {
        if (!1 === editor.Fa.Rva) return editor.Fa.Rva = !0, e = editor.Fa.BIa(e), editor.Fa.Rva = !1, e;
      }, f.POc.onkeydown = function (e) {
        if (!1 === editor.Fa.Rva) return editor.Fa.Rva = !0, e = editor.Fa.Sia(e), editor.Fa.Rva = !1, e;
      });
    };
  y.prototype.Adg = function (e) {
    this.HVc = e;
  };
  y.prototype.h9f = function () {
    return this.HVc;
  };
  y.prototype.wHd = function (e) {
    if (this.rVd() || this.TRc()) e = !1;
    this.jr = e;
    this.Fa.eFb();
    !0 === this.qGb && this.Dcc(!1);
    return this.jr;
  };
  y.prototype.Tyd = function () {
    return this.jr;
  };
  y.prototype.dhg = function () {
    this.Oe('asc_onShowParaMarks', this.Tyd());
  };
  y.prototype.Bdg = function (e) {
    this.URc = e;
    this.Fa.eFb();
    !0 === this.qGb && this.Dcc(!1);
    return this.URc;
  };
  y.prototype.i9f = function () {
    return this.URc;
  };
  y.prototype.T4g = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.o6d), this.Fa.Wa.DK(e), this.hSf(e), this.Fa.Wa.Sf());
  };
  y.prototype.SQf = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.s6d), this.Fa.Wa.dJ(e), this.IFg(e), this.Fa.Wa.Sf());
  };
  y.prototype.NQf = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.i6d), this.Fa.Wa.bJ(e), this.fSf(e), this.Fa.Wa.Sf());
  };
  y.prototype.OQf = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.j6d), this.Fa.Wa.cJ(e), this.DFg(e), this.Fa.Wa.Sf());
  };
  y.prototype.m4g = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.e6d), this.Fa.Wa.aJ(e), this.Fa.Wa.Sf());
  };
  y.prototype.F4g = function (e, f, y, Ma) {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (!1 === e ? (this.Fa.Wa.gg(AscDFH.B6d), this.Fa.Wa.$g(new AscCommonWord.tN({ xh: AscCommonWord.xbc }))) :
      (this.Fa.Wa.gg(AscDFH.A6d), this.Fa.Wa.$g(new AscCommonWord.tN({
        xh: {
          r: f,
          vb: y,
          Xa: Ma
        }
      }))), this.Fa.Wa.Sf());
  };
  y.prototype.Fdg = function (e) {
    if (!1 === this.Fa.Wa.Ke(AscCommon.fP)) {
      this.Fa.Wa.gg(AscDFH.v6d);
      if (!0 === e.lf) this.Fa.Wa.$g(new AscCommonWord.tN({ va: { lf: !0, r: 0, vb: 0, Xa: 0 }, ab: void 0 })); else {
        var f = new AscFormat.Mj;
        f.fill = new AscFormat.cH;
        f.fill.color = AscFormat.tHb(e, f.fill.color, 1);
        this.Fa.Wa.$g(new AscCommonWord.tN({ ab: f }));
      }
      this.Fa.Wa.Bd();
      this.Fa.Wa.Kl();
      this.Fa.Wa.Sf();
    }
  };
  y.prototype.W4g = function (e,
                              f, y) {
    this.Fa.Wa.YL(AscCommon.hJ, {
      ea: AscCommon.kVb,
      aNa: [AscCommon.fP]
    }) || (this.Fa.Wa.gg(AscDFH.q6d), !0 === y && this.Fa.Wa.RGf(!1), !1 === e ? this.Fa.Wa.qI({ pa: Asc.FP }) : (e = new AscFormat.Mj, e.fill = new AscFormat.cH, e.fill.color = AscFormat.tHb(f, e.fill.color, 1), this.Fa.Wa.qI({
      pa: Asc.rna,
      va: { r: f.ewb(), vb: f.Zvb(), Xa: f.Xvb() },
      ab: e
    })), this.Fa.Wa.RGf(!0), this.Fa.Wa.Sf());
  };
  y.prototype.wdg = function (e, f) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.f6d), this.Fa.Wa.$B({ Ba: e, gva: f }), this.Fa.Wa.Sf());
  };
  y.prototype.V4g = function (e) {
    var f =
      this.Pca();
    f && !1 === f.Ke(Pa) && (f.gg(AscDFH.n6d), f.PGf(e), f.Sf(), f.OVc());
  };
  y.prototype.jrc = function (e, f, y, Ma, Pa, Ia, Va) {
    !1 === this.Fa.Wa.Ke(AscCommon.K5) && (this.Fa.Wa.gg(AscDFH.$Mf), f = AscFormat.LSd(e, f, y, Ma, !0, null, Pa, Ia, Va), y = new AscCommonWord.W3(f.fa.nb.eb, f.fa.nb.fb, null, this.Fa.xd, null, null), f.Cc(y), y.RJ(f), this.Fa.Wa.hR(y), this.Oe('asc_onAddSignature', e), this.Fa.Wa.Sf());
  };
  y.prototype.nac = function () {
    return this.Fa.Wa ? this.Fa.Wa.ile() : [];
  };
  y.prototype.crd = function (e) {
    return this.Fa.Wa.ife(e);
  };
  y.prototype.lRd =
    function (e) {
      return this.Fa.Wa.WXf(e);
    };
  y.prototype.gOb = function () {
    this.Fa.Wa.gOb();
  };
  y.prototype.AMb = function () {
    this.Fa.Wa.AMb();
  };
  y.prototype.xdg = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.h6d), this.Fa.Wa.$B({ Ra: e }), this.Fa.Wa.Sf());
  };
  y.prototype.vdg = function (e) {
    !1 === this.Fa.Wa.Ke(Pa) && (this.Fa.Wa.gg(AscDFH.g6d), this.Fa.Wa.$B({ Ae: e }), this.Fa.Wa.Sf());
  };
  y.prototype.O4g = function (e, f, y, Ma) {
    this.Fa.Wa.Lhd({ Ba: e, Oa: f, Ra: y, Ta: Ma });
  };
  y.prototype.e8f = function () {
  };
  y.prototype.ACf = function (e) {
    this.Oe('asc_onVerticalAlign',
      e);
  };
  y.prototype.xXd = function (e) {
    this.Oe('asc_onPrAlign', e);
  };
  y.prototype.tXd = function (e) {
    this.Oe('asc_onListType', new AscCommon.QZe(e));
  };
  y.prototype.mSf = function (e) {
    e.ab && e.ab.fill && e.ab.fill.type === ek.nC && e.ab.fill.color ? this.Oe('asc_onTextColor', AscCommon.vqb(e.ab.fill.color)) : void 0 != e.va && this.Oe('asc_onTextColor', AscCommon.RIa(e.va.r, e.va.vb, e.va.Xa, e.va.lf));
  };
  y.prototype.nSf = function (e) {
    void 0 != e && this.Oe('asc_onTextHighLight', new AscCommon.BM(e.r, e.vb, e.Xa));
  };
  y.prototype.yCf = function (e) {
    this.Oe('asc_onTextSpacing',
      e);
  };
  y.prototype.sCf = function (e) {
    this.Oe('asc_onTextDStrikeout', e);
  };
  y.prototype.rCf = function (e) {
    this.Oe('asc_onTextCaps', e);
  };
  y.prototype.xCf = function (e) {
    this.Oe('asc_onTextSmallCaps', e);
  };
  y.prototype.uCf = function (e) {
    this.Oe('asc_onTextPosition', e);
  };
  y.prototype.tCf = function (e) {
    this.Oe('asc_onTextLanguage', e.Jc);
  };
  y.prototype.wXd = function (e) {
    this.Oe('asc_onParaStyleName', e);
  };
  y.prototype.vXd = function (e) {
    !0 === e.Ks ? e.kg = AscCommonWord.oLd : void 0 === e.Ks && (e.kg = AscCommonWord.V0d);
    !0 === e.Us ? e.Ji = AscCommonWord.oLd :
      void 0 === e.Us && (e.Ji = AscCommonWord.V0d);
    this.Oe('asc_onParaSpacingLine', new AscCommon.RTb(e));
  };
  y.prototype.hSf = function (e) {
    this.Oe('asc_onPageBreak', e);
  };
  y.prototype.IFg = function (e) {
    this.Oe('asc_onWidowControl', e);
  };
  y.prototype.DFg = function (e) {
    this.Oe('asc_onKeepNext', e);
  };
  y.prototype.fSf = function (e) {
    this.Oe('asc_onKeepLines', e);
  };
  y.prototype.ehg = function () {
    this.Oe('asc_onShowParaMarks');
  };
  y.prototype.fhg = function () {
    this.Oe('asc_onSpaceBetweenPrg');
  };
  y.prototype.mCf = function (e) {
    var f = this.lM.length;
    0 < f &&
    this.lM[f - 1].ea == $g.Ua ? this.lM[f - 1].pa = new Asc.mdb(e) : this.lM[this.lM.length] = new Ie($g.Ua, new Asc.mdb(e));
  };
  y.prototype.lCf = function (e) {
    this.lM[this.lM.length] = new Ie($g.Math, e);
  };
  y.prototype.Lna = function () {
    editor.Oe('asc_onEndAddShape');
    'crosshair' == this.Fa.xd.sUa && this.Fa.xd.y7a();
  };
  y.prototype.LGf = function (f) {
    if (this.Fa) {
      this.Fa.TEf = f;
      var y = e.getElementById('id_main');
      if (y) {
        var Ma = e.getElementById('id_horscrollpanel'), Pa = e.getElementById('id_panel_right');
        f ? (y.style.display = 'none', Ma.style.display =
          'none', Pa.style.display = 'none') : (y.style.display = 'block', Ma.style.display = 'block', Pa.style.display = 'block');
      }
      f || this.Fa.BW();
    }
  };
  y.prototype.k_e = function (e) {
    this.Fa.Wa.IHe(e);
  };
  y.prototype.asc_SetMathProps = y.prototype.k_e;
  y.prototype.vYg = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.sga) && (this.Fa.Wa.gg(AscDFH.a6d), e ? this.Fa.Wa.VGf(Asc.Tqa.Uta) : this.Fa.Wa.VGf(Asc.Tqa.f5a), this.vOc = e, this.kTc(editor.zTd()), this.Fa.Wa.Sf());
  };
  y.prototype.zTd = function () {
    return this.vOc;
  };
  y.prototype.uYg = function (e, f) {
    !1 === this.Fa.Wa.Ke(AscCommon.sga) &&
    (this.IP && this.Fa.Zs && this.Fa.Zs.RDf(), this.Fa.Wa.gg(AscDFH.b6d), this.vOc ? this.Fa.Wa.WGf(e, f) : this.Fa.Wa.WGf(f, e), this.Fa.Wa.Sf(), this.IP && this.Fa.Zs && this.Fa.Zs.XEf());
  };
  y.prototype.O0g = function () {
    return AscCommon.fFb;
  };
  y.prototype.M0g = function () {
    return AscCommon.g5a;
  };
  y.prototype.ASg = function (e) {
    this.Fa.Wa.xZf(e);
  };
  y.prototype.DRg = function () {
    return this.Fa.Wa.sFf();
  };
  y.prototype.oRg = function () {
    var e = this.Fa.Wa;
    return e ? e.zWf() : 0;
  };
  y.prototype.ahg = function (e) {
    this.Oe('asc_onSectionProps', e);
  };
  y.prototype.asc_SetSectionProps =
    y.prototype.ASg;
  y.prototype.asc_GetSectionProps = y.prototype.DRg;
  y.prototype.asc_GetCurrentColumnWidth = y.prototype.oRg;
  y.prototype.pSg = function (e) {
    this.Fa.Wa.tZf(e);
  };
  y.prototype.nRg = function () {
    return this.Fa.Wa.VWf();
  };
  y.prototype.asc_SetColumnsProps = y.prototype.pSg;
  y.prototype.asc_GetColumnsProps = y.prototype.nRg;
  y.prototype.LRg = function () {
    return this.Fa.Wa.qUc();
  };
  y.prototype.usg = function (e) {
    var f = e.dAa(), y = this;
    if (f && (f = f.xRc()) && 'string' === typeof f.rBa()) {
      if (!Ta) return;
      var Ma = AscCommon.TK, Pa = Ta.bna(f.rBa());
      f.w8a(Pa.Ja);
      if (Ma.FH(Pa, function () {
        this.$x(og.tP, rc.FH);
        y.usg(e);
      }, null)) return;
    }
    f = e.LJa();
    'string' !== typeof f && (f = '');
    AscFonts.tp.UTa(f, this, function () {
      return y.Fa.Wa.SGf(e);
    });
  };
  y.prototype.JSg = function (e) {
    e = new Asc.L6a;
    e.iU(Asc.ala.kf);
    return this.Fa.Wa.SGf(e);
  };
  y.prototype.Ngg = function (e) {
    this.Oe('asc_onColumnsProps', e);
  };
  y.prototype.vSg = function (e, f) {
    this.Fa.Wa.kZf(e, f);
  };
  y.prototype.sRg = function () {
    return this.Fa.Wa.UZd();
  };
  y.prototype.LQg = function (e) {
    return this.Fa.Wa.rmb(e);
  };
  y.prototype.bSg = function () {
    this.Fa.Wa.CYf();
  };
  y.prototype.NRg = function (e) {
    this.Fa.Wa.dXf(e);
  };
  y.prototype.SRg = function () {
    var e = this.Fa.Wa;
    return e && !0 === e.tXf() ? !0 : !1;
  };
  y.prototype.asc_AddFootnote = y.prototype.LQg;
  y.prototype.asc_RemoveAllFootnotes = y.prototype.bSg;
  y.prototype.asc_GetFootnoteProps = y.prototype.sRg;
  y.prototype.asc_SetFootnoteProps = y.prototype.vSg;
  y.prototype.asc_GotoFootnote = y.prototype.NRg;
  y.prototype.asc_IsCursorInFootnote = y.prototype.SRg;
  y.prototype.zDg = function () {
    !1 === this.Fa.Wa.Ke(jb) && null === this.Fa.Wa.VH(!1) && (this.Fa.Wa.gg(AscDFH.UTd),
      this.Fa.Wa.$g(new AscCommonWord.APd(AscCommonWord.o3f)), this.Fa.Wa.Sf());
  };
  y.prototype.l4g = function () {
    var e = this.Fa.Wa;
    !1 === e.Ke(jb) && null === e.VH(!1) && (this.Fa.Wa.gg(AscDFH.UTd), this.Fa.Wa.$g(new AscCommonWord.APd(AscCommonWord.n3f)), this.Fa.Wa.Sf());
  };
  y.prototype.vQd = function (e) {
    var f = 0, y = 0, Ma = 0;
    'undefined' != typeof e && ('undefined' != typeof e.Ae && (f = e.Ae), 'undefined' != typeof e.Ba && (y = e.Ba), 'undefined' != typeof e.Ra && (Ma = e.Ra));
    e = !1;
    var Pa = this.Fa.ML;
    Pa.fM != y && (Pa.fM = y, e = !0);
    Pa != f + y && (Pa.AU = f + y, e = !0);
    Pa.ZU != Ma && (Pa.ZU = Ma, e = !0);
    e && this.Fa.Z$();
  };
  y.prototype.DFf = function (e, f) {
    this.Fa.ML.AU != e + f && (this.Fa.ML.AU = e + f, this.Fa.Z$());
  };
  y.prototype.EFf = function (e) {
    this.Fa.ML.fM != e && (this.Fa.ML.fM = e, this.Fa.Z$());
  };
  y.prototype.FFf = function (e) {
    this.Fa.ML.ZU != e && (this.Fa.ML.ZU = e, this.Fa.Z$());
  };
  y.prototype.U4g = function (e, f) {
    0 <= e ? !1 === this.Fa.Wa.Ke($a, { ea: AscCommon.P2d }) && (this.Fa.Wa.gg(AscDFH.d5d), this.Fa.Wa.NEf(e, f), this.Fa.Wa.Sf()) : !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.c5d), this.Fa.Wa.NEf(e, f), this.Fa.Wa.Sf());
  };
  y.prototype.x4g = function (e) {
    !1 === this.Fa.Wa.Ke(kf) && (this.Fa.Wa.gg(AscDFH.X5d), this.Fa.Wa.IVf(e), this.Fa.Wa.Sf());
  };
  y.prototype.LJg = function (e) {
    !1 === this.Fa.Wa.Ke(kf) && (this.Fa.Wa.gg(AscDFH.Z5d), this.Fa.Wa.KVf(e), this.Fa.Wa.Sf());
  };
  y.prototype.MJg = function (e) {
    !1 === this.Fa.Wa.Ke(kf) && (this.Fa.Wa.gg(AscDFH.Y5d), this.Fa.Wa.JVf(e), this.Fa.Wa.Sf());
  };
  y.prototype.NJg = function (e) {
    !1 === this.Fa.Wa.Ke(kf) && (this.Fa.Wa.gg(AscDFH.$5d), this.Fa.Wa.LVf(e), this.Fa.Wa.Sf());
  };
  y.prototype.BSg = function (e) {
    if (!isNaN(e)) {
      var f =
        this.Fa.Wa;
      f && !1 === f.Ke() && (f.gg(AscDFH.P5d), f.oZf(e), f.Sf());
    }
  };
  y.prototype.e_c = function (e, f) {
    this.Oe('asc_onDocSize', e, f);
  };
  y.prototype.kTc = function (e) {
    this.Oe('asc_onPageOrient', e);
  };
  y.prototype.V$d = function (e) {
    !0 === e && (e.eo = !0);
    this.lM[this.lM.length] = new Ie($g.Hk, new cb(e));
  };
  y.prototype.Edg = function (e, f) {
    !1 === this.Fa.Wa.Ke(AscCommon.K5) && (this.Fa.Wa.gg(AscDFH.e5d), this.Fa.Wa.UQ(e, f), this.Fa.Wa.Sf());
  };
  y.prototype.z1f = function (e) {
    !1 === this.Fa.Wa.Ke(qe) && (this.Fa.Wa.gg(AscDFH.M6d), this.Fa.Wa.ZK(!0,
      e), this.Fa.Wa.Sf());
  };
  y.prototype.A1f = function (e) {
    !1 === this.Fa.Wa.Ke(qe) && (this.Fa.Wa.gg(AscDFH.N6d), this.Fa.Wa.ZK(!1, e), this.Fa.Wa.Sf());
  };
  y.prototype.u1f = function (e) {
    !1 === this.Fa.Wa.Ke(qe) && (this.Fa.Wa.gg(AscDFH.K6d), this.Fa.Wa.aO(!0, e), this.Fa.Wa.Sf());
  };
  y.prototype.v1f = function (e) {
    !1 === this.Fa.Wa.Ke(qe) && (this.Fa.Wa.gg(AscDFH.L6d), this.Fa.Wa.aO(!1, e), this.Fa.Wa.Sf());
  };
  y.prototype.keg = function () {
    var e = this.Pca();
    if (!e) return !1;
    e.CK(c_oAscTableSelectionType.Aa);
    if (e.Ke(AscCommon.n3)) return !1;
    e.gg(AscDFH.P6d);
    e.ow();
    e.Sf();
    return !0;
  };
  y.prototype.jeg = function () {
    var e = this.Pca();
    if (!e) return !1;
    e.CK(c_oAscTableSelectionType.Sq);
    if (e.Ke(AscCommon.n3)) return !1;
    e.gg(AscDFH.O6d);
    e.nJ();
    e.Sf();
    return !0;
  };
  y.prototype.leg = function () {
    var e = this.Pca();
    if (!e) return !1;
    e.CK(c_oAscTableSelectionType.Table);
    if (e.Ke(AscCommon.n3)) return !1;
    e.gg(AscDFH.K5d);
    e.tO();
    e.Sf();
    return !0;
  };
  y.prototype.Leg = function () {
    this.Fa.Wa.CK(c_oAscTableSelectionType.Aa);
  };
  y.prototype.Keg = function () {
    this.Fa.Wa.CK(c_oAscTableSelectionType.Sq);
  };
  y.prototype.HIa =
    function () {
      this.Fa.Wa.CK(c_oAscTableSelectionType.Hb);
    };
  y.prototype.Meg = function () {
    this.Fa.Wa.CK(c_oAscTableSelectionType.Table);
  };
  y.prototype.Teg = function () {
  };
  y.prototype.qcc = function () {
  };
  y.prototype.Bfg = function () {
  };
  y.prototype.rUf = function () {
    return this.Fa.Wa.yS();
  };
  y.prototype.sUf = function () {
    return this.Fa.Wa.zS();
  };
  y.prototype.d5a = function () {
    !1 === this.Fa.Wa.Ke(qe) && (this.Fa.Wa.gg(AscDFH.B5d), this.Fa.Wa.vP(), this.Fa.Wa.Sf());
  };
  y.prototype.FZf = function (e, f) {
    !1 === this.Fa.Wa.Ke(qe) && (this.Fa.Wa.gg(AscDFH.J6d),
      this.Fa.Wa.HS(e, f), this.Fa.Wa.Sf());
  };
  y.prototype.o2f = function (e) {
    var f = this.Fa.Wa;
    if (f) {
      var y = !1;
      !1 === f.Ke(qe) && (f.gg(AscDFH.$Td), y = f.BX(e), f.Sf());
      return y;
    }
  };
  y.prototype.dSg = function () {
    var e = this.Pca();
    if (!e || e.Ke(AscCommon.n3)) return !1;
    e.gg(AscDFH.L5d);
    e.$I();
    e.Sf();
    return !0;
  };
  y.prototype.qig = function () {
  };
  y.prototype.pdg = function () {
  };
  y.prototype.Dfg = function () {
  };
  y.prototype.Cfg = function () {
  };
  y.prototype.tfg = function () {
  };
  y.prototype.zfg = function () {
  };
  y.prototype.sfg = function () {
  };
  y.prototype.Afg = function () {
  };
  y.prototype.yfg = function () {
  };
  y.prototype.shg = function (e) {
    !1 === this.Fa.Wa.Ke(qe) && (e.sq && (e.sq.Ba && e.sq.Ba.va && (e.sq.Ba.ab = AscFormat.Vea(e.sq.Ba.va, 1)), e.sq.Oa && e.sq.Oa.va && (e.sq.Oa.ab = AscFormat.Vea(e.sq.Oa.va, 1)), e.sq.Ra && e.sq.Ra.va && (e.sq.Ra.ab = AscFormat.Vea(e.sq.Ra.va, 1)), e.sq.Ta && e.sq.Ta.va && (e.sq.Ta.ab = AscFormat.Vea(e.sq.Ta.va, 1)), e.sq.fk && e.sq.fk.va && (e.sq.fk.ab = AscFormat.Vea(e.sq.fk.va, 1)), e.sq.rk && e.sq.rk.va && (e.sq.rk.ab = AscFormat.Vea(e.sq.rk.va, 1))), e.Vt && e.Vt.va && (e.Vt.ab = AscFormat.Vea(e.Vt.va,
      1)), this.Fa.Wa.gg(AscDFH.g5d), this.Fa.Wa.WS(e), this.Fa.Wa.Sf());
  };
  y.prototype.Igg = function () {
    this.Oe('asc_onAddTable');
  };
  y.prototype.Kgg = function (e) {
    this.Oe('asc_onAlignCell', e);
  };
  y.prototype.nTc = function (e) {
    if (e.Vt && e.Vt.ab) {
      var f = this.Fa.Wa;
      e.Vt.ab.check(f.ri(), f.kl());
      f = e.Vt.ab.Ht();
      e.Vt.va = new AscCommonWord.FAa(f.R, f.G, f.B, !1);
    }
    this.lM[this.lM.length] = new Ie($g.Table, new Asc.JTc(e));
  };
  y.prototype.hhg = function (e) {
    this.Oe('asc_onTblWrapStyleChanged', e);
  };
  y.prototype.ghg = function (e) {
    this.Oe('asc_onTblAlignChanged',
      e);
  };
  y.prototype.lUf = function () {
    this.Vvb({ SHc: !0 });
  };
  y.prototype.nUf = function (e) {
    this.Vvb({ $Hc: !0, Sma: e });
  };
  y.prototype.lbe = function () {
    this.Vvb();
  };
  y.prototype.UGg = function (e) {
    this.$Xd(AscCommon.jW(e));
  };
  y.prototype.ppc = function (e, f) {
    if (f && (f.SHc || f.$Hc || f.obj)) this.$Xd(e[0], void 0, void 0, f); else if (this.tt) {
      var y = this;
      this.tt.a5a(e, function () {
        if (!1 === this.Fa.Wa.Ke(jb)) {
          for (var f = [], Ma = 0; Ma < e.length; ++Ma) {
            var Pa = y.tt.MK(e[Ma], 1);
            Pa && f.push(Pa);
          }
          f.length && (y.Fa.Wa.gg(), y.Fa.Wa.VDa(), y.Fa.Wa.iT(f), y.Fa.Wa.WDa(!0),
            y.Fa.Wa.Sf());
        }
      }, []);
    }
  };
  y.prototype.$Xd = function (e, f, y, Ma) {
    if (kg.$eb(e)) this.uNd(e, f, Ma); else {
      var Pa = this;
      AscCommon.x$(this, [e], function (e) {
        e && e[0] && 'error' !== e[0].url && Pa.uNd(e[0].url, f, Ma);
      }, !1, void 0, y);
    }
  };
  y.prototype.uNd = function (e, f, y) {
    var Ma = this.tt.MK(e, 1);
    if (null != Ma) {
      var Pa = this.Fa.Wa.Wsa();
      e = Math.max(1, Pa.W);
      Pa = Math.max(1, Pa.Jb);
      if (null != Ma.Image) {
        Pa = Math.max(Ma.Image.width * AscCommon.PD, 1);
        var Ia = Math.max(Ma.Image.height * AscCommon.PD, 1);
        e = Math.max(5, Math.min(e, Pa));
        Pa = Math.max(5, Math.min(e *
          Ia / Pa));
      }
      Ma = Ma.src;
      y && y.$Hc ? (e = new Asc.F7a, e.fill = new Cc, e.fill.type = ek.hv, e.fill.fill = new Oc, e.fill.fill.WRa(Ma), null !== y.Sma && void 0 !== y.Sma && e.fill.fill.Tha(y.Sma), this.QOc(new ah({ dm: e }))) : y && y.SHc ? (e = new ah, e.Am = Ma, this.QOc(e)) : y && y.obj && y.obj.rb ? this.r2f(Ma, y.obj.rb()) : !1 === this.Fa.Wa.Ke(jb) && ((Ia = kg.pca(Ma)) && (Ma = Ia), this.Fa.Wa.gg(AscDFH.$4d), void 0 === f || void 0 === f.uL || 0 == f.uL ? this.Fa.Wa.nP(e, Pa, Ma) : this.Fa.Wa.nP(e, Pa, Ma, null, !0), this.Fa.Wa.Sf());
    } else this.$G(og.Gs, rc.MK), this.WZa = function (e) {
      var Ma =
        this.Fa.Wa.Wsa(), Pa = Math.max(1, Ma.W);
      Ma = Math.max(1, Ma.Jb);
      if (null != e.Image) {
        Ma = Math.max(e.Image.width * AscCommon.PD, 1);
        var Ia = Math.max(e.Image.height * AscCommon.PD, 1);
        Pa = Math.max(5, Math.min(Pa, Ma));
        Ma = Math.max(5, Math.min(Pa * Ia / Ma));
      }
      e = e.src;
      y && y.$Hc ? (Pa = new Asc.F7a, Pa.fill = new Cc, Pa.fill.type = ek.hv, Pa.fill.fill = new Oc, Pa.fill.fill.WRa(e), null !== y.Sma && void 0 !== y.Sma && Pa.fill.fill.Tha(y.Sma), this.QOc(new ah({ dm: Pa }))) : y && y.SHc ? (Pa = new ah, Pa.Am = e, this.QOc(Pa)) : y && y.obj && y.obj.rb ? this.r2f(e, y.obj.rb()) :
        !1 === this.Fa.Wa.Ke(jb) && ((Ia = kg.pca(e)) && (e = Ia), this.Fa.Wa.gg(AscDFH.a5d), void 0 === f || void 0 === f.uL || 0 == f.uL ? this.Fa.Wa.nP(Pa, Ma, e) : this.Fa.Wa.nP(Pa, Ma, e, null, !0), this.Fa.Wa.Sf());
      this.$x(og.Gs, rc.MK);
      this.WZa = null;
    };
  };
  y.prototype.TGg = function (e, f, y, Ma, Pa, Ia) {
    var Va = this.Fa.Wa, Ta = Xc.Ck;
    Xc.UF = 0;
    Xc.Ck = 1;
    Va.XQ(Xc, y, Ma, f);
    Va.KZ(Xc, y, Ma, f);
    Va.RU(Xc, y, Ma, f);
    Xc.Ck = Ta;
    !1 === Va.Ke(jb) && (f = new Asc.iee, f.RGa(Asc.fZ.Qc), f.naa(!1), f.kP(y), y = new Asc.jee, y.RGa(Asc.v0.Qc), y.naa(!1), y.kP(Ma), Ma = new ah, Ma.i2d(1), Ma.Nrd(f),
      Ma.Ord(y), Va.gg(AscDFH.Z4d), Va.v7a(), Va.nP(Pa, Ia, e), Va.nL(Ma), Va.q$a(!0), Va.Sf());
  };
  y.prototype.yrd = function () {
    return this.Fa && this.Fa.Wa ? this.Fa.Wa.RWf() : 0;
  };
  y.prototype.zdg = function (e, f) {
    this.Fa && this.Fa.Wa && (AscFormat.hb(f) || (f = Asc.mOa.Slide), this.Fa.Wa.rYf(e, f));
  };
  y.prototype.CVf = function (e) {
    AscFormat.hb(e) || (e = Asc.mOa.sx);
    this.Fa.Wa.AVf(e);
  };
  y.prototype.DVf = function (e) {
    AscFormat.hb(e) || (e = Asc.mOa.sx);
    this.Fa.Wa.BVf(e);
  };
  y.prototype.QOc = function (e) {
    if (AscCommon.jf(e) && (!e.AS || e.AS.type !== Asc.Mk.L6 ||
      AscFormat.kEf(this.Fa.Wa.ec, this))) if (AscFormat.hb(e.gva)) switch (e.gva) {
      case 0:
        this.Fa.Wa.ec.Ddb();
        break;
      case 1:
        this.Fa.Wa.ec.Cdb();
        break;
      case 2:
        this.Fa.Wa.ec.ojb();
        break;
      case 3:
        this.Fa.Wa.ec.Bdb();
    } else {
      var y = [];
      var Ma = this.Fa.Wa.ec.ad, Pa;
      for (Pa = 0; Pa < Ma.length; ++Pa) {
        var Ia = Ma[Pa].parent.zK();
        AscFormat.MQc(y, Ia);
      }
      y = { ea: AscCommon.Aaa, Xb: y, Lu: jb };
      if (1 === e.Qda || -1 === e.Qda) 0 == this.Fa.Wa.Ke(AscCommon.Xha, y) && (this.Fa.Wa.gg(AscDFH.z5d), 1 === e.Qda ? this.Fa.Wa.ec.U1g() : this.Fa.Wa.ec.S7g(), this.Fa.Wa.Sf()); else if (!1 ===
        this.Fa.Wa.Ke(AscCommon.Xha)) {
        e.dm && (e.Am = '');
        var Va = y = null, Ta = '';
        AscCommon.dhb(e.Am) ? e.dm && e.dm.fill && e.dm.fill.fill && !AscCommon.dhb(e.dm.fill.fill.url) && (kg.pca(e.dm.fill.fill.url) || (y = e.dm.fill.fill.url, Va = function (f) {
          Ta = e.dm.fill.fill.url = f;
        }), Ta = e.dm.fill.fill.url) : (kg.pca(e.Am) || (y = e.Am, Va = function (f) {
          Ta = e.Am = f;
        }), Ta = e.Am);
        var Xa = this;
        if (AscCommon.dhb(Ta)) {
          e.Am = null;
          if (!this.zIa || this.sna) {
            if (this.zIa || this.sna || !this.L5a ? (this.Fa.Wa.gg(AscDFH.Kzd), this.Fa.Wa.nL(e), this.Fa.Wa.Kl(), this.Fa.Wa.sr(),
              this.Fa.Wa.Sf()) : (-1 !== this.gGa ? Td.tLe() : this.Fa.Wa.jda(AscDFH.Kzd), this.Fa.Wa.nL(e), this.L5a = !1, this.gGa = -1), this.sna && (this.sna = !1, y = Td.nm[Td.za])) this.gGa = y.wd.length;
          } else if (y = !1, -1 !== this.gGa ? Td.tLe() : (y = !0, this.Fa.Wa.jda(AscDFH.Kzd)), this.Fa.Wa.nL(e), y && (y = Td.nm[Td.za])) this.gGa = y.wd.length;
          this.L5a = !1;
        } else {
          var $a = function () {
            null != Xa.tt.MK(Ta, 1) ? (Xa.Fa.Wa.gg(AscDFH.XTd), Xa.Fa.Wa.nL(e), Xa.Fa.Wa.Kl(), Xa.Fa.Wa.sr(), Xa.Fa.Wa.Sf()) : Xa.WZa = function () {
              Xa.Fa.Wa.gg(AscDFH.f5d);
              Xa.Fa.Wa.nL(e);
              Xa.Fa.Wa.Kl();
              Xa.Fa.Wa.sr();
              Xa.Fa.Wa.Sf();
            };
          };
          y ? f.AscDesktopEditor ? (y = f.AscDesktopEditor.LocalFileGetImageUrl(Ta), y = kg.W9(y), Va(y), $a()) : AscCommon.x$(this, [Ta], function (e) {
            e && e[0] && 'error' !== e[0].url && (Va(e[0].url), $a());
          }, !1) : $a();
        }
      }
    }
  };
  y.prototype.xfg = function () {
  };
  y.prototype.ufg = function () {
  };
  y.prototype.Efg = function () {
  };
  y.prototype.m6f = function () {
  };
  y.prototype.vfg = function () {
  };
  y.prototype.wfg = function () {
  };
  y.prototype.d9f = function () {
    for (var e = 0; e < this.lM.length; ++e) if (this.lM[e].ea == $g.Image && this.lM[e].pa && this.lM[e].pa.Am) return this.lM[e].pa.TNa(this);
    return null;
  };
  y.prototype.Utb = function (e) {
    var f = '';
    if (null != e.fill && null != e.fill.fill && e.fill.type == ek.hv) {
      f = e.fill.fill.cUb();
      var y = e.fill.fill.Brd();
      null != y && 0 <= y && y < AscCommon.nIa.length && (f = AscCommon.nIa[y]);
    }
    if ('' != f) {
      y = this.tt.MK(f, 1);
      var Ma = kg.pca(f);
      Ma && e.fill.fill.WRa(Ma);
      null != y ? (this.Fa.Wa.Utb(e), this.Fa.xd.XVa(f)) : (this.$G(og.Gs, rc.MK), this.WZa = function () {
        this.Fa.Wa.Utb(e);
        this.Fa.xd.XVa(f);
        this.$x(og.Gs, rc.MK);
        this.WZa = null;
      });
    } else this.Fa.Wa.Utb(e);
  };
  y.prototype.Hgg = function () {
    this.Oe('asc_onAddImage');
  };
  y.prototype.TMc = function (e) {
    this.lM[this.lM.length] = new Ie($g.Image, new ah(e));
  };
  y.prototype.z7g = function (e) {
    this.Oe('asc_onImgWrapStyleChanged', e);
  };
  y.prototype.hrd = function (e, f, y, Ma, Pa, Ia, Va) {
    null != this.tt.MK(AscCommon.jW(e), 1) && (this.Fa.Wa.gg(AscDFH.HXb), this.Fa.Wa.gR(Ma, Pa, Ia, Va, e, f, y), this.Fa.Wa.Sf());
  };
  y.prototype.mrd = function (e, f, y, Ma, Pa) {
    e && (this.Fa.Wa.gg(AscDFH.HXb), this.Fa.Wa.wje(e, y, f, Ma, Pa), this.Fa.Wa.Bd(), this.Fa.Wa.Ie(), this.Fa.Wa.Sf());
  };
  y.prototype.asd = function () {
    this.Fa.Wa.ec.Bcc();
  };
  rb.prototype.AN = function () {
    return this.ea;
  };
  rb.prototype.tBa = function () {
    return this.wN;
  };
  rb.prototype.uBa = function () {
    return this.xN;
  };
  rb.prototype.m1g = function () {
    return this.Fe;
  };
  rb.prototype.C2g = function () {
    return this.Hk;
  };
  y.prototype.rRa = function (e) {
    this.Oe('asc_onContextMenu', new rb(e));
  };
  y.prototype.lmb = function () {
    this.Oe('asc_onMouseMoveStart');
  };
  y.prototype.kmb = function () {
    this.Oe('asc_onMouseMoveEnd');
  };
  y.prototype.Foa = function (e) {
    this.Oe('asc_onMouseMove', e);
  };
  y.prototype.chg = function (e, f, y, Ma) {
    this.Oe('asc_onShowForeignCursorLabel',
      e, f, y, new AscCommon.BM(Ma.r, Ma.vb, Ma.Xa, 255));
  };
  y.prototype.rXd = function (e) {
    this.Oe('asc_onHideForeignCursorLabel', e);
  };
  y.prototype.d4f = function () {
    return !0 === this.Fa.Wa.EG(!0) ? this.Fa.Wa.Jq(!0) : !1;
  };
  y.prototype.I1f = function (e) {
    var f = this.vDg(e);
    null !== e.Text && void 0 !== e.Text ? AscFonts.tp.UTa(e.Text, this, function () {
      this.sDg(e, f);
    }) : this.sDg(e, f);
  };
  y.prototype.vDg = function (e) {
    var f = e.pbc(), y = null;
    if (f) {
      var Ma = this.Fa.Wa.mC;
      y = Ma.Qme(f);
      var Pa = Ma.N$(y);
      if (Pa && Pa[0].bl() === f) e.zZc(null), e.GSc(y), y = null; else {
        if (Pa) {
          for (f =
                 1; Ma.N$(y + "_" + f);) f++;
          y += '_' + f;
        }
        e.GSc(y);
      }
    }
    return y;
  };
  y.prototype.sDg = function (e, f) {
    (f ? this.Fa.Wa.Ke(jb, {
      ea: AscCommon.fBa,
      Element: e.pbc(),
      Lu: jb
    }) : this.Fa.Wa.Ke(jb)) || (this.Fa.Wa.gg(AscDFH.X4d), f && e.pbc() && e.pbc().IDf(f), this.Fa.Wa.FN(e), this.Fa.Wa.Sf());
  };
  y.prototype.s4f = function (e) {
    if (e && e.B8b()) {
      var f = this.vDg(e);
      null !== e.Text && void 0 !== e.Text ? AscFonts.tp.UTa(e.Text, this, function () {
        this.uDg(e, f);
      }) : this.uDg(e, f);
    }
  };
  y.prototype.uDg = function (e, f) {
    (f ? this.Fa.Wa.Ke(jb, { ea: AscCommon.fBa, Element: e.pbc(), Lu: jb }) :
      this.Fa.Wa.Ke(jb)) || (this.Fa.Wa.gg(AscDFH.i5d), f && e.pbc() && e.pbc().IDf(f), this.Fa.Wa.QR(e), this.Fa.Wa.Sf());
  };
  y.prototype.qeg = function (e) {
    e && e.B8b() && !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.J5d), this.Fa.Wa.SR(e), this.Fa.Wa.Sf());
  };
  y.prototype.wRg = function () {
    return this.Fa && this.Fa.Wa ? this.Fa.Wa.JWf() : [];
  };
  y.prototype.f_c = function (e) {
    this.lM[this.lM.length] = new Ie($g.Ri, new Asc.lkb(e));
  };
  y.prototype.K8a = function (e) {
    this.Oe('asc_onHyperlinkClick', e);
  };
  y.prototype.oXd = function (e) {
    this.Oe('asc_onCanAddHyperlink',
      e);
  };
  y.prototype.d_c = function () {
    this.Oe('asc_onDialogAddHyperlink');
  };
  y.prototype.d_c = function () {
    this.Oe('asc_onDialogAddHyperlink');
  };
  y.prototype.Y$d = function (e, f, y, Ma, Pa) {
    this.lM[this.lM.length] = new Ie($g.$Pd, new AscCommon.kRd(e, f, y, Ma, Pa));
  };
  y.prototype.pCf = function () {
    this.Oe('asc_onSpellCheckVariantsFound');
  };
  y.prototype.V7e = function (e, f) {
    var y = ue.cg(f.TW);
    null != y && !1 === this.Fa.Wa.Ke($a, {
      ea: AscCommon.fBa,
      Element: y,
      Lu: jb
    }) && (this.Fa.Wa.gg(AscDFH.cUd), y.xGf(e, f.Element), y.av(!0), this.Fa.Wa.Bd(), this.Fa.Wa.sr(),
      this.Fa.Wa.Sf());
  };
  y.prototype.A5e = function (e, f) {
    !1 === f ? (f = ue.cg(e.TW), null != f && f.zFf(e.Element)) : (f = editor.Fa.Wa, f.cP.dHb(e.Tl), f.sb.TD(), f.sb.QG());
  };
  y.prototype.eWc = function (e) {
    var f = this.Fa.Wa;
    f && !0 !== f.cP.PNd(e) && (f.cP.dHb(e), f.sb.TD(), f.sb.QG(), delete f.cP.vt[e]);
  };
  y.prototype.DRd = function () {
    f.AscDesktopEditor && f.AscDesktopEditor.SpellCheck('{"type":"clear"}');
  };
  y.prototype.v8e = function (e) {
    !1 === this.Fa.Wa.Ke(AscCommon.sga) && (this.Fa.Wa.gg(AscDFH.eUd), this.Fa.Wa.qHe(e), this.Fa.Wa.Sf());
  };
  y.prototype.z2f =
    function () {
      return editor.Fa.Wa.vOd();
    };
  y.prototype.wRd = function () {
    return void 0 !== f.asc_current_keyboard_layout ? f.asc_current_keyboard_layout : -1;
  };
  y.prototype.K2f = function (e) {
    editor.Fa.Wa && (editor.Fa.Wa.cP.Ka = e, editor.Fa.xd.TD(), editor.Fa.xd.QG());
  };
  mb.prototype.Rka = function () {
    return this.dY;
  };
  mb.prototype.L7b = function (e) {
    this.dY = e ? e.slice(0, Asc.Qtd) : e;
  };
  mb.prototype.tac = function () {
    return this.KY;
  };
  mb.prototype.wac = function (e) {
    this.KY = e;
  };
  mb.prototype.$Tb = function () {
    return this.maa;
  };
  mb.prototype.isc = function (e) {
    this.maa =
      e;
  };
  mb.prototype.wJa = function () {
    return this.BN;
  };
  mb.prototype.xac = function (e) {
    this.BN = e;
    this.xua = 'Teamlab';
  };
  mb.prototype.wrd = function () {
    return this.xua;
  };
  mb.prototype.h2d = function (e) {
    this.xua = e;
  };
  mb.prototype.$Aa = function () {
    return this.WN;
  };
  mb.prototype.M7b = function (e) {
    this.WN = e;
    this.wua = this.Hsg(this.WN);
  };
  mb.prototype.B2f = function () {
    return this.wua;
  };
  mb.prototype.uVg = function (e) {
    this.wua = e;
  };
  mb.prototype.qac = function () {
    return this.LS;
  };
  mb.prototype.uQc = function (e) {
    this.LS = e;
  };
  mb.prototype.AFb = function () {
    return this.l8;
  };
  mb.prototype.vac = function (e) {
    this.l8 = e;
  };
  mb.prototype.ITa = function () {
    return this.n4.toString(16).padStart(8, '0');
  };
  mb.prototype.fUb = function (e) {
    this.n4 = parseInt(e, 16);
  };
  mb.prototype.wWc = function (e) {
    return this.GK[e];
  };
  mb.prototype.mac = function (e) {
    this.GK.push(e);
  };
  mb.prototype.vWc = function () {
    return this.GK.length;
  };
  mb.prototype.uac = function (e) {
    this.Npf = e;
  };
  mb.prototype.tnb = function () {
    return this.Npf;
  };
  mb.prototype.Hsg = function (e) {
    var f = '';
    e && e.split(' ').forEach(function (e) {
      0 < e.length && (f += e[0]);
    });
    return f;
  };
  y.prototype.S9e = function (e) {
    null != this.Fa.Wa && this.Fa.Wa.dIe(e);
  };
  y.prototype.Drd = function () {
    null != this.Fa.Wa && (this.Fa.Wa.$oe(), editor.JUa());
  };
  y.prototype.M1d = function (e) {
    if (!0 !== AscCommon.Kd.Wna()) {
      var f = this.Fa.Wa;
      if (f && (!0 !== this.RJf() || !1 === f.Ke(AscCommon.LG, null, !0, f.GLa()))) return f = new AscCommon.WSa, f.hVc(e), this.Fa.Wa.gg(AscDFH.W4d), e = this.Fa.Wa.Pw(f, e.tnb()), null != e && this.JIa(e.rb(), f), this.Fa.Wa.Sf(), e.rb();
    }
  };
  y.prototype.U7e = function (e) {
    var f = this.Fa.Wa;
    f && !1 === f.Ke($a, {
      ea: AscCommon.sud,
      Ia: e
    }, !1, f.GLa()) && (f.gg(AscDFH.F5d), f.Afa(e, !0, !0), f.Sf());
  };
  y.prototype.x_e = function (e, f) {
    var y = this.Fa.Wa;
    if (y && !1 === y.Ke($a, { ea: AscCommon.sud, Ia: e }, !1, y.GLa())) {
      var Ma = new AscCommon.WSa;
      Ma.hVc(f);
      y.gg(AscDFH.h5d);
      y.vje(e, Ma);
      y.Sf();
      this.jTc(e, Ma);
    }
  };
  y.prototype.Rrd = function (e) {
    null != this.Fa.Wa && this.Fa.Wa.zQb(e, !0);
  };
  y.prototype.Zrd = function (e) {
    e instanceof Array ? this.Fa.Wa.C0d(e) : this.Fa.Wa.C0d([e]);
  };
  y.prototype.bJf = function () {
    function e(y, Ma) {
      var Pa = Ma.mpa(), Ia = Ma.I7();
      f[Pa] || (f[Pa] = []);
      Pa = f[Pa];
      for (var Va = 0, Ta = Pa.length; Va < Ta && !(Ia < Pa[Va].ob.I7());) Va++;
      Pa.splice(Va, 0, { Oa: y, ob: Ma });
      y = 0;
      for (Ia = Ma.GK.length; y < Ia; ++y) e(!1, Ma.Klg(y));
    }

    var f = {}, y = this.Fa.Wa;
    if (!y) return f;
    y = y.Vj.Zea();
    for (var Ma in y) e(!0, y[Ma].jpa());
    return f;
  };
  y.prototype.RJf = function () {
    return this.Fa.Wa.PB();
  };
  y.prototype.A5b = function (e) {
    this.Oe('asc_onRemoveComment', e);
  };
  y.prototype.JIa = function (e, f) {
    f = new mb(f);
    this.Oe('asc_onAddComment', e, f);
  };
  y.prototype.Fcc = function (e, f, y) {
    this.Oe('asc_onShowComment', e, f, y);
  };
  y.prototype.JUa =
    function () {
      this.Oe('asc_onHideComment');
    };
  y.prototype.yXd = function (e, f, y) {
    this.Oe('asc_onUpdateCommentPosition', [e], f, y);
  };
  y.prototype.jTc = function (e, f) {
    f = new mb(f);
    this.Oe('asc_onChangeCommentData', e, f);
  };
  y.prototype.W$d = function (e, f) {
    this.Oe('asc_onLockComment', e, f);
  };
  y.prototype.aae = function (e) {
    this.Oe('asc_onUnLockComment', e);
  };
  y.prototype.frd = function (e, f) {
    var y = this.Pca();
    if (y && (e = y.Zea(e, f), !y.YL($a, { ea: AscCommon.sud, Ia: e }, !1, y.GLa()))) {
      y.gg(AscDFH.E5d);
      f = 0;
      for (var Ma = e.length; f < Ma; ++f) y.Afa(e[f],
        !0, !1);
      y.Bd();
      y.Kl();
      y.Sf();
    }
  };
  y.prototype.Vgg = function () {
    this.Oe('asc_onLockHeaderFooters');
  };
  y.prototype.Tgg = function () {
    this.Oe('asc_onLockDocumentProps');
  };
  y.prototype.lhg = function () {
    this.Oe('asc_onUnLockHeaderFooters');
  };
  y.prototype.jhg = function () {
    this.Oe('asc_onUnLockDocumentProps');
  };
  y.prototype.gCf = function () {
    !0 === AscCommon.Kd.gB || !0 === this.Fa.Wa.IRa() && !0 === this.Fa.Wa.lJa.FYc || this.Oe('asc_onCollaborativeChanges');
  };
  y.prototype.Ugg = function () {
    this.Oe('asc_onLockDocumentSchema');
  };
  y.prototype.khg =
    function () {
      this.Oe('asc_onUnLockDocumentSchema');
    };
  y.prototype.zig = function () {
    this.Fa.Big();
  };
  y.prototype.Aig = function () {
    this.Fa.Cig();
  };
  y.prototype.FDf = function () {
    this.l6 ? this.Fa.rNd() : this.nNc = AscCommon.bVb.d3;
  };
  y.prototype.GDf = function () {
    this.l6 ? this.Fa.x_c() : this.nNc = AscCommon.bVb.AHb;
  };
  y.prototype.EDf = function () {
    this.l6 ? (this.Fa.p8a = 0, this.Fa.Z5b(0, this.Fa.io)) : this.nNc = AscCommon.bVb.iZd;
  };
  y.prototype.yig = function () {
    this.zoom(100);
  };
  y.prototype.zoom = function (e) {
    var f = this.Fa.io;
    this.Fa.io = e;
    this.Fa.p8a =
      0;
    this.Fa.Z5b(0, f);
  };
  y.prototype.fPa = function (e) {
    this.Fa.EX(e);
  };
  y.prototype.khf = function () {
    return this.Fa.xd.Ah;
  };
  y.prototype.ohf = function () {
    return this.Fa.xd.yz;
  };
  y.prototype.AXd = function (e, f) {
    this.Oe('asc_onZoomChange', e, f);
  };
  y.prototype.zXd = function (e) {
    this.Oe('asc_onCountPages', e);
  };
  y.prototype.Gcc = function (e) {
    this.Oe('asc_onCurrentPage', e);
  };
  y.prototype.z9 = function (e, f) {
    this.l6 ? (this.Fa && this.Fa.Rva != e && (this.Fa.Rva = e, this.Fa.Rva && null != this.Fa.ILg && this.Fa.ILg.focus(), this.Oe('asc_onEnableKeyEventsChanged',
      e)), !0 !== f && AscCommon.Rn && AscCommon.Rn.RAf(e)) : this.mNc = e;
  };
  y.prototype.Wza = function (e) {
    var f = !1;
    this.Fa.Rva && (f = !0);
    f && e && this.Fa.oHf && (f = !1);
    return f;
  };
  y.prototype.bsd = function () {
    if (this.vob) this.$G(og.Gs, rc.FH); else if (this.sSa) this.$G(og.tP, rc.FH); else if (this.$G(og.Gs, rc.d7a), void 0 === this.Dia) {
      var e = this.PRa;
      e.ea = rc.d7a;
      e.i7c = this.K4.i_.length;
      e.oMb = 0;
      var f = this.Fa.Wa, y = 0;
      if (void 0 !== f && null != f) for (var Ma in f.WY) {
        if (this.To.NRa) {
          var Pa = f.WY[Ma];
          kg.aRd(Pa, this.nlb + 'media/' + Pa);
        }
        ++y;
      }
      e.CUc = y;
      e.o6b =
        0;
    }
  };
  y.prototype.B$a = function () {
    if (!0 !== f.NATIVE_EDITOR_ENJINE || this.krc('asc_onInitEditorStyles')) {
      var e = new AscCommonWord.rjg, y = this.Fa.Wa;
      if (y) {
        var Ma = y.Do(), Pa = y.Uc.jr;
        !0 === Ma && y.HG(!1);
        !0 === Pa && y.XGf(!1, !1);
        e.B$a(this, null == this.SOb ? this.Fa.Wa.Om().ef : this.IXf);
        !0 === Ma && y.HG(!0);
        !0 === Pa && y.XGf(!0, !1);
      }
    }
  };
  y.prototype.FRd = function () {
    this.vob ? this.$x(og.Gs, rc.FH) : this.sSa ? this.$x(og.tP, rc.FH) : this.$x(og.Gs, rc.d7a);
    if (void 0 !== this.Dia) this.Dia(), this.Dia = void 0; else if (this.wkb = 0, this.vob) {
      var e =
        0, f;
      for (f in this.aKc) ++e;
      0 < e && (this.wkb = 2, this.$G(og.Gs, rc.MK));
      this.tt.ona = !1;
      this.tt.Wva(this.aKc);
      this.tt.ona = !0;
    } else if (this.sSa) {
      e = 0;
      for (f in this.HZc) ++e;
      0 < e && (this.wkb = 2, this.$G(og.tP, rc.MK));
      this.tt.Wva(this.HZc);
    } else {
      this.B$a();
      null != this.Fa.Wa && (this.Fa.xd.FLb(), this.dAf(this.Fa.Wa.Dd), this.Oe('asc_onUpdateChartStyles'));
      var y = this.Fa.Wa;
      null == y && (y = this.Fa.xd.u_);
      e = 0;
      for (f in y.WY) ++e;
      if (!this.qVd) {
        var Ma = AscCommon.nIa.length;
        for (f = 0; f < Ma; f++) y.WY[e + f] = AscCommon.nIa[f];
        this.PRa && !this.tt.ona &&
        (this.PRa.CUc += Ma);
      }
      0 < e && (this.wkb = 1, this.$G(og.Gs, rc.Wva));
      this.tt.aBa = !0;
      this.tt.Wva(y.WY);
    }
  };
  y.prototype.$Hg = function () {
    var e = new CFontsCharMap;
    e.r$g();
    this.Fa.Wa.vW(e);
    return e.h9g();
  };
  y.prototype.X$d = function (e, f) {
    this.n1d = { qVa: e, Ung: f };
    this.Oe('asc_onSendThemeColors', e, f);
  };
  y.prototype.lJb = function () {
    return null == this.Fa.Wa ? null : this.Fa.Wa.Dd;
  };
  y.prototype.kUf = function (e) {
    if (null != this.Fa.Wa && null != this.Fa.Wa.ec) {
      var f = this.Fa.Wa.Dd, y = AscCommon.fTd(e);
      y || (y = f.hTd(e));
      y && !1 === this.Fa.Wa.Ke(AscCommon.aXc) &&
      (this.Fa.Wa.gg(AscDFH.YTd), f.hlb(y), this.Fa.xd.FLb(), this.Nnb.Pac(), this.QBa.clear(), this.Oe('asc_onUpdateChartStyles'), this.Fa.Wa.Bd(), this.Fa.Wa.Sf(), this.Fa.xd.TD(), this.Fa.BW(), this.Fa.xd.FLb(), this.Fa.Wa.Ie());
    }
  };
  y.prototype.TZe = function (e) {
    if (null != this.Fa.Wa && null != this.Fa.Wa.ec) {
      var f = this.lJb();
      f && (e = this.r8b(e)) && !1 === this.Fa.Wa.Ke(AscCommon.aXc) && (this.Fa.Wa.gg(AscDFH.YTd), f.hlb(e), this.Fa.xd.FLb(), this.Nnb.Pac(), this.QBa.clear(), this.Oe('asc_onUpdateChartStyles'), this.Fa.Wa.Bd(), this.Fa.Wa.Sf(),
        this.Fa.xd.TD(), this.Fa.BW(), this.Fa.xd.FLb(), this.Fa.Wa.Ie());
    }
  };
  y.prototype.csd = function () {
    this.tt.aBa = !1;
    var e = this.vob;
    null != this.Fa.xd.u_ ? (1 == this.wkb ? this.$x(og.Gs, rc.Wva) : 2 == this.wkb && (this.vob ? this.$x(og.Gs, rc.MK) : this.$x(og.tP, rc.MK)), this.wkb = 0, this.Fa.xd.Ote(), this.SOb = null, this.QK = !0, !1 === this.vob && this.mZc(), this.Fa.AFf(), this.Ex && this.VZa(!0)) : (1 == this.wkb ? this.$x(og.Gs, rc.Wva) : 2 == this.wkb && (e ? this.$x(og.Gs, rc.MK) : this.$x(og.tP, rc.MK)), this.wkb = 0, !1 === this.vob && !1 === this.sSa && !1 === this.XOf ?
      (this.nEe = !0, this.uFb()) : this.vob ? (this.vob = !1, this.aKc = null, this.qma(), this.qma = null, this.llb()) : this.sSa ? (this.sSa = !1, this.HZc = null, this.Vcg(), !1 === this.QK && (this.QK = !0, this.mZc())) : this.XOf && (this.XOf = !1, this.Y8d = null, this.tt.ona || this.hog()));
  };
  y.prototype.uFb = function () {
    if (!this.vca && this.nEe && this.sVc && this.Fa && this.Fa.Wa) {
      var e = !1;
      if (0 == this.DocumentType) this.Fa.Wa.ise(); else if (1 == this.DocumentType) this.Fa.Wa.mmg(); else if (this.SOb) {
        var f = this.Fa.Wa;
        if (this.CYc) {
          if (AscCommon.WD && (AscCommon.WD.te(),
            !AscCommon.WD.L1b)) return AscCommon.WD.zlf(AscCommon.Kd.yU, this, this.uFb);
          !1 !== this.sSa || e || (this.QK = e = !0, f.v7a());
          this.CYc = !1;
          this.hUe();
          AscCommon.Kd.fHb();
          AscCommon.Kd.kPc();
          this.BYc = !0;
        }
        !1 !== this.sSa || e || (this.QK = e = !0, f.v7a());
        f.ee(!1);
        e && (this.mZc(), f.q$a(!1));
        if (this.qVd) {
          f.o7a();
          var y = { $l: !0 };
          f.ec.cRf(y);
          f.ec.bRf(y);
          this.Fa.QJg() ? this.Fa.aMg() : this.fEf();
        } else !1 === this.sSa && f.otb(), this.Fa.xd.aK();
      }
      !1 !== this.sSa || e || (this.QK = !0, this.mZc());
      this.Fa.Wa.Ie();
      this.Fa.Wa.$i();
      this.SOb = null;
      this.Fa.AFf();
      this.Ex || (this.hAf(), this.fAf(), this.KSa && this.Fa.xd.X4a(this.KSa));
      this.Ex && this.VZa(!0);
      this.w7b = yb.kf;
    }
  };
  y.prototype.XHa = function () {
    null != this.Fa.Wa && this.Fa.Wa.Kl();
  };
  y.prototype.ERd = function (e) {
    this.$x(og.tP, rc.FH);
    if (void 0 !== this.Dia) this.Dia(), this.Dia = void 0; else {
      var f = Ta.fJb;
      null != f.hZd ? (e = f.J8f(f.hZd), this.Fa.Wa.kLe(f.hZd.text, e), this.Fa.f$g(), f.hZd = null, this.$x(og.Gs, rc.FH)) : 1 == this.iWf ? (this.iWf = 0, this.Vqd(this.hWf), this.hWf = null) : !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.y6d),
        this.Fa.Wa.$g(new AscCommonWord.tN({ wf: { Ja: e.Ja, za: -1 } })), this.Fa.Wa.Kl(), this.Fa.Wa.Sf());
    }
  };
  y.prototype.Qrd = function (e) {
    this.WZa = e;
  };
  y.prototype.baa = function (e) {
    this.WZa ? this.WZa(e) : !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.Y4d), this.Fa.Wa.nP(50, 50, e.src), this.Fa.Wa.Sf());
  };
  y.prototype.V2a = function (e) {
    e.gIa && this.Wfa && (this.Wfa.gIa = e.gIa, this.Wfa.nWc(this));
    e.Bnb ? this.Q_d(e.url, e.data) : this.Ote(e.url, e.data);
  };
  y.prototype.Csc = function (e) {
    this.Fa.xd.Kjg(e.src);
    this.Fa.xd.JRa == e.src && (this.Fa.xd.JRa =
      '', this.XHa());
  };
  y.prototype.DOd = function () {
    return !0;
  };
  y.prototype.DN = function (e, y, Ma) {
    if (void 0 !== f.Native && void 0 !== f.Native.GetImageUrl) Ma(); else if (f.IS_NATIVE_EDITOR) Ma(); else {
      this.qma = Ma;
      this.aKc = y;
      y = 0;
      for (var Pa in this.aKc) ++y;
      AscFonts.tp.jIa(e);
      0 == y && !1 === this.K4.bqb(e) ? (this.qma(), this.qma = null) : (this.Elb(), this.vob = !0, this.K4.KRa(e));
    }
  };
  y.prototype.N9d = function (e) {
    this.sSa = !0;
    this.HZc = e;
    this.Fa.xd.NYd();
    this.K4.KRa(this.Fa.Wa.SP);
  };
  y.prototype.BLg = function (e) {
    this.XOf = !0;
    this.Y8d = e;
    e = 0;
    for (var f =
      this.tt.Z_, y = this.Y8d.length, Ma = 0; Ma < y; Ma++) void 0 !== f[this.Y8d[Ma]] ? (this.Y8d.splice(Ma, 1), Ma--, y--) : ++e;
    0 < e && (this.wkb = 2, this.$G(og.tP, rc.MK));
    this.tt.Wva(this.Y8d);
  };
  y.prototype.hog = function () {
    this.Fa.eFb();
  };
  y.prototype.Vcg = function () {
    AscCommon.Kd.mPd();
    this.BYc && (this.BYc = !1, this.uFb());
  };
  y.prototype.NRc = function () {
  };
  y.prototype.L_f = function (e) {
    this.Fa.Qra.FIa(e);
  };
  y.prototype.M_f = function (e) {
    this.Fa.Eca.yma(e);
  };
  y.prototype.EWf = function () {
    return this.Fa.iya;
  };
  y.prototype.DWf = function () {
    return this.Fa.uua;
  };
  y.prototype.JUf = function () {
    return this.Fa.xd.Dje(!0);
  };
  y.prototype.nOd = function () {
    var e = this.Fa.xd.qS, f = e + 1;
    if (f > this.Fa.xd.cT) return e;
    var y = this.Fa.xd.ql;
    return y[e].zq.bottom > this.Fa.qu.Xe.height - y[f].zq.top ? e : f;
  };
  y.prototype.h_e = function (e) {
    this.Fa && (this.Fa.Lpf = e);
  };
  y.prototype.l_e = function (e) {
    this.l6 ? this.Fa.n7 != e && (this.Fa.n7 = e, this.Fa.X7b(), this.Fa.m7a(!0)) : this.EXd = e;
  };
  y.prototype.s2f = function () {
    this.Fa.n7 = !this.Fa.n7;
    this.Fa.X7b();
    this.Fa.m7a(!0);
    return this.Fa.n7;
  };
  y.prototype.q2f = function () {
    return this.Fa.n7;
  };
  y.prototype.i_e = function (e) {
    this.Fa && this.Fa.ML && this.Fa.z3 ? (this.Fa.ML.ZYa = e, this.Fa.z3.ZYa = e, this.Fa.WHa(!0), this.Fa.jnb(!0)) : this.i_c = e;
  };
  y.prototype.cXf = function (e) {
    if (!this.Fa.xd.bsb(e)) {
      var f = !1, y = this.Fa.Wa;
      AscCommonWord.r3d !== y.oa.ea && (y.Dm(AscCommonWord.r3d), f = !0);
      var Ma = Xc.Ck;
      Xc.UF = 0;
      Xc.Ck = 1;
      y.XQ(Xc, 0, 0, e);
      y.KZ(Xc, 0, 0, e);
      y.RU(Xc, 0, 0, e);
      y.vv();
      y.Kl();
      y.sr();
      Xc.Ck = Ma;
      !0 === f && (this.Fa.xd.TD(), this.Fa.xd.QG());
    }
  };
  y.prototype.KJg = function (e) {
    if (!this.Fa.xd.bsb(e)) {
      var f = !1, y = this.Fa.Wa;
      AscCommonWord.r3d !==
      y.oa.ea && (y.Dm(AscCommonWord.r3d), f = !0);
      var Ma = Xc.Ck;
      Xc.UF = 0;
      Xc.Ck = 1;
      y.XQ(Xc, 0, AscCommon.g5a, e);
      y.KZ(Xc, 0, AscCommon.g5a, e);
      y.RU(Xc, 0, 0, e);
      y.vv();
      y.Kl();
      y.sr();
      Xc.Ck = Ma;
      !0 === f && (this.Fa.xd.TD(), this.Fa.xd.QG());
    }
  };
  y.prototype.VVf = function (e) {
    if (!this.Fa.xd.bsb(e)) {
      var f = Xc.Ck;
      Xc.Ck = 2;
      this.Fa.Wa.XQ(Xc, 0, AscCommon.g5a / 2, e);
      this.Fa.Wa.KZ(Xc, 0, AscCommon.g5a / 2, e);
      this.Fa.Wa.Ie();
      Xc.Ck = f;
    }
  };
  y.prototype.BWf = function () {
    return this.Fa.Aoa;
  };
  y.prototype.nZf = function (e) {
    this.Z5a = e = !0 === e ? zb.b2b : !1 === e ? zb.Ana : e;
    zb.Ana !== e && this.Fa.Wa.xOc();
  };
  y.prototype.oUf = function (e) {
    this.QOc(new ah({ dm: { type: e } }));
  };
  y.prototype.Ecc = function (e) {
    this.Z5a = e = !0 === e ? zb.b2b : !1 === e ? zb.Ana : e;
    return this.Oe('asc_onPaintFormatChanged', e);
  };
  y.prototype.mLg = function (e, f, y, Ma, Pa) {
    if (this.qGb = e) this.Fa.Wa.dYf(f, y, Ma, Pa), this.Fa.Wa.xOc();
  };
  y.prototype.Dcc = function (e) {
    this.qGb = e;
    return this.Oe('asc_onMarkerFormatChanged', e);
  };
  y.prototype.eid = function (e) {
    this.Fa && this.Fa.Wa && (this.bhb = e, this.Fa.Wa.Wn.Qh = e, this.bhb && this.tob && this.PGe(!1),
      this.Fa.xd.y7a(), this.bhb && this.Fa.xd.cDa('de-tablepen'));
  };
  y.prototype.Z$d = function () {
    this.bhb = !1;
    this.Fa.Wa.Wn.Qh = !1;
    this.bhb || (this.Fa.Wa.Wn.Mb = !1, this.Fa.xd.y7a());
    this.Oe('asc_onTableDrawModeChanged', !1);
  };
  y.prototype.PGe = function (e) {
    this.Fa && this.Fa.Wa && (this.tob = e, this.Fa.Wa.Wn.CRa = e, this.tob && this.bhb && this.eid(!1), this.Fa.xd.y7a(), this.tob && this.Fa.xd.cDa('de-tableeraser'));
  };
  y.prototype.$$d = function () {
    this.tob = !1;
    this.Fa.Wa.Wn.CRa = !1;
    this.tob || (this.Fa.Wa.Wn.Mb = !1, this.Fa.xd.y7a());
    this.Oe('asc_onTableEraseModeChanged',
      !1);
  };
  y.prototype.BIe = function (e, f) {
    this.bhb && this.Z$d();
    this.tob && this.$$d();
    this.F0 = !0;
    this.bRd = e;
    f ? this.Fa.xd.cDa('crosshair') : (editor.Lna(), editor.mTc(!1));
  };
  y.prototype.vbe = function (e) {
    if (this.Fa.Wa) {
      var f = this.nOd(), y = this.Fa.Wa.KE(f), Ma = Math.min(y.Gd / 2, y.rf / 2);
      this.Fa.Wa.ec.aQg(e, f, y.ka + y.Gd / 4, y.la + y.rf / 4, Ma, Ma);
    }
  };
  y.prototype.ird = function () {
    return this.Fa.Wa.ec.VWc();
  };
  y.prototype.$rd = function () {
    return this.Fa.Wa.ec.YZc();
  };
  y.prototype.nrd = function () {
    return this.Fa.Wa.ec.ZIb();
  };
  y.prototype.lrd =
    function () {
      return this.Fa.Wa.ec.nXc();
    };
  y.prototype.krd = function () {
    return this.Fa.Wa.ec.mXc();
  };
  y.prototype.RS = function (e) {
    !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.WTd), this.Fa.Wa.RS(e), this.Fa.Wa.Sf());
  };
  y.prototype.mTc = function (e) {
    this.F0 = e;
    return this.Oe('asc_onStartAddShapeChanged', e);
  };
  y.prototype.ofe = function () {
    return this.Fa.Wa.ofe();
  };
  y.prototype.qfe = function () {
    return this.Fa.Wa.qfe();
  };
  y.prototype.mfe = function () {
    return this.Fa.Wa.mfe();
  };
  y.prototype.EIe = function () {
    return this.Fa.Wa.EIe();
  };
  y.prototype.IUf = function () {
    !1 === this.Fa.Wa.Ke(AscCommon.fP) && (this.Fa.Wa.gg(AscDFH.m5d), this.Fa.Wa.BA(), this.Fa.Wa.Sf());
  };
  y.prototype.AJg = function () {
    var e = new Ia;
    e.N$b = 297;
    e.M$b = 210;
    e.aPc = 30;
    e.bPc = 15;
    e.ubd = 20;
    e.tbd = 20;
    return e;
  };
  y.prototype.eQg = function (e) {
    !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.VTd), this.Fa.Wa.$Sf(e), this.Fa.Wa.Sf());
  };
  y.prototype.VZa = function (e) {
    this.Ex = !!e;
    this.l6 && (e ? (this.eJf(), this.jr = !1, AscCommon.Kd.cta(!0), null == this.Fa.xd.u_ ? (this.Fa.xd.TD(), this.Fa.g_d()) : (this.Fa.g_d(),
      this.Fa.BW())) : (this.Fa.X7b(), this.Fa.xd.TD(), this.Fa.m7a(!0)));
  };
  y.prototype.KZ = function (e, f) {
    this.Fa.lcg(e, f);
  };
  y.prototype.WZa = null;
  y.prototype.iZf = function (e, f) {
    this.Fa.xd.AOd(e);
    this.Fa.xd.aOd(f);
  };
  y.prototype.r3e = function () {
    return -1;
  };
  y.prototype.J_e = function () {
    var e = this.Fa.Wa.LR();
    return new AscCommon.sJa(e.Oj, e.la, e.Ag - e.Oj, 0);
  };
  y.prototype.Ocb = function (e, f) {
    var y = this;
    if (f) this.krc('asc_onAdvancedOptions') ? y.Oe('asc_onAdvancedOptions', $e.sMb) : y.Oe('asc_onError', id.pg.Tec, id.Lk.JU); else if (this.krc('asc_onAdvancedOptions')) {
      var Ma =
        { codepage: AscCommon.EIb, encodings: AscCommon.gTd() };
      e && 'undefined' !== typeof Blob && 'undefined' !== typeof FileReader ? AscCommon.Phf().getBinaryContent(e, function (e, f) {
        e ? y.Oe('asc_onError', id.pg.QN, id.Lk.JU) : (Ma.data = f, y.Oe('asc_onAdvancedOptions', $e.t5a, new AscCommon.qWc(Ma)));
      }) : y.Oe('asc_onAdvancedOptions', $e.t5a, new AscCommon.qWc(Ma));
    } else this.UZa($e.t5a, new Asc.kQc(AscCommon.EIb));
  };
  y.prototype.B1d = function (e, f) {
    return this.Fa && this.Fa.xd && (qb.YHb === f.plb || qb.K$b === f.plb) ? this.Fa.xd.GHg([e, f]) : !1;
  };
  y.prototype.Ood = function (e, y, Ma, Pa) {
    var Ia = this, Va = y.plb;
    rc.RPd === e ? (Ma.c = 'sendmm', Ma.userindex = this.ll.sbc()) : this.Fa.Wa || (Ma.c = 'savefromorigin');
    if ('savefromorigin' === Ma.c) Ma.format = this.XIb; else if (null != y.pSc || qb.YHb !== Va && qb.K$b !== Va) qb.JSON === Va ? (Ma.url = this.cEd.url, Ma.format = this.cEd.fileType, this.cEd.token && (Ma.tokenDownload = this.cEd.token, Ma.tokenSession = void 0), Ma.codepage = AscCommon.EIb, Ma.delimiter = AscCommon.p_a.F3c) : this.KFa ? (e = this.KFa.yxb.shift(), Ma.url = e.url, Ma.format = e.format, e.k_c &&
    (Ma.tokenDownload = e.k_c, Ma.tokenSession = void 0), Ma.outputurls = !0, Ma.codepage = AscCommon.EIb, Pa.data = e.data) : qb.OOc === Va && null == y.pSc && null == y.qSc ? (e = new AscCommon.ITf, e.og = !1, e.im = 27, this.Fa.Wa.Scd(e), Pa.data = '\ufeff' + f.asc_docs_api.prototype.asc_nativeGetHtml.call(this)) : (y.qEa instanceof Asc.kQc && (Ma.codepage = y.qEa.HTa()), e = null != y.pSc ? y.pSc : this.Fa.Wa, e = null != y.qSc && qb.OOc === y.qSc.Vxg() ? new AscCommonWord.Xg(e, !1, !0, y.mSd) : new AscCommonWord.Xg(e, void 0, void 0, y.mSd), Pa.data = e.KH(Ma.nobase64)); else {
      e =
        !1;
      y.qEa && y.qEa && Asc.GIb.Selection === y.qEa.pac() && (e = !0);
      var Ta = this.Fa.xd;
      e && Ta.xlg();
      Pa.data = Ta.qHf(Ma.nobase64, e);
    }
    if (null != y.qSc) {
      Ma.mailmergesend = y.qSc;
      e = this.Fa.Wa.XY;
      Ta = [];
      if (e) {
        if (0 < e.length) {
          var jb = e[0], Xa = [], $a;
          for ($a in jb) Xa.push($a);
          Ta.push(Xa);
        }
        for ($a = 0; $a < e.length; ++$a) {
          jb = e[$a];
          Xa = [];
          for (var cb in jb) Xa.push(jb[cb]);
          Ta.push(Xa);
        }
      }
      var ib = Pa.data;
      Pa.data = JSON.stringify(Ta);
      y.qSc.JDg(!0);
      var yb = y.G9;
      y.G9 = function (e) {
        Ma.savekey = e.data;
        e = { data: ib, p3b: null, index: 0, count: 0 };
        y.qSc.JDg(!1);
        AscCommon.n$d(function (e,
                                f, y) {
          Di(Ia, e, f, y);
        }, Ia.tna, yb, Ma, e);
      };
    }
    if (f.JHc) return f.AscDesktopEditor.CryptoDownloadAs(Pa.data, Va, '<m_nCsvTxtEncoding>' + Ma.codepage + '</m_nCsvTxtEncoding>'), !0;
  };
  y.prototype.v0e = function (e) {
    this.k6 = !0;
    AscFormat.hb(e) || (this.zRd(), this.Fa.Wa.Ke(AscCommon.Xha));
    return this.Fa.Wa.zle(e);
  };
  y.prototype.r_e = function (e) {
    if (!1 === this.Fa.Wa.Ke(jb)) {
      this.Fa.Wa.gg(AscDFH.V4d);
      AscFonts.WL = !0;
      this.lQc(!0);
      this.Fa.Wa.nP(null, null, null, e);
      AscFonts.WL = !1;
      var f = this;
      AscFonts.tp.UTa('', this, function () {
        this.lQc(!1, !0);
        f.Fa.Wa.Sf();
      }, !1, !1, !1);
    }
  };
  y.prototype.w2f = function (e) {
    this.k6 = !0;
    this.zRd();
    f.IS_NATIVE_EDITOR || this.Fa.mcg();
    this.Oe('asc_doubleClickOnChart', e);
  };
  y.prototype.Src = function () {
    AscCommon.Enb.prototype.Src.call(this);
    this.Fa.Cob = !1;
  };
  y.prototype.C_e = function (e) {
    AscFormat.bPf(e) && !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.q5d), this.Fa.Wa.Raa(e), this.Fa.Wa.Sf());
  };
  y.prototype.CCf = function () {
    this.Oe('asc_onCloseChartEditor');
  };
  y.prototype.j2d = function (e) {
    this.SFg = e;
    this.l6 && e !== this.QRc && (this.QRc = e, this.Fa.xd.TD(),
      this.Fa.xd.QG());
  };
  y.prototype.Uqd = function (e) {
    var f = AscCommon.TK, y = Ta.bna('Cambria Math');
    if (!1 === f.FH(y)) return this.Vqd(e);
    this.iWf = 1;
    this.hWf = e;
  };
  y.prototype.Vqd = function (e) {
    !1 === this.Fa.Wa.Ke(jb) && (this.Fa.Wa.gg(AscDFH.TTd), e = new AscCommonWord.YEb(e), this.Fa.Wa.$g(e), this.Fa.Wa.Sf());
  };
  y.prototype.QQg = function () {
    this.Fa.Wa.QSf();
  };
  y.prototype.DSg = function (e) {
    this.cEd = e;
    this.drd(new Asc.iQc(Asc.Inb.JSON));
  };
  y.prototype.t2f = function (e) {
    if (!e || !e.length || 0 >= e.length) e = [[]];
    var f = e[0];
    if (!f || !f.length ||
      0 >= f.length) f = [];
    for (var y = {}, Ma = 0, Pa = f.length; Ma < Pa; Ma++) {
      '' === f[Ma] && (f[Ma] = 'F' + (Ma + 1));
      if (void 0 !== y[f[Ma]]) {
        for (var Ia = 1, Va = f[Ma] + Ia; void 0 !== y[Va];) Ia++, Va = f[Ma] + Ia;
        f[Ma] = Va;
      }
      y[f[Ma]] = 1;
    }
    y = [];
    Ma = f.length;
    Ia = 1;
    for (Pa = e.length; Ia < Pa; Ia++) {
      Va = e[Ia];
      for (var Ta = {}, jb = 0; jb < Ma; jb++) Ta[f[jb]] = Va[jb];
      y.push(Ta);
    }
    this.Fa.Wa.LZf(y, f);
  };
  y.prototype.CRg = function () {
    return this.Fa.Wa.c_d();
  };
  y.prototype.xRg = function () {
    return this.Fa.Wa.YWf();
  };
  y.prototype.MQg = function (e) {
    this.Fa.Wa.YSf(e);
  };
  y.prototype.ySg = function (e) {
    this.Fa.Wa.uZf(e);
  };
  y.prototype.YRg = function (e) {
    this.Fa.Wa.oYf(e);
  };
  y.prototype.hRg = function () {
    this.Fa.Wa.AOc();
  };
  y.prototype.lSf = function () {
    this.Oe('asc_onStartMailMerge');
  };
  y.prototype.jSf = function (e) {
    this.Oe('asc_onPreviewMailMergeResult', e);
  };
  y.prototype.dSf = function () {
    this.Oe('asc_onEndPreviewMailMergeResult');
  };
  y.prototype.sXd = function (e) {
    this.Oe('asc_onHighlightMailMergeFields', e);
  };
  y.prototype.mUg = function () {
    return this.Fa.Wa.ZWf();
  };
  y.prototype.vWg = function (e) {
    this.t2f(e);
  };
  y.prototype.FVg = function (e) {
    var f = this, y =
      Asc.OH.RPd;
    e.f4b(this.Cga);
    e.ODg(e.Zxg() - e.Yxg() + 1);
    var Ma = new Asc.iQc(Asc.Inb.t5a);
    Ma.qSc = e;
    Ma.G9 = function (e) {
      null != e && 'sendmm' === e.type ? 'ok' != e.status && f.Oe('asc_onError', AscCommon.yGb(parseInt(e.data)), id.Lk.Vo) : f.Oe('asc_onError', id.pg.QN, id.Lk.Vo);
      f.$x(Asc.vE.Gs, y);
    };
    this.avc(y, Ma);
  };
  y.prototype.yRg = function (e, f) {
    return this.Fa.Wa.XWf(e, f);
  };
  y.prototype.FRg = function () {
    return this.Fa.Wa.gL();
  };
  y.prototype.OQg = function (e) {
    this.Fa.Wa.ZSf(e);
  };
  y.prototype.cSg = function (e) {
    this.Fa.Wa.k0d(e);
  };
  y.prototype.aSg =
    function () {
      this.Fa.Wa.IYf();
    };
  y.prototype.URg = function (e) {
    return this.Fa.Wa.K6b(e);
  };
  y.prototype.TRg = function (e) {
    return this.Fa.Wa.FUc(e);
  };
  y.prototype.GRg = function (e) {
    return this.Fa.Wa.aXf(e);
  };
  y.prototype.dJf = function (e) {
    var f = this.Fa.Wa;
    if (f) return f.HG(e);
  };
  y.prototype.VRg = function () {
    var e = this.Fa.Wa;
    return e ? e.Do() : !1;
  };
  y.prototype.mXd = function () {
    this.BGf = [];
  };
  y.prototype.pXd = function () {
    this.Oe('asc_onShowRevisionsChange', this.BGf);
  };
  y.prototype.ZZe = function () {
    return this.BGf;
  };
  y.prototype.bSf = function (e) {
    this.BGf.push(e);
  };
  y.prototype.JQg = function (e) {
    e ? this.Fa.Wa.xTc(e) : this.Fa.Wa.ISf();
  };
  y.prototype.$Rg = function (e) {
    e ? this.Fa.Wa.iVc(e) : this.Fa.Wa.BYf();
  };
  y.prototype.lsg = function (e) {
    return this.Fa.Wa ? this.Fa.Wa.gXf(e) : !1;
  };
  y.prototype.ORg = function () {
    return this.lsg();
  };
  y.prototype.zRg = function () {
    return this.Fa.Wa.lUc();
  };
  y.prototype.BRg = function () {
    return this.Fa.Wa.MWf();
  };
  y.prototype.oSf = function (e, f) {
    this.Oe('asc_onUpdateRevisionsChangesPosition', e, f);
  };
  y.prototype.IQg = function () {
    this.Fa.Wa.XXd();
  };
  y.prototype.ZRg = function () {
    this.Fa.Wa.h0d();
  };
  y.prototype.cJf = function () {
    var e = {}, f = this.Fa.Wa.xq.UWf(), y;
    for (y in f) for (var Ma = f[y], Pa = 0, Ia = Ma.length; Pa < Ia; ++Pa) {
      var Va = Ma[Pa], Ta = Va.rJb(), jb = Va.Eyb();
      e[Ta] || (e[Ta] = []);
      Ta = e[Ta];
      for (var Xa = 0, $a = Ta.length; Xa < $a && !(jb < Ta[Xa].Eyb());) Xa++;
      Ta.splice(Xa, 0, Va);
    }
    return e;
  };
  y.prototype.jRg = function (e) {
    var f = this.Pca();
    f && f.$mb(e.O7, e.US === Asc.EP.Uda, !0, !0);
  };
  y.prototype.q2d = function () {
    this.Fa.Wa.Lza({ $l: !0 });
  };
  y.prototype.UZe = function () {
    Td.yg();
    gh.yg();
    ue.yg();
    AscCommon.Kd.yg();
    this.CYc = !0;
    this.vca = !1;
    var e =
      this.Fa.Wa;
    e.dQd();
    e.cHf();
    AscCommon.Ata.LK = {};
    this.Fa.xd.OHg();
  };
  y.prototype.j_e = function (e) {
    this.Fa && this.Fa.Wa && AscCommon.Kd && (AscCommon.Kd.cIb(e), f.AscCommon.Gh && e && !AscCommon.Kd.Q$() && f.AscCommon.Gh.aoa());
  };
  y.prototype.iqc = function () {
    AscCommon.Enb.prototype.iqc.call(this);
    Td = AscCommon.History;
    Ta = AscFonts.T5;
    Wc = AscCommon.S_d;
    Xc = AscCommon.aT;
    this.Fa = new AscCommonWord.DTf(this);
    this.Fa.Ja = this.D9c;
    this.ZNd = AscCommonWord.Dhg.en;
    Wc.lA = !0;
    this.XUf();
    this.Fa.Gu();
    this.DXd && this.mFe(this.DXd);
    null !==
    this.EXd && this.l_e(this.EXd);
    if (null !== this.nNc) switch (this.nNc) {
      case AscCommon.bVb.d3:
        this.FDf();
        break;
      case AscCommon.bVb.AHb:
        this.GDf();
        break;
      case AscCommon.bVb.iZd:
        this.EDf();
    }
    null != this.i_c && (this.i_e(this.i_c), this.i_c = null);
    this.VZa(this.Ex);
    this.j2d(this.SFg);
    this.qVd && (this.tt.ona = !1);
    this.k3b && this.dFd(this.k3b);
  };
  y.prototype.TTb = function (e) {
    this.Fa.Wa && this.Fa.Wa.otb(e);
  };
  y.prototype.nQc = function () {
    if (!this.Fa || !this.Fa.Wa || this.Fa.Wa.Ke(jb)) return !1;
    this.Fa.Wa.gg(AscDFH.HXb);
    return !0;
  };
  y.prototype.kRg =
    function () {
      var e = this.Fa.Wa;
      if (!e) return [];
      e = e.fFf();
      for (var f = [], y = 0, Ma = e.length; y < Ma; ++y) f.push(e[y].Wt());
      return f;
    };
  y.prototype.oSg = function (e) {
    var f = this.Fa.Wa;
    if (f) {
      for (var y = f.fFf(), Ma = 0, Pa = y.length; Ma < Pa; ++Ma) y[Ma].gD(e[Ma] ? e[Ma] : '');
      this.q2() || f.otb();
    }
  };
  y.prototype.qsg = function (e) {
    var f = this.Fa.Wa;
    if (f) {
      var y = !0, Ma = null;
      if (void 0 === e) {
        var Pa = f.rl({ E0d: !0 }), Ia = Pa.o4;
        Pa = Pa.vua;
        Ia ? Ma = Ia : Pa && (Ma = Pa);
      } else Ma = AscCommon.Fg.cg(e);
      Ma && Ma.vV && (c_oAscSdtLevelType.ida === Ma.vV() ? y = f.Ke(AscCommon.rR, {
        ea: AscCommon.Aaa,
        Xb: [Ma], Lu: AscCommon.JQc
      }) : c_oAscSdtLevelType.Yq === Ma.vV() && (e = Ma.bl()) && (y = f.Ke(AscCommon.rR, {
        ea: AscCommon.Aaa,
        Xb: [e],
        Lu: AscCommon.LG
      })), e = Ma.Wi());
      !1 === y && (f.gg(AscDFH.H5d), f.tGf(e), f.Bd(), f.Kl(), f.sr(), f.Sf());
    }
  };
  y.prototype.rsg = function (e) {
    var f = this.Fa.Wa;
    if (f) {
      var y = !0, Ma = f.BHb(e);
      if (Ma && Ma.vV) {
        if (c_oAscSdtLevelType.ida === Ma.vV()) y = f.Ke(AscCommon.rR, {
          ea: AscCommon.Aaa,
          Xb: [Ma],
          Lu: AscCommon.JQc
        }); else if (c_oAscSdtLevelType.Yq === Ma.vV() && (e = Ma.bl())) {
          var Pa = f.lbb();
          Ma.Wpa();
          y = f.Ke(AscCommon.rR, {
            ea: AscCommon.Aaa,
            Xb: [e], Lu: AscCommon.n3
          });
          f.e7a(Pa);
        }
        e = Ma.Wi();
      }
      return !1 === y ? (f.gg(AscDFH.I5d), f.Q$b(e), f.Bd(), f.Kl(), f.sr(), f.Sf(), !0) : !1;
    }
  };
  y.prototype.uSg = function (e, f, y) {
    function Ma() {
      AscFonts.WL = !1;
      AscFonts.tp.UTa('', Pa, function () {
        this.Bd();
        this.Kl();
        this.sr();
        this.Sf();
      }, !1, !1, !1);
    }

    var Pa = this.Pca();
    if (Pa) if (!0 === y) {
      for (var Ia = Pa.ew(), Va = [], Ta = [], jb = 0, Xa = Ia.length; jb < Xa; ++jb) (f = Ia[jb], c_oAscSdtLevelType.ida === f.vV()) ? (Va.push(f), Ta.push(AscCommon.IQc)) : c_oAscSdtLevelType.Yq === f.vV() && (y = f.bl()) && (Va.push(y), Ta.push(AscCommon.hJ));
      if (!1 === Pa.Ke(AscCommon.rR, { ea: AscCommon.O2d, Xb: Va, RYd: Ta })) {
        Pa.gg(AscDFH.ZTd);
        AscFonts.WL = !0;
        jb = 0;
        for (Xa = Ia.length; jb < Xa; ++jb) Ia[jb].S$b(e);
        Ma();
      }
    } else Ia = !0, (f = Pa.BHb(f)) && f.vV && (Asc.HFb.PIa !== f.FRa() && Asc.HFb.fJa !== f.FRa() || !e || Asc.HFb.Sza === e.IHa() || Asc.HFb.RAa === e.IHa() || !f.Tja() || f.ja.Date.NN(e.tkb) || (e.tkb = f.ja.Date.Sa()), c_oAscSdtLevelType.ida === f.vV() ? Ia = Pa.Ke(AscCommon.rR, {
      ea: AscCommon.Aaa,
      Xb: [f],
      Lu: AscCommon.IQc
    }) : c_oAscSdtLevelType.Yq === f.vV() && (y = f.bl()) && (Ia = Pa.Ke(AscCommon.rR, {
      ea: AscCommon.Aaa,
      Xb: [y], Lu: AscCommon.hJ
    }))), !1 === Ia && (Pa.gg(AscDFH.ZTd), AscFonts.WL = !0, f.S$b(e), Ma());
  };
  y.prototype.RRg = function () {
    var e = this.Fa.Wa;
    return e ? !!e.BHb() : !1;
  };
  y.prototype.jsg = function () {
    var e = this.Fa.Wa;
    return e ? (e = e.BHb()) ? e.F$a() : null : null;
  };
  y.prototype.ksg = function () {
    var e = this.Fa.Wa;
    return e ? (e = e.BHb()) ? e.Wi() : null : null;
  };
  y.prototype.T$d = function (e) {
    this.lM[this.lM.length] = new Ie($g.OUf, e);
  };
  y.prototype.wSg = function (e, f, y) {
    var Ma = this.Pca();
    if (Ma) {
      if (void 0 === e || null == e) y = f = e = 220;
      Ma.gg(AscDFH.V5d);
      Ma.UPd(e,
        f, y);
      Ma.sb.TD();
      Ma.sb.QG();
      Ma.Sf();
    }
  };
  y.prototype.Wgg = function () {
    this.Oe('asc_onChangeSdtGlobalSettings');
  };
  y.prototype.tRg = function (e) {
    if (!0 === e) return new Asc.ita(220, 220, 220);
    e = this.Pca();
    if (!e) return new Asc.ita(0, 0, 0);
    e = e.$m.R_.va;
    return new Asc.ita(e.r, e.vb, e.Xa);
  };
  y.prototype.xSg = function (e, f, y, Ma) {
    var Pa = this.Pca();
    Pa && (Pa.gg(AscDFH.W5d), Pa.v0d(e), void 0 !== f && void 0 !== y && void 0 !== Ma && Pa.UPd(f, y, Ma), Pa.$Y(), Pa.Sf());
  };
  y.prototype.uRg = function () {
    var e = this.Pca();
    return e ? e.$m.R_.$na : !1;
  };
  y.prototype.rSg =
    function (e) {
      var f = this.Pca();
      if (f && e) {
        var y = f.BHb();
        if (y && y.SW()) {
          e.g0 && AscFonts.tp.mBa(e.g0);
          e.r0 && AscFonts.tp.mBa(e.r0);
          var Ma = {};
          e.qP && (Ma[e.qP] = !0);
          e.BP && (Ma[e.BP] = !0);
          AscCommon.lOc(this, Ma, {}, function () {
            var Ma = y.bl();
            Ma && !f.YL(AscCommon.rR, {
              ea: AscCommon.Aaa,
              Xb: [Ma],
              Lu: AscCommon.hJ
            }) && (f.gg(AscDFH.R5d), y.eYd(e), f.Bd(), f.Yda(), f.Sf());
          });
        }
      }
    };
  y.prototype.r2f = function (e, y) {
    var Ma = this.Pca();
    if (Ma && !AscCommon.dhb(e)) if (y = Ma.BHb(y), y.o0(!0), y && y.uaa() && y.q0d() && y.Q0()) if (Ma.YL(AscCommon.Zza, void 0, !1,
      Ma.MCa())) y.o0(!1); else {
      y.o0(!1);
      var Pa = { Am: e }, Ia = Ma = null, Va = '';
      kg.pca(e) || (Ma = e, Ia = function (e) {
        Va = Pa.Am = e;
      });
      Va = e;
      var Ta = this, jb = function () {
        function e(e) {
          if (e && e.Image && Pa) {
            var f = Ta.Fa.Wa.ec;
            if (f && f.ad[0]) {
              var y = Math.max(e.Image.width * AscCommon.PD, 1);
              e = Math.max(e.Image.height * AscCommon.PD, 1);
              f = 1 / Math.max(y / f.ad[0].eb, e / f.ad[0].fb);
              e = Math.max(5, e * f);
              Pa.od = Math.max(5, y * f);
              Pa.Tc = e;
            }
          }
          Ta.Fa.Wa.gg(AscDFH.XTd);
          Ta.Fa.Wa.nL(Pa);
          Ta.Fa.Wa.Yda();
          Ta.Fa.Wa.Sf();
        }

        var f = Ta.tt.MK(Va, 1);
        null != f ? e(f) : Ta.WZa = function (f) {
          e(f);
        };
      };
      Ma ? f.AscDesktopEditor ? (e = f.AscDesktopEditor.LocalFileGetImageUrl(Va), e = kg.W9(e), Ia(e), jb()) : AscCommon.x$(this, [Va], function (e) {
        e && e[0] && 'error' !== e[0].url && (Ia(e[0].url), jb());
      }, !1) : jb();
    } else y.o0(!1);
  };
  y.prototype.tSg = function (e, f) {
    var y = this.Pca();
    if (y) {
      var Ma = !0;
      if ((f = y.BHb(f)) && (f.bba() || f.BRa())) {
        if (c_oAscSdtLevelType.ida === f.vV()) Ma = y.Ke(AscCommon.rR, {
          ea: AscCommon.Aaa,
          Xb: [f],
          Lu: AscCommon.IQc
        }); else if (c_oAscSdtLevelType.Yq === f.vV()) {
          var Pa = f.bl();
          Pa && (Ma = y.Ke(AscCommon.rR, {
            ea: AscCommon.Aaa, Xb: [Pa],
            Lu: AscCommon.hJ
          }));
        }
        !1 === Ma && (y.gg(AscDFH.dUd), f.bba() ? f.BTa(e) : f.CTa(e), y.Kl(), y.Sf());
      }
    }
  };
  y.prototype.hSg = function (e, f) {
    var y = this.Pca();
    if (y && (f = y.BHb(f)) && (f.bba() || f.N7())) if (f.o0(!0), f.Q0()) {
      var Ma = !1;
      if (c_oAscSdtLevelType.ida === f.vV()) Ma = y.Ke(AscCommon.rR, {
        ea: AscCommon.Aaa,
        Xb: [f],
        Lu: AscCommon.cla
      }, !1, y.MCa()); else if (c_oAscSdtLevelType.Yq === f.vV()) {
        var Pa = f.bl();
        if (Pa) {
          var Ia = y.lbb();
          f.Wpa();
          Ma = y.Ke(AscCommon.rR, { ea: AscCommon.Aaa, Xb: [Pa], Lu: AscCommon.cla }, !1, y.MCa());
          y.e7a(Ia);
        }
      }
      f.o0(!1);
      Ma ||
      (y.gg(AscDFH.Q5d), f.p0d(e), y.Yc(), f.M6b(!0), y.Bd(), y.Kl(), y.Yda(), y.Sf());
    } else f.o0(!1);
  };
  y.prototype.ssg = function (e, f) {
    var y = this.Pca();
    if (y) {
      var Ma = !0;
      if ((f = y.BHb(f)) && f.Tja()) {
        if (c_oAscSdtLevelType.ida === f.vV()) Ma = y.Ke(AscCommon.rR, {
          ea: AscCommon.Aaa,
          Xb: [f],
          Lu: AscCommon.IQc
        }, !1, y.MCa()); else if (c_oAscSdtLevelType.Yq === f.vV()) {
          var Pa = f.bl();
          Pa && (Ma = y.Ke(AscCommon.rR, { ea: AscCommon.Aaa, Xb: [Pa], Lu: AscCommon.hJ }, !1, y.MCa()));
        }
        !1 === Ma && (y.gg(AscDFH.dUd), f.BTc(e), y.Bd(), y.Kl(), y.Yda(), y.Sf());
      }
    }
  };
  y.prototype.sSg =
    function (e, f) {
      var y = this.Pca();
      y && (y = y.BHb(f)) && y.Tja() && y.Q0() && this.ssg(e, f);
    };
  y.prototype.GSg = function () {
    for (var e = this.Fa && this.Fa.xd && this.Fa.xd.Qac ? this.Fa.xd.Qac.C4 : [], f = 0; f < e.length; f++) e[f].B7 = -2;
    this.Fa.rba();
    this.Fa.UAa();
    this.Fa.Er();
    this.Fa.fL();
  };
  y.prototype.TIf = function (e) {
    this.Fa.Wa.pTf(e);
  };
  y.prototype.aJf = function () {
    this.Fa.Wa.dUc();
  };
  y.prototype.CSg = function () {
    var e = this.Fa.Wa;
    if (e) return e.pCa.U$(!0), e.pCa;
  };
  y.prototype.PRg = function () {
    var e = this.Fa.Wa;
    e && e.pCa.U$(!1);
  };
  y.prototype.gSf =
    function () {
      this.Oe('asc_onDocumentOutlineUpdate');
    };
  y.prototype.uXd = function (e) {
    this.Oe('asc_onDocumentOutlineCurrentPosition', e);
  };
  y.prototype.g_c = function (e) {
    this.Oe('asc_onDocumentOutlineUpdateAdd', e);
  };
  y.prototype.Xgg = function (e) {
    this.Oe('asc_onDocumentOutlineUpdateChange', e);
  };
  y.prototype.h_c = function (e) {
    this.Oe('asc_onDocumentOutlineUpdateRemove', e);
  };
  y.prototype.SQg = function (e, f) {
    var y = AscCommon.Ws.Ab('No table of contents entries found.');
    AscFonts.tp.UTa(e + y, this, function () {
      var y = this.Fa.Wa;
      y &&
      (y = y.P$(), y instanceof AscCommonWord.Lpb && y.n_d() ? f && this.tsg(f) : this.Fa.Wa.MDf(e, f));
    });
  };
  y.prototype.eSg = function (e) {
    var f = this.Fa.Wa;
    if (f) {
      if (!e && (e = f.P$(), !e)) return;
      e instanceof AscCommonWord.Lpb ? this.qsg(e.Wi()) : e instanceof AscCommonWord.ENd && this.psg(e);
    }
  };
  y.prototype.KRg = function (e) {
    var f = this.Fa.Wa;
    if (f && (e = f.P$(e))) {
      if (e instanceof AscCommonWord.Lpb) {
        var y = e.Y7c();
        if (!(y instanceof AscCommonWord.ENd)) return y = new Asc.T1c, y.nXf(e), y;
        e = y;
      }
      return e instanceof AscCommonWord.ENd ? (y = new Asc.T1c,
        y.oXf(e), y.CUf(f.Ug), y) : null;
    }
  };
  y.prototype.tsg = function (e) {
    if (e instanceof Asc.T1c) {
      var f = this.Fa.Wa;
      if (f) {
        var y = e.jw;
        if (!y && (y = f.P$(), !y)) return;
        if (y instanceof AscCommonWord.Lpb) {
          var Ma = y.Y7c();
          if (!Ma) {
            f.MDf(null, e, y);
            return;
          }
          y = Ma;
        }
        if (y) {
          Ma = f.Ug;
          var Pa = e.yRc(), Ia = Asc.VU.hM !== Pa && Pa !== Ma.oUc();
          y.n5a();
          (Ia ? f.Ke(AscCommon.LG, {
            ea: AscCommon.kVb,
            aNa: [AscCommon.Lnb]
          }) : f.Ke(AscCommon.LG)) || (f.gg(AscDFH.CRc), Ia && Ma.x0d(Pa), y.LD(e), y.Ge(), f.Bd(), f.Kl(), f.sr(), f.Sf());
        }
      }
    }
  };
  y.prototype.ISg = function (e, f) {
    var y =
      this.Fa.Wa;
    if (y) {
      if (!f && (f = y.P$(), !f)) return;
      f instanceof AscCommonWord.Lpb && (f = f.Y7c());
      if (f) {
        var Ma = y.lbb();
        f.n5a();
        if (e) {
          if (!1 === y.Ke(AscCommon.LG)) {
            y.gg(AscDFH.mUd);
            e = y.kp(!1, !0);
            f = 0;
            for (var Pa = e.length; f < Pa; ++f) for (var Ia = e[f].yWf(AscCommonWord.o7f), Va = 0, Ta = Ia.length; Va < Ta; ++Va) Ia[Va].Ge();
            y.e7a(Ma);
            y.Bd();
            y.Kl();
            y.sr();
            y.Sf();
          }
        } else !1 === y.Ke(AscCommon.Baa) && (y.gg(AscDFH.mUd), f.Ge(), y.e7a(Ma), y.Bd(), y.Kl(), y.sr(), y.Sf());
      }
    }
  };
  y.prototype.pRg = function () {
    var e = this.Fa.Wa;
    if (e) return e.QZd();
  };
  y.prototype.HSg =
    function (e) {
      var f = this.Fa.Wa;
      if (f && (e instanceof AscCommonWord.ENd || e instanceof AscCommonWord.$Uc || e instanceof AscCommonWord.zdd)) if (e instanceof AscCommonWord.$Uc || e instanceof AscCommonWord.zdd) {
        var y = e.Xr();
        if (y) {
          var Ma = y.qU(e);
          if (-1 !== Ma) {
            var Pa = y.bl();
            Pa && !1 === f.Ke(AscCommon.rR, {
              ea: AscCommon.Aaa,
              Xb: [Pa],
              Lu: AscCommon.LG
            }) && (f.gg(AscDFH.CRc), y.Xp(Ma, 1), y.vh(Ma, e instanceof AscCommonWord.$Uc ? new AscCommonWord.$Uc : new AscCommonWord.zdd(f.VP())), f.Bd(), f.Kl(), f.sr(), f.Sf());
          }
        }
      } else e.n5a(), !1 ===
      f.Ke(AscCommon.LG) && (f.gg(AscDFH.CRc), e.Ge(), f.Bd(), f.Kl(), f.sr(), f.Sf());
    };
  y.prototype.psg = function (e) {
    var f = this.Fa.Wa;
    if (e && f) if (e instanceof AscCommonWord.$Uc || e instanceof AscCommonWord.zdd) {
      var y = e.Xr();
      if (y && (e = y.qU(e), -1 !== e)) {
        var Ma = y.bl();
        Ma && !1 === f.Ke({
          ea: AscCommon.Aaa,
          Xb: [Ma],
          Lu: AscCommon.LG
        }) && (f.gg(AscDFH.CRc), y.Xp(e, 1), f.Bd(), f.Kl(), f.sr(), f.Sf());
      }
    } else e.n5a(), !1 === f.Ke(AscCommon.n3) && (f.gg(AscDFH.G5d), e.GYf(), f.Bd(), f.Kl(), f.sr(), f.Sf());
  };
  y.prototype.qSg = function (e, f, y) {
    var Ma = this.Fa.Wa;
    Ma && f && (e instanceof AscCommonWord.ENd || e instanceof AscCommonWord.$Uc || e instanceof AscCommonWord.zdd) && !(e instanceof AscCommonWord.$Uc || e instanceof AscCommonWord.zdd) && (e.n5a(), !1 === Ma.Ke(AscCommon.LG) && (Ma.gg(AscDFH.CRc), e.LD(f), y && e.Ge(), Ma.Bd(), Ma.Kl(), Ma.sr(), Ma.Sf()));
  };
  y.prototype.RQg = function (e) {
    var f = this.Pca();
    f && f.VSf(e);
  };
  y.prototype.IRg = function () {
    var e = this.Pca();
    return e ? e.$Zd() : '=';
  };
  y.prototype.JRg = function () {
    return '#,##0 #,##0.00 $#,##0.00;($#,##0.00) 0 0% 0.00 0.00%'.split(' ');
  };
  y.prototype.WRg = function (e) {
    return this.Fa.Wa.eYf(e);
  };
  y.prototype.aRg = function (e, f) {
    'string' === typeof f && 0 < f.length && (e += ' \\# "' + f + '"');
    return e;
  };
  y.prototype.PQg = function (e) {
    var f = this.Pca();
    f && f.KSf(e);
  };
  y.prototype.lRg = function () {
    var e = this.Fa.Wa;
    if (!e) return null;
    e = e.mC;
    e.Ge();
    return e;
  };
  y.prototype.nsg = function () {
    this.Oe('asc_onBookmarksUpdate');
  };
  y.prototype.vRg = function (e) {
    var f = this.Fa.Wa;
    return f && e ? f.Ug.IWf(e) : -1;
  };
  y.prototype.HRg = function () {
    var e = this.Fa.Wa;
    return e ? e.Ug.uWf() : [];
  };
  y.prototype.mSg =
    function (e) {
      var f = this.Fa.Wa;
      if (f) return f.$Yf(e);
    };
  y.prototype.nSg = function (e) {
    var f = this.Fa.Wa;
    if (f) return f.aZf(e);
  };
  y.prototype.lSg = function (e) {
    var f = this.Fa.Wa;
    if (f) return f.ZYf(e);
  };
  y.prototype.kSg = function (e) {
    var f = this.Fa.Wa;
    if (f) return f.YYf(e);
  };
  y.prototype.ERg = function () {
    var e = this.Pca();
    return e ? e.Jq(!1) : null;
  };
  y.prototype.KQg = function () {
    var e = this.Pca();
    if (!e) return null;
    e.JSf();
  };
  y.prototype.J6a = function () {
    return this.Fa.Wa ? this.Fa.Wa.J6a() : null;
  };
  y.prototype.aOc = function (e) {
    return this.Fa.Wa ?
      this.Fa.Wa.aOc(e) : null;
  };
  y.prototype.lPc = function (e) {
    return this.Fa.Wa ? this.Fa.Wa.lPc(e) : null;
  };
  y.prototype.gbb = function (e) {
    return this.Fa.Wa ? this.Fa.Wa.gbb(e) : null;
  };
  y.prototype.Ptb = function (e) {
    return this.Fa.Wa ? this.Fa.Wa.Ptb(e) : null;
  };
  y.prototype.Rmb = function () {
    return this.Fa.Wa ? this.Fa.Wa.Rmb() : 0;
  };
  y.prototype.p$a = function () {
    return this.Fa.Wa ? this.Fa.Wa.p$a() : null;
  };
  y.prototype.UEb = function () {
    return this.Fa.Wa ? this.Fa.Wa.UEb() : 0;
  };
  y.prototype.BOd = function () {
    this.Fa.Wa && this.Fa.xd.kte();
  };
  y.prototype.Sia =
    function (e) {
      return this.Fa.Sia(e);
    };
  y.prototype.BIa = function (e) {
    return this.Fa.BIa(e);
  };
  y.prototype.m6a = function (e) {
    return this.Fa.m6a(e);
  };
  y.prototype.bTd = function (e) {
    var f = this.Fa.Wa;
    return f ? f.fle(e) : [];
  };
  f.asc_docs_api = y;
  f.asc_docs_api.prototype.asc_nativeOpenFile = function (e, y) {
    this.MRb = '';
    this.$W = new AscCommon.STb;
    this.$W.vw('TM');
    this.$W.jMc('native');
    this.Fa.n7 = !1;
    this.Fa.Gu();
    this.zOd();
    this.DocumentType = 2;
    this.IXf = this.Fa.Wa.rOc();
    gh.EDa(!0);
    var Ma = new AscCommonWord.Y8a(this.Fa.Wa, {
      Ptc: !1, eua: 0,
      o3b: 0
    });
    void 0 !== y && (AscCommon.CHa = y);
    Ma.lq(e) ? (gh.EDa(!1), this.SOb = 1) : this.Oe('asc_onError', id.pg.gPd, id.Lk.JU);
    !0 === f.NATIVE_EDITOR_ENJINE && void 0 != f['native'] && (AscCommon.FNd.prototype.G7a = function (e) {
      e({ saveLock: !1 });
    }, AscCommon.FNd.prototype.C8a = function (e, y) {
      f['native'].SaveChanges && f['native'].SaveChanges(e.join('","'), y, e.length);
    });
    void 0 == f.Native && (e = (this.vOc = null == editor.Fa.Wa ? !0 : !editor.Fa.Wa.Tta) ? rk.FD(AscCommon.fFb, AscCommon.g5a) : rk.FD(AscCommon.g5a, AscCommon.fFb), this.e_c(e.Mm, e.Lm),
      this.kTc(editor.zTd()), void 0 !== this.lJg && (this.lJg(), void 0 !== this.Fa.xd.NHg && this.Fa.xd.NHg()));
  };
  f.asc_docs_api.prototype.asc_nativeCalculateFile = function () {
    if (null != this.Fa.Wa) {
      var e = this.Fa.Wa;
      if (void 0 === f.NATIVE_EDITOR_ENJINE && this.CYc && (this.CYc = !1, 1 === AscCommon.Kd.kaa)) {
        this.BYc = !0;
        AscCommon.Kd.fHb();
        AscCommon.Kd.kPc();
        return;
      }
      e.ee();
      e.otb();
      e.Ie();
      e.$i();
      this.jr = !1;
    }
  };
  f.asc_docs_api.prototype.asc_nativeApplyChanges = function (e) {
    this.SHf(e, new AscCommonWord.FAa(191, 255, 199));
    AscCommon.Kd.o0c();
  };
  f.asc_docs_api.prototype.lQc = function (e, f) {
    this.Fa.Wa && (e ? this.Fa.Wa.v7a() : this.Fa.Wa.q$a(f));
  };
  f.asc_docs_api.prototype.asc_nativeApplyChanges2 = function (e, y) {
    gh.EDa(!0);
    var Ma = new AscCommon.Saa(e, e.length);
    Ma.Ew = null;
    for (var Pa = new AscCommonWord.FAa(191, 255, 199), Ia = Ma.jb(), Va = 4, Ta = 0; Ta < Ia && (!0 !== f.NATIVE_EDITOR_ENJINE || !f["native"].CheckNextChange || f["native"].CheckNextChange()); Ta++) {
      var jb = Ma.jb();
      Va += 4;
      Ma.size = Va + jb;
      var Xa = Ma.cc();
      Xa = AscCommon.Fg.cg(Xa);
      var $a = Ma.yb, qb = Ma.jb();
      Xa && ((qb = AscDFH.Ca[qb]) ?
        (Xa = new qb(Xa), Xa.ge(Ma), !0 === AscCommon.Kd.cKb(Xa, !1) && Xa.nh(Pa)) : (AscCommon.Kd.cKb(e, !1), Ma.kk($a), Ma.Td($a)));
      Va += jb;
      Ma.Td(Va);
      Ma.size = e.length;
    }
    if (y && (AscCommon.Kd.yU = [], AscCommon.Kd.dOc(), AscCommon.Kd.eqb(), AscCommon.Kd.fPc(), !0 === f.NATIVE_EDITOR_ENJINE && f['native'].AddImageInChanges)) for (e = AscCommon.Kd.UFa, y = e.length, Ma = 0; Ma < y; Ma++) f['native'].AddImageInChanges(e[Ma]);
    gh.EDa(!1);
  };
  f.asc_docs_api.prototype.asc_nativeGetFile = function () {
    return (new AscCommonWord.Xg(this.Fa.Wa)).KH();
  };
  f.asc_docs_api.prototype.asc_nativeGetFile2 =
    function () {
      return (new AscCommonWord.Xg(this.Fa.Wa)).KH(!0, !0);
    };
  f.asc_docs_api.prototype.H5e = function () {
    var e = new AscCommonWord.Xg(this.Fa.Wa);
    return { data: e.KH(!0, !0), header: AscCommon.kta.RRa + ';v' + Asc.NTa + ';' + e.memory.ua + ';' };
  };
  f.asc_docs_api.prototype.asc_nativeGetFileData = function () {
    var e = new AscCommonWord.Xg(this.Fa.Wa), y = e.memory;
    e.KH(!0);
    f['native'].Save_End(AscCommon.kta.RRa + ';v' + Asc.NTa + ';' + y.ua + ';', y.ua);
    return y.pp.data;
  };
  f.asc_docs_api.prototype.asc_nativeGetHtml = function () {
    var e = Wc.vuc;
    Wc.vuc =
      !1;
    this.Fa.Wa.Jg();
    var f = new AscCommon.RTc(this);
    f.Mb();
    f = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>' + f.nJb() + '</body></html>';
    this.Fa.Wa.Yc();
    Wc.vuc = e;
    return f;
  };
  f.asc_docs_api.prototype.asc_AddHtml = function (y) {
    var Ma = e.getElementById(y);
    (y = f.frames[y]) && null != y.document && null != y.document.body && (Ma.style.display = 'block', this.Fa.Wa.gg(), this.lQc(!0), AscCommon.dOd(this, AscCommon.wt.Xe, y.document.body, Ma), this.Fa.Wa.Sf(), this.lQc(!1));
    Ma && e.body.removeChild(Ma);
  };
  f.asc_docs_api.prototype.asc_nativeCalculate = function () {
  };
  f.asc_docs_api.prototype.asc_nativePrint = function (e, y, Ma) {
    if (void 0 === e && void 0 === y) {
      if (void 0 !== f.AscDesktopEditor) {
        e = this.Fa.xd;
        Ma && Ma.printOptions && Ma.printOptions.selection && e.xlg();
        y = e.uZc ? e.uZc.sb : e;
        var Pa = Math.min(y.Ah, y.m8);
        f.AscDesktopEditor.Print_Start(this.MEf, Pa, '', e.uZc ? 0 : this.ohf());
        var Ia = new AscCommon.mLb;
        Ia.SOc(AscCommon.$Q.mJ);
        Ia.Uy = new AscCommon.tZ;
        var Va = this.jr;
        this.jr = !1;
        for (var Ta = 0; Ta < Pa; Ta++) Ia.Memory.kk(0), Ia.Uy.Tsa(),
          Ma = y.ql[Ta], Ia.gkb(Ma.Fx, Ma.OA), y.Wa.wja(Ta, Ia), Ia.Kmb(), f.AscDesktopEditor.Print_Page(Ia.Memory.Vaa(), Ma.Fx, Ma.OA);
        this.jr = Va;
        e.uZc = null;
        f.AscDesktopEditor.Print_End();
      }
    } else Ma = this.Fa.xd.ql[y], e.gkb(Ma.Fx, Ma.OA), this.Fa.Wa.wja(y, e), e.Kmb();
  };
  f.asc_docs_api.prototype.asc_nativePrintPagesCount = function () {
    return this.Fa.xd.Ah;
  };
  f.asc_docs_api.prototype.asc_nativeGetPDF = function (e) {
    var y = this.asc_nativePrintPagesCount();
    e && e.printOptions && e.printOptions.onlyFirstPage && (y = 1);
    var Ma = new AscCommon.mLb;
    Ma.SOc(AscCommon.$Q.mJ);
    Ma.Uy = new AscCommon.tZ;
    var Pa = this.jr;
    this.jr = !1;
    for (var Ia = 0; Ia < y; Ia++) this.asc_nativePrint(Ma, Ia, e);
    this.jr = Pa;
    f['native'].Save_End('', Ma.Memory.ua);
    return Ma.Memory.data;
  };
  f.asc_docs_api.prototype.Add_Text = function (e) {
    this.Fa.Wa.kLe(e);
  };
  f.asc_docs_api.prototype.Add_NewParagraph = function () {
    var e = this.Fa.Wa;
    !1 === e.Ke(AscCommon.K5) && (e.gg(AscDFH.uYc), e.ay(!0), e.Sf());
  };
  f.asc_docs_api.prototype.Cursor_MoveLeft = function () {
    this.Fa.Wa.vv();
  };
  f.asc_docs_api.prototype.Cursor_MoveRight = function () {
    this.Fa.Wa.zt();
  };
  f.asc_docs_api.prototype.Cursor_MoveUp = function () {
    this.Fa.Wa.jH();
  };
  f.asc_docs_api.prototype.Cursor_MoveDown = function () {
    this.Fa.Wa.iH();
  };
  f.asc_docs_api.prototype.Get_DocumentRecalcId = function () {
    return this.Fa.Wa.MX;
  };
  f.asc_docs_api.prototype.asc_IsSpellCheckCurrentWord = function () {
    return this.V$c;
  };
  f.asc_docs_api.prototype.asc_putSpellCheckCurrentWord = function (e) {
    this.V$c = e;
  };
  f.asc_docs_api.prototype.asc_setParagraphStylesSizes = function (e, y) {
    f.AscCommonWord && f.AscCommonWord.YP ? (AscCommonWord.YP.dYa = e,
      AscCommonWord.YP.ATa = y) : (AscCommon.jog = e, AscCommon.iog = y);
  };
  y.prototype.hZf = function (e, f) {
    this.Fa.xd && this.Fa.xd.hZf(e, f);
  };
  y.prototype.jZf = function (e, f) {
    this.Fa.xd && this.Fa.xd.jZf(e, f);
  };
  y.prototype.hFe = function (e, f, y, Ma) {
    this.Fa.xd && this.Fa.xd.hFe(e, f, y, Ma);
  };
  y.prototype.mRd = function () {
    this.Fa.Zs && (this.Fa.dSd(), this.Fa.Zs.QRf());
  };
  y.prototype.erd = function () {
    this.Fa.Zs && this.Fa.dSd();
  };
  y.prototype.Jxd = function () {
    return 'Arial';
  };
  y.prototype.Nvc = function () {
    return 11;
  };
  y.prototype.ord = function () {
    return this.Fa &&
      this.Fa.Wa && this.Fa.Wa.IU || null;
  };
  y.prototype.Wvc = function () {
    return this.Fa && this.Fa.Wa && this.Fa.Wa.$E;
  };
  y.prototype.Trd = function (e) {
    var f = this.Wvc();
    if (f) {
      var y = this.Fa.Wa;
      !1 === y.Ke(AscCommon.uud, null) && (y.gg(AscDFH.aNf), f.I9b(e), this.XHa(), y.Sf(!0));
    }
  };
  y.prototype.cVg = function () {
    return null !== this.Fa.Wa ? AscCommon.A6f !== this.Fa.Wa.$m.B4 : !1;
  };
  f.Asc = f.Asc || {};
  Ia.prototype.get_PageWidth = Ia.prototype.n1g;
  Ia.prototype.get_PageHeight = Ia.prototype.l1g;
  Ia.prototype.get_MarginLeft = Ia.prototype.e1g;
  Ia.prototype.get_MarginRight =
    Ia.prototype.f1g;
  Ia.prototype.get_MarginTop = Ia.prototype.g1g;
  Ia.prototype.get_MarginBottom = Ia.prototype.d1g;
  cb.prototype.get_Type = cb.prototype.AN;
  cb.prototype.put_Type = cb.prototype.iU;
  cb.prototype.get_Position = cb.prototype.qbc;
  cb.prototype.put_Position = cb.prototype.fcc;
  cb.prototype.get_DifferentFirst = cb.prototype.L0g;
  cb.prototype.put_DifferentFirst = cb.prototype.s4g;
  cb.prototype.get_DifferentEvenOdd = cb.prototype.K0g;
  cb.prototype.put_DifferentEvenOdd = cb.prototype.r4g;
  cb.prototype.get_LinkToPrevious =
    cb.prototype.X0g;
  cb.prototype.get_Locked = cb.prototype.aYc;
  cb.prototype.get_StartPageNumber = cb.prototype.B1g;
  cb.prototype.put_StartPageNumber = cb.prototype.i5g;
  f.Asc.CMailMergeSendData = f.Asc.U8g = Xa;
  Xa.prototype.get_From = Xa.prototype.R0g;
  Xa.prototype.put_From = Xa.prototype.v4g;
  Xa.prototype.get_To = Xa.prototype.D1g;
  Xa.prototype.put_To = Xa.prototype.r5g;
  Xa.prototype.get_Subject = Xa.prototype.C1g;
  Xa.prototype.put_Subject = Xa.prototype.k5g;
  Xa.prototype.get_MailFormat = Xa.prototype.Vxg;
  Xa.prototype.put_MailFormat =
    Xa.prototype.N4g;
  Xa.prototype.get_FileName = Xa.prototype.Q0g;
  Xa.prototype.put_FileName = Xa.prototype.t4g;
  Xa.prototype.get_Message = Xa.prototype.i1g;
  Xa.prototype.put_Message = Xa.prototype.P4g;
  Xa.prototype.get_RecordFrom = Xa.prototype.Yxg;
  Xa.prototype.put_RecordFrom = Xa.prototype.X4g;
  Xa.prototype.get_RecordTo = Xa.prototype.Zxg;
  Xa.prototype.put_RecordTo = Xa.prototype.Y4g;
  Xa.prototype.get_RecordCount = Xa.prototype.s1g;
  Xa.prototype.put_RecordCount = Xa.prototype.ODg;
  Xa.prototype.get_UserId = Xa.prototype.Ala;
  Xa.prototype.put_UserId =
    Xa.prototype.f4b;
  f.Asc.CAscFootnotePr = f.Asc.vTf = ib;
  ib.prototype.get_Pos = ib.prototype.U5a;
  ib.prototype.put_Pos = ib.prototype.q6a;
  ib.prototype.get_NumStart = ib.prototype.MMf;
  ib.prototype.put_NumStart = ib.prototype.RQf;
  ib.prototype.get_NumFormat = ib.prototype.KMf;
  ib.prototype.put_NumFormat = ib.prototype.PQf;
  ib.prototype.get_NumRestart = ib.prototype.LMf;
  ib.prototype.put_NumRestart = ib.prototype.QQf;
  f.Asc.asc_docs_api = y;
  y.prototype.SetCollaborativeMarksShowType = y.prototype.t0d;
  y.prototype.GetCollaborativeMarksShowType =
    y.prototype.NZd;
  y.prototype.Clear_CollaborativeMarks = y.prototype.BHa;
  y.prototype.SetLanguage = y.prototype.SPd;
  y.prototype.asc_GetFontThumbnailsPath = y.prototype.YZe;
  y.prototype.TranslateStyleName = y.prototype.KLg;
  y.prototype.CheckChangedDocument = y.prototype.E2c;
  y.prototype.SetUnchangedDocument = y.prototype.rZf;
  y.prototype.SetDocumentModified = y.prototype.uPc;
  y.prototype.isDocumentModified = y.prototype.yof;
  y.prototype.asc_isDocumentCanSave = y.prototype.Erd;
  y.prototype.asc_getCanUndo = y.prototype.n0e;
  y.prototype.asc_getCanRedo =
    y.prototype.m0e;
  y.prototype.sync_BeginCatchSelectedElements = y.prototype.nXd;
  y.prototype.sync_EndCatchSelectedElements = y.prototype.HLd;
  y.prototype.getSelectedElements = y.prototype.H8f;
  y.prototype.sync_ChangeLastSelectedElement = y.prototype.Mgg;
  y.prototype.asc_getEditorPermissions = y.prototype.q1e;
  y.prototype.asc_setDocInfo = y.prototype.wsc;
  y.prototype.asc_setLocale = y.prototype.CRd;
  y.prototype.asc_getLocale = y.prototype.pQc;
  y.prototype.asc_LoadDocument = y.prototype.hrc;
  y.prototype.SetTextBoxInputMode = y.prototype.VGe;
  y.prototype.GetTextBoxInputMode = y.prototype.Hne;
  y.prototype.ChangeReaderMode = y.prototype.fEf;
  y.prototype.SetReaderModeOnly = y.prototype.oLg;
  y.prototype.IncreaseReaderFontSize = y.prototype.lXf;
  y.prototype.DecreaseReaderFontSize = y.prototype.oVf;
  y.prototype.CreateCSS = y.prototype.FEf;
  y.prototype.GetCopyPasteDivId = y.prototype.qJg;
  y.prototype.ContentToHTML = y.prototype.yEf;
  y.prototype.InitEditor = y.prototype.zOd;
  y.prototype.InitViewer = y.prototype.CFf;
  y.prototype.OpenDocument = y.prototype.Ote;
  y.prototype.OpenDocument2 =
    y.prototype.Q_d;
  y.prototype.asc_getDocumentName = y.prototype.n1e;
  y.prototype.asc_getAppProps = y.prototype.ord;
  y.prototype.asc_getCoreProps = y.prototype.T0e;
  y.prototype.asc_setCoreProps = y.prototype.Trd;
  y.prototype.asc_isCompatibilityMode = y.prototype.cVg;
  y.prototype.asc_registerCallback = y.prototype.TZa;
  y.prototype.asc_unregisterCallback = y.prototype.V9e;
  y.prototype.asc_checkNeedCallback = y.prototype.krc;
  y.prototype.asc_getPropertyEditorShapes = y.prototype.Z3e;
  y.prototype.asc_getPropertyEditorTextArts = y.prototype.$3e;
  y.prototype.get_PropertyThemeColors = y.prototype.r1g;
  y.prototype._coAuthoringSetChange = y.prototype.tVe;
  y.prototype._coAuthoringSetChanges = y.prototype.SHf;
  y.prototype.asc_coAuthoringChatSendMessage = y.prototype.A_e;
  y.prototype.asc_coAuthoringChatGetMessages = y.prototype.z_e;
  y.prototype.asc_coAuthoringGetUsers = y.prototype.B_e;
  y.prototype.asc_coAuthoringDisconnect = y.prototype.lrc;
  y.prototype.asc_SpellCheckDisconnect = y.prototype.eJf;
  y.prototype._onUpdateDocumentCanSave = y.prototype.D7a;
  y.prototype.put_FramePr =
    y.prototype.u4g;
  y.prototype.asyncFontEndLoaded_MathDraw = y.prototype.N2f;
  y.prototype.sendMathTypesToMenu = y.prototype.LZc;
  y.prototype.asyncFontEndLoaded_DropCap = y.prototype.etg;
  y.prototype.asc_addDropCap = y.prototype.MSg;
  y.prototype.removeDropcap = y.prototype.W5g;
  y.prototype.get_TextProps = y.prototype.J4d;
  y.prototype.GetJSONLogicDocument = y.prototype.wJg;
  y.prototype.get_ContentCount = y.prototype.Uxg;
  y.prototype.select_Element = y.prototype.t6g;
  y.prototype.UpdateTextPr = y.prototype.$Ya;
  y.prototype.UpdateParagraphProp =
    y.prototype.z7a;
  y.prototype.Undo = y.prototype.Ul;
  y.prototype.Redo = y.prototype.oh;
  y.prototype.Copy = y.prototype.Sa;
  y.prototype.Update_ParaTab = y.prototype.w5a;
  y.prototype.Cut = y.prototype.eVf;
  y.prototype.Paste = y.prototype.fYf;
  y.prototype.Share = y.prototype.yZf;
  y.prototype.asc_Save = y.prototype.xda;
  y.prototype.forceSave = y.prototype.j0a;
  y.prototype.asc_setIsForceSaveOnUserSave = y.prototype.W8e;
  y.prototype.asc_DownloadAs = y.prototype.drd;
  y.prototype.asc_DownloadAsMailMerge = y.prototype.fRg;
  y.prototype.asc_DownloadOrigin =
    y.prototype.gRg;
  y.prototype.Resize = y.prototype.jB;
  y.prototype.AddURL = y.prototype.WSf;
  y.prototype.Help = y.prototype.hXf;
  y.prototype.asc_setAdvancedOptions = y.prototype.UZa;
  y.prototype.asc_decodeBuffer = y.prototype.fJf;
  y.prototype.SetFontRenderingMode = y.prototype.mFe;
  y.prototype.startGetDocInfo = y.prototype.rgg;
  y.prototype.stopGetDocInfo = y.prototype.ugg;
  y.prototype.sync_DocInfoCallback = y.prototype.U$d;
  y.prototype.sync_GetDocInfoStartCallback = y.prototype.hCf;
  y.prototype.sync_GetDocInfoStopCallback = y.prototype.iCf;
  y.prototype.sync_GetDocInfoEndCallback = y.prototype.qXd;
  y.prototype.sync_CanUndoCallback = y.prototype.iTc;
  y.prototype.sync_CanRedoCallback = y.prototype.hTc;
  y.prototype.can_CopyCut = y.prototype.e4f;
  y.prototype.sync_CanCopyCutCallback = y.prototype.cSf;
  y.prototype.setStartPointHistory = y.prototype.pBf;
  y.prototype.setEndPointHistory = y.prototype.DAf;
  y.prototype.sync_CursorLockCallBack = y.prototype.y7g;
  y.prototype.sync_UndoCallBack = y.prototype.mhg;
  y.prototype.sync_RedoCallBack = y.prototype.Zgg;
  y.prototype.sync_CopyCallBack =
    y.prototype.Ogg;
  y.prototype.sync_CutCallBack = y.prototype.Pgg;
  y.prototype.sync_PasteCallBack = y.prototype.Ygg;
  y.prototype.sync_ShareCallBack = y.prototype.bhg;
  y.prototype.sync_SaveCallBack = y.prototype.$gg;
  y.prototype.sync_DownloadAsCallBack = y.prototype.Qgg;
  y.prototype.sync_StartAction = y.prototype.$G;
  y.prototype.sync_EndAction = y.prototype.$x;
  y.prototype.sync_AddURLCallback = y.prototype.Jgg;
  y.prototype.sync_ErrorCallback = y.prototype.Rgg;
  y.prototype.sync_HelpCallback = y.prototype.Sgg;
  y.prototype.sync_UpdateZoom =
    y.prototype.nhg;
  y.prototype.ClearPropObjCallback = y.prototype.QNd;
  y.prototype.CollectHeaders = y.prototype.LUf;
  y.prototype.GetActiveHeader = y.prototype.tWf;
  y.prototype.gotoHeader = y.prototype.w9f;
  y.prototype.sync_ChangeActiveHeaderCallback = y.prototype.Lgg;
  y.prototype.sync_ReturnHeadersCallback = y.prototype.oCf;
  y.prototype.asc_searchEnabled = y.prototype.Y7e;
  y.prototype.asc_findText = y.prototype.E_e;
  y.prototype.asc_replaceText = y.prototype.W7e;
  y.prototype.asc_isSelectSearchingResults = y.prototype.eVg;
  y.prototype.sync_ReplaceAllCallback =
    y.prototype.nCf;
  y.prototype.sync_SearchEndCallback = y.prototype.lTc;
  y.prototype.put_TextPrFontName = y.prototype.Idg;
  y.prototype.put_TextPrFontSize = y.prototype.Jdg;
  y.prototype.put_TextPrBold = y.prototype.Hdg;
  y.prototype.put_TextPrItalic = y.prototype.Kdg;
  y.prototype.put_TextPrUnderline = y.prototype.Ndg;
  y.prototype.put_TextPrStrikeout = y.prototype.Mdg;
  y.prototype.put_TextPrDStrikeout = y.prototype.n5g;
  y.prototype.put_TextPrSpacing = y.prototype.q5g;
  y.prototype.put_TextPrCaps = y.prototype.m5g;
  y.prototype.put_TextPrSmallCaps =
    y.prototype.p5g;
  y.prototype.put_TextPrPosition = y.prototype.o5g;
  y.prototype.put_TextPrLang = y.prototype.Ldg;
  y.prototype.put_PrLineSpacing = y.prototype.ydg;
  y.prototype.put_LineSpacingBeforeAfter = y.prototype.qdg;
  y.prototype.FontSizeIn = y.prototype.hOd;
  y.prototype.FontSizeOut = y.prototype.iOd;
  y.prototype.put_Borders = y.prototype.n4g;
  y.prototype.sync_BoldCallBack = y.prototype.fCf;
  y.prototype.sync_ItalicCallBack = y.prototype.kCf;
  y.prototype.sync_UnderlineCallBack = y.prototype.zCf;
  y.prototype.sync_StrikeoutCallBack =
    y.prototype.qCf;
  y.prototype.sync_TextPrFontFamilyCallBack = y.prototype.vCf;
  y.prototype.sync_TextPrFontSizeCallBack = y.prototype.wCf;
  y.prototype.sync_PrLineSpacingCallBack = y.prototype.iSf;
  y.prototype.paraApply = y.prototype.Fcg;
  y.prototype.put_PrAlign = y.prototype.udg;
  y.prototype.put_TextPrBaseline = y.prototype.Gdg;
  y.prototype.put_ListType = y.prototype.rdg;
  y.prototype.asc_ContinueNumbering = y.prototype.ZQg;
  y.prototype.asc_RestartNumbering = y.prototype.gSg;
  y.prototype.asc_GetCurrentNumberingId = y.prototype.qRg;
  y.prototype.asc_GetCurrentNumberingLvl = y.prototype.rRg;
  y.prototype.asc_GetCalculatedNumberingValue = y.prototype.mRg;
  y.prototype.asc_GetNumberingPr = y.prototype.ARg;
  y.prototype.asc_AddNewNumbering = y.prototype.NQg;
  y.prototype.asc_ChangeNumberingLvl = y.prototype.XQg;
  y.prototype.put_Style = y.prototype.j5g;
  y.prototype.SetDeviceInputHelperId = y.prototype.fZf;
  y.prototype.put_ShowSnapLines = y.prototype.Adg;
  y.prototype.get_ShowSnapLines = y.prototype.h9f;
  y.prototype.put_ShowParaMarks = y.prototype.wHd;
  y.prototype.get_ShowParaMarks =
    y.prototype.Tyd;
  y.prototype.put_ShowTableEmptyLine = y.prototype.Bdg;
  y.prototype.get_ShowTableEmptyLine = y.prototype.i9f;
  y.prototype.put_PageBreak = y.prototype.T4g;
  y.prototype.put_WidowControl = y.prototype.SQf;
  y.prototype.put_KeepLines = y.prototype.NQf;
  y.prototype.put_KeepNext = y.prototype.OQf;
  y.prototype.put_AddSpaceBetweenPrg = y.prototype.m4g;
  y.prototype.put_LineHighLight = y.prototype.F4g;
  y.prototype.put_TextColor = y.prototype.Fdg;
  y.prototype.put_ParagraphShade = y.prototype.W4g;
  y.prototype.put_PrIndent = y.prototype.wdg;
  y.prototype.put_ParagraphOutlineLvl = y.prototype.V4g;
  y.prototype.IncreaseIndent = y.prototype.gOb;
  y.prototype.DecreaseIndent = y.prototype.AMb;
  y.prototype.put_PrIndentRight = y.prototype.xdg;
  y.prototype.put_PrFirstLineIndent = y.prototype.vdg;
  y.prototype.put_Margins = y.prototype.O4g;
  y.prototype.getFocusObject = y.prototype.e8f;
  y.prototype.sync_VerticalAlign = y.prototype.ACf;
  y.prototype.sync_PrAlignCallBack = y.prototype.xXd;
  y.prototype.sync_ListType = y.prototype.tXd;
  y.prototype.sync_TextColor = y.prototype.mSf;
  y.prototype.sync_TextHighLight =
    y.prototype.nSf;
  y.prototype.sync_TextSpacing = y.prototype.yCf;
  y.prototype.sync_TextDStrikeout = y.prototype.sCf;
  y.prototype.sync_TextCaps = y.prototype.rCf;
  y.prototype.sync_TextSmallCaps = y.prototype.xCf;
  y.prototype.sync_TextPosition = y.prototype.uCf;
  y.prototype.sync_TextLangCallBack = y.prototype.tCf;
  y.prototype.sync_ParaStyleName = y.prototype.wXd;
  y.prototype.sync_ParaSpacingLine = y.prototype.vXd;
  y.prototype.sync_PageBreakCallback = y.prototype.hSf;
  y.prototype.sync_WidowControlCallback = y.prototype.IFg;
  y.prototype.sync_KeepNextCallback =
    y.prototype.DFg;
  y.prototype.sync_KeepLinesCallback = y.prototype.fSf;
  y.prototype.sync_ShowParaMarksCallback = y.prototype.ehg;
  y.prototype.sync_SpaceBetweenPrgCallback = y.prototype.fhg;
  y.prototype.sync_PrPropCallback = y.prototype.mCf;
  y.prototype.sync_MathPropCallback = y.prototype.lCf;
  y.prototype.sync_EndAddShape = y.prototype.Lna;
  y.prototype.SetDrawingFreeze = y.prototype.LGf;
  y.prototype.change_PageOrient = y.prototype.vYg;
  y.prototype.get_DocumentOrientation = y.prototype.zTd;
  y.prototype.change_DocSize = y.prototype.uYg;
  y.prototype.get_DocumentWidth = y.prototype.O0g;
  y.prototype.get_DocumentHeight = y.prototype.M0g;
  y.prototype.put_AddPageBreak = y.prototype.zDg;
  y.prototype.put_AddColumnBreak = y.prototype.l4g;
  y.prototype.Update_ParaInd = y.prototype.vQd;
  y.prototype.Internal_Update_Ind_FirstLine = y.prototype.DFf;
  y.prototype.Internal_Update_Ind_Left = y.prototype.EFf;
  y.prototype.Internal_Update_Ind_Right = y.prototype.FFf;
  y.prototype.put_PageNum = y.prototype.U4g;
  y.prototype.put_HeadersAndFootersDistance = y.prototype.x4g;
  y.prototype.HeadersAndFooters_DifferentFirstPage =
    y.prototype.LJg;
  y.prototype.HeadersAndFooters_DifferentOddandEvenPage = y.prototype.MJg;
  y.prototype.HeadersAndFooters_LinkToPrevious = y.prototype.NJg;
  y.prototype.asc_SetSectionStartPage = y.prototype.BSg;
  y.prototype.sync_DocSizeCallback = y.prototype.e_c;
  y.prototype.sync_PageOrientCallback = y.prototype.kTc;
  y.prototype.sync_HeadersAndFootersPropCallback = y.prototype.V$d;
  y.prototype.put_Table = y.prototype.Edg;
  y.prototype.addRowAbove = y.prototype.z1f;
  y.prototype.addRowBelow = y.prototype.A1f;
  y.prototype.addColumnLeft =
    y.prototype.u1f;
  y.prototype.addColumnRight = y.prototype.v1f;
  y.prototype.remRow = y.prototype.keg;
  y.prototype.remColumn = y.prototype.jeg;
  y.prototype.remTable = y.prototype.leg;
  y.prototype.selectRow = y.prototype.Leg;
  y.prototype.selectColumn = y.prototype.Keg;
  y.prototype.selectCell = y.prototype.HIa;
  y.prototype.selectTable = y.prototype.Meg;
  y.prototype.setColumnWidth = y.prototype.Teg;
  y.prototype.setRowHeight = y.prototype.qcc;
  y.prototype.set_TblDistanceFromText = y.prototype.Bfg;
  y.prototype.CheckBeforeMergeCells = y.prototype.rUf;
  y.prototype.CheckBeforeSplitCells = y.prototype.sUf;
  y.prototype.MergeCells = y.prototype.d5a;
  y.prototype.SplitCell = y.prototype.FZf;
  y.prototype.asc_DistributeTableCells = y.prototype.o2f;
  y.prototype.asc_RemoveTableCells = y.prototype.dSg;
  y.prototype.widthTable = y.prototype.qig;
  y.prototype.put_CellsMargin = y.prototype.pdg;
  y.prototype.set_TblWrap = y.prototype.Dfg;
  y.prototype.set_TblIndentLeft = y.prototype.Cfg;
  y.prototype.set_Borders = y.prototype.tfg;
  y.prototype.set_TableBackground = y.prototype.zfg;
  y.prototype.set_AlignCell =
    y.prototype.sfg;
  y.prototype.set_TblAlign = y.prototype.Afg;
  y.prototype.set_SpacingBetweenCells = y.prototype.yfg;
  y.prototype.tblApply = y.prototype.shg;
  y.prototype.sync_AddTableCallback = y.prototype.Igg;
  y.prototype.sync_AlignCellCallback = y.prototype.Kgg;
  y.prototype.sync_TblPropCallback = y.prototype.nTc;
  y.prototype.sync_TblWrapStyleChangedCallback = y.prototype.hhg;
  y.prototype.sync_TblAlignChangedCallback = y.prototype.ghg;
  y.prototype.ChangeImageFromFile = y.prototype.lUf;
  y.prototype.ChangeShapeImageFromFile = y.prototype.nUf;
  y.prototype.AddImage = y.prototype.lbe;
  y.prototype.asc_addImage = y.prototype.Vvb;
  y.prototype.AddImageUrl2 = y.prototype.UGg;
  y.prototype.AddImageUrl = y.prototype.$Xd;
  y.prototype.AddImageUrlAction = y.prototype.uNd;
  y.prototype.AddImageToPage = y.prototype.TGg;
  y.prototype.asc_getSelectedDrawingObjectsCount = y.prototype.yrd;
  y.prototype.put_ShapesAlign = y.prototype.zdg;
  y.prototype.DistributeHorizontally = y.prototype.CVf;
  y.prototype.DistributeVertically = y.prototype.DVf;
  y.prototype.ImgApply = y.prototype.QOc;
  y.prototype.set_Size =
    y.prototype.xfg;
  y.prototype.set_ConstProportions = y.prototype.ufg;
  y.prototype.set_WrapStyle = y.prototype.Efg;
  y.prototype.deleteImage = y.prototype.m6f;
  y.prototype.set_ImgDistanceFromText = y.prototype.vfg;
  y.prototype.set_PositionOnPage = y.prototype.wfg;
  y.prototype.get_OriginalSizeImage = y.prototype.d9f;
  y.prototype.ShapeApply = y.prototype.Utb;
  y.prototype.sync_AddImageCallback = y.prototype.Hgg;
  y.prototype.sync_ImgPropCallback = y.prototype.TMc;
  y.prototype.sync_ImgWrapStyleChangedCallback = y.prototype.z7g;
  y.prototype.sync_ContextMenuCallback =
    y.prototype.rRa;
  y.prototype.sync_MouseMoveStartCallback = y.prototype.lmb;
  y.prototype.sync_MouseMoveEndCallback = y.prototype.kmb;
  y.prototype.sync_MouseMoveCallback = y.prototype.Foa;
  y.prototype.can_AddHyperlink = y.prototype.d4f;
  y.prototype.add_Hyperlink = y.prototype.I1f;
  y.prototype.change_Hyperlink = y.prototype.s4f;
  y.prototype.remove_Hyperlink = y.prototype.qeg;
  y.prototype.asc_GetHyperlinkAnchors = y.prototype.wRg;
  y.prototype.sync_HyperlinkPropCallback = y.prototype.f_c;
  y.prototype.sync_HyperlinkClickCallback =
    y.prototype.K8a;
  y.prototype.sync_CanAddHyperlinkCallback = y.prototype.oXd;
  y.prototype.sync_DialogAddHyperlink = y.prototype.d_c;
  y.prototype.sync_DialogAddHyperlink = y.prototype.d_c;
  y.prototype.sync_SpellCheckCallback = y.prototype.Y$d;
  y.prototype.sync_SpellCheckVariantsFound = y.prototype.pCf;
  y.prototype.asc_replaceMisspelledWord = y.prototype.V7e;
  y.prototype.asc_ignoreMisspelledWord = y.prototype.A5e;
  y.prototype.asc_spellCheckAddToDictionary = y.prototype.U9e;
  y.prototype.asc_spellCheckClearDictionary = y.prototype.DRd;
  y.prototype.asc_setDefaultLanguage = y.prototype.v8e;
  y.prototype.asc_getDefaultLanguage = y.prototype.z2f;
  y.prototype.asc_getKeyboardLanguage = y.prototype.wRd;
  y.prototype.asc_setSpellCheck = y.prototype.K2f;
  y.prototype.asc_showComments = y.prototype.S9e;
  y.prototype.asc_hideComments = y.prototype.Drd;
  y.prototype.asc_addComment = y.prototype.M1d;
  y.prototype.asc_removeComment = y.prototype.U7e;
  y.prototype.asc_changeComment = y.prototype.x_e;
  y.prototype.asc_selectComment = y.prototype.Rrd;
  y.prototype.asc_showComment = y.prototype.Zrd;
  y.prototype.asc_GetCommentsReportByAuthors = y.prototype.bJf;
  y.prototype.can_AddQuotedComment = y.prototype.RJf;
  y.prototype.sync_RemoveComment = y.prototype.A5b;
  y.prototype.sync_AddComment = y.prototype.JIa;
  y.prototype.sync_ShowComment = y.prototype.Fcc;
  y.prototype.sync_HideComment = y.prototype.JUa;
  y.prototype.sync_UpdateCommentPosition = y.prototype.yXd;
  y.prototype.sync_ChangeCommentData = y.prototype.jTc;
  y.prototype.sync_LockComment = y.prototype.W$d;
  y.prototype.sync_UnLockComment = y.prototype.aae;
  y.prototype.asc_RemoveAllComments =
    y.prototype.frd;
  y.prototype.sync_LockHeaderFooters = y.prototype.Vgg;
  y.prototype.sync_LockDocumentProps = y.prototype.Tgg;
  y.prototype.sync_UnLockHeaderFooters = y.prototype.lhg;
  y.prototype.sync_UnLockDocumentProps = y.prototype.jhg;
  y.prototype.sync_CollaborativeChanges = y.prototype.gCf;
  y.prototype.sync_LockDocumentSchema = y.prototype.Ugg;
  y.prototype.sync_UnLockDocumentSchema = y.prototype.khg;
  y.prototype.zoomIn = y.prototype.zig;
  y.prototype.zoomOut = y.prototype.Aig;
  y.prototype.zoomFitToPage = y.prototype.FDf;
  y.prototype.zoomFitToWidth =
    y.prototype.GDf;
  y.prototype.zoomCustomMode = y.prototype.EDf;
  y.prototype.zoom100 = y.prototype.yig;
  y.prototype.zoom = y.prototype.zoom;
  y.prototype.goToPage = y.prototype.fPa;
  y.prototype.getCountPages = y.prototype.khf;
  y.prototype.getCurrentPage = y.prototype.ohf;
  y.prototype.sync_countPagesCallback = y.prototype.zXd;
  y.prototype.sync_currentPageCallback = y.prototype.Gcc;
  y.prototype.asc_enableKeyEvents = y.prototype.z9;
  y.prototype.GenerateStyles = y.prototype.B$a;
  y.prototype.asyncFontsDocumentEndLoaded = y.prototype.FRd;
  y.prototype.CreateFontsCharMap = y.prototype.$Hg;
  y.prototype.sync_SendThemeColors = y.prototype.X$d;
  y.prototype.ChangeColorScheme = y.prototype.kUf;
  y.prototype.asc_ChangeColorSchemeByIdx = y.prototype.TZe;
  y.prototype.UpdateInterfaceState = y.prototype.XHa;
  y.prototype.asyncFontEndLoaded = y.prototype.ERd;
  y.prototype.asyncImageEndLoaded = y.prototype.baa;
  y.prototype.asyncImageEndLoadedBackground = y.prototype.Csc;
  y.prototype.IsAsyncOpenDocumentImages = y.prototype.DOd;
  y.prototype.pre_Paste = y.prototype.DN;
  y.prototype.pre_Save =
    y.prototype.N9d;
  y.prototype.SyncLoadImages = y.prototype.BLg;
  y.prototype.SyncLoadImages_callback = y.prototype.hog;
  y.prototype.initEvents2MobileAdvances = y.prototype.NRc;
  y.prototype.ViewScrollToX = y.prototype.L_f;
  y.prototype.ViewScrollToY = y.prototype.M_f;
  y.prototype.GetDocWidthPx = y.prototype.EWf;
  y.prototype.GetDocHeightPx = y.prototype.DWf;
  y.prototype.ClearSearch = y.prototype.JUf;
  y.prototype.GetCurrentVisiblePage = y.prototype.nOd;
  y.prototype.asc_setAutoSaveGap = y.prototype.a8e;
  y.prototype.asc_SetDocumentPlaceChangedEnabled =
    y.prototype.h_e;
  y.prototype.asc_SetViewRulers = y.prototype.l_e;
  y.prototype.asc_SetViewRulersChange = y.prototype.s2f;
  y.prototype.asc_GetViewRulers = y.prototype.q2f;
  y.prototype.asc_SetDocumentUnits = y.prototype.i_e;
  y.prototype.GoToHeader = y.prototype.cXf;
  y.prototype.GoToFooter = y.prototype.KJg;
  y.prototype.ExitHeader_Footer = y.prototype.VVf;
  y.prototype.GetCurrentPixOffsetY = y.prototype.BWf;
  y.prototype.SetPaintFormat = y.prototype.nZf;
  y.prototype.ChangeShapeType = y.prototype.oUf;
  y.prototype.sync_PaintFormatCallback =
    y.prototype.Ecc;
  y.prototype.SetMarkerFormat = y.prototype.mLg;
  y.prototype.sync_MarkerFormatCallback = y.prototype.Dcc;
  y.prototype.StartAddShape = y.prototype.BIe;
  y.prototype.AddShapeOnCurrentPage = y.prototype.vbe;
  y.prototype.AddTextArt = y.prototype.RS;
  y.prototype.asc_canEditCrop = y.prototype.ird;
  y.prototype.asc_startEditCrop = y.prototype.$rd;
  y.prototype.asc_endEditCrop = y.prototype.nrd;
  y.prototype.asc_cropFit = y.prototype.lrd;
  y.prototype.asc_cropFill = y.prototype.krd;
  y.prototype.asc_GetWatermarkProps = y.prototype.LRg;
  y.prototype.asc_SetWatermarkProps = y.prototype.usg;
  y.prototype.asc_WatermarkRemove = y.prototype.JSg;
  y.prototype.sync_StartAddShapeCallback = y.prototype.mTc;
  y.prototype.CanGroup = y.prototype.ofe;
  y.prototype.CanUnGroup = y.prototype.qfe;
  y.prototype.CanChangeWrapPolygon = y.prototype.mfe;
  y.prototype.StartChangeWrapPolygon = y.prototype.EIe;
  y.prototype.ClearFormating = y.prototype.IUf;
  y.prototype.GetSectionInfo = y.prototype.AJg;
  y.prototype.add_SectionBreak = y.prototype.eQg;
  y.prototype.asc_setViewMode = y.prototype.VZa;
  y.prototype.asc_setRestriction = y.prototype.B9e;
  y.prototype.OnMouseUp = y.prototype.KZ;
  y.prototype.asyncImageEndLoaded2 = y.prototype.WZa;
  y.prototype.SetDrawImagePlaceParagraph = y.prototype.iZf;
  y.prototype.asc_getMasterCommentId = y.prototype.r3e;
  y.prototype.asc_getAnchorPosition = y.prototype.J_e;
  y.prototype.asc_getChartObject = y.prototype.v0e;
  y.prototype.asc_addChartDrawingObject = y.prototype.r_e;
  y.prototype.asc_doubleClickOnChart = y.prototype.w2f;
  y.prototype.asc_onCloseChartFrame = y.prototype.Src;
  y.prototype.asc_editChartDrawingObject =
    y.prototype.C_e;
  y.prototype.asc_getChartPreviews = y.prototype.w0e;
  y.prototype.asc_getTextArtPreviews = y.prototype.X4e;
  y.prototype.sync_closeChartEditor = y.prototype.CCf;
  y.prototype.asc_setDrawCollaborationMarks = y.prototype.j2d;
  y.prototype.asc_AddMath = y.prototype.Uqd;
  y.prototype.asc_AddMath2 = y.prototype.Vqd;
  y.prototype.asc_AddPageCount = y.prototype.QQg;
  y.prototype.asc_StartMailMerge = y.prototype.DSg;
  y.prototype.asc_StartMailMergeByList = y.prototype.t2f;
  y.prototype.asc_GetReceptionsCount = y.prototype.CRg;
  y.prototype.asc_GetMailMergeFieldsNameList = y.prototype.xRg;
  y.prototype.asc_AddMailMergeField = y.prototype.MQg;
  y.prototype.asc_SetHighlightMailMergeFields = y.prototype.ySg;
  y.prototype.asc_PreviewMailMergeResult = y.prototype.YRg;
  y.prototype.asc_EndPreviewMailMergeResult = y.prototype.hRg;
  y.prototype.sync_StartMailMerge = y.prototype.lSf;
  y.prototype.sync_PreviewMailMergeResult = y.prototype.jSf;
  y.prototype.sync_EndPreviewMailMergeResult = y.prototype.dSf;
  y.prototype.sync_HighlightMailMergeFields = y.prototype.sXd;
  y.prototype.asc_getMailMergeData = y.prototype.mUg;
  y.prototype.asc_setMailMergeData = y.prototype.vWg;
  y.prototype.asc_sendMailMergeData = y.prototype.FVg;
  y.prototype.asc_GetMailMergeFiledValue = y.prototype.yRg;
  y.prototype.asc_GetStyleFromFormatting = y.prototype.FRg;
  y.prototype.asc_AddNewStyle = y.prototype.OQg;
  y.prototype.asc_RemoveStyle = y.prototype.cSg;
  y.prototype.asc_RemoveAllCustomStyles = y.prototype.aSg;
  y.prototype.asc_IsStyleDefault = y.prototype.URg;
  y.prototype.asc_IsDefaultStyleChanged = y.prototype.TRg;
  y.prototype.asc_GetStyleNameById = y.prototype.GRg;
  y.prototype.asc_SetTrackRevisions = y.prototype.dJf;
  y.prototype.asc_IsTrackRevisions = y.prototype.VRg;
  y.prototype.sync_BeginCatchRevisionsChanges = y.prototype.mXd;
  y.prototype.sync_EndCatchRevisionsChanges = y.prototype.pXd;
  y.prototype.asc_GetRevisionsChangesStack = y.prototype.ZZe;
  y.prototype.sync_AddRevisionsChange = y.prototype.bSf;
  y.prototype.asc_AcceptChanges = y.prototype.JQg;
  y.prototype.asc_RejectChanges = y.prototype.$Rg;
  y.prototype.asc_HaveRevisionsChanges =
    y.prototype.lsg;
  y.prototype.asc_HaveNewRevisionsChanges = y.prototype.ORg;
  y.prototype.asc_GetNextRevisionsChange = y.prototype.zRg;
  y.prototype.asc_GetPrevRevisionsChange = y.prototype.BRg;
  y.prototype.sync_UpdateRevisionsChangesPosition = y.prototype.oSf;
  y.prototype.asc_AcceptAllChanges = y.prototype.IQg;
  y.prototype.asc_RejectAllChanges = y.prototype.ZRg;
  y.prototype.asc_GetTrackRevisionsReportByAuthors = y.prototype.cJf;
  y.prototype.asc_FollowRevisionMove = y.prototype.jRg;
  y.prototype.asc_stopSaving = y.prototype.p2d;
  y.prototype.asc_continueSaving = y.prototype.P1d;
  y.prototype.asc_undoAllChanges = y.prototype.q2d;
  y.prototype.asc_CloseFile = y.prototype.UZe;
  y.prototype.asc_SetFastCollaborative = y.prototype.j_e;
  y.prototype.asc_isOffline = y.prototype.D5e;
  y.prototype.asc_getUrlType = y.prototype.g2d;
  y.prototype.asc_getSessionToken = y.prototype.Ard;
  y.prototype.asc_setInterfaceDrawImagePlaceShape = y.prototype.U8e;
  y.prototype.asc_pluginsRegister = y.prototype.Grd;
  y.prototype.asc_pluginRun = y.prototype.BFb;
  y.prototype.asc_pluginStop =
    y.prototype.L5e;
  y.prototype.asc_pluginResize = y.prototype.Urc;
  y.prototype.asc_pluginButtonClick = y.prototype.Trc;
  y.prototype.asc_pluginEnableMouseEvents = y.prototype.K5e;
  y.prototype.asc_nativeInitBuilder = y.prototype.I5e;
  y.prototype.asc_SetSilentMode = y.prototype.lQc;
  y.prototype.asc_startEditCurrentOleObject = y.prototype.asd;
  y.prototype.asc_InputClearKeyboardElement = y.prototype.a_e;
  y.prototype.asc_SpecialPaste = y.prototype.n_e;
  y.prototype.SetDrawImagePlaceContents = y.prototype.hZf;
  y.prototype.SetDrawImagePreviewMargins =
    y.prototype.jZf;
  y.prototype.SetDrawImagePreviewBullet = y.prototype.hFe;
  y.prototype.asc_RemoveContentControl = y.prototype.qsg;
  y.prototype.asc_RemoveContentControlWrapper = y.prototype.rsg;
  y.prototype.asc_SetContentControlProperties = y.prototype.uSg;
  y.prototype.asc_IsContentControl = y.prototype.RRg;
  y.prototype.asc_GetContentControlProperties = y.prototype.jsg;
  y.prototype.asc_GetCurrentContentControl = y.prototype.ksg;
  y.prototype.asc_UncheckContentControlButtons = y.prototype.GSg;
  y.prototype.asc_SetGlobalContentControlHighlightColor =
    y.prototype.wSg;
  y.prototype.asc_GetGlobalContentControlHighlightColor = y.prototype.tRg;
  y.prototype.asc_SetGlobalContentControlShowHighlight = y.prototype.xSg;
  y.prototype.asc_GetGlobalContentControlShowHighlight = y.prototype.uRg;
  y.prototype.asc_SetContentControlCheckBoxPr = y.prototype.rSg;
  y.prototype.asc_SetContentControlPictureUrl = y.prototype.r2f;
  y.prototype.asc_SetContentControlListPr = y.prototype.tSg;
  y.prototype.asc_SelectContentControlListItem = y.prototype.hSg;
  y.prototype.asc_SetContentControlDatePickerPr =
    y.prototype.ssg;
  y.prototype.asc_SetContentControlDatePickerDate = y.prototype.sSg;
  y.prototype.asc_BeginViewModeInReview = y.prototype.TIf;
  y.prototype.asc_EndViewModeInReview = y.prototype.aJf;
  y.prototype.asc_ShowDocumentOutline = y.prototype.CSg;
  y.prototype.asc_HideDocumentOutline = y.prototype.PRg;
  y.prototype.sync_OnDocumentOutlineUpdate = y.prototype.gSf;
  y.prototype.sync_OnDocumentOutlineCurrentPosition = y.prototype.uXd;
  y.prototype.asc_AddTableOfContents = y.prototype.SQg;
  y.prototype.asc_RemoveTableOfContents =
    y.prototype.eSg;
  y.prototype.asc_GetTableOfContentsPr = y.prototype.KRg;
  y.prototype.asc_SetTableOfContentsPr = y.prototype.tsg;
  y.prototype.asc_UpdateTableOfContents = y.prototype.ISg;
  y.prototype.asc_GetCurrentComplexField = y.prototype.pRg;
  y.prototype.asc_UpdateComplexField = y.prototype.HSg;
  y.prototype.asc_RemoveComplexField = y.prototype.psg;
  y.prototype.asc_SetComplexFieldPr = y.prototype.qSg;
  y.prototype.asc_AddTableFormula = y.prototype.RQg;
  y.prototype.asc_GetTableFormula = y.prototype.IRg;
  y.prototype.asc_GetTableFormulaFormats =
    y.prototype.JRg;
  y.prototype.asc_ParseTableFormulaInstrLine = y.prototype.WRg;
  y.prototype.asc_CreateInstructionLine = y.prototype.aRg;
  y.prototype.asc_AddObjectCaption = y.prototype.PQg;
  y.prototype.asc_GetBookmarksManager = y.prototype.lRg;
  y.prototype.asc_OnBookmarksUpdate = y.prototype.nsg;
  y.prototype.asc_GetHeadingLevel = y.prototype.vRg;
  y.prototype.asc_GetStylesArray = y.prototype.HRg;
  y.prototype.asc_SetAutomaticBulletedLists = y.prototype.mSg;
  y.prototype.asc_SetAutomaticNumberedLists = y.prototype.nSg;
  y.prototype.asc_SetAutoCorrectSmartQuotes =
    y.prototype.lSg;
  y.prototype.asc_SetAutoCorrectHyphensWithDash = y.prototype.kSg;
  y.prototype.asc_GetSelectedText = y.prototype.ERg;
  y.prototype.asc_AddBlankPage = y.prototype.KQg;
  y.prototype.sendEvent = y.prototype.Oe;
  y.prototype.SetTableDrawMode = y.prototype.eid;
  y.prototype.SetTableEraseMode = y.prototype.PGe;
  y.prototype.asc_GetDefaultTableStyles = y.prototype.p2f;
  y.prototype.asc_Remove = y.prototype.c_e;
  y.prototype.asc_OnHideContextMenu = y.prototype.mRd;
  y.prototype.asc_OnShowContextMenu = y.prototype.erd;
  y.prototype.asc_addSignatureLine =
    y.prototype.jrc;
  y.prototype.asc_CallSignatureDblClickEvent = y.prototype.crd;
  y.prototype.asc_getRequestSignatures = y.prototype.e4e;
  y.prototype.asc_AddSignatureLine2 = y.prototype.MZe;
  y.prototype.asc_MoveCursorToSignature = y.prototype.lRd;
  y.prototype.asc_Sign = y.prototype.m_e;
  y.prototype.asc_RequestSign = y.prototype.f_e;
  y.prototype.asc_ViewCertificate = y.prototype.p_e;
  y.prototype.asc_SelectCertificate = y.prototype.g_e;
  y.prototype.asc_GetDefaultCertificate = y.prototype.XZe;
  y.prototype.asc_getSignatures = y.prototype.y4e;
  y.prototype.asc_isSignaturesSupport = y.prototype.F5e;
  y.prototype.asc_isProtectionSupport = y.prototype.E5e;
  y.prototype.asc_RemoveSignature = y.prototype.e_e;
  y.prototype.asc_RemoveAllSignatures = y.prototype.d_e;
  y.prototype.asc_gotoSignature = y.prototype.z5e;
  y.prototype.asc_getSignatureSetup = y.prototype.x4e;
  y.prototype.asc_setCurrentPassword = y.prototype.s8e;
  y.prototype.asc_resetPassword = y.prototype.X7e;
  kb.prototype.get_PageCount = kb.prototype.e9f;
  kb.prototype.put_PageCount = kb.prototype.sdg;
  kb.prototype.get_WordsCount =
    kb.prototype.m9f;
  kb.prototype.put_WordsCount = kb.prototype.Odg;
  kb.prototype.get_ParagraphCount = kb.prototype.f9f;
  kb.prototype.put_ParagraphCount = kb.prototype.tdg;
  kb.prototype.get_SymbolsCount = kb.prototype.j9f;
  kb.prototype.put_SymbolsCount = kb.prototype.Cdg;
  kb.prototype.get_SymbolsWSCount = kb.prototype.k9f;
  kb.prototype.put_SymbolsWSCount = kb.prototype.Ddg;
  rb.prototype.get_Type = rb.prototype.AN;
  rb.prototype.get_X = rb.prototype.tBa;
  rb.prototype.get_Y = rb.prototype.uBa;
  rb.prototype.get_PageNum = rb.prototype.m1g;
  rb.prototype.is_Header = rb.prototype.C2g;
  f.Asc.asc_CCommentDataWord = mb;
  mb.prototype.asc_getText = mb.prototype.Rka;
  mb.prototype.asc_putText = mb.prototype.L7b;
  mb.prototype.asc_getTime = mb.prototype.tac;
  mb.prototype.asc_putTime = mb.prototype.wac;
  mb.prototype.asc_getOnlyOfficeTime = mb.prototype.$Tb;
  mb.prototype.asc_putOnlyOfficeTime = mb.prototype.isc;
  mb.prototype.asc_getUserId = mb.prototype.wJa;
  mb.prototype.asc_putUserId = mb.prototype.xac;
  mb.prototype.asc_getProviderId = mb.prototype.wrd;
  mb.prototype.asc_putProviderId =
    mb.prototype.h2d;
  mb.prototype.asc_getUserName = mb.prototype.$Aa;
  mb.prototype.asc_putUserName = mb.prototype.M7b;
  mb.prototype.asc_getInitials = mb.prototype.B2f;
  mb.prototype.asc_putInitials = mb.prototype.uVg;
  mb.prototype.asc_getQuoteText = mb.prototype.qac;
  mb.prototype.asc_putQuoteText = mb.prototype.uQc;
  mb.prototype.asc_getSolved = mb.prototype.AFb;
  mb.prototype.asc_putSolved = mb.prototype.vac;
  mb.prototype.asc_getGuid = mb.prototype.ITa;
  mb.prototype.asc_putGuid = mb.prototype.fUb;
  mb.prototype.asc_getReply = mb.prototype.wWc;
  mb.prototype.asc_addReply = mb.prototype.mac;
  mb.prototype.asc_getRepliesCount = mb.prototype.vWc;
  mb.prototype.asc_getDocumentFlag = mb.prototype.tnb;
  mb.prototype.asc_putDocumentFlag = mb.prototype.uac;
  AscCommon.Gbh = function () {
    function e(e) {
      e = e.p7;
      if (e.EU && 65535 != e.EU.version) {
        var f = 0 != (e.EU.VSd & 128);
        f && e.height != e.EU.icc - e.EU.FLc + e.EU.Pzf && (console.log('[' + e.j7 + '] typo'), console.log(e.W7 + ', ' + e.X_ + ', ' + e.height), console.log(e.EU.icc + ', ' + e.EU.FLc + ', ' + (e.EU.icc - e.EU.FLc + e.EU.Pzf)));
        f || e.height == e.EU.MXd +
        e.EU.NXd || (console.log('[' + e.j7 + '] win'), console.log(e.W7 + ', ' + e.X_ + ', ' + e.height), console.log(e.EU.MXd + ', ' + e.EU.NXd + ', ' + (e.EU.MXd + e.EU.NXd)));
      }
    }

    for (var f = 0, y = 0, Ma = [], Pa = 0; Pa < AscFonts.o0a.length; Pa++) Ma.push(new AscFonts.gja(AscFonts.o0a[Pa].Ja, 0, '', 0, null));
    console.log('start...');
    editor.Dia = function () {
      y = setInterval(function () {
        if (f >= AscFonts.o0a.length) clearInterval(y), console.log('end'); else {
          var Ma = AscFonts.o0a[f++];
          if (-1 != Ma.NB) {
            var Pa = AscCommon.TK.bUa[Ma.NB];
            Pa = AscCommon.gP.FH(Pa, Ma.Mia, 12, !1,
              !1, !1, !1, !0);
            e(Pa, 'regular');
          }
          -1 != Ma.KB && (Pa = AscCommon.TK.bUa[Ma.KB], Pa = AscCommon.gP.FH(Pa, Ma.Jia, 12, !0, !1, !1, !1, !0), e(Pa, 'bold'));
          -1 != Ma.MB && (Pa = AscCommon.TK.bUa[Ma.MB], Pa = AscCommon.gP.FH(Pa, Ma.Lia, 12, !1, !0, !1, !1, !0), e(Pa, 'italic'));
          -1 != Ma.LB && (Pa = AscCommon.TK.bUa[Ma.LB], Pa = AscCommon.gP.FH(Pa, Ma.Kia, 12, !0, !0, !1, !1, !0), e(Pa, 'bold italic'));
        }
      }, 10);
    };
    AscCommon.TK.KRa(Ma);
  };
  y.prototype.getAllOleObject = function () {
    for (var e = this.SZd().Document.ec.lX, f = [], y = 0; y < e.length; y++) for (var Ma = e[y].Ugb, Pa = 0; Pa < Ma.length; Pa++) 'asc.{edit-field-plugin}' ===
    Ma[Pa].NW && f.push({ id: Ma[Pa].Ia, data: Ma[Pa].v2 });
    return JSON.stringify(f);
  };
})(window, window.document);
'use strict';
(function (f, e) {
  f.asc_docs_api.prototype.pluginMethod_OpenFile = function (e, f) {
    this.UZe();
    this.K4.u_d = !0;
    this.Q_d(this.MEf, e);
    f && this.oSg(f);
    this.hKb = Asc.HIb.WUc;
  };
  f.asc_docs_api.prototype.pluginMethod_GetFields = function () {
    return this.kRg();
  };
  f.asc_docs_api.prototype.pluginMethod_InsertAndReplaceContentControls = function (e) {
    return (new AscCommon.cjg(this, e)).start();
  };
  f.asc_docs_api.prototype.pluginMethod_RemoveContentControls = function (e) {
    return (new AscCommon.cjg(this, e)).delete();
  };
  f.asc_docs_api.prototype.pluginMethod_GetAllContentControls =
    function () {
      for (var e = this.Fa.Wa.ew(), f = [], Xa, ib = 0; ib < e.length; ib++) Xa = e[ib].F$a(), f.push({
        Tag: Xa.ey,
        Id: Xa.Ia,
        Lock: Xa.Jf,
        InternalId: Xa.BLa
      });
      return f;
    };
  f.asc_docs_api.prototype.pluginMethod_AddContentControl = function (f, cb) {
    if (cb) {
      var Ia = new AscCommon.rYd;
      Ia.Ia = cb.Id;
      Ia.ey = cb.Tag;
      Ia.Jf = cb.Lock;
      Ia.OB = cb.Alias;
      e !== cb.Appearance && (Ia.JB = cb.Appearance);
      e !== cb.Color && (Ia.va = new Asc.ita(cb.Color.R, cb.Color.G, cb.Color.B));
    }
    return (f = this.K$g(f, Ia)) ? { Tag: f.ey, Id: f.Ia, Lock: f.Jf, InternalId: f.BLa } : e;
  };
  f.asc_docs_api.prototype.pluginMethod_RemoveContentControl =
    function (e) {
      return this.rsg(e);
    };
  f.asc_docs_api.prototype.pluginMethod_GetCurrentContentControl = function () {
    return this.ksg();
  };
  f.asc_docs_api.prototype.pluginMethod_GetCurrentContentControlPr = function (e) {
    var f = this.Pca(), Ia = this.jsg();
    if (!Ia) return null;
    if (f && Ia.nia) {
      var ib = f.lbb();
      Ia.nia.Wpa();
    }
    Ia && Ia.nia && delete Ia.nia;
    Ia.Tag = Ia.ey;
    Ia.Id = Ia.Ia;
    Ia.Lock = Ia.Jf;
    Ia.InternalId = Ia.BLa;
    Ia.Appearance = Ia.JB;
    if (e) {
      var y = {
        data: '', Eua: function (e, f) {
          this.data = f;
        }
      }, kb = 1;
      e == Asc.p$b.html && (kb = 2);
      this.H7b(y, kb);
      Ia.content =
        y.data;
    }
    ib && (f.e7a(ib), f.sr());
    return Ia;
  };
  f.asc_docs_api.prototype.pluginMethod_SelectContentControl = function (e) {
    var f = this.Pca();
    f && f.Wpa(e);
  };
  f.asc_docs_api.prototype.pluginMethod_MoveCursorToContentControl = function (e, f) {
    var Ia = this.Pca();
    Ia && Ia.M6b(e, f);
  };
  f.asc_docs_api.prototype.pluginMethod_GetSelectedText = function () {
    var e = this.Pca();
    if (e) return e.Jq(!1, { Sta: !0, ePc: !0 });
  };
  f.asc_docs_api.prototype.pluginMethod_RemoveSelectedContent = function () {
    var e = this.Pca();
    e && e.lg() && !1 === e.Ke(AscCommon.n3, null,
      !0, e.MCa()) && (e.gg(AscDFH.sYc), e.ng(-1, !0), e.Sf());
  };
  f.asc_docs_api.prototype.pluginMethod_AddComment = function (e, f) {
    var Ia = new asc_CCommentDataWord;
    e && Ia.L7b(e);
    f && Ia.M7b(f);
    this.M1d(Ia);
  };
  f.asc_docs_api.prototype.pluginMethod_MoveCursorToStart = function (e) {
    var f = this.Pca();
    f && (e ? f.ZEb() : f.ee(!1));
  };
  f.asc_docs_api.prototype.pluginMethod_MoveCursorToEnd = function (e) {
    var f = this.Pca();
    f && (e && f.ZEb(), f.Uh(!1));
  };
  f.asc_docs_api.prototype.pluginMethod_SearchAndReplace = function (f) {
    var Ia = f.replaceString;
    this.Fa.Wa.az(f.searchString,
      { VLa: e !== f.matchCase ? f.lbg : !0 }) && this.Fa.Wa.pPc(Ia, !0, null, !1);
  };
  f.asc_docs_api.prototype.pluginMethod_GetFileHTML = function () {
    return this.yEf(!0);
  };
})(window);
